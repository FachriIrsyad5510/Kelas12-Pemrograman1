# ☕ Kopi Senja - Website Cafe

**Nama:** Najmi Afiifah J. Siregar  
**NIM:** 714260024  
**Kelas:** 1B  
**Mata Kuliah:** Pemrograman Web

## 📖 Deskripsi
Website cafe "Kopi Senja" - cafe cozy di Dago, Bandung. 
Pengunjung bisa lihat menu, cari menu, filter kategori, dan pesan langsung lewat keranjang belanja tanpa perlu login.

## ✨ Fitur Utama (JavaScript)
1.  **Filter Menu** - Filter berdasarkan All, Kopi, Non-Kopi, Camilan, dan Best Seller
2.  **Search Menu** - Cari menu secara real-time, bisa digabung dengan filter
3.  **Keranjang Belanja** - Tambah pesanan, hitung subtotal otomatis, dan checkout
4.  **Dark Mode / Light Mode** - Ganti tema dengan tombol 🌙 / ☀️
5.  **Hamburger Menu** - Menu navigasi responsif untuk HP

## 🍽️ Daftar Menu (8 Menu)
**Kopi:**
- Espresso - Rp 28.000 (Best Seller)
- Cappuccino - Rp 35.000 (Best Seller)
- Kopi Susu Senja - Rp 32.000
- Cafe Latte - Rp 25.000

**Non-Kopi:**
- Lychee Tea - Rp 22.000

**Makanan / Camilan:**
- Croissant - Rp 20.000
- Nasi Goreng Senja - Rp 35.000
- Brownies - Rp 24.000 (Best Seller)

## 🛠️ Teknologi yang Digunakan
- **HTML** - Struktur halaman (Navbar, Hero, Menu, Cart, Footer)
- **CSS** - Styling premium krem-coklat, Flexbox untuk Hero, Grid untuk Menu, Responsive
- **JavaScript** - Array data menu, DOM Manipulation, Filter & Search, Event Listener
- **Google Fonts** - Playfair Display (Judul) & Poppins (Isi)

## 📂 Struktur File

kopi-senja/
├── index.html
├── style.css
├── script.js
└── README.md


## ▶️ Cara Menjalankan
1. Download / Clone semua file
2. Pastikan `index.html`, `style.css`, dan `script.js` ada di satu folder yang sama
3. Klik 2x `index.html` atau klik kanan > Open with Browser
4. Website langsung jalan, tidak perlu install apa-apa

## 💡 Penjelasan Singkat Kode
- Data menu disimpan di `array` di `script.js`, lalu ditampilkan otomatis ke HTML dengan fungsi `tampilkanMenu()`
- Filter dan Search bekerja dengan `array.filter()` untuk menyaring menu yang sesuai
- Keranjang memakai `array` `cart` dan variabel `total` untuk menghitung subtotal