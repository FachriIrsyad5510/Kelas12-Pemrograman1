const menuItems = {
  cappuccino: { name: "Cappuccino Luna", price: 32000 },
  espresso: { name: "Espresso al Sole", price: 24000 },
  "caffe-latte": { name: "Caffè Latte", price: 34000 },
  americano: { name: "Americano Romano", price: 28000 },
  "flat-white": { name: "Flat White", price: 33000 },
  mocha: { name: "Mocha della Casa", price: 36000 },
  "cold-brew": { name: "Cold Brew Notte", price: 35000 },
  croissant: { name: "Croissant au Beurre", price: 28000 },
  "pain-au-chocolat": { name: "Pain au Chocolat", price: 32000 },
  tagliatelle: { name: "Tagliatelle al Pesto", price: 68000 }
};

const reviews = [
  {
    quote: "“Croissant-nya buttery tanpa terasa berat. Cappuccino-nya juga punya foam yang halus—tempat yang bikin saya ingin duduk lebih lama.”",
    name: "Rani A.",
    role: "Penikmat kuliner lokal",
    initials: "RA"
  },
  {
    quote: "“Tagliatelle al pesto-nya wangi dan comforting. Senang menemukan tempat yang tidak terburu-buru, dengan rasa yang terasa dibuat sepenuh hati.”",
    name: "Dimas P.",
    role: "Pengunjung Luna Vesta",
    initials: "DP"
  },
  {
    quote: "“Sudut kecil yang manis untuk rehat sejenak. Espresso-nya punya karakter, dan suasananya terasa seperti menemukan rumah kedua.”",
    name: "Nadia K.",
    role: "Pencinta kopi Garut",
    initials: "NK"
  }
];

const state = {
  role: "customer",
  authMode: "login",
  user: readStoredUser(),
  cart: readStoredCart(),
  reviewIndex: 0,
  toastTimeout: null
};

const loginModal = document.getElementById("loginModal");
const cartBackdrop = document.getElementById("cartBackdrop");
const introOverlay = document.getElementById("introOverlay");
const loginButton = document.getElementById("loginButton");
const userChip = document.getElementById("userChip");
const menuGrid = document.getElementById("menuGrid");
const toast = document.getElementById("toast");

function readStoredUser() {
  try {
    const stored = JSON.parse(localStorage.getItem("lunaVestaUser"));
    if (stored && (stored.role === "customer" || stored.role === "admin") && typeof stored.email === "string") {
      return stored;
    }
  } catch (error) {
    console.error("Sesi Luna Vesta tidak dapat dibaca.", error);
  }
  return null;
}

function readStoredCart() {
  try {
    const stored = JSON.parse(localStorage.getItem("lunaVestaCart"));
    if (stored && typeof stored === "object" && !Array.isArray(stored)) {
      return Object.fromEntries(
        Object.entries(stored).filter(([id, quantity]) => menuItems[id] && Number.isInteger(quantity) && quantity > 0)
      );
    }
  } catch (error) {
    console.error("Pesanan Luna Vesta tidak dapat dibaca.", error);
  }
  return {};
}

function persist(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Data Luna Vesta (${key}) tidak dapat disimpan.`, error);
    showToast("Penyimpanan browser tidak tersedia. Perubahan ini mungkin tidak tersimpan.");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(state.toastTimeout);
  state.toastTimeout = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function formatPrice(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

function updateUserInterface() {
  const isLoggedIn = Boolean(state.user);
  loginButton.classList.toggle("hidden", isLoggedIn);
  userChip.classList.toggle("hidden", !isLoggedIn);
  document.getElementById("userGreeting").textContent = isLoggedIn
    ? `${state.user.role === "admin" ? "Admin" : "Ciao"}, ${state.user.name || state.user.email.split("@")[0]}`
    : "";
  document.getElementById("discountNote").classList.toggle("hidden", !isBuyer());
  document.getElementById("year").textContent = new Date().getFullYear();
  renderCart();
}

function isBuyer() {
  return Boolean(state.user && state.user.role === "customer");
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartEmpty = document.getElementById("cartEmpty");
  const cartSummary = document.getElementById("cartSummary");
  const cartCount = document.getElementById("cartCount");
  const entries = Object.entries(state.cart);
  const itemCount = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const subtotal = entries.reduce((sum, [id, quantity]) => sum + menuItems[id].price * quantity, 0);
  const discount = isBuyer() ? Math.round(subtotal * 0.1) : 0;
  document.getElementById("cashierNote").classList.add("hidden");

  cartCount.textContent = itemCount;
  cartItems.innerHTML = entries.map(([id, quantity]) => {
    const item = menuItems[id];
    return `<article class="cart-item">
      <div><strong>${item.name}</strong><small>${formatPrice(item.price)} · ${formatPrice(item.price * quantity)}</small></div>
      <div class="quantity-control" aria-label="Jumlah ${item.name}">
        <button data-cart-action="decrease" data-id="${id}" aria-label="Kurangi ${item.name}">−</button>
        <span>${quantity}</span>
        <button data-cart-action="increase" data-id="${id}" aria-label="Tambah ${item.name}">+</button>
      </div>
    </article>`;
  }).join("");
  cartEmpty.classList.toggle("hidden", itemCount > 0);
  cartSummary.classList.toggle("hidden", itemCount === 0);
  document.getElementById("cartSubtotal").textContent = formatPrice(subtotal);
  document.getElementById("cartDiscount").textContent = `−${formatPrice(discount)}`;
  document.getElementById("cartTotal").textContent = formatPrice(subtotal - discount);
  document.getElementById("cartDiscountRow").classList.toggle("hidden", !isBuyer());
  document.getElementById("cartLoginPrompt").classList.toggle("hidden", isBuyer());
}

function addToCart(id) {
  if (!menuItems[id]) {
    showToast("Menu ini belum tersedia.");
    return;
  }
  state.cart[id] = (state.cart[id] || 0) + 1;
  persist("lunaVestaCart", state.cart);
  renderCart();
  showToast(`${menuItems[id].name} ditambahkan ke pesanan.`);
}

function setRole(role) {
  state.role = role;
  setAuthMode("login");
  document.querySelectorAll(".login-tab").forEach((tab) => {
    const active = tab.dataset.role === role;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  document.getElementById("loginHint").textContent = role === "customer"
    ? "Masuk sebagai pembeli untuk mendapat diskon 10%."
    : "Akses khusus tim Luna Vesta.";
  document.getElementById("loginPassword").value = "";
  document.getElementById("formError").textContent = "";
}

function setAuthMode(mode) {
  state.authMode = mode;
  const isRegistering = mode === "register";
  document.getElementById("loginTabs").classList.toggle("hidden", isRegistering);
  document.getElementById("registerNameLabel").classList.toggle("hidden", !isRegistering);
  document.getElementById("registerName").classList.toggle("hidden", !isRegistering);
  document.getElementById("registerName").required = isRegistering;
  document.getElementById("modalTitle").innerHTML = isRegistering
    ? "Mulai jadi <em>member.</em>"
    : "Senang bertemu <em>lagi.</em>";
  document.getElementById("loginHint").textContent = isRegistering
    ? "Daftar gratis dan nikmati diskon 10% untuk pesananmu."
    : state.role === "customer"
      ? "Masuk sebagai pembeli untuk mendapat diskon 10%."
      : "Akses khusus tim Luna Vesta.";
  document.getElementById("authSubmit").innerHTML = isRegistering
    ? "Daftar jadi member <span aria-hidden=\"true\">→</span>"
    : "Masuk ke Luna Vesta <span aria-hidden=\"true\">→</span>";
  document.getElementById("authSwitchText").textContent = isRegistering
    ? "Sudah menjadi member?"
    : "Belum menjadi member?";
  document.getElementById("authSwitchButton").textContent = isRegistering
    ? "Masuk"
    : "Daftar di sini";
  document.getElementById("demoNote").textContent = isRegistering
    ? "Mode demo: pendaftaran mengaktifkan sesi member di browser ini. Tidak ada kata sandi yang disimpan."
    : "Mode demo: login pembeli dapat menggunakan email dan kata sandi apa saja. Admin: admin@lunavesta.id / luna123";
  document.getElementById("formError").textContent = "";
}

function openModal(modal) {
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal(modal) {
  modal.classList.add("hidden");
  if (loginModal.classList.contains("hidden") && cartBackdrop.classList.contains("hidden")) {
    document.body.classList.remove("modal-open");
  }
}

function renderReview() {
  const review = reviews[state.reviewIndex];
  document.getElementById("reviewQuote").textContent = review.quote;
  document.getElementById("reviewName").textContent = review.name;
  document.getElementById("reviewRole").textContent = review.role;
  document.getElementById("reviewAvatar").textContent = review.initials;
}

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".add-item");
  if (button) addToCart(button.dataset.id);
});

document.querySelectorAll(".menu-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".menu-tab").forEach((candidate) => {
      const active = candidate === tab;
      candidate.classList.toggle("active", active);
      candidate.setAttribute("aria-selected", String(active));
    });
    menuGrid.querySelectorAll(".menu-card").forEach((card) => {
      card.classList.toggle("hidden", tab.dataset.category !== "all" && card.dataset.category !== tab.dataset.category);
    });
  });
});

document.querySelectorAll(".login-tab").forEach((tab) => {
  tab.addEventListener("click", () => setRole(tab.dataset.role));
});

loginButton.addEventListener("click", () => {
  setRole("customer");
  openModal(loginModal);
});
document.getElementById("memberRegisterButton").addEventListener("click", () => {
  setRole("customer");
  setAuthMode("register");
  openModal(loginModal);
  document.getElementById("registerName").focus();
});
document.getElementById("authSwitchButton").addEventListener("click", () => {
  setAuthMode(state.authMode === "register" ? "login" : "register");
});
document.getElementById("modalClose").addEventListener("click", () => closeModal(loginModal));
document.getElementById("logoutButton").addEventListener("click", () => {
  state.user = null;
  persist("lunaVestaUser", null);
  updateUserInterface();
  showToast("Kamu sudah keluar dari akun.");
});

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;
  const formError = document.getElementById("formError");

  if (state.authMode === "register") {
    const name = document.getElementById("registerName").value.trim();
    if (name.length < 2) {
      formError.textContent = "Nama harus terdiri dari minimal 2 karakter.";
      return;
    }
    state.user = { role: "customer", email, name, member: true };
    persist("lunaVestaUser", state.user);
    updateUserInterface();
    closeModal(loginModal);
    document.getElementById("loginForm").reset();
    setAuthMode("login");
    showToast("Benvenuto! Kamu resmi menjadi member Luna Vesta. Diskon 10% aktif.");
    return;
  }

  if (state.role === "admin" && (email !== "admin@lunavesta.id" || password !== "luna123")) {
    formError.textContent = "Email atau kata sandi admin tidak cocok.";
    return;
  }
  if (state.role === "customer" && password.length < 6) {
    formError.textContent = "Kata sandi harus terdiri dari minimal 6 karakter.";
    return;
  }

  state.user = { role: state.role, email };
  persist("lunaVestaUser", state.user);
  updateUserInterface();
  closeModal(loginModal);
  document.getElementById("loginForm").reset();
  showToast(isBuyer() ? "Benvenuto! Diskon 10% sudah aktif." : "Selamat datang di panel demo Luna Vesta.");
});

document.getElementById("cartButton").addEventListener("click", () => {
  renderCart();
  openModal(cartBackdrop);
});
document.getElementById("cartClose").addEventListener("click", () => closeModal(cartBackdrop));
document.getElementById("browseMenu").addEventListener("click", () => {
  closeModal(cartBackdrop);
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("cartItems").addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;
  const { id, cartAction } = button.dataset;
  if (cartAction === "increase") state.cart[id] += 1;
  if (cartAction === "decrease") {
    state.cart[id] -= 1;
    if (state.cart[id] <= 0) delete state.cart[id];
  }
  persist("lunaVestaCart", state.cart);
  renderCart();
});

document.getElementById("checkoutButton").addEventListener("click", () => {
  const entries = Object.entries(state.cart);
  if (entries.length === 0) {
    showToast("Tambahkan menu sebelum membuat pesanan.");
    return;
  }
  const subtotal = entries.reduce((sum, [id, quantity]) => sum + menuItems[id].price * quantity, 0);
  const discount = isBuyer() ? Math.round(subtotal * 0.1) : 0;
  const orderLines = entries.map(([id, quantity]) => `${menuItems[id].name} x${quantity} — ${formatPrice(menuItems[id].price * quantity)}`);
  const message = [
    "Ciao Luna Vesta! Saya ingin melanjutkan pesanan dan pembayaran:",
    ...orderLines,
    `Subtotal: ${formatPrice(subtotal)}`,
    ...(discount ? [`Diskon member 10%: -${formatPrice(discount)}`] : []),
    `Total: ${formatPrice(subtotal - discount)}`
  ].join("\n");
  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

document.getElementById("cashierButton").addEventListener("click", () => {
  document.getElementById("cashierNote").classList.remove("hidden");
});

document.getElementById("startButton").addEventListener("click", () => {
  const startButton = document.getElementById("startButton");
  if (introOverlay.classList.contains("is-leaving")) return;

  startButton.setAttribute("aria-disabled", "true");
  introOverlay.classList.add("is-leaving");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const transitionDuration = prefersReducedMotion ? 20 : 1080;

  window.setTimeout(() => {
    introOverlay.classList.add("hidden");
    introOverlay.classList.remove("is-leaving");
    document.body.classList.remove("intro-open");
    document.getElementById("home").scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  }, transitionDuration);
});

document.getElementById("reservationForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const branch = document.getElementById("reservationBranch").value;
  const time = document.getElementById("reservationTime").value;
  const message = `kak saya mau reservasi di cabang ${branch} pada pukul(${time}). Terimakasih`;
  window.open(`https://wa.me/62895413437221?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

document.getElementById("reviewPrev").addEventListener("click", () => {
  state.reviewIndex = (state.reviewIndex - 1 + reviews.length) % reviews.length;
  renderReview();
});
document.getElementById("reviewNext").addEventListener("click", () => {
  state.reviewIndex = (state.reviewIndex + 1) % reviews.length;
  renderReview();
});

document.getElementById("menuToggle").addEventListener("click", (event) => {
  const isOpen = document.getElementById("mainNav").classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mainNav").classList.remove("open");
    document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal(loginModal);
    closeModal(cartBackdrop);
  }
});
loginModal.addEventListener("click", (event) => {
  if (event.target === loginModal) closeModal(loginModal);
});
cartBackdrop.addEventListener("click", (event) => {
  if (event.target === cartBackdrop) closeModal(cartBackdrop);
});

updateUserInterface();
