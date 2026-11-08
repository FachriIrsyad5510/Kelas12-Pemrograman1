const filterButtons = document.querySelectorAll(".filter-button");
const menuCards = document.querySelectorAll(".menu-card");
const cartButton = document.querySelector(".cart-button");
const cartPanel = document.querySelector(".cart-panel");
const cartBackdrop = document.querySelector(".cart-backdrop");
const cartClose = document.querySelector(".cart-close");
const cartCount = document.querySelector(".cart-count");
const cartItems = document.querySelector(".cart-items");
const cartEmpty = document.querySelector(".cart-empty");
const cartFooter = document.querySelector(".cart-panel__footer");
const cartTotal = document.querySelector(".cart-total strong");
const toast = document.querySelector(".toast");
const reservationForm = document.querySelector("#reservation-form");
const reservationMessage = document.querySelector("#reservation-message");
const dateInput = document.querySelector("#guest-date");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const authForm = document.querySelector("#auth-form");
const authEmail = document.querySelector("#account-email");
const authPassword = document.querySelector("#account-password");
const authError = document.querySelector("#auth-error");
const accountNameDisplay = document.querySelector("#account-name");
const accountRoleDisplay = document.querySelector("#account-role");
const logoutButton = document.querySelector("#logout-button");
const authTitle = document.querySelector("#auth-title");
const authIntro = document.querySelector(".auth-form__intro");
const authSubmit = document.querySelector("#auth-submit");
const authModeButtons = document.querySelectorAll(".auth-tab");
const registerNameField = document.querySelector("#register-name-field");
const registerName = document.querySelector("#account-name-input");
const registerConfirmField = document.querySelector("#register-confirm-field");
const registerConfirmPassword = document.querySelector("#account-confirm-password");
const registerRoleField = document.querySelector("#register-role-field");
const registerRole = document.querySelector("#account-role-select");

const cart = new Map();
let toastTimeout;

const formatPrice = (price) => `Rp ${new Intl.NumberFormat("id-ID").format(price)}`;

const accountStorageKey = "cafelogic-accounts";
const sessionStorageKey = "cafelogic-session";
const roleLabels = { buyer: "Pembeli", seller: "Admin penjual" };

function setAuthenticated(account) {
  document.body.classList.remove("auth-required");
  document.body.classList.add("authenticated");
  accountNameDisplay.textContent = account.name || account.email.split("@")[0];
  accountRoleDisplay.textContent = roleLabels[account.role];
}

function readAccounts() {
  const savedAccounts = localStorage.getItem(accountStorageKey);
  if (!savedAccounts) return [];
  const accounts = JSON.parse(savedAccounts);
  if (!Array.isArray(accounts)) throw new Error("Data akun Cafe Jee tidak valid.");
  return accounts;
}

function bytesToHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function hashPassword(password, salt) {
  if (!crypto.subtle) throw new Error("Browser ini belum mendukung penyimpanan kata sandi dengan aman.");
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 150000, hash: "SHA-256" },
    key,
    256,
  );
  return bytesToHex(new Uint8Array(bits));
}

function setAuthMode(mode) {
  const registering = mode === "register";
  authForm.dataset.mode = mode;
  authTitle.textContent = registering ? "Buat akunmu" : "Masuk ke akunmu";
  authIntro.textContent = registering
    ? "Daftar sebagai pembeli atau admin penjual."
    : "Masukkan akun terlebih dahulu untuk melihat Cafe Jee.";
  authSubmit.innerHTML = registering
    ? 'Daftar akun <span aria-hidden="true">↗</span>'
    : 'Masuk ke Cafe Jee <span aria-hidden="true">↗</span>';
  registerNameField.hidden = !registering;
  registerConfirmField.hidden = !registering;
  registerRoleField.hidden = !registering;
  registerName.required = registering;
  registerConfirmPassword.required = registering;
  registerRole.required = registering;
  authPassword.autocomplete = registering ? "new-password" : "current-password";
  authPassword.minLength = registering ? 8 : 1;
  authPassword.placeholder = registering ? "Minimal 8 karakter" : "Kata sandi";
  authModeButtons.forEach((button) => {
    const active = button.dataset.authMode === mode;
    button.classList.toggle("auth-tab--active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  authError.textContent = "";
}

try {
  const savedSession = sessionStorage.getItem(sessionStorageKey);
  if (savedSession) {
    const account = JSON.parse(savedSession);
    if (account && typeof account.email === "string" && roleLabels[account.role]) {
      setAuthenticated(account);
    } else {
      sessionStorage.removeItem(sessionStorageKey);
    }
  }
} catch (error) {
  authError.textContent = "Sesi akun tidak dapat dibaca. Silakan masuk kembali.";
  console.error("Could not restore the Cafe Jee session.", error);
}

authModeButtons.forEach((button) => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  authError.textContent = "";
  if (!authForm.reportValidity()) return;

  const email = authEmail.value.trim().toLowerCase();
  const password = authPassword.value;
  const registering = authForm.dataset.mode === "register";

  try {
    const accounts = readAccounts();
    if (registering) {
      const name = registerName.value.trim();
      const role = registerRole.value;
      if (password.length < 8) {
        authError.textContent = "Kata sandi harus terdiri dari minimal 8 karakter.";
        return;
      }
      if (password !== registerConfirmPassword.value) {
        authError.textContent = "Kata sandi yang dimasukkan belum sama.";
        return;
      }
      if (!roleLabels[role]) {
        authError.textContent = "Pilih jenis akun yang tersedia.";
        return;
      }
      if (accounts.some((account) => account.email === email)) {
        authError.textContent = "Email ini sudah terdaftar. Silakan masuk.";
        return;
      }

      const salt = crypto.getRandomValues(new Uint8Array(16));
      const account = {
        email,
        name,
        role,
        salt: bytesToHex(salt),
        passwordHash: await hashPassword(password, salt),
      };
      localStorage.setItem(accountStorageKey, JSON.stringify([...accounts, account]));
      authEmail.value = email;
      authPassword.value = "";
      registerConfirmPassword.value = "";
      setAuthMode("login");
      authError.textContent = `Akun ${roleLabels[role]} berhasil dibuat. Silakan masuk.`;
      return;
    }

    const account = accounts.find((savedAccount) => savedAccount.email === email);
    if (!account) {
      authError.textContent = "Akun belum terdaftar. Pilih Daftar akun untuk membuat akun.";
      return;
    }
    const salt = Uint8Array.from(account.salt.match(/.{2}/g) ?? [], (byte) => Number.parseInt(byte, 16));
    const passwordHash = await hashPassword(password, salt);
    if (passwordHash !== account.passwordHash) {
      authError.textContent = "Email atau kata sandi tidak sesuai.";
      return;
    }

    const accountSession = { email: account.email, name: account.name, role: account.role };
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(accountSession));
    setAuthenticated(accountSession);
    authPassword.value = "";
  } catch (error) {
    authError.textContent = error instanceof Error
      ? error.message
      : "Tidak dapat menyimpan akun. Periksa pengaturan penyimpanan browser.";
    console.error("Could not process the Cafe Jee account.", error);
  }
});

logoutButton.addEventListener("click", () => {
  sessionStorage.removeItem(sessionStorageKey);
  document.body.classList.remove("authenticated");
  document.body.classList.add("auth-required");
  authPassword.value = "";
  setAuthMode("login");
  authEmail.focus();
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function renderCart() {
  const entries = [...cart.values()];
  const itemCount = entries.reduce((sum, item) => sum + item.quantity, 0);
  const total = entries.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = itemCount;
  cartButton.setAttribute("aria-label", `Buka keranjang, ${itemCount} item`);
  cartEmpty.classList.toggle("is-visible", entries.length === 0);
  cartFooter.hidden = entries.length === 0;
  cartItems.replaceChildren();

  for (const item of entries) {
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <span class="cart-item__name"></span>
      <span class="cart-item__price">${formatPrice(item.price * item.quantity)}</span>
      <div class="cart-item__controls">
        <button type="button" aria-label="Kurangi ${item.name}" data-action="decrease" data-name="${item.name}">−</button>
        <span>${item.quantity}</span>
        <button type="button" aria-label="Tambah ${item.name}" data-action="increase" data-name="${item.name}">+</button>
      </div>`;
    row.querySelector(".cart-item__name").textContent = item.name;
    cartItems.append(row);
  }
  cartTotal.textContent = formatPrice(total);
}

function setCartOpen(isOpen) {
  cartPanel.classList.toggle("is-open", isOpen);
  cartPanel.setAttribute("aria-hidden", String(!isOpen));
  cartBackdrop.hidden = !isOpen;
  document.body.classList.toggle("cart-open", isOpen);
  if (isOpen) cartClose.focus();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("filter-button--active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
    menuCards.forEach((card) => {
      card.hidden = selectedFilter !== "semua" && card.dataset.category !== selectedFilter;
    });
  });
});

document.querySelectorAll(".quick-add").forEach((button) => {
  button.addEventListener("click", () => {
    const { name, price } = button.dataset;
    const existingItem = cart.get(name);
    cart.set(name, { name, price: Number(price), quantity: (existingItem?.quantity ?? 0) + 1 });
    renderCart();
    showToast(`${name} ditambahkan ke keranjang`);
  });
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const item = cart.get(button.dataset.name);
  if (!item) return;
  if (button.dataset.action === "increase") item.quantity += 1;
  if (button.dataset.action === "decrease") {
    item.quantity -= 1;
    if (item.quantity === 0) cart.delete(item.name);
  }
  renderCart();
});

cartButton.addEventListener("click", () => setCartOpen(true));
cartClose.addEventListener("click", () => setCartOpen(false));
cartBackdrop.addEventListener("click", () => setCartOpen(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartPanel.classList.contains("is-open")) setCartOpen(false);
});

document.querySelector(".checkout-button").addEventListener("click", () => {
  if (cart.size === 0) return;
  cart.clear();
  renderCart();
  setCartOpen(false);
  showToast("Terima kasih! Pesananmu sudah tercatat.");
});

const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
dateInput.min = localToday;

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!reservationForm.reportValidity()) return;

  const formData = new FormData(reservationForm);
  const guestName = formData.get("name").trim();
  const guestDate = new Date(`${formData.get("date")}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const guestCount = formData.get("guests");
  reservationMessage.textContent = `Terima kasih, ${guestName}! Meja untuk ${guestCount} orang pada ${guestDate} berhasil diminta.`;
  reservationForm.reset();
  dateInput.min = localToday;
  document.querySelector("#guest-count").value = "2";
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  primaryNav.classList.toggle("is-open", !isExpanded);
});

const navLinks = [...primaryNav.querySelectorAll(".nav-link")];

function setActiveNav(activeLink) {
  navLinks.forEach((link) => {
    const isActive = link === activeLink;
    link.classList.toggle("nav-link--active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setActiveNav(link);
    menuToggle.setAttribute("aria-expanded", "false");
    primaryNav.classList.remove("is-open");
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
    if (!visibleSection) return;

    const activeLink = navLinks.find((link) => link.hash === `#${visibleSection.target.id}`);
    if (activeLink) setActiveNav(activeLink);
  },
  { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.1, 0.5] },
);

navLinks.forEach((link) => {
  const section = document.querySelector(link.hash);
  if (section) sectionObserver.observe(section);
});
