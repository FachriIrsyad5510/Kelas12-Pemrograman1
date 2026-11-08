# 🌸 Ciyhuy — Pink Cafe & Patisserie Website

Website interaktif bertema **Kuliner / Cafe & Patisserie** dengan konsep desain **Romantic & Cute Pastel Pink (Kawaii Polaroid Style)** yang dibangun menggunakan **HTML5, CSS3, dan Vanilla JavaScript (ES6+)**.

---

## 👨‍🎓 Identitas Mahasiswa

| Informasi | Detail |
| :--- | :--- |
| **Nama Lengkap** | Dary Darwisy Ramdhani |
| **NPM / NIM** | 714260025 |
| **Program Studi** | D4 Teknik Informatika *(silakan sesuaikan jika berbeda)* |
| **Kelas** | 1A / Reguler *(silakan sesuaikan jika berbeda)* |
| **Mata Kuliah** | Pemrograman Web / Desain Antarmuka Pengguna |
| **Judul Proyek** | Website Kuliner & Kafe Interaktif **Ciyhuy (Ciyaa & Hunky) — Pink Cafe & Patisserie** |

---

## 📖 Deskripsi Website

**Ciyhuy — Pink Cafe & Patisserie** adalah aplikasi web *single-page* interaktif yang dirancang untuk memberikan pengalaman digital memesan kopi, minuman manis, makanan berat, dan *pastry* secara menyenangkan. Website ini menggabungkan estetika kafe bernuansa **romantis & lucu (Pastel Rose Pink)** dengan fitur fungsional layaknya sistem pemesanan kafe modern.

Sebelum masuk ke halaman utama, pengunjung disambut oleh **Gerbang Login Interaktif (Login Gate)** dengan maskot barista beranimasi yang bereaksi terhadap input pengguna, lengkap dengan sistem multi-peran (**Member** dan **Admin**). Selain katalog menu dan keranjang belanja pintar, website ini juga dilengkapi fitur hiburan interaktif (*gamification*) seperti **Custom Drink Builder**, **Kuis Mood Matcher**, **Roda Gacha Keberuntungan**, **Dinding Catatan Manis Pengunjung**, serta **Maskot Kucing Virtual (Mochi)**.

---

## ✨ Fitur Utama & Interaksi JavaScript

Website ini memiliki lebih dari **12 interaksi JavaScript dinamis** yang memenuhi dan melampaui spesifikasi tugas:

1. **🔐 Full-Screen Login Gate & Maskot Barista Interaktif**
   - Halaman dikunci saat pertama kali dibuka hingga pengguna login sebagai **Member** atau **Admin** (tersedia tombol **1-Klik Akun Demo** serta tab **Daftar Member Baru**).
   - Maskot Barista Kucing berubah ekspresi saat pengguna mengetik email, menutup mata saat mengetik password, dan melompat gembira saat berhasil masuk.
   - Efek sambutan kelopak bunga sakura & konfeti hati saat login berhasil.

2. **👑 Sistem Multi-Akun: Member & Admin Dashboard**
   - **Akun Member**: Mendapatkan **Diskon Otomatis 15%** di keranjang belanja, mengumpulkan poin dari setiap transaksi, melihat riwayat pesanan, dan menukarkan poin dengan voucher hadiah (50 Poin / 100 Poin).
   - **Akun Admin**: Panel khusus untuk memantau statistik pendapatan, mengubah status pesanan pelanggan (*Diproses* ➔ *Selesai*), mengelola status reservasi meja (*Menunggu* ➔ *Dikonfirmasi* / *Batal*), serta **menambah atau menghapus item menu secara *real-time***.

3. **🍰 Katalog Menu Kawaii Polaroid (Filter, Search, Sort & Favorit)**
   - Desain kartu menu bergaya *Kawaii Polaroid Lace* dengan *candy-stripe header*, stiker sudut bergoyang (*wiggle*), dan *fallback* ilustrasi SVG otomatis sehingga gambar dijamin selalu tampil.
   - Fitur filter kategori (`Semua`, `Kopi`, `Non-Kopi`, `Makanan Berat`, `Camilan & Pastry`, `❤️ Favorit`), pencarian *real-time* (`#menuSearch`), dan pengurutan harga/rating (`#menuSort`).

4. **🧋 Custom Drink Builder (Simulasi Gelas Berlapis Real-Time)**
   - Pengunjung dapat meracik minuman sendiri dengan memilih *Base* (Espresso, Matcha, Cokelat, Taro), tingkat kemanisan, jenis susu, es batu, dan *topping* (Boba, Cream Cheese, Caramel, Oreo).
   - Visualisasi gelas berubah warna dan tinggi lapisan secara langsung mengikuti pilihan pengguna, lengkap dengan kalkulasi harga otomatis.

5. **🎡 Fun Zone: Roda Gacha Keberuntungan & Kuis Mood Matcher**
   - **Roda Gacha Ciyhuy**: Putar roda keberuntungan 360° untuk memenangkan kode voucher diskon hingga 25% yang dapat langsung disalin.
   - **Kuis Mood Matcher**: Pilih suasana hati hari ini (*Butuh Semangat*, *Lagi Galau*, *Santai Sore*, atau *Mode Fokus*) untuk mendapatkan rekomendasi paket kombo makanan & minuman otomatis.

6. **🛒 Keranjang Belanja Pintar (Slide-In Drawer), Voucher & Cetak Struk**
   - Pengaturan jumlah item (`+`/`-`), kalkulasi otomatis **Subtotal + Diskon Member 15% + Kode Voucher Promo + Pajak Resto 10%**, serta modal struk pembayaran digital setelah *checkout*.

7. **💌 Dinding Catatan Manis (Sweet Sticky Notes Wall)**
   - Pengunjung dapat menulis pesan manis, memilih stiker emoji, dan memilih warna *sticky note* pastel yang langsung tertempel di dinding testimoni kafe (tersimpan di `localStorage`).

8. **📸 Galeri Foto Interaktif (Lightbox) & Form Reservasi Meja**
   - Klik foto suasana kafe untuk memperbesar tampilan dalam *modal Lightbox* bernavigasi (`Prev`/`Next` & tombol *keyboard* panah/`Esc`).
   - Formulir pemesanan meja dengan validasi tanggal otomatis dan konfirmasi kode *booking* instan.

9. **🐱 Maskot Kucing Virtual "Mochi", Efek Partikel Klik & Tema Gelap/Terang**
   - Widget maskot interaktif di pojok kiri bawah yang mengelus & mengeluarkan balon pesan lucu saat diklik.
   - Setiap klik di layar memunculkan partikel hati/bunga berterbangan (`✨`, `💖`, `🌸`), ditemani kelopak sakura jatuh serta tombol pengubah tema **Pastel Pink (Light)** & **Velvet Rose (Dark Mode)**.

---

## 🔑 Akun Demo & Kode Voucher Promo

Gunakan tombol **1-Klik Akun Demo** pada halaman Login, atau masukkan kredensial berikut secara manual:

| Peran Akun | Email | Password | Keuntungan / Hak Akses |
| :--- | :--- | :--- | :--- |
| **💖 Member Demo** | `member@senjarasa.com` | `member123` | Diskon otomatis **15%**, 120 poin awal, & tukar *reward* |
| **👑 Admin Kafe** | `admin@senjarasa.com` | `admin123` | Kelola pesanan, konfirmasi reservasi, & tambah/hapus menu |

### 🎟️ Daftar Kode Voucher Aktif:
- `CIYHUY25` — Diskon spesial **25%**
- `SENJA20` — Diskon spesial **20%**
- `LUCKY15` — Diskon kejutan **15%**
- `SWEET10` — Diskon manis **10%**
- `KOPIHEMAT` — Potongan langsung **Rp 10.000**

---

## 🛠️ Teknologi yang Digunakan

- **HTML5 Semantic Elements** (`header`, `nav`, `section`, `article`, `footer`, `dialog`/`modal`)
- **CSS3 Modern Styling** (CSS Custom Variables, Flexbox, CSS Grid, Keyframe Animations, Glassmorphism, Custom Scrollbars, Responsive Media Queries `960px` & `768px`)
- **Vanilla JavaScript ES6+** (DOM Manipulation, Event Delegation, LocalStorage Persistence, Dynamic SVG Data URI Generator, State Management)
- **Google Fonts** (`Quicksand`, `Fredoka`, dan `Playfair Display`)

---

## 📂 Struktur File Proyek

```text
cafe/
├── index.html   # Struktur utama halaman web, modal login, dashboard, dan section interaktif
├── style.css    # Desain visual Romantic & Cute Pastel Pink, animasi, dan tata letak responsif
├── script.js    # Logika autentikasi, katalog menu, keranjang, gacha, customizer, dan localStorage
└── README.md    # Dokumentasi identitas mahasiswa dan deskripsi lengkap website
```

---

## 🚀 Cara Menjalankan Website

1. Pastikan seluruh file (`index.html`, `style.css`, `script.js`, dan `README.md`) berada di dalam satu folder yang sama (`cafe/`).
2. Buka file **`index.html`** langsung menggunakan *browser* modern (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari), atau jalankan melalui ekstensi **Live Server** di Visual Studio Code.
3. Pada layar **Login Gate**, klik tombol **`💖 Klik untuk Masuk sebagai Member`** atau **`👑 Klik untuk Masuk sebagai Admin`** untuk langsung mencoba seluruh fitur website.

