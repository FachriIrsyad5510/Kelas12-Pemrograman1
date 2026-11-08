const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

// Format rupiah
const rp = n => 'Rp' + Math.round(n).toLocaleString('id-ID');

// Cegah injeksi HTML dari input pengguna
const esc = s => String(s).replace(/[&<>"']/g, c => '&#' + c.charCodeAt(0) + ';');

// Baca / simpan localStorage
const ld = (k, d) => {
  try {
    return JSON.parse(localStorage.getItem(k)) ?? d;
  } catch {
    return d;
  }
};
const sv = (k, v) => localStorage.setItem(k, JSON.stringify(v));


/* ---------- 2. Data produk ---------- */

// Tiap item: [jumlah, harga, label]
const P = (cur, a) => a.map(([q, p, l]) => ({ q, cur, p, l: l || '' }));

const GAMES = [
  {
    id: 'ml', img: 'img/ml.jpg', bg: '#050505', n: 'Mobile Legends', cat: 'Game', ic: 'fa-khanda',
    c: ['#f97316', '#dc2626'], srv: true,
    items: P('Diamond', [[86, 22000], [172, 44000, 'Terlaris'], [257, 65000], [706, 175000, 'Promo'], [2195, 540000]])
  },
  {
    id: 'ff', img: 'img/ff.jpg', bg: '#ffffff', n: 'Free Fire', cat: 'Game', ic: 'fa-fire',
    c: ['#ea580c', '#b91c1c'],
    items: P('Diamond', [[70, 10000], [140, 20000, 'Terlaris'], [355, 50000], [720, 100000, 'Promo']])
  },
  {
    id: 'pubg', img: 'img/pubg.jpg', bg: '#000000', n: 'PUBG Mobile', cat: 'Game', ic: 'fa-gun',
    c: ['#d97706', '#92400e'],
    items: P('UC', [[60, 15000], [325, 75000, 'Terlaris'], [660, 150000, 'Promo'], [1800, 375000]])
  },
  {
    id: 'gi', img: 'img/gi.jpg', bg: '#ffffff', n: 'Genshin Impact', cat: 'Game', ic: 'fa-wand-sparkles',
    c: ['#f59e0b', '#b45309'],
    items: P('Genesis Crystal', [[60, 16000], [330, 79000, 'Terlaris'], [1090, 249000], [2240, 479000, 'Promo']])
  },
  {
    id: 'val', img: 'img/val.jpg', bg: '#161b26', n: 'Valorant', cat: 'Game', ic: 'fa-bolt',
    c: ['#ef4444', '#991b1b'],
    items: P('VP', [[475, 56000], [1000, 112000, 'Terlaris'], [2050, 225000, 'Promo'], [3650, 395000]])
  },
  {
    id: 'rbx', img: 'img/rbx.jpg', bg: '#000000', n: 'Roblox', cat: 'Game', ic: 'fa-cubes',
    c: ['#ef4444', '#f97316'],
    items: P('Robux', [[80, 15000], [400, 75000, 'Terlaris'], [800, 150000], [1700, 300000, 'Promo']])
  },
  {
    id: 'hok', img: 'img/hok.jpg', bg: '#0b0906', n: 'Honor of Kings', cat: 'Game', ic: 'fa-crown',
    c: ['#eab308', '#a16207'],
    items: P('Token', [[16, 15000], [80, 70000, 'Terlaris'], [240, 205000], [400, 340000, 'Promo']])
  },
  {
    id: 'cod', img: 'img/cod.jpg', bg: '#1c0a0a', n: 'Call of Duty Mobile', cat: 'Game', ic: 'fa-skull',
    c: ['#22c55e', '#166534'],
    items: P('CP', [[80, 15000], [420, 75000, 'Terlaris'], [880, 150000, 'Promo'], [2400, 400000]])
  },
  {
    id: 'gp', img: 'img/gp.jpg', bg: '#a32f27', n: 'Voucher Google Play', cat: 'Voucher', ic: 'fa-ticket',
    c: ['#16a34a', '#65a30d'],
    items: P('Voucher', [[20000, 22000], [50000, 53000, 'Terlaris'], [100000, 104000], [300000, 308000, 'Promo']])
  },
  {
    id: 'tsel', img: 'img/tsel.jpg', bg: '#d6111e', n: 'Pulsa Telkomsel', cat: 'Pulsa', ic: 'fa-mobile-screen',
    c: ['#e11d48', '#be123c'], idl: 'Nomor HP',
    items: P('Pulsa', [[10000, 12000], [25000, 27000, 'Terlaris'], [50000, 52000], [100000, 101500, 'Promo']])
  },
  {
    id: 'steam', img: 'img/steam.jpg', bg: '#0e1733', n: 'Steam Wallet', cat: 'Gift Card', ic: 'fa-gift',
    c: ['#52525b', '#18181b'], idl: 'Email Akun',
    items: P('Gift Card', [[45000, 50000], [90000, 98000, 'Terlaris'], [120000, 130000], [250000, 265000, 'Promo']])
  },
  {
    id: 'itn', img: 'img/itn.jpg', bg: '#ffffff', n: 'Apple Gift Card', cat: 'Gift Card', ic: 'fa-apple-whole',
    c: ['#71717a', '#3f3f46'], idl: 'Email Akun',
    items: P('Gift Card', [[100000, 110000], [250000, 270000, 'Terlaris'], [500000, 530000]])
  },
];

// Metode pembayaran: [nama, ikon]
const PAY = [
  ['QRIS', 'fa-qrcode'],
  ['DANA', 'fa-wallet'],
  ['OVO', 'fa-wallet'],
  ['GoPay', 'fa-wallet'],
  ['ShopeePay', 'fa-bag-shopping'],
  ['Transfer Bank', 'fa-building-columns'],
];

// Kode promo: p = persen, f = potongan tetap
const PROMO = {
  DYL10: { p: 10 },
  FLASH10: { p: 10 },
  HEMAT5K: { f: 5000 },
};

// Level member: [nama, minimal belanja, diskon %]
const LV = [
  ['Gold', 1000000, 5],
  ['Silver', 200000, 3],
  ['Bronze', 0, 0],
];

// Slide hero: [judul, deskripsi, id game, warna gradien, gambar latar, mode 'banner' = gambar penuh tanpa teks (opsional)]
const SLIDES = [
  ['Top up Diamond Mobile Legends', 'Masuk ke akun dalam hitungan detik.', 'ml', ['#f97316', '#dc2626'], 'img/hero-ml.jpg'],
  ['Flash Sale tiap 6 jam', 'Pakai kode FLASH10 untuk diskon 10%.', 'ff', ['#dc2626', '#9a3412'], 'img/hero-flash.jpg', 'banner'],
  ['Naik level, diskon makin besar', 'Member Gold dapat diskon 5% di setiap transaksi.', 'gi', ['#d97706', '#b45309'], 'img/hero-level.jpg'],
];

const TESTI = [
  ['Raka', 'Top up ML cuma 10 detik, diamond langsung masuk.'],
  ['Sinta', 'Harga paling murah dibanding toko lain, CS ramah.'],
  ['Bagas', 'Sudah langganan setahun, belum pernah ada masalah.'],
];

const FAQ = [
  ['Berapa lama proses top up?', 'Rata-rata kurang dari 1 menit setelah pembayaran berhasil.'],
  ['Salah memasukkan User ID?', 'Segera hubungi CS lewat WhatsApp dengan nomor invoice Anda.'],
  ['Bagaimana cara naik level member?', 'Level naik otomatis dari total belanja: Silver mulai Rp200.000, Gold mulai Rp1.000.000.'],
  ['Apakah poin bisa hangus?', 'Tidak. Poin member berlaku selama akun aktif.'],
];


/* ---------- 3. State & kalkulasi ---------- */

// Data utama (disimpan di localStorage)
let cart  = ld('dyl_cart', []);
let users = ld('dyl_users', []);
let me    = ld('dyl_me', null);   // email member yang sedang login
let trx   = ld('dyl_trx', []);

// State tampilan
let cat = 'Semua';
let q = '';
let sel = { g: null, i: null, pay: 'QRIS', promo: null };  // pilihan di halaman detail
let cartPromo = null;
let cartPay = 'QRIS';

const user = () => users.find(u => u.email === me);

// Total belanja member (hanya transaksi berhasil)
const spent = u => trx
  .filter(t => t.owner === u.email && t.st === 'Berhasil')
  .reduce((a, t) => a + t.sub, 0);

const level = u => LV.find(l => spent(u) >= l[1]);

// Ambil data game & nominal dari item keranjang
const line = c => {
  const g = GAMES.find(x => x.id === c.gid);
  return { g, it: g.items[c.i] };
};

// Logo game: pakai gambar bila ada, jika tidak pakai ikon + gradien
const thumbBg = g => g.img ? `background:${g.bg}` : `background:linear-gradient(135deg,${g.c[0]},${g.c[1]})`;
const thumbInner = g => g.img
  ? `<img src="${g.img}" alt="Logo ${g.n}" loading="lazy">`
  : `<i class="fa-solid ${g.ic}"></i>`;

const saveCart = () => {
  sv('dyl_cart', cart);
  $('#badge').textContent = cart.reduce((a, c) => a + c.qty, 0);
};

// Hitung total: promo dulu, lalu diskon level member
function calc(sub, code) {
  const pr = PROMO[code];
  const pd = pr ? (pr.p ? sub * pr.p / 100 : Math.min(pr.f, sub)) : 0;
  const u = user();
  const md = u ? (sub - pd) * level(u)[2] / 100 : 0;
  return { sub, pd, md, tot: sub - pd - md };
}

// Toast notifikasi
function toast(m, t = '') {
  const e = document.createElement('div');
  e.className = 'toast ' + t;
  e.textContent = m;
  $('#toasts').append(e);
  setTimeout(() => e.remove(), 3000);
}


/* ---------- 4. Router & navbar ---------- */
function go(v, a) {
  $$('.view').forEach(x => x.hidden = x.id !== 'v-' + v);
  $('#menu').classList.remove('open');
  scrollTo(0, 0);

  const render = { home: rGrid, detail: rDetail, cart: rCart, pay: rPay, track: rTrack, dash: rDash };
  render[v](a);
}

function jump(id) {
  go('home');
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function rNav() {
  const u = user();
  $('#auth').innerHTML = u
    ? `<i class="fa-solid fa-user"></i><span class="lbl">${esc(u.name.split(' ')[0])}</span>`
    : `<i class="fa-solid fa-right-to-bracket"></i><span class="lbl">Login/Daftar</span>`;
  $('#auth').onclick = () => u ? go('dash') : openAuth();
  saveCart();
}


/* ---------- 5. Beranda ---------- */

// Filter kategori + pencarian live
function rGrid() {
  const kategori = ['Semua', 'Game', 'Voucher', 'Pulsa', 'Gift Card'];

  $('#chips').innerHTML = kategori
    .map(c => `<button class="chip ${c === cat ? 'on' : ''}" onclick="cat='${c}';rGrid()">${c}</button>`)
    .join('');

  const list = GAMES.filter(x =>
    (cat === 'Semua' || x.cat === cat) && x.n.toLowerCase().includes(q)
  );

  $('#grid').innerHTML = list.length
    ? list.map(x => `
        <article class="card game" tabindex="0"
          onclick="go('detail','${x.id}')"
          onkeydown="if(event.key==='Enter')go('detail','${x.id}')">
          <div class="thumb" style="${thumbBg(x)}">${thumbInner(x)}</div>
          <h3>${x.n}</h3>
          <p>${x.cat} · mulai ${rp(x.items[0].p)}</p>
        </article>`).join('')
    : '<p class="empty">Produk tidak ditemukan. Coba kata kunci lain.</p>';
}

// Latar slide: gambar (dengan lapisan gelap agar teks terbaca) atau gradien
const slideBg = s => s[5] === 'banner'
  ? `background:#0a0612 url('${s[4]}') center/contain no-repeat`
  : s[4]
  ? `background:linear-gradient(90deg,rgba(0,0,0,.8),rgba(0,0,0,.25) 65%,rgba(0,0,0,.1)),url('${s[4]}') center/cover no-repeat`
  : `background:linear-gradient(120deg,${s[3][0]},${s[3][1]})`;

// Slider hero otomatis
function initHero() {
  const slides = SLIDES.map((s, i) =>
    s[5] === 'banner'
      // Banner penuh: teks sudah ada di gambar, klik menuju bagian Flash Sale
      ? `<div class="slide banner ${i ? '' : 'on'}" style="${slideBg(s)}" role="link" tabindex="0"
           onclick="jump('flash')" onkeydown="if(event.key==='Enter')jump('flash')">
           <h1 class="sr">${s[0]}</h1>
         </div>`
      : `<div class="slide ${i ? '' : 'on'}" style="${slideBg(s)}">
           <h1>${s[0]}</h1>
           <p>${s[1]}</p>
           <button class="btn" onclick="go('detail','${s[2]}')">Top up sekarang</button>
         </div>`).join('');

  const dots = SLIDES
    .map((_, i) => `<button aria-label="Slide ${i + 1}" class="${i ? '' : 'on'}"></button>`)
    .join('');

  $('#hero').innerHTML = `${slides}<div class="dots">${dots}</div>`;

  let n = 0;
  const show = i => {
    n = i;
    $$('.slide').forEach((s, k) => s.classList.toggle('on', k === n));
    $$('.dots button').forEach((s, k) => s.classList.toggle('on', k === n));
  };

  $$('.dots button').forEach((b, i) => b.onclick = () => show(i));
  setInterval(() => show((n + 1) % SLIDES.length), 4500);
}

// Countdown flash sale (reset tiap 6 jam)
function tick() {
  const d = new Date();
  const end = new Date(d);
  end.setHours(d.getHours() + 6 - d.getHours() % 6, 0, 0, 0);

  const s = Math.floor((end - d) / 1000);
  const p = n => String(n).padStart(2, '0');

  $('#cd').textContent =
    `${p(Math.floor(s / 3600))}:${p(Math.floor(s % 3600 / 60))}:${p(s % 60)}`;
}


/* ---------- 6. Detail top up ---------- */
function rDetail(id) {
  if (id) sel = { g: id, i: null, pay: 'QRIS', promo: null };
  const g = GAMES.find(x => x.id === sel.g);

  const nominal = g.items.map((it, k) => `
    <button class="item" onclick="sel.i=${k};sum()">
      ${it.l ? `<span class="tag ${it.l}">${it.l}</span>` : ''}
      <b>${it.q.toLocaleString('id-ID')} ${it.cur}</b>
      <small>${rp(it.p)}</small>
    </button>`).join('');

  const metode = PAY.map(p => `
    <button class="pay" data-p="${p[0]}" onclick="sel.pay='${p[0]}';sum()">
      <i class="fa-solid ${p[1]}"></i> ${p[0]}
    </button>`).join('');

  $('#v-detail').innerHTML = `
    <button class="back" onclick="go('home')"><i class="fa-solid fa-arrow-left"></i> Kembali</button>
    <div class="det">
      <div>
        <div class="card hd" style="background:linear-gradient(135deg,${g.c[0]},${g.c[1]})">
          <span class="hlogo" style="${thumbBg(g)}">${thumbInner(g)}</span><h2>${g.n}</h2>
        </div>

        <div class="card">
          <h3>1. Data akun</h3>
          <div class="row">
            <input id="uid" placeholder="${g.idl || 'User ID'}" inputmode="${g.idl ? 'text' : 'numeric'}">
            ${g.srv ? '<input id="sid" placeholder="Server ID" inputmode="numeric">' : ''}
          </div>
        </div>

        <div class="card"><h3>2. Pilih nominal</h3><div class="items">${nominal}</div></div>
        <div class="card"><h3>3. Metode pembayaran</h3><div class="pays">${metode}</div></div>
      </div>

      <aside class="card">
        <h3>Ringkasan pesanan</h3>
        <div class="row">
          <input id="pc" placeholder="Kode promo (DYL10)">
          <button class="btn sm" onclick="usePromo('pc',c=>sel.promo=c,sum)">Pakai</button>
        </div>
        <div class="sum" id="sum"></div>
        <button class="btn full" onclick="buy(true)">Beli Sekarang</button>
        <button class="btn ghost full" onclick="buy(false)"><i class="fa-solid fa-cart-plus"></i> Tambah ke Keranjang</button>
      </aside>
    </div>`;

  sum();
}

// Validasi & pasang kode promo
function usePromo(inp, set, after) {
  const c = $('#' + inp).value.trim().toUpperCase();
  if (PROMO[c]) {
    set(c);
    toast('Kode ' + c + ' dipakai');
  } else {
    set(null);
    toast('Kode promo tidak valid', 'bad');
  }
  after();
}

// Perbarui ringkasan pesanan & tanda pilihan
function sum() {
  const g = GAMES.find(x => x.id === sel.g);
  const it = g.items[sel.i];

  $$('.item').forEach((b, k) => b.classList.toggle('on', k === sel.i));
  $$('.pay').forEach(b => b.classList.toggle('on', b.dataset.p === sel.pay));

  if (!it) {
    $('#sum').innerHTML = '<p class="empty">Pilih nominal dulu.</p>';
    return;
  }

  const c = calc(it.p, sel.promo);
  $('#sum').innerHTML = `
    <div><span>${it.q.toLocaleString('id-ID')} ${it.cur}</span><b>${rp(c.sub)}</b></div>
    ${c.pd ? `<div><span>Promo ${sel.promo}</span><b>-${rp(c.pd)}</b></div>` : ''}
    ${c.md ? `<div><span>Diskon member</span><b>-${rp(c.md)}</b></div>` : ''}
    <div class="tot"><span>Total</span><b>${rp(c.tot)}</b></div>
    <div><span>Bayar via</span><b>${sel.pay}</b></div>`;
}

// Validasi form lalu beli langsung atau masuk keranjang
function buy(now) {
  const g = GAMES.find(x => x.id === sel.g);
  const uid = $('#uid').value.trim();
  const sid = $('#sid')?.value.trim() || '';

  if (uid.length < 5) return toast('Isi ' + (g.idl || 'User ID') + ' dengan benar (min. 5 karakter)', 'bad');
  if (g.srv && sid.length < 3) return toast('Isi Server ID dengan benar', 'bad');
  if (sel.i === null) return toast('Pilih nominal terlebih dahulu', 'bad');

  const l = { gid: g.id, i: sel.i, qty: 1, uid, sid };

  if (now) return go('pay', makeTrx([l], sel.pay, sel.promo).inv);

  // Gabungkan jika item yang sama sudah ada di keranjang
  const ex = cart.find(c => c.gid === l.gid && c.i === l.i && c.uid === uid && c.sid === sid);
  ex ? ex.qty++ : cart.push(l);
  saveCart();
  toast('Ditambahkan ke keranjang');
}


/* ---------- 7. Keranjang ---------- */
function rCart() {
  const el = $('#v-cart');

  if (!cart.length) {
    el.innerHTML = `
      <h2>Keranjang</h2>
      <p class="empty">Keranjang masih kosong.</p>
      <button class="btn" onclick="go('home')">Mulai belanja</button>`;
    return;
  }

  const c = calc(cart.reduce((a, x) => a + line(x).it.p * x.qty, 0), cartPromo);

  const items = cart.map((x, k) => {
    const { g, it } = line(x);
    return `
      <div class="card crt">
        <div>
          <b>${g.n}</b>
          <small>${it.q.toLocaleString('id-ID')} ${it.cur} · ${esc(x.uid)}${x.sid ? ' (' + esc(x.sid) + ')' : ''}</small>
          <b>${rp(it.p * x.qty)}</b>
        </div>
        <div class="qty">
          <button onclick="qty(${k},-1)" aria-label="Kurangi">−</button>
          <span>${x.qty}</span>
          <button onclick="qty(${k},1)" aria-label="Tambah">+</button>
          <button onclick="cart.splice(${k},1);saveCart();rCart()" aria-label="Hapus"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>`;
  }).join('');

  const metode = PAY.map(p =>
    `<button class="pay ${p[0] === cartPay ? 'on' : ''}" onclick="cartPay='${p[0]}';rCart()">${p[0]}</button>`
  ).join('');

  el.innerHTML = `
    <h2>Keranjang</h2>
    <div class="det">
      <div>${items}</div>

      <aside class="card">
        <h3>Pembayaran</h3>
        <div class="row">
          <input id="cc" placeholder="Kode voucher" value="${cartPromo || ''}">
          <button class="btn sm" onclick="usePromo('cc',c=>cartPromo=c,rCart)">Pakai</button>
        </div>
        <div class="pays">${metode}</div>
        <div class="sum">
          <div><span>Subtotal</span><b>${rp(c.sub)}</b></div>
          ${c.pd ? `<div><span>Voucher</span><b>-${rp(c.pd)}</b></div>` : ''}
          ${c.md ? `<div><span>Diskon member</span><b>-${rp(c.md)}</b></div>` : ''}
          <div class="tot"><span>Total</span><b>${rp(c.tot)}</b></div>
        </div>
        <button class="btn full" onclick="checkout()">Checkout</button>
      </aside>
    </div>`;
}

// Ubah jumlah item (minimal 1)
function qty(k, d) {
  cart[k].qty = Math.max(1, cart[k].qty + d);
  saveCart();
  rCart();
}

function checkout() {
  const t = makeTrx(cart, cartPay, cartPromo);
  cart = [];
  cartPromo = null;
  saveCart();
  go('pay', t.inv);
}


/* ---------- 8. Transaksi & pembayaran (simulasi) ---------- */

// Buat transaksi baru berstatus "Menunggu"
function makeTrx(lines, pay, promo) {
  const ls = lines.map(c => {
    const { g, it } = line(c);
    return { n: g.n, l: `${it.q.toLocaleString('id-ID')} ${it.cur}`, uid: c.uid, sid: c.sid, qty: c.qty, p: it.p };
  });

  const c = calc(ls.reduce((a, l) => a + l.p * l.qty, 0), promo);

  const t = {
    inv: 'DYL' + Date.now().toString().slice(-9),
    owner: me || 'guest',
    lines: ls, pay, promo,
    sub: c.sub, pd: c.pd, md: c.md, tot: c.tot,
    st: 'Menunggu',
    date: new Date().toLocaleString('id-ID'),
  };

  trx.unshift(t);
  sv('dyl_trx', trx);
  return t;
}

// Tampilan invoice (dipakai di halaman pembayaran & cek pesanan)
const invHTML = t => `
  <div class="card inv">
    <div class="l"><h3>${t.inv}</h3><span class="st ${t.st}">${t.st}</span></div>
    <small>${t.date} · ${t.pay}</small>
    ${t.lines.map(l => `
      <div class="l">
        <span>${l.n} · ${l.l} ×${l.qty}<br><small>ID ${esc(l.uid)}${l.sid ? ' (' + esc(l.sid) + ')' : ''}</small></span>
        <b>${rp(l.p * l.qty)}</b>
      </div>`).join('')}
    ${t.pd ? `<div class="l"><span>Promo</span><b>-${rp(t.pd)}</b></div>` : ''}
    ${t.md ? `<div class="l"><span>Diskon member</span><b>-${rp(t.md)}</b></div>` : ''}
    <div class="l tot"><span>Total</span><b>${rp(t.tot)}</b></div>
  </div>`;

function rPay(inv) {
  const t = trx.find(x => x.inv === inv);
  $('#v-pay').innerHTML = `
    <h2>Pembayaran</h2>
    ${invHTML(t)}
    ${t.st === 'Menunggu'
      ? `<button class="btn full" id="pb" onclick="payNow('${inv}')">Simulasi bayar via ${t.pay}</button>`
      : '<p>Pesanan berhasil diproses. Terima kasih!</p>'}
    <button class="btn ghost full" onclick="go('home')">Kembali belanja</button>`;
}

// Simulasi pembayaran: status jadi "Berhasil" setelah 1,5 detik
function payNow(inv) {
  $('#pb').disabled = true;
  $('#pb').textContent = 'Memproses pembayaran...';

  setTimeout(() => {
    const t = trx.find(x => x.inv === inv);
    const u = users.find(x => x.email === t.owner);

    t.st = 'Berhasil';
    if (u) u.pts += Math.floor(t.tot / 1000);  // 1 poin tiap Rp1.000

    sv('dyl_trx', trx);
    sv('dyl_users', users);
    toast('Pembayaran berhasil!');
    rPay(inv);
  }, 1500);
}

// Cek pesanan lewat nomor invoice
function rTrack() {
  $('#v-track').innerHTML = `
    <h2>Cek Pesanan</h2>
    <form class="row" id="tf">
      <input id="ti" placeholder="Nomor invoice, mis. DYL123456789">
      <button class="btn">Cek</button>
    </form>
    <div id="tr"></div>`;

  $('#tf').onsubmit = e => {
    e.preventDefault();
    const t = trx.find(x => x.inv === $('#ti').value.trim().toUpperCase());
    $('#tr').innerHTML = t
      ? invHTML(t)
      : '<p class="empty">Invoice tidak ditemukan. Periksa kembali nomornya.</p>';
  };
}


/* ---------- 9. Dashboard member ---------- */
function rDash() {
  const u = user();
  if (!u) {
    go('home');
    return openAuth();
  }

  const l = level(u);
  const riwayat = trx.filter(t => t.owner === u.email);

  $('#v-dash').innerHTML = `
    <h2>Halo, ${esc(u.name)}</h2>

    <div class="stats">
      <div class="card">
        <small>Saldo</small><b>${rp(u.saldo)}</b>
        <button class="btn sm" onclick="user().saldo+=50000;sv('dyl_users',users);rDash()">+ Isi Rp50.000 (demo)</button>
      </div>
      <div class="card"><small>Poin member</small><b>${u.pts}</b></div>
      <div class="card">
        <small>Level</small><b>${l[0]}</b>
        <small>Diskon ${l[2]}% · belanja ${rp(spent(u))}</small>
      </div>
    </div>

    <div class="card">
      <h3>Profil</h3>
      <p>${esc(u.name)}<br>${esc(u.email)}</p>
      <button class="btn ghost" onclick="me=null;sv('dyl_me',null);rNav();go('home');toast('Anda sudah keluar')">Keluar</button>
    </div>

    <h3>Riwayat transaksi</h3>
    ${riwayat.length
      ? riwayat.map(t => `
          <div class="card hist" onclick="go('pay','${t.inv}')">
            <b>${t.inv}</b><span>${t.date}</span>
            <span class="st ${t.st}">${t.st}</span><b>${rp(t.tot)}</b>
          </div>`).join('')
      : '<p class="empty">Belum ada transaksi.</p>'}`;
}


/* ---------- 10. Login & register ---------- */
function openAuth(m = 'login') {
  const reg = m === 'register';
  $('#modal').hidden = false;

  $('#modal-body').innerHTML = `
    <h2>${reg ? 'Daftar Member' : 'Masuk'}</h2>
    <form id="af" novalidate>
      ${reg ? '<label>Nama<input id="an" autocomplete="name"></label>' : ''}
      <label>Email<input id="ae" type="email" autocomplete="email"></label>
      <label>Password
        <span class="pw">
          <input id="ap" type="password" autocomplete="${reg ? 'new' : 'current'}-password">
          <button type="button" aria-label="Tampilkan password"
            onclick="const i=$('#ap');i.type=i.type==='password'?'text':'password'">
            <i class="fa-solid fa-eye"></i>
          </button>
        </span>
      </label>
      <p class="err" id="er"></p>
      <button class="btn full">${reg ? 'Daftar' : 'Masuk'}</button>
    </form>
    ${reg ? '' : '<p><a href="#" onclick="forgot();return false">Lupa password?</a></p>'}
    <p>${reg ? 'Sudah punya akun?' : 'Belum punya akun?'}
      <a href="#" onclick="openAuth('${reg ? 'login' : 'register'}');return false">${reg ? 'Masuk' : 'Daftar'}</a>
    </p>`;

  $('#af').onsubmit = e => {
    e.preventDefault();

    const n  = $('#an')?.value.trim();
    const em = $('#ae').value.trim().toLowerCase();
    const pw = $('#ap').value;
    const err = msg => $('#er').textContent = msg;

    // Validasi form
    if (reg && n.length < 3) return err('Nama minimal 3 karakter.');
    if (!/^\S+@\S+\.\S+$/.test(em)) return err('Format email belum benar.');
    if (pw.length < 6) return err('Password minimal 6 karakter.');

    // Catatan: password disimpan dengan btoa hanya untuk demo, BUKAN enkripsi aman.
    if (reg) {
      if (users.some(u => u.email === em)) return err('Email sudah terdaftar. Silakan masuk.');
      users.push({ name: n, email: em, pw: btoa(pw), saldo: 0, pts: 0 });
      sv('dyl_users', users);
    } else if (!users.some(u => u.email === em && u.pw === btoa(pw))) {
      return err('Email atau password salah.');
    }

    me = em;
    sv('dyl_me', me);
    $('#modal').hidden = true;
    rNav();
    toast('Selamat datang, ' + user().name);
  };
}

// Lupa password (simulasi)
function forgot() {
  const em = ($('#ae').value || '').trim().toLowerCase();
  users.some(u => u.email === em)
    ? toast('Tautan reset dikirim ke ' + em + ' (simulasi)')
    : toast('Isi email yang terdaftar dulu', 'bad');
}


/* ---------- 11. Inisialisasi ---------- */
function init() {
  // Tema tersimpan (default gelap)
  document.documentElement.dataset.theme = ld('dyl_theme', 'dark');

  $('#theme').onclick = () => {
    const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = t;
    sv('dyl_theme', t);
  };

  $('#burger').onclick = () => $('#menu').classList.toggle('open');

  // Pencarian live
  $('#q').oninput = e => {
    q = e.target.value.toLowerCase().trim();
    if ($('#v-home').hidden) go('home');
    else rGrid();
  };

  // Tutup modal saat klik area gelap
  $('#modal').onclick = e => {
    if (e.target.id === 'modal') $('#modal').hidden = true;
  };

  // Testimoni
  const bintang = '<i class="fa-solid fa-star"></i>'.repeat(5);
  $('#tl').innerHTML = TESTI
    .map(t => `<div class="card">${bintang}<q>${t[1]}</q><b>${t[0]}</b></div>`)
    .join('');

  // FAQ accordion
  $('#fl').innerHTML = FAQ.map(f => `
    <div class="faq">
      <button onclick="this.parentNode.classList.toggle('open')" aria-expanded="false">
        ${f[0]}<i class="fa-solid fa-chevron-down"></i>
      </button>
      <p>${f[1]}</p>
    </div>`).join('');

  initHero();
  tick();
  setInterval(tick, 1000);
  rNav();

  // Skeleton loading sebelum grid tampil
  $('#grid').innerHTML = '<div class="sk"></div>'.repeat(8);
  setTimeout(rGrid, 700);
}

init();