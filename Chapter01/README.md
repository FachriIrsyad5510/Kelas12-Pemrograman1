# Modul Chapter 1: Cara Kerja Web dan Git Pertama

Modul ini membahas cara kerja web (client-server, HTTP) dan version control menggunakan VS Code, Git, dan GitHub dengan pendekatan berbasis proyek serta diakhiri dengan publikasi halaman statis lewat GitHub Pages.

## 1. Tujuan Pembelajaran

1. Menjelaskan apa yang terjadi saat browser membuka sebuah situs, termasuk memeriksa request dan response lewat DevTools
2. Install VS Code, ekstensi Live Server, dan Git Bash, serta membuat akun GitHub
3. Menghubungkan komputer ke GitHub lewat SSH key
4. Membuat halaman HTML sederhana, lalu melakukan commit dan push
5. Melakukan publish halaman lewat GitHub Pages

## 2. Teori Pendukung

### 2.1 Arsitektur Client-Server

Arsitektur client-server adalah dasar cara kerja aplikasi web. *Client* adalah pihak yang meminta layanan, biasanya web browser. *Server* adalah pihak yang menyediakan layanan, misalnya komputer yang menyimpan halaman web. Ketika pengguna membuka sebuah situs, browser sebagai client mengirim permintaan (*request*) ke server. Server memproses permintaan tersebut. Server mengirim jawaban (*response*) kembali ke client.

Peran keduanya dirangkum pada tabel berikut.

| Pihak  | Contoh                      | Tugas                                     |
| ------ | --------------------------- | ----------------------------------------- |
| Client | Chrome, Firefox, Edge       | Mengirim request dan menampilkan response |
| Server | GitHub Pages, Apache, Nginx | Menyimpan file dan mengirim response      |

Model ini memisahkan dua sisi aplikasi web, yaitu *front-end* dan *back-end*. *Front-end* adalah tampilan antarmuka yang dilihat pengguna. *Back-end* adalah logika bisnis dan penyimpanan data. Sebagai contoh, perhatikan halaman berita yang sering dibuka. Pemisahannya terdapat pada tabel berikut.

| Sisi      | Contoh pada halaman berita                    |
| --------- | --------------------------------------------- |
| Front-end | Judul, gambar, dan tombol baca selengkapnya   |
| Back-end  | Pilihan berita populer dan data login pembaca |

Bayangkan pengunjung membuka halaman berita di pagi hari. Judul besar, foto, dan tombol baca selengkapnya tampil di layar. Itulah sisi front-end, bagian yang dilihat dan disentuh pengguna. Saat tombol baca selengkapnya diklik, browser mengirim request ke server. Server mencari artikel yang diminta. Server menentukan berita populer mana yang layak ditampilkan. Server memeriksa apakah pembaca sudah login. Pekerjaan ini terjadi di balik layar. Pekerjaan inilah sisi back-end. Sisi ini mengolah logika dan data di server. Setelah itu server menjawab dengan response berisi artikel. Browser menampilkan artikel itu di layar.

### 2.2 Protokol HTTP

HTTP (Hypertext Transfer Protocol) adalah protokol komunikasi standar di web yang mengatur pertukaran data antara client dan server dalam bentuk request dan response. Setiap request membawa sebuah *method* yang menunjukkan apa yang diminta client. Method yang umum dipakai dirangkum pada tabel berikut.

| Method   | Fungsi           | Contoh kejadian            |
| -------- | ---------------- | -------------------------- |
| `GET`    | Mengambil data   | Membuka sebuah halaman     |
| `POST`   | Mengirim data    | Mengirim form login        |
| `PUT`    | Memperbarui data | Mengubah data profil       |
| `DELETE` | Menghapus data   | Menghapus sebuah postingan |

HTTP bersifat *stateless*, artinya setiap request berdiri sendiri dan server tidak mengingat interaksi sebelumnya. Situs yang membutuhkan login memakai cookie atau token untuk mengenali pengguna di tiap request. Selain tidak mengingat interaksi, HTTP mengirim data dalam bentuk polos. Pihak ketiga di antara browser dan server dapat membaca data itu. HTTPS menutup celah ini dengan mengenkripsi data menggunakan SSL/TLS. Data yang dikirim diacak sehingga tidak dapat dibaca pihak ketiga. Huruf S di akhir berarti secure atau aman. Situs HTTPS dikenali dari awalan `https://` pada alamatnya.

Setiap request dijawab server dengan sebuah *status code* yang menunjukkan hasil pemrosesannya. Beberapa status code yang umum dijumpai terdapat pada tabel berikut.

| Kode | Artinya         | Contoh kejadian                           |
| ---- | --------------- | ----------------------------------------- |
| 200  | Berhasil        | Halaman terbuka normal                    |
| 301  | Pindah permanen | Alamat lama diteruskan ke alamat baru     |
| 403  | Dilarang        | File ada tetapi tidak boleh dibuka publik |
| 404  | Tidak ditemukan | Alamat file salah diketik                 |
| 500  | Error di server | Kode di sisi server bermasalah            |

Browser tahu halaman mana yang diminta dari alamat yang diketik di address bar. Alamat itu disebut URL. Contohnya adalah `https://contoh.com/menu.html`. Alamat itu terdiri atas tiga bagian. Masing-masing menunjuk ke hal yang berbeda. Rinciannya terdapat pada tabel berikut.

| Bagian       | Isi pada contoh | Fungsi                            |
| ------------ | --------------- | --------------------------------- |
| `https`      | Protokol        | Aturan komunikasi yang dipakai    |
| `contoh.com` | Domain          | Nama server yang menyimpan situs  |
| `/menu.html` | Path            | File yang diminta dari server itu |

Request menyatakan operasi yang diminta client dan sumber daya tujuannya. Dua unsur itu adalah method dan path. Response menyatakan hasil pemrosesan server dan isi yang diminta. Dua unsur itu adalah status code dan file. Contoh keduanya untuk halaman contoh di atas terdapat pada tabel berikut.

| Pesan    | Contoh isi                                                         |
| -------- | ------------------------------------------------------------------ |
| Request  | `GET /menu.html` dengan method `GET` dan path `/menu.html`         |
| Response | Status `200` dengan isi file `menu.html` sepanjang sekian kilobyte |

### 2.3 Web Browser dan Web Server

*Web browser* adalah aplikasi yang dipakai pengguna untuk mengakses dan menampilkan konten web, misalnya Google Chrome, Mozilla Firefox, Safari, dan Edge. Browser menerjemahkan tiga bahasa web menjadi tampilan yang dapat dipahami manusia. **HTML** menentukan isi dan struktur halaman, ibarat kerangka dan ruangan rumah. **CSS** menentukan tampilan, ibarat cat dan dekorasi. **JavaScript** menentukan perilaku halaman, ibarat saklar dan listrik.

*Web server* adalah perangkat lunak atau perangkat keras yang menyimpan, memproses, dan menyajikan halaman web kepada pengguna. Contoh perangkat lunaknya adalah Apache, Nginx, dan Microsoft IIS. Server menerima request dari browser lalu memprosesnya. Server mengembalikan halaman web sebagai response.

Server dibedakan menjadi dua jenis. Server yang memproses database dan kode program disebut server dinamis. Server yang hanya mengirim file apa adanya disebut server statis. Perbedaannya dirangkum pada tabel berikut.

| Jenis   | Cara kerja                                 | Contoh                                     |
| ------- | ------------------------------------------ | ------------------------------------------ |
| Statis  | Mengirim file apa adanya                   | GitHub Pages mengirim `index.html`         |
| Dinamis | Menjalankan program lalu mengirim hasilnya | Server kampus yang mengecek password login |

### 2.4 Siklus Request-Response

Siklus request-response adalah alur percakapan singkat antara browser dan server. Diagram berikut merangkum lima langkahnya.

![Diagram siklus request-response](images/siklus-request-response.png)

Kelima langkah itu dibaca sebagai berikut. Langkah pertama adalah pengguna mengetik URL lalu menekan `Enter`. Langkah kedua adalah browser mengirim HTTP request berisi method `GET` dan path file. Langkah ketiga adalah server mencari file lalu menyiapkan HTTP response. Langkah keempat adalah server mengirim response berisi file dan status code. Langkah kelima adalah browser membaca file lalu menampilkan halaman.

Siklus ini terjadi setiap kali pengguna membuka atau berinteraksi dengan situs web, termasuk saat mengklik tautan, mengirim formulir, atau memuat ulang halaman. Satu halaman biasanya membutuhkan banyak siklus. Satu siklus mengambil file HTML. Siklus berikutnya mengambil tiap gambar, file CSS, dan file JavaScript yang dipakai halaman itu. Halaman berita dengan sepuluh gambar membutuhkan sebelas siklus atau lebih. Halaman buatan pada praktikum ini hanya membutuhkan satu atau dua siklus karena belum memakai gambar dan file tambahan.

### 2.5 Tools Dasar Pengembangan Web

Beberapa alat penting untuk pengembangan web antara lain:

1. **VS Code (Visual Studio Code)**: Editor kode sumber ringan namun kuat yang mendukung berbagai bahasa pemrograman seperti HTML, CSS, JavaScript, PHP, dan lainnya. Memiliki banyak ekstensi untuk mempercepat pengembangan.

2. **Chrome Developer Tools**: Fitur bawaan di browser Google Chrome yang memungkinkan pengembang memeriksa elemen HTML/CSS, memantau permintaan jaringan (***network***), melakukan ***debug JavaScript***, dan menganalisis performa halaman web.

3. **Git**: Sistem version control yang mencatat riwayat perubahan file dan memungkinkan beberapa orang bekerja bersama tanpa saling menimpa. Dijalankan lewat Git Bash di Windows untuk commit dan push ke GitHub.

### 2.6 Version Control

*Version control* adalah sistem yang mencatat riwayat perubahan file. Dengannya, perubahan dapat dilihat kapan dan apa saja, versi sebelumnya dapat dipulihkan, dan beberapa orang dapat bekerja bersama tanpa saling menimpa. Git adalah version control yang paling banyak dipakai. Ada empat istilah Git yang sering dipakai. Keempatnya muncul di setiap langkah commit dan push. Artinya terdapat pada tabel berikut.

| Istilah    | Fungsi                                                         |
| ---------- | -------------------------------------------------------------- |
| Repository | Folder proyek yang dilacak Git                                 |
| Commit     | Catatan perubahan yang diberi pesan singkat, ibarat save point |
| Remote     | Alamat repo di GitHub yang terhubung ke repo lokal             |
| Push       | Pengiriman commit dari komputer ke GitHub                      |

GitHub adalah layanan online untuk menyimpan repo. GitHub juga memiliki GitHub Pages, yaitu fitur untuk publish halaman web statis secara gratis. Alur kerja Git yang sering terjadi terdiri atas lima langkah yang selalu berurutan. Kelimanya dirangkum pada daftar berikut.

1. `git init` menjadikan folder sebagai repo.
2. `git add` menandai file yang akan dicatat.
3. `git commit` mencatat perubahan dengan pesan.
4. `git remote add` menghubungkan repo lokal ke GitHub.
5. `git push` mengirim commit ke GitHub.

Agar GitHub mengenali pemilik push, komputer memerlukan bukti identitas berupa *SSH key*. SSH key terdiri atas sepasang kunci, yaitu kunci privat dan kunci publik. Kunci publik ibarat gembok yang dibagi ke GitHub. Kunci privat ibarat anak kunci yang disimpan di komputer. GitHub mencocokkan keduanya setiap ada push sehingga password tidak perlu diketik ulang.

## 3. Praktikum

### 3.1 Persiapan Perangkat

#### 3.1.1 Install VS Code dan Live Server

1. Install VS Code dari [code.visualstudio.com](https://code.visualstudio.com) mengikuti instruksi instalasi di sana.

![Halaman download VS Code](images/vscode-download.png)

2. Buka VS Code dan cari `Live Server` melalui panel Extensions.

![Panel Extensions](images/panel-extensions.png)

3. Klik Install pada ekstensi `Live Server`.

![Ekstensi Live Server](images/live-server.png)

#### 3.1.2 Install dan Konfigurasi Git

1. Install Git dari [git-scm.com/downloads](https://git-scm.com/downloads) mengikuti instruksi instalasi di sana. Git Bash ikut terinstal bersama Git.

![Halaman download Git](images/git-download.png)

2. Buka Git Bash dari menu Start.
3. Ketik `git --version`. Tekan `Enter`. Nomor versi Git harus muncul.
4. Jalankan dua perintah berikut dengan nSekarang alamatnya diawali `https://`, bukan alamat lokal `http://127.0.0.1:5500` dari Live Server. Halaman ini dilayani oleh server GitHub sehingga dapat dibuka dari perangkat mana pun. Buka tab Network di DevTools. Refresh halaman. Request `index.html` kini dijawab server GitHub dengan status 200.ama dan email akun GitHub masing-masing.

```bash
git config --global user.name "Nama Mahasiswa"
git config --global user.email "email-github@contoh.com"
```

5. Periksa hasilnya dengan `git config --global --list`. Nama dan email ini tercatat di setiap commit.

#### 3.1.3 Setup GitHub dan SSH key

1. Buka [github.com](https://github.com) dan pilih Sign up.

![Halaman utama GitHub](images/github-signup.png)

2. Isi email, password, dan username. Username muncul di URL halaman web nanti. Pilih username yang pantas dipakai untuk keperluan profesional.
3. Verifikasi email lewat pesan yang dikirim GitHub.
4. Di Git Bash, jalankan perintah berikut dengan email akun GitHub.

```bash
ssh-keygen -t ed25519 -C "email-github@contoh.com"
```

5. Saat ditanya lokasi file, tekan `Enter` untuk memakai lokasi bawaan.
6. Saat diminta passphrase, tekan `Enter` dua kali untuk mengosongkannya. Pengaturan ini memadai untuk keperluan latihan.
7. Dua file terbentuk di folder `.ssh`, yaitu `id_ed25519` (kunci privat) dan `id_ed25519.pub` (kunci publik). File `id_ed25519` tanpa `.pub` adalah kunci privat. File itu tidak boleh dibagikan dan tidak boleh di-commit.
8. Tampilkan kunci publik dengan perintah berikut.

```bash
cat ~/.ssh/id_ed25519.pub
```

9. Copy seluruh baris yang muncul. Barisnya diawali `ssh-ed25519`.
10. Login ke GitHub. Klik foto profil di kanan atas. Pilih Settings.
11. Di menu kiri pilih SSH and GPG keys. Klik New SSH key.
12. Isi Title, misalnya `Laptop kuliah`. Paste kunci publik di kolom Key. Klik Add SSH key.

![Formulir Add new SSH key](images/ssh-key-github.png)

Tampilan menu GitHub dapat sedikit berbeda dari urutan di atas.
13. Tes koneksi dengan perintah berikut.

```bash
ssh -T git@github.com
```

14. Jika muncul pertanyaan mengenai fingerprint, ketik `yes`. Jika berhasil, akan muncul "You've successfully authenticated, but GitHub does not provide shell access.".

### 3.2 Membuat Halaman Pertama

Di bagian ini halaman HTML pertama ditulis. Halaman dibuka di browser memakai Live Server. Request-nya diperiksa di tab Network pada DevTools.

#### 3.2.1 Buat dan buka halaman

1. Buat folder bernama `halaman-client-server` di tempat yang mudah ditemukan, misalnya `Documents`. Hindari spasi pada nama folder.
2. Buka VS Code. Pilih File lalu Open Folder. Pilih folder tadi.
3. Di panel Explorer, klik ikon New File dan beri nama `index.html`.
4. Ketik kode berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alur Client-Server</title>
</head>
<body>
  <h1>Alur Client-Server</h1>
  <p>Dibuat oleh: Nama Mahasiswa</p>

  <h2>Alur Kerja Client-Server</h2>
  <ol>
    <li>Pengguna mengetik alamat situs di browser.</li>
    <li>Browser mencari server yang menyimpan situs itu.</li>
    <li>Browser mengirim request untuk meminta halaman.</li>
    <li>Server mengirim response berisi file HTML.</li>
    <li>Browser membaca HTML itu dan menampilkan halamannya.</li>
  </ol>
</body>
</html>
```

5. Klik kanan pada file `index.html` dan pilih Open with Live Server.

![Menu Open with Live Server](images/open-live-server.png)

6. Browser terbuka otomatis dengan alamat `http://127.0.0.1:5500/index.html`. Nomor port dapat berbeda pada komputer lain.

![Halaman yang terbuka di browser](images/halaman-browser.png)

Alamat tersebut menandakan halaman dilayani oleh server lokal yang dijalankan Live Server di komputer sendiri. Pada saat ini, client dan server berada di komputer yang sama. Halaman belum dapat diakses orang lain. Halaman baru dapat diakses publik setelah di-publish pada bagian Publikasi ke GitHub Pages.

#### 3.2.2 Periksa request di DevTools

1. Pada halaman yang sedang terbuka, tekan `F12` atau klik kanan lalu pilih Inspect untuk membuka DevTools.

![Menu Inspect di browser](images/devtools-inspect.png)

2. Buka tab Network. Refresh halaman dengan `F5`. Daftar request yang dikirim browser muncul.

![Tab Network](images/devtools-network.png)

3. Klik baris `index.html` pada daftar tersebut. Perhatikan method `GET` dan status `200`.

![Detail Headers](images/devtools-headers.png)

### 3.3 Publikasi ke GitHub Pages

Di bagian ini halaman masuk ke repo GitHub. Halaman di-publish di internet lewat GitHub Pages.

#### 3.3.1 Buat repo di GitHub

1. Buka GitHub, klik tanda `+` di kanan atas, lalu pilih New repository.

![Menu New repository](images/github-new-repository.png)

2. Isi form menjadi seperti ini:

   ![Formulir New repository](images/repo-form.png)

3. Klik Create repository.

4. GitHub kemudian menampilkan halaman petunjuk. Pilih tab SSH agar URL repo diawali `git@github.com:`.

   ![Halaman Quick setup SSH](images/repo-ssh.png)

#### 3.3.2 Jadikan folder proyek sebagai repo Git

1. Buka menu Terminal di VS Code lalu pilih New Terminal.

   ![Menu Terminal di VS Code](images/terminal-menu.png)

2. Pilih Git Bash lewat menu dropdown di panel terminal.

   ![Daftar profil terminal](images/terminal-bash.png)

3. Jalankan perintah berikut.

```bash
git init
git branch -M main
```

`git init` membuat repo Git di folder itu, dan `git branch -M main` menamai cabang utamanya `main`.

#### 3.3.3 Commit pertama

```bash
git status
git add index.html
git commit -m "Tambah halaman alur client-server"
```

`git status` menampilkan file yang berubah. `git add` menandai file yang akan dicatat. `git commit` mencatat perubahan dengan pesan.

#### 3.3.4 Hubungkan ke GitHub dan push

Ganti `USERNAME` dengan username GitHub. Jalankan perintah berikut. URL SSH ini sama dengan yang tampil di halaman Quick setup repo pada gambar di atas.

```bash
git remote add origin git@github.com:USERNAME/halaman-client-server.git
git push -u origin main
```

Refresh halaman repo di GitHub. File `index.html` sekarang muncul di sana.

![Halaman repo berisi index.html](images/repo-pushed.png)


## 4. Referensi

1. [MDN Web Docs](https://developer.mozilla.org): rujukan HTML, CSS, dan JavaScript, termasuk penjelasan cara kerja web
2. [Pro Git](https://git-scm.com/book): buku Git gratis dari situs resmi Git
3. [GitHub Docs: SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh): panduan resmi koneksi ke GitHub lewat SSH
4. [GitHub Docs: Pages](https://docs.github.com/en/pages): panduan resmi GitHub Pages
