const modal = document.querySelector("#auth-modal");
const authForm = document.querySelector("#auth-form");
const authTitle = document.querySelector("#auth-title");
const submitButton = document.querySelector("#submit-auth");
const message = document.querySelector("#form-message");
const nameField = document.querySelector("#name-field");
const confirmField = document.querySelector("#confirm-field");
const nameInput = document.querySelector("#name-input");
const passwordInput = document.querySelector("#password-input");
const confirmInput = document.querySelector("#confirm-input");
const loginTab = document.querySelector("#login-tab");
const signupTab = document.querySelector("#signup-tab");
const loginButton = document.querySelector("#login-button");
const signupButton = document.querySelector("#signup-button");
const logoutButton = document.querySelector("#logout-button");
const userGreeting = document.querySelector("#user-greeting");
const toast = document.querySelector("#toast");
const cartModal = document.querySelector("#cart-modal");
const cartButton = document.querySelector("#cart-button");
const cartItemsElement = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartFooter = document.querySelector("#cart-footer");
const cartSubtotal = document.querySelector("#cart-subtotal");

const demoAccounts = new Map();
const cart = new Map();
let activeMode = "login";
let toastTimeout;
let cartCloseTimeout;

function syncBodyScrollLock() {
  document.body.style.overflow =
    !modal.hidden || !cartModal.hidden ? "hidden" : "";
}

function openAuth(mode) {
  setAuthMode(mode);
  modal.hidden = false;
  syncBodyScrollLock();
  document.querySelector("#email-input").focus();
}

function closeAuth() {
  modal.hidden = true;
  syncBodyScrollLock();
  authForm.reset();
  message.textContent = "";
  message.classList.remove("success");
}

function openCart() {
  window.clearTimeout(cartCloseTimeout);
  cartCloseTimeout = undefined;
  cartModal.hidden = false;
  cartButton.setAttribute("aria-expanded", "true");
  syncBodyScrollLock();
  renderCart();
  cartModal.querySelector(".cart-dialog").focus();
  window.requestAnimationFrame(() => {
    if (!cartModal.hidden && !cartCloseTimeout) {
      cartModal.classList.add("is-open");
    }
  });
}

function closeCart() {
  if (cartModal.hidden) return;

  cartModal.classList.remove("is-open");
  cartButton.setAttribute("aria-expanded", "false");
  cartButton.focus();
  window.clearTimeout(cartCloseTimeout);
  cartCloseTimeout = window.setTimeout(() => {
    cartModal.hidden = true;
    cartCloseTimeout = undefined;
    syncBodyScrollLock();
  }, 320);
}

function formatPrice(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

function updateCartBadge() {
  const count = [...cart.values()].reduce(
    (total, item) => total + item.quantity,
    0,
  );
  document.querySelector("#cart-count").textContent = String(count);
  cartButton.setAttribute("aria-label", `Keranjang, ${count} barang`);
}

function renderCart() {
  cartItemsElement.replaceChildren();
  let subtotal = 0;

  for (const [id, item] of cart) {
    subtotal += item.price * item.quantity;

    const row = document.createElement("article");
    row.className = "cart-item";

    const image = document.createElement("img");
    image.className = "cart-item-image";
    image.src = "product-shirt.jpeg";
    image.alt = "";

    const details = document.createElement("div");
    details.className = "cart-item-details";

    const name = document.createElement("h3");
    name.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("span");
    price.className = "cart-item-price";
    price.textContent = formatPrice(item.price);

    const actions = document.createElement("div");
    actions.className = "cart-item-actions";

    const quantity = document.createElement("div");
    quantity.className = "cart-quantity";

    const decreaseButton = createCartActionButton(
      id,
      "decrease",
      "Kurangi jumlah",
      "−",
    );
    const quantityValue = document.createElement("span");
    quantityValue.textContent = String(item.quantity);
    const increaseButton = createCartActionButton(
      id,
      "increase",
      "Tambah jumlah",
      "+",
    );
    quantity.append(decreaseButton, quantityValue, increaseButton);

    const removeButton = createCartActionButton(
      id,
      "remove",
      `Hapus ${item.name} dari keranjang`,
      "Hapus",
    );
    removeButton.className = "cart-remove";
    actions.append(quantity, removeButton);

    details.append(name, description, price, actions);
    row.append(image, details);
    cartItemsElement.append(row);
  }

  const isEmpty = cart.size === 0;
  cartEmpty.hidden = !isEmpty;
  cartFooter.hidden = isEmpty;
  cartSubtotal.textContent = formatPrice(subtotal);
  updateCartBadge();
}

function createCartActionButton(id, action, label, text) {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.cartAction = action;
  button.dataset.productId = id;
  button.setAttribute("aria-label", label);
  button.textContent = text;
  return button;
}

function setAuthMode(mode) {
  activeMode = mode;
  const isSignup = mode === "signup";
  authTitle.textContent = isSignup ? "Buat akun baru" : "Masuk ke akunmu";
  submitButton.textContent = isSignup ? "Buat akun" : "Masuk";
  nameField.hidden = !isSignup;
  confirmField.hidden = !isSignup;
  nameInput.required = isSignup;
  confirmInput.required = isSignup;
  passwordInput.autocomplete = isSignup ? "new-password" : "current-password";
  loginTab.classList.toggle("is-active", !isSignup);
  signupTab.classList.toggle("is-active", isSignup);
  loginTab.setAttribute("aria-selected", String(!isSignup));
  signupTab.setAttribute("aria-selected", String(isSignup));
  message.textContent = "";
  message.classList.remove("success");
}

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function setLoggedIn(name) {
  userGreeting.textContent = `Halo, ${name}`;
  userGreeting.hidden = false;
  loginButton.hidden = true;
  signupButton.hidden = true;
  logoutButton.hidden = false;
}

loginButton.addEventListener("click", () => openAuth("login"));
signupButton.addEventListener("click", () => openAuth("signup"));
loginTab.addEventListener("click", () => setAuthMode("login"));
signupTab.addEventListener("click", () => setAuthMode("signup"));
document.querySelector("#close-modal").addEventListener("click", closeAuth);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeAuth();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!cartModal.hidden) closeCart();
  else if (!modal.hidden) closeAuth();
});

authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  message.classList.remove("success");

  const email = document.querySelector("#email-input").value.trim().toLowerCase();
  const password = passwordInput.value;

  if (activeMode === "signup") {
    if (password !== confirmInput.value) {
      message.textContent = "Konfirmasi password belum sama.";
      confirmInput.focus();
      return;
    }

    if (demoAccounts.has(email)) {
      message.textContent = "Email ini sudah terdaftar. Silakan masuk.";
      return;
    }

    const name = nameInput.value.trim();
    demoAccounts.set(email, { name, password });
    setLoggedIn(name);
    closeAuth();
    showToast(`Akun berhasil dibuat. Selamat datang, ${name}!`);
    return;
  }

  const account = demoAccounts.get(email);
  if (!account || account.password !== password) {
    message.textContent = "Email atau password salah. Coba lagi atau daftar dulu.";
    return;
  }

  setLoggedIn(account.name);
  closeAuth();
  showToast(`Berhasil masuk. Halo, ${account.name}!`);
});

logoutButton.addEventListener("click", () => {
  userGreeting.hidden = true;
  loginButton.hidden = false;
  signupButton.hidden = false;
  logoutButton.hidden = true;
  showToast("Kamu berhasil keluar.");
});

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productCard = button.closest(".product-card");
    const name = productCard.querySelector(".product-info h3").textContent.trim();
    const description = productCard.querySelector(".product-info p").textContent.trim();
    const price = Number(
      productCard
        .querySelector(".product-info > span")
        .textContent.replace(/[^\d]/g, ""),
    );
    const id = button.dataset.product;

    if (!id || !name || !Number.isFinite(price)) {
      showToast("Produk tidak dapat ditambahkan ke keranjang.");
      return;
    }

    const item = cart.get(id);
    if (item) item.quantity += 1;
    else cart.set(id, { name, description, price, quantity: 1 });
    updateCartBadge();
    showToast(`${name} ditambahkan ke keranjang.`);
  });
});

cartButton.addEventListener("click", openCart);
document.querySelector("#close-cart").addEventListener("click", closeCart);
document.querySelector("#continue-shopping").addEventListener("click", closeCart);
cartModal.addEventListener("click", (event) => {
  if (event.target === cartModal) closeCart();
});

cartItemsElement.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-cart-action]");
  if (!button) return;

  const id = button.dataset.productId;
  const item = cart.get(id);
  if (!item) return;

  if (button.dataset.cartAction === "increase") item.quantity += 1;
  else if (button.dataset.cartAction === "decrease") {
    if (item.quantity === 1) cart.delete(id);
    else item.quantity -= 1;
  } else if (button.dataset.cartAction === "remove") cart.delete(id);

  renderCart();
});
