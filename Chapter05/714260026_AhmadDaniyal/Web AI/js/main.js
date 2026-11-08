/* Merender navbar, footer, dan isi tiap halaman dari js/data.js */
const MENU = [["index","Beranda"],["keahlian","Keahlian"],["pengalaman","Pengalaman"],["proyek","Proyek"],["kontak","Kontak"]];
const $ = s => document.querySelector(s);
// Jika gambar belum ada, tampilkan kotak placeholder
const gbr = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='data:image/svg+xml,'+encodeURIComponent('<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22400%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23112240%22/><text x=%2250%25%22 y=%2250%25%22 fill=%22%238892b0%22 font-family=%22sans-serif%22 font-size=%2222%22 text-anchor=%22middle%22>Tambahkan foto di sini</text></svg>')">`;
const judul = (t, s) => `<div class="judul"><h1>${t}</h1><p class="muted">${s}</p></div>`;

$("#navbar").innerHTML = `
  <nav class="nav">
    <a class="logo" href="index.html">${DATA.nama.split(" ").map(k => k[0]).join("")}</a>
    <button class="burger" aria-label="Buka menu" onclick="document.body.classList.toggle('menu-buka')">☰</button>
    <ul>${MENU.map(([f, t]) => `<li><a href="${f}.html" class="${f === halaman ? "aktif" : ""}">${t}</a></li>`).join("")}
      <li><button class="btn btn-outline kecil" onclick="keluar()">Keluar</button></li></ul>
  </nav>`;
$("#footer").innerHTML = `<p class="muted center">© ${new Date().getFullYear()} ${DATA.nama}</p>`;

const halamanIsi = {
  index: () => `
    <section class="hero">
      <div class="hero-teks">
        <p class="muted">Halo, selamat datang</p>
        <h1>Halo, saya <span class="cyan">${DATA.nama}</span></h1>
        <h2 id="peran" class="cyan-lembut">${DATA.peran[0]}</h2>
        <p class="deskripsi">${DATA.deskripsi}</p>
        <div class="aksi">
          <a class="btn btn-primary" href="pengalaman.html">Lihat Pengalaman</a>
          <a class="btn btn-outline" href="proyek.html">Jelajahi Proyek</a>
        </div>
      </div>
      <div class="hero-kartu glass">
        <div class="foto">${gbr(DATA.foto, DATA.nama)}</div>
        <p class="kartu-nama">${DATA.nama}</p>
        <p class="muted">${DATA.kampus}</p>
        <div class="chips">${DATA.peran.map(p => `<span class="chip">${p}</span>`).join("")}</div>
      </div>
    </section>`,

  keahlian: () => judul("Keahlian", "Bidang yang saya kuasai.") + `
    <section class="grid">${DATA.keahlian.map(k => `
      <article class="card glass"><div class="ikon">${k.ikon}</div><h3>${k.judul}</h3>
        <ul class="daftar">${k.daftar.map(d => `<li>${d}</li>`).join("")}</ul>
        ${k.tingkat ? `<div class="bar"><span style="width:${k.tingkat}%"></span></div>` : ""}
      </article>`).join("")}</section>`,

  pengalaman: () => judul("Pengalaman", "Perjalanan belajar dan berorganisasi.") + `
    <section class="timeline">${DATA.pengalaman.map(p => `
      <article class="card glass"><span class="chip">${p.tahun}</span><h3>${p.judul}</h3>
        <p class="cyan-lembut">${p.tempat}</p><p class="muted">${p.uraian}</p></article>`).join("")}</section>
    <h2 class="sub">Pendidikan</h2>
    <section class="timeline">${DATA.pendidikan.map(p => `
      <article class="card glass"><span class="chip">${p.tahun}</span><h3>${p.judul}</h3><p class="cyan-lembut">${p.tempat}</p></article>`).join("")}</section>
    <h2 class="sub">Prestasi</h2>
    <section class="timeline">${DATA.prestasi.map(p => `
      <article class="card glass"><h3>🏆 ${p.judul}</h3><p class="cyan-lembut">${p.tempat}</p></article>`).join("")}</section>
    <h2 class="sub">Sertifikat</h2>
    <section class="grid">${DATA.sertifikat.map(s => `
      <article class="card glass tanpa-pad"><div class="gambar">${gbr(s.gambar, s.judul)}</div>
        <div class="isi"><h3>${s.judul}</h3><p class="muted">${[s.penerbit, s.tahun].filter(Boolean).join(", ")}</p></div></article>`).join("")}</section>`,

  proyek: () => judul("Proyek", "Karya yang pernah saya buat.") + `
    <section class="grid">${DATA.proyek.map(p => `
      <${p.link ? `a href="${p.link}" target="_blank" rel="noopener"` : "div"} class="card glass tanpa-pad hover">
        <div class="gambar">${gbr(p.gambar, p.judul)}</div>
        <div class="isi"><h3>${p.judul}</h3><p class="muted">${p.uraian}</p>
        <div class="chips">${p.tag.map(t => `<span class="chip">${t}</span>`).join("")}</div></div></${p.link ? "a" : "div"}>`).join("")}</section>`,

  kontak: () => { const k = DATA.kontak; return judul("Kontak", "Mari berdiskusi atau berkolaborasi.") + `
    <section class="kontak-grid">
      <div class="card glass"><h3>Info kontak</h3>
        <p><a href="mailto:${k.email}">${k.email}</a></p>
        <p><a href="https://wa.me/${k.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></p>
        ${k.instagram ? `<p><a href="${k.instagram}" target="_blank" rel="noopener">Instagram</a></p>` : ""}
        ${k.github ? `<p><a href="${k.github}" target="_blank" rel="noopener">GitHub</a></p>` : ""}
        ${k.linkedin ? `<p><a href="${k.linkedin}" target="_blank" rel="noopener">LinkedIn</a></p>` : ""}
        <p class="muted">${k.lokasi}</p></div>
      <form id="formKontak" class="card glass" novalidate>
        <h3>Kirim pesan lewat WhatsApp</h3>
        <label>Nama<input id="kNama"></label>
        <label>Pesan<textarea id="kPesan" rows="4"></textarea></label>
        <p id="pesan" class="pesan"></p>
        <button class="btn btn-primary" type="submit">Kirim</button>
      </form></section>`; }
};
$("#app").innerHTML = halamanIsi[halaman]();

// Teks peran bergantian di hero
if (halaman === "index") {
  let i = 0; const el = $("#peran");
  setInterval(() => { i = (i + 1) % DATA.peran.length; el.style.opacity = 0;
    setTimeout(() => { el.textContent = DATA.peran[i]; el.style.opacity = 1; }, 300); }, 2800);
}
// Form kontak
$("#formKontak")?.addEventListener("submit", e => {
  e.preventDefault();
  const n = nilai("kNama"), p = nilai("kPesan");
  if (!n || !p) return pesan("Nama dan pesan wajib diisi.");
  pesan("Membuka WhatsApp...", true);
  window.open(`https://wa.me/${DATA.kontak.whatsapp}?text=${encodeURIComponent(`Halo, saya ${n}. ${p}`)}`, "_blank");
});
