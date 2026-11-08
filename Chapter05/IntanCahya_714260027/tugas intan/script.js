const books = [
  { id: 1, title: "Laut Bercerita", author: "Leila S. Chudori", category: "Fiksi", color: "linear-gradient(145deg, #467778, #173e48)", short: "LAUT<br>BERCERITA" },
  { id: 2, title: "Atomic Habits", author: "James Clear", category: "Pengembangan Diri", color: "linear-gradient(145deg, #e1a947, #bd633c)", short: "ATOMIC<br>HABITS" },
  { id: 3, title: "Bumi", author: "Tere Liye", category: "Fantasi", color: "linear-gradient(145deg, #7655a0, #3e376e)", short: "BUMI" },
  { id: 4, title: "Pulang", author: "Tere Liye", category: "Fiksi", color: "linear-gradient(145deg, #bc6e76, #6e3858)", short: "PULANG" },
  { id: 5, title: "Hujan", author: "Tere Liye", category: "Romansa", color: "linear-gradient(145deg, #79a4ae, #406375)", short: "HUJAN" },
  { id: 6, title: "Filosofi Teras", author: "Henry Manampiring", category: "Pengembangan Diri", color: "linear-gradient(145deg, #d59b60, #986142)", short: "FILOSOFI<br>TERAS" },
  { id: 7, title: "The Midnight Library", author: "Matt Haig", category: "Fantasi", color: "linear-gradient(145deg, #3c8b87, #23535d)", short: "THE MIDNIGHT<br>LIBRARY" },
  { id: 8, title: "Dilan 1990", author: "Pidi Baiq", category: "Romansa", color: "linear-gradient(145deg, #dd8397, #a84461)", short: "DILAN<br>1990" }
];

const bookGrid = document.getElementById("bookGrid");
const loginModal = document.getElementById("loginModal");
const borrowModal = document.getElementById("borrowModal");
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const adminPanel = document.getElementById("adminPanel");
const mainNav = document.getElementById("mainNav");
const menuToggle = document.getElementById("menuToggle");
let currentUser = readStorage("sitataUser", null);
let selectedBook = null;
let toastTimer;

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.error(`Tidak dapat membaca ${key} dari penyimpanan browser.`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Tidak dapat menyimpan ${key} ke penyimpanan browser.`, error);
    showToast("Penyimpanan browser tidak tersedia. Perubahan belum tersimpan.");
    return false;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderBooks() {
  const query = document.getElementById("bookSearch").value.trim().toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const filteredBooks = books.filter((book) => {
    const matchesQuery = `${book.title} ${book.author}`.toLowerCase().includes(query);
    return matchesQuery && (category === "Semua" || book.category === category);
  });

  bookGrid.innerHTML = filteredBooks.map((book) => `
    <article class="book-card">
      <div class="cover" style="background: ${book.color}">
        <span class="cover-title">${book.short}</span>
        <span class="cover-author">${escapeHtml(book.author)}</span>
      </div>
      <div class="book-info">
        <span class="book-category">${escapeHtml(book.category)}</span>
        <h3>${escapeHtml(book.title)}</h3>
        <p>${escapeHtml(book.author)}</p>
        <button class="borrow-button" type="button" data-book-id="${book.id}">Pinjam buku <span>→</span></button>
      </div>
    </article>`).join("");
  document.getElementById("emptyBooks").classList.toggle("hidden", filteredBooks.length > 0);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

function updateSessionView() {
  const isAdmin = currentUser?.role === "admin";
  loginButton.classList.toggle("hidden", Boolean(currentUser));
  logoutButton.classList.toggle("hidden", !currentUser);
  logoutButton.textContent = currentUser ? `Keluar (${currentUser.name})` : "Keluar";
  adminPanel.classList.toggle("hidden", !isAdmin);
  if (isAdmin) renderOrders();
}

function formatDate(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function renderOrders() {
  const orders = readStorage("sitataOrders", []);
  const orderCount = document.getElementById("orderCount");
  const orderList = document.getElementById("orderList");
  orderCount.textContent = `${orders.length} pesanan`;

  if (orders.length === 0) {
    orderList.innerHTML = '<div class="admin-empty">Belum ada pesanan peminjaman.</div>';
    return;
  }

  orderList.innerHTML = orders.slice().reverse().map((order) => {
    const accepted = order.status === "Diterima";
    return `
      <article class="order-item">
        <div><strong>${escapeHtml(order.bookTitle)}</strong><small>${escapeHtml(order.borrower)}</small></div>
        <div><strong>Tanggal pinjam</strong><small>${formatDate(order.startDate)} – ${formatDate(order.endDate)}</small></div>
        <div><strong>Akun</strong><small>${escapeHtml(order.email)}</small></div>
        <span class="order-status ${accepted ? "accepted" : ""}">${accepted ? "Sedang dipinjam" : "Menunggu"}</span>
        <button class="accept-button" type="button" data-accept-order="${escapeHtml(order.id)}" ${accepted ? "disabled" : ""}>${accepted ? "✓ Diterima" : "Terima"}</button>
      </article>`;
  }).join("");
}

function openBorrowForm() {
  document.getElementById("borrowBookTitle").textContent = `${selectedBook.title} — ${selectedBook.author}`;
  document.getElementById("borrowerName").value = currentUser.name;
  document.getElementById("borrowStart").value = "";
  document.getElementById("borrowEnd").value = "";
  document.getElementById("borrowError").classList.add("hidden");
  borrowModal.showModal();
}

bookGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-book-id]");
  if (!button) return;

  selectedBook = books.find((book) => book.id === Number(button.dataset.bookId));
  if (!selectedBook) return;

  if (currentUser?.role === "admin") {
    showToast("Admin tidak dapat membuat pesanan peminjaman.");
  } else if (!currentUser) {
    loginModal.showModal();
  } else {
    openBorrowForm();
  }
});

loginButton.addEventListener("click", () => loginModal.showModal());

logoutButton.addEventListener("click", () => {
  currentUser = null;
  localStorage.removeItem("sitataUser");
  updateSessionView();
  showToast("Kamu berhasil keluar.");
});

document.getElementById("bookSearch").addEventListener("input", renderBooks);
document.getElementById("categoryFilter").addEventListener("change", renderBooks);

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;
  const error = document.getElementById("loginError");
  const isAdmin = email === "admin@sitata.id" && password === "admin123";

  if (email === "admin@sitata.id" && !isAdmin) {
    error.textContent = "Kata sandi admin salah. Gunakan akun demo yang tertera.";
    error.classList.remove("hidden");
    return;
  }

  currentUser = {
    email,
    name: isAdmin ? "Admin" : (email.split("@")[0].replace(/[._-]/g, " ") || "Pembeli"),
    role: isAdmin ? "admin" : "buyer"
  };
  if (!writeStorage("sitataUser", currentUser)) {
    currentUser = null;
    return;
  }

  loginModal.close();
  event.target.reset();
  error.classList.add("hidden");
  updateSessionView();
  if (isAdmin) {
    showToast("Berhasil masuk sebagai admin.");
    adminPanel.scrollIntoView({ behavior: "smooth" });
  } else if (selectedBook) {
    openBorrowForm();
  } else {
    showToast("Berhasil masuk. Pilih buku yang ingin dipinjam.");
  }
});

document.getElementById("borrowStart").addEventListener("change", (event) => {
  const endDate = document.getElementById("borrowEnd");
  endDate.min = event.target.value;
  if (endDate.value && endDate.value < event.target.value) {
    endDate.value = event.target.value;
  }
});

document.getElementById("borrowForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const startDate = document.getElementById("borrowStart").value;
  const endDate = document.getElementById("borrowEnd").value;
  const error = document.getElementById("borrowError");

  if (!selectedBook || !currentUser || currentUser.role !== "buyer") {
    error.textContent = "Silakan masuk sebagai pembeli dan pilih buku terlebih dahulu.";
    error.classList.remove("hidden");
    return;
  }
  if (endDate < startDate) {
    error.textContent = "Tanggal kembali tidak boleh sebelum tanggal pinjam.";
    error.classList.remove("hidden");
    return;
  }

  const orders = readStorage("sitataOrders", []);
  orders.push({
    id: `${Date.now()}`,
    bookTitle: selectedBook.title,
    borrower: document.getElementById("borrowerName").value.trim(),
    email: currentUser.email,
    startDate,
    endDate,
    status: "Menunggu"
  });
  if (!writeStorage("sitataOrders", orders)) return;

  borrowModal.close();
  event.target.reset();
  showToast("Pesanan berhasil dicatat. Selamat membaca!");
});

document.getElementById("orderList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-accept-order]");
  if (!button || currentUser?.role !== "admin") return;

  const orders = readStorage("sitataOrders", []);
  const order = orders.find((item) => item.id === button.dataset.acceptOrder);
  if (!order || order.status === "Diterima") return;

  order.status = "Diterima";
  if (!writeStorage("sitataOrders", orders)) return;
  renderOrders();
  showToast("Peminjaman berhasil diterima.");
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.close).close();
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .slice(0, 10);
document.getElementById("borrowStart").min = localToday;
document.getElementById("borrowEnd").min = localToday;

renderBooks();
updateSessionView();
