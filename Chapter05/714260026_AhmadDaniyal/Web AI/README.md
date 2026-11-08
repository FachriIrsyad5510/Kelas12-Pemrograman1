# Website Portofolio Ahmad Daniyal Bukhori

Website portofolio multi-halaman dengan tema navy dan aksen cyan, dibuat memakai **HTML5, CSS3, dan JavaScript vanilla** (tanpa framework, tanpa instalasi).

## Cara Menjalankan

1. Buka folder `portfolio` di Visual Studio Code.
2. Pasang ekstensi **Live Server**.
3. Klik kanan `login.html`, lalu pilih **Open with Live Server**.
4. Daftar akun baru, lalu masuk. Kamu akan diarahkan ke `index.html`.

> Bisa juga dengan klik dua kali `login.html`, tetapi Live Server lebih disarankan.

## Struktur Folder

```
portfolio/
├── login.html          Halaman masuk
├── register.html       Halaman daftar akun
├── index.html          Beranda (hero)
├── keahlian.html       Keahlian
├── pengalaman.html     Pengalaman, pendidikan, prestasi, sertifikat
├── proyek.html         Proyek
├── kontak.html         Kontak
├── css/
│   └── style.css       Seluruh tampilan dan warna
├── js/
│   ├── data.js         SEMUA isi website (teks, link, nama file gambar)
│   ├── auth.js         Login, daftar, penjaga halaman, keluar
│   └── main.js         Menampilkan navbar, footer, dan isi halaman
└── img/
    ├── profil.jpg      Foto profil
    ├── sertifikat/     Foto sertifikat
    └── proyek/         Foto proyek
```

## Cara Mengubah Isi

| Yang ingin diubah | Lokasi |
|---|---|
| Nama, deskripsi, peran di hero | `js/data.js` |
| Keahlian, pengalaman, pendidikan, prestasi | `js/data.js` |
| Daftar proyek dan sertifikat | `js/data.js` |
| Email, WhatsApp, Instagram, lokasi | `js/data.js` bagian `kontak` |
| Foto profil | Timpa `img/profil.jpg`, atau ubah `foto` di `data.js` |
| Foto sertifikat | Taruh di `img/sertifikat/`, samakan nama file di `data.js` |
| Foto proyek | Taruh di `img/proyek/`, samakan nama file di `data.js` |
| Warna, jarak, ukuran sudut | Variabel `:root` di bagian atas `css/style.css` |

Catatan:
- Nomor WhatsApp memakai format `62...` tanpa angka 0 di depan.
- Kosongkan `github`, `linkedin`, atau `link` proyek jika tidak ada. Tautannya otomatis tidak ditampilkan.
- Tambahkan `tingkat: 80` pada sebuah keahlian jika ingin menampilkan bar persentase.
- Gambar yang belum tersedia tampil sebagai kotak placeholder.

## Fitur

- **Autentikasi sederhana:** daftar, masuk (dengan email atau nama), dan keluar.
- **Penjaga halaman:** halaman portofolio tidak bisa dibuka tanpa login.
- **Validasi form** di login, daftar, dan kontak: kolom kosong, format email, panjang kata sandi, dan kecocokan konfirmasi, lengkap dengan pesan error atau sukses.
- **Hero interaktif:** sapaan, peran yang berganti otomatis, dua tombol aksi, dan kartu foto bergaya glassmorphism.
- **Halaman terhubung** lewat navbar: Beranda, Keahlian, Pengalaman, Proyek, Kontak, dan tombol Keluar.
- **Formulir kontak** yang membuka WhatsApp dengan pesan yang sudah terisi.
- **Responsif:** navbar berubah menjadi menu hamburger di layar kecil.
- **Animasi halus:** smooth scroll, efek hover pada kartu dan tombol, dan menghormati pengaturan "kurangi gerakan" milik perangkat.
- **Mudah diedit:** semua isi berada di satu file `data.js`.

## Kelebihan

- Ringan dan cepat: tanpa framework atau library, hanya tiga file JavaScript.
- Pemula bisa mengubah isi tanpa menyentuh kode HTML.
- Satu sumber data, jadi menambah proyek atau sertifikat cukup dengan satu blok baru di `data.js`.
- Desain konsisten, mudah diganti warnanya lewat variabel CSS.
- Dapat dibuka di komputer maupun ponsel.
- Bisa langsung dijalankan secara offline dan tidak butuh server.
- Gambar yang hilang tidak merusak tata letak karena ada placeholder.

## Kekurangan

- **Login hanya untuk demo.** Akun dan kata sandi disimpan di `localStorage` browser dalam bentuk teks biasa, dan tidak ada server. Siapa pun yang membuka alat pengembang browser bisa melihatnya. Jangan memakai kata sandi yang kamu pakai di tempat lain.
- **Akun hanya ada di satu browser.** Akun yang dibuat di satu perangkat tidak akan dikenali di perangkat lain, dan menghapus data browser menghapus akunnya.
- **Tidak ada pemulihan kata sandi.**
- **Isi dibuat lewat JavaScript.** Mesin pencari dan pratinjau tautan di media sosial mungkin tidak membaca isi halaman dengan baik, sehingga kurang cocok jika tujuannya SEO.
- **Halaman portofolio tidak benar-benar privat.** Penjaga halaman berjalan di sisi browser, jadi bisa dilewati. Jika di-hosting publik, isinya tetap bisa diakses oleh yang paham teknis.
- **Butuh koneksi internet untuk font.** Font Inter dan Sora dimuat dari Google Fonts. Tanpa internet, tampilan memakai font bawaan sistem.
- **Pengubahan isi harus lewat file.** Tidak ada panel admin, jadi setiap perubahan perlu mengedit `data.js` lalu mengunggah ulang.
- **Satu bahasa.** Hanya tersedia dalam Bahasa Indonesia, tanpa pengalih bahasa.
- **Tidak ada mode terang.** Tema hanya navy gelap.
- **Formulir kontak bergantung pada WhatsApp.** Pesan tidak tersimpan di mana pun dan hanya terkirim jika pengunjung menekan kirim di WhatsApp.
- **Belum diuji otomatis.** Pengujian dilakukan manual di browser.

## Saran Pengembangan

- Jika portofolio akan dipublikasikan untuk umum, **hapus sistem login** atau ganti dengan autentikasi sungguhan (misalnya Firebase Auth atau backend sendiri).
- Tambahkan tombol unduh CV (taruh file PDF di folder proyek, lalu tautkan di navbar atau hero).
- Tambahkan galeri sertifikat yang bisa diperbesar saat diklik.
- Tambahkan meta tag (`description`, `og:image`) agar tautan tampil rapi saat dibagikan.
- Hosting gratis: GitHub Pages, Netlify, atau Vercel.

## Teknologi

HTML5, CSS3 (variabel CSS, grid, flexbox, backdrop-filter), JavaScript ES6, `localStorage`, dan Google Fonts (Inter, Sora).
