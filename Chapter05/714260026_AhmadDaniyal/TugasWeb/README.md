# ☕ Kopi Senja - Cafe & Resto Web Application

Proyek aplikasi web interaktif untuk kafe "Kopi Senja" yang dikembangkan secara modular menggunakan file eksternal (HTML, CSS, dan JavaScript terpisah). Website ini mensimulasikan sistem pemesanan kafe modern dari sisi pelanggan hingga panel kontrol admin.

## 👤 Pembuat
* **Nama:** Ahmad Daniyal Bukhori
* **NIM:** 714260029
---

## 📋 Deskripsi Website
**Kopi Senja** adalah platform pemesanan kafe berbasis web (*multi-page application*) yang dirancang agar mudah dipahami, dibaca, dan dikembangkan. Website ini dilengkapi sistem autentikasi peran (*Customer* dan *Admin*), manajemen keranjang belanja, pembelian langsung, sistem penerbitan nomor antrian digital, pembatalan pesanan, manajemen ulasan interaktif, serta dashboard admin untuk konfirmasi pesanan masuk yang terintegrasi secara otomatis via `LocalStorage`. (Masih berupa Website Demo)

---

## ✨ Fitur Utama
1. **Autentikasi Multi-Peran (`login.html`):**
   * Pilihan masuk (*role*) sebagai **Customer (Pelanggan)** atau **Admin Kafe**.
2. **Katalog Menu & Pemesanan (`menu.html`):**
   * Menyediakan 6 pilihan menu lengkap (3 varian kopi dan 3 varian cemilan) dengan deskripsi dan harga.
   * Fitur **Tambah ke Keranjang** dan **Beli Langsung**.
   * Perhitungan total harga otomatis secara *real-time*.
3. **Struk Antrian Digital & Pembatalan:**
   * Otomatis menerbitkan nomor antrian unik (contoh: `KS-482`) beserta rincian daftar pesanan dan total bayar.
   * Tombol **Batalkan Pesanan** bagi pelanggan jika ingin membatalkan pesanan sebelum diproses.
4. **Dashboard Admin (`admin.html`):**
   * Halaman khusus admin untuk memantau pesanan masuk dari pelanggan secara *real-time*.
   * Tombol **Konfirmasi Selesai** yang otomatis membersihkan/menghilangkan struk di sisi pelanggan setelah pesanan dikonfirmasi.
5. **Halaman Ulasan Interaktif (`review.html`):**
   * Menampilkan daftar ulasan dari pelanggan lain.
   * Form interaktif bagi pengguna untuk mengirimkan ulasan, rating bintang, dan komentar baru secara langsung.
6. **Halaman Utama Kafe (`cafe.html`):**
   * Beranda/landing page informatif yang menampilkan profil singkat, tentang kafe, dan navigasi antar halaman.

---

## 🛠️ Teknologi yang Digunakan
* **HTML5:** Struktur dokumen web terpisah untuk setiap halaman (`login.html`, `cafe.html`, `menu.html`, `review.html`, `admin.html`).
* **CSS3:** Desain antarmuka modular, tata letak modern (*Grid* & *Flexbox*), serta estetika visual bernuansa kafe.
* **JavaScript (ES6+):** Logika interaktif, manipulasi DOM, manajemen keranjang, serta penyimpanan sementara menggunakan `LocalStorage` untuk komunikasi data antar halaman.

---

## 📂 Struktur Proyek
Pastikan seluruh berkas berikut berada di dalam **satu folder yang sama**:

```text
📁 Kopi-Senja-Web/
│
├── login.html        # Halaman masuk (Pilihan Customer / Admin)
├── cafe.html         # Halaman utama / landing page kafe
├── menu.html         # Halaman daftar menu (6 item), keranjang, & struk antrian
├── review.html       # Halaman ulasan dan form kirim review
├── admin.html        # Halaman panel kontrol admin untuk konfirmasi pesanan
├── style.css         # Berkas gaya (CSS) terpusat untuk semua halaman
└── script.js         # Berkas logika JavaScript terpusat