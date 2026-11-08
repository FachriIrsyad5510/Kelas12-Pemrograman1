/* ===== JAVASCRIPT: bagian OTAK / LOGIKA ===== */

// 1. DATA: semua tugas disimpan dalam satu array (daftar)
//    Satu tugas = satu object: { id, teks, prioritas, selesai }
let tugas = [];
let filterAktif = "semua";

// 2. Ambil elemen HTML supaya bisa dikontrol dari JS
const input   = document.getElementById("inputTugas");
const pilih   = document.getElementById("pilihPrioritas");
const daftar  = document.getElementById("daftar");

// 3. SIMPAN & MUAT data di browser (localStorage)
//    try/catch dipakai supaya aplikasi tidak error kalau penyimpanan diblokir
function simpan() {
  try { localStorage.setItem("tugas-sekolah", JSON.stringify(tugas)); } catch (e) {}
}
function muat() {
  try {
    const data = localStorage.getItem("tugas-sekolah");
    if (data) tugas = JSON.parse(data);
  } catch (e) { tugas = []; }
}

// 4. TAMBAH tugas baru
function tambah() {
  const teks = input.value.trim();          // trim() = buang spasi di pinggir
  if (teks === "") { input.focus(); return; } // jangan terima tugas kosong
  tugas.push({
    id: Date.now(),                         // id unik dari waktu sekarang
    teks: teks,
    prioritas: pilih.value,
    selesai: false
  });
  input.value = "";
  update();
}

// 5. CENTANG & HAPUS (dicari berdasarkan id)
function centang(id) {
  const t = tugas.find(x => x.id === id);
  t.selesai = !t.selesai;                   // true jadi false, false jadi true
  update();
}
function hapus(id) {
  tugas = tugas.filter(x => x.id !== id);   // simpan semua kecuali yang dihapus
  update();
}

// 6. TAMPILKAN daftar ke layar sesuai filter
function tampilkan() {
  daftar.innerHTML = "";                    // kosongkan dulu

  const terlihat = tugas.filter(t =>
    filterAktif === "semua" ||
    (filterAktif === "aktif" && !t.selesai) ||
    (filterAktif === "selesai" && t.selesai)
  );

  if (terlihat.length === 0) {
    daftar.innerHTML = '<li class="kosong">Belum ada tugas di sini.</li>';
    return;
  }

  terlihat.forEach(t => {
    const li = document.createElement("li");
    if (t.selesai) li.classList.add("selesai");

    const cek = document.createElement("input");
    cek.type = "checkbox";
    cek.checked = t.selesai;
    cek.onchange = () => centang(t.id);

    const teks = document.createElement("span");
    teks.className = "teks";
    teks.textContent = t.teks;              // textContent = aman dari kode jahat

    const badge = document.createElement("span");
    badge.className = "badge " + t.prioritas;
    badge.textContent = t.prioritas;

    const x = document.createElement("button");
    x.className = "hapus";
    x.textContent = "×";
    x.setAttribute("aria-label", "Hapus tugas");
    x.onclick = () => hapus(t.id);

    li.append(cek, teks, badge, x);
    daftar.appendChild(li);
  });
}

// 7. PROGRESS: hitung berapa persen yang sudah selesai
function hitungProgress() {
  const total = tugas.length;
  const selesai = tugas.filter(t => t.selesai).length;
  const persen = total === 0 ? 0 : Math.round(selesai / total * 100);
  document.getElementById("teksProgress").textContent = selesai + " dari " + total + " selesai";
  document.getElementById("persen").textContent = persen + "%";
  document.getElementById("isiBar").style.width = persen + "%";
}

// 8. update() = jalankan semua pembaruan sekaligus setiap data berubah
function update() {
  simpan();
  tampilkan();
  hitungProgress();
}

// 9. EVENT: menghubungkan klik/ketikan pengguna dengan fungsi di atas
document.getElementById("tombolTambah").onclick = tambah;
input.addEventListener("keydown", e => { if (e.key === "Enter") tambah(); });

document.getElementById("filter").addEventListener("click", e => {
  if (!e.target.dataset.f) return;
  filterAktif = e.target.dataset.f;
  document.querySelectorAll("#filter button").forEach(b => b.classList.remove("aktif"));
  e.target.classList.add("aktif");
  tampilkan();
});

document.getElementById("hapusSelesai").onclick = () => {
  tugas = tugas.filter(t => !t.selesai);
  update();
};

// 10. Mulai aplikasi: muat data lama, lalu tampilkan
muat();
update();