/* Autentikasi sederhana (demo): data disimpan di localStorage browser, bukan server. */
const KUNCI_USER = "pf_users", KUNCI_SESI = "pf_session";
const ambilUser = () => JSON.parse(localStorage.getItem(KUNCI_USER) || "[]");
const sesi = () => localStorage.getItem(KUNCI_SESI);
const halaman = document.body.dataset.page;
const halamanAuth = ["login", "register"].includes(halaman);

// Penjaga halaman
if (!halamanAuth && !sesi()) location.replace("login.html");
if (halamanAuth && sesi()) location.replace("index.html");

function keluar() { localStorage.removeItem(KUNCI_SESI); location.href = "login.html"; }

function pesan(teks, ok) {
  const el = document.getElementById("pesan");
  el.textContent = teks; el.className = "pesan " + (ok ? "ok" : "err");
}
const nilai = id => document.getElementById(id).value.trim();
const emailValid = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
function masuk(user) {
  localStorage.setItem(KUNCI_SESI, user.nama);
  setTimeout(() => location.href = "index.html", 800);
}

document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const id = nilai("id").toLowerCase(), pw = nilai("password");
  if (!id || !pw) return pesan("Email/username dan kata sandi wajib diisi.");
  const user = ambilUser().find(u => (u.email.toLowerCase() === id || u.nama.toLowerCase() === id) && u.password === pw);
  if (!user) return pesan("Akun tidak ditemukan atau kata sandi salah.");
  pesan("Berhasil masuk. Mengalihkan...", true); masuk(user);
});

document.getElementById("registerForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const nama = nilai("nama"), email = nilai("email"), pw = nilai("password"), k = nilai("konfirmasi");
  if (!nama || !email || !pw || !k) return pesan("Semua kolom wajib diisi.");
  if (!emailValid(email)) return pesan("Format email belum benar.");
  if (pw.length < 6) return pesan("Kata sandi minimal 6 karakter.");
  if (pw !== k) return pesan("Konfirmasi kata sandi tidak sama.");
  const users = ambilUser();
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) return pesan("Email sudah terdaftar.");
  const user = { nama, email, password: pw };
  users.push(user); localStorage.setItem(KUNCI_USER, JSON.stringify(users));
  pesan("Akun berhasil dibuat. Mengalihkan...", true); masuk(user);
});
