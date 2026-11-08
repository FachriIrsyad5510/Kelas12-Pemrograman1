Nama : Muhammad Sajid Algani

Deskripsi Website
# 🛍️ meuliatuh.id

> **meuliatuh dulu, galau belakangan.**

Website toko online (e-commerce) bergaya fun dan estetik yang menjual fashion thrift, gadget lucu, dan merch dengan konsep *harga anak kos*. Dibuat sebagai satu file HTML tanpa framework, dengan bahasa santai khas anak muda (campuran Indonesia dan sedikit Sunda).

> ⚠️ **Status: demo front-end.** Belum ada backend, pembayaran, maupun autentikasi sungguhan. Semua data tersimpan di browser (`localStorage`).

---

## ✨ Fitur

- **Katalog produk**: 10 produk dalam kategori Fashion, Gadget, dan Merch, lengkap dengan label (best seller, limited, baru), harga coret, dan persentase diskon otomatis.
- **Pencarian real-time**: ketik di kolom pencarian dan hasil langsung tersaring.
- **Filter kategori**: Semua, Favorit, Fashion, Gadget, Merch.
- **Wishlist / Favorit**: simpan produk dengan tombol hati 💖.
- **Keranjang belanja**: laci samping dengan pengatur jumlah (maks. 99 per produk), subtotal, dan total.
- **Kode promo**: `GANIGANTENG` untuk diskon 15%.
- **Progress bar gratis ongkir**: menunjukkan sisa belanja untuk mendapat ongkir gratis.
- **Login & daftar (demo)**: kata sandi di-hash dengan SHA-256 + salt lewat Web Crypto API. Checkout mewajibkan login.
- **Flash sale**: hitung mundur sampai tengah malam dan teks berjalan (marquee) di bagian atas.
- **Sentuhan interaktif**: kursor tangan khusus, emoji hati muncul saat klik, dan animasi halus.

## 🧰 Teknologi

- HTML5, CSS3, dan JavaScript murni (*vanilla*), tanpa build tool atau dependensi
- Font: [Fraunces](https://fonts.google.com/specimen/Fraunces) dan [DM Sans](https://fonts.google.com/specimen/DM+Sans) dari Google Fonts
- `localStorage` untuk keranjang, favorit, promo, akun, dan sesi
- Web Crypto API (`crypto.subtle`) untuk hashing kata sandi
- Elemen `<dialog>` native untuk modal login

## 🚀 Cara Menjalankan

Fitur login memakai Web Crypto API yang **hanya berjalan di `https` atau `localhost`**, jadi jangan buka file langsung lewat `file://`. Jalankan lewat server lokal:

```bash
# Python
python3 -m http.server 8000

# atau Node.js
npx serve .
```

Lalu buka `http://localhost:8000` di browser.

## 📁 Struktur Proyek

```
.
├── index.html            # Seluruh HTML, CSS, dan JavaScript
├── README.md
└── assets/               # (opsional) gambar produk
    ├── hero.svg
    └── products/
        ├── hoodie.svg
        ├── tote.svg
        ├── sneakers.svg
        ├── earbuds.svg
        ├── lamp.svg
        ├── fan.svg
        ├── stickers.svg
        ├── box.svg
        ├── tumbler.svg
        └── shades.svg
```

Folder `assets/` bersifat opsional. Jika file gambar tidak ditemukan, website otomatis menampilkan emoji sebagai gantinya.

## ⚙️ Kustomisasi

Semua konfigurasi ada di bagian `<script>` pada `index.html`.

### Mengubah produk

Edit array `PRODUCTS`:

```js
{ id: 1, name: 'Jaket Menyala', cat: 'Fashion', price: 1000, old: 249000, img: 'hoodie', tag: 'best seller' }
```

| Properti | Keterangan |
|----------|------------|
| `id`     | ID unik produk |
| `name`   | Nama produk |
| `cat`    | Kategori: `Fashion`, `Gadget`, atau `Merch` |
| `price`  | Harga jual (Rupiah) |
| `old`    | *(opsional)* Harga coret, persentase diskon dihitung otomatis |
| `img`    | Nama file gambar di `assets/products/` (tanpa `.svg`) |
| `tag`    | *(opsional)* Label kecil di pojok gambar |

Jika menambah produk baru, tambahkan juga emoji cadangannya di objek `EMOJI`.

### Pengaturan lain

| Pengaturan | Lokasi | Default |
|------------|--------|---------|
| Minimal belanja gratis ongkir | konstanta `FREE_SHIP` | `3000` |
| Batas jumlah per produk | konstanta `MAX_QTY` | `99` |
| Kode promo dan besar diskon | handler `#applyPromo` dan fungsi `totals()` | `GANIGANTENG`, 15% |
| Warna dan tema | variabel CSS di `:root` | palet ungu-pink |

> 💡 Semua harga produk saat ini masih **Rp1.000** sebagai placeholder. Ganti dengan harga asli, lalu sesuaikan juga nilai `FREE_SHIP`.

## 💾 Data di Browser

| Kunci `localStorage` | Isi |
|----------------------|-----|
| `jajanin-cart`       | Isi keranjang |
| `jajanin-wish`       | Daftar ID produk favorit |
| `jajanin-promo`      | Status kode promo aktif |
| `jajanin-users`      | Akun yang didaftarkan lewat form |
| `jajanin-session`    | Sesi login saat ini |

Akun demo bawaan tersedia dengan email `admin@gmail.com` (didefinisikan di objek `DEMO_USERS`).

## ♿ Aksesibilitas

- Tautan *skip to content*
- Label ARIA pada tombol, filter, dan modal
- Fokus keyboard yang terlihat jelas, serta penutupan laci dengan tombol `Esc`
- Menghormati preferensi `prefers-reduced-motion`
- Target sentuh lebih besar di perangkat layar sentuh

## 📱 Responsif

Tampilan menyesuaikan ponsel, tablet, dan desktop. Di layar kecil, grid produk menjadi 2 kolom dan filter kategori bisa digeser horizontal.

## 🚧 Batasan dan Rencana Pengembangan

Karena masih berupa demo, hal berikut **belum tersedia**:

- [ ] Backend dan database
- [ ] Autentikasi yang aman (saat ini hanya simulasi di browser)
- [ ] Integrasi pembayaran dan pengiriman
- [ ] Halaman detail produk
- [ ] Riwayat pesanan

> ⚠️ Jangan gunakan sistem login ini untuk data nyata. Data akun hanya tersimpan di browser pengguna dan tidak aman untuk produksi.

## 📄 Lisensi

Tentukan lisensi sesuai kebutuhan proyekmu (misalnya MIT).

---

<p align="center">dibuat dengan cinta buat kamu yang suka checkout 💖</p>