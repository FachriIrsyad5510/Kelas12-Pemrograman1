# Kelas12-Pemrograman1
Ini adalah repository untuk Matkul Pemrograman I kelas 12 (B) 

## Rencana Pembelajaran

Empat belas chapter dibagi tiga tahap: front-end (1 sampai 8), data dan framework (9 sampai 12), lalu deployment dan proyek akhir (13 dan 14). Setiap chapter berisi materi dan latihan.

| Ch  | Topik dan materi                                                                                                                                                                                                                                                                                                               | Studi kasus                                           | Tujuan: mahasiswa mampu                                                                              | Luaran praktikum                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1   | Cara kerja web (client-server, HTTP), instalasi VS Code (dengan ekstensi Live Server) dan Git Bash, akun GitHub, DevTools, Git dasar (init, add, commit, push), SSH key lewat Git Bash, GitHub Pages                                                                                                                           | Halaman sederhana yang menjelaskan alur client-server | Menjelaskan cara kerja web dan mempublikasikan satu halaman lewat Git                                | Repo GitHub berisi halaman penjelasan alur client-server yang live di GitHub Pages                        |
| 2   | Web design dasar  UI dan UX, user flow, wireframe, hierarki visual, color scheme, tipografi,  (frame, auto layout, component, style)                                                                                                                                                                            | Wireframe dan mockup halaman kafe                     | Merancang wireframe dan mockup sederhana serta memilih palet warna dan tipografi                     | File berisi wireframe, mockup mobile dan desktop, serta style warna dan tipografi                   |
| 3   | HTML semantik: heading, list, tabel, tautan, gambar, form                                                                                                                                                                                                                                                                      | Menu dan formulir pemesanan kafe                      | Menyusun halaman sesuai wireframe dengan elemen semantik dan form yang benar                         | Halaman menu kafe dan form pesan (belum berstyle)                                                         |
| 4   | CSS dasar: selector, box model, warna, tipografi, spacing; menerjemahkan style Figma ke CSS                                                                                                                                                                                                                                    | Halaman kafe (lanjutan)                               | Menata tampilan sesuai mockup Figma                                                                  | Halaman kafe berstyle yang mengikuti mockup                                                               |
| 5   | CSS layout: Flexbox, Grid, media query, mobile-first; Git branch dan merge                                                                                                                                                                                                                                                     | Landing page toko UMKM                                | Membuat layout responsif dan memakai branch Git                                                      | Landing page responsif (HP dan laptop), satu branch fitur yang di-merge                                   |
| 6   | Framework CSS, pilih Bootstrap atau Tailwind: komponen atau utility class, grid, dan responsivitas                                                                                                                                                                                                                             | Katalog produk toko UMKM                              | Memakai satu framework CSS untuk membangun halaman                                                   | Satu halaman katalog yang dibuat dengan Bootstrap atau Tailwind sesuai pilihan mahasiswa                  |
| 7   | JavaScript dasar: variabel, tipe data, operator, percabangan, perulangan, fungsi, array, objek                                                                                                                                                                                                                                 | Hitung belanja toko UMKM                              | Menulis program JavaScript dengan percabangan, perulangan, dan fungsi                                | Kumpulan fungsi hitung total, diskon, dan ongkir yang berjalan di browser                                 |
| 8   | JavaScript DOM dan asinkron: DOM, event, validasi form, fetch API, JSON, async/await; deploy situs statis ke Vercel                                                                                                                                                                                                            | Keranjang belanja dan pencari buku dari API publik    | Memanipulasi DOM, menangani event, dan mengambil data dari API                                       | Keranjang belanja interaktif dan halaman pencarian buku live di Vercel                                    |
| 9   | Database dan PHP fundamental: apa itu database dan SQL; DDL (CREATE, ALTER, DROP), DML (INSERT, SELECT, UPDATE, DELETE), DCL (GRANT, REVOKE); relasi tabel sekilas (primary key, foreign key, JOIN dasar) di MySQL lewat Laragon atau XAMPP; PHP dasar (sintaks, variabel, array, fungsi, form GET dan POST, koneksi ke MySQL) | Database perpustakaan (buku, anggota, peminjaman)     | Menjelaskan fungsi DDL, DML, dan DCL, menulis query dasar, dan menampilkan data dari MySQL lewat PHP | File .sql berisi skema dan data contoh, serta satu halaman PHP yang menampilkan daftar buku dari database |
| 10  | CRUD dengan PHP, HTML, dan JavaScript: form tambah dan ubah, validasi, prepared statement, konfirmasi hapus dan pencarian dengan JavaScript                                                                                                                                                                                    | Manajemen data buku                                   | Membangun aplikasi CRUD dengan PHP, HTML, dan JavaScript                                             | CRUD buku lengkap (tambah, lihat, ubah, hapus) berjalan lokal                                             |
| 11  | Laravel fundamental: Composer, struktur proyek, routing, controller, Blade, migration dan Eloquent dasar                                                                                                                                                                                                                       | CRUD buku dipindahkan ke Laravel                      | Menjelaskan alur MVC dan membuat route, controller, dan view yang membaca data lewat Eloquent        | Proyek Laravel yang menampilkan data buku dari database                                                   |
| 12  | Laravel lanjutan: melengkapi CRUD (ubah, hapus), validasi form, relasi antar-tabel, autentikasi (login, register, logout)                                                                                                                                                                                                      | Peminjaman buku oleh anggota                          | Menerapkan validasi, relasi tabel, dan login                                                         | Login dan fitur peminjaman buku yang terkait ke pengguna                                                  |
| 13  | CI/CD dan deployment: environment variable, database production di Supabase (PostgreSQL), GitHub Actions, deploy ke Render                                                                                                                                                                                                     | Aplikasi perpustakaan                                 | Menyiapkan konfigurasi production, membangun pipeline CI/CD, dan men-deploy aplikasi                 | Aplikasi live di Render dengan database Supabase, pipeline jalan tiap push ke main                        |
| 14  | Final project: penyempurnaan aplikasi perpustakaan (fitur tambahan, perbaikan bug), README dan dokumentasi                                                                                                                                                                                                                     | Aplikasi perpustakaan (proyek akhir)                  | Menyelesaikan aplikasi lengkap dari repositori sampai URL publik                                     | Aplikasi final yang live, repo GitHub, dan README                                                         |

## Topik dan Materi dapat berubah menyesuaikan kemampuan mahasiswa

# git scm
Download git-scm dari https://git-scm.com/downloads <br>
Download VsCode <br>
Download Xampp

## Memasukan SSH Key
Klik dulu profil github, Klik Setting, pilih SSH and GPG keys
<img width="1841" height="819" alt="image" src="https://github.com/user-attachments/assets/8756fd13-3421-43e5-b17f-f7346c0bd5d2" />

## Generate RSA Key
Just One time for first instalation of git scm, 
```sh
ssh-keygen -t rsa -b 4096 -C "emailkamu@gmail.com"
```

## Set config global
Just One time for first instalation of git scm, 

```sh
$ git config --global user.name "usernamekamu"
$ git config --global user.email emailkamu@gmail.com
```
## Get SSH Key 
to get ssh key in your computer, and put in your github or gitlab ssh key setting.

```sh
cat ~/.ssh/id_rsa.pub
```
if there is no key appears, plese generate the key also set global config of git in next section and please add the public key to your github profile.

