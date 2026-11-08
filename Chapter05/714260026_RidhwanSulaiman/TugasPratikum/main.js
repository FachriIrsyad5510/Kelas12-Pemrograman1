const EMOJI_DEFAULT = '✨'; // emoji untuk anggota yang tidak punya emoji sendiri

const anggota = [
    { nama: 'MUHAMAD IHSAN AL ARABI', peran: 'Ketua Kelas', motivasi: 'Diawali dengan bismillah Diakhiri dengan alhamdulillah', emoji: '👑', img: 'assets/MUHAMAD IHSAN AL ARABI.jpeg' },
    { nama: 'BRIAN JANUARSA', peran: 'Wakil Ketua', motivasi: 'Berpikir itu sulit, itulah mengapa kebanyakan orang lebih suka menilai', emoji: '⭐', img: 'assets/BRIAN JANUARSA.jpeg' },
    { nama: 'NAJMI AFIFAH J. SIREGAR', peran: 'Sekretaris', motivasi: 'Tulis motivasi singkat di sini.', emoji: '📝', img: 'assets/NAJMI AFIFAH J. SIREGAR.jpeg' },
    { nama: 'HAFSOH ZAHIDAH NAFISAH', peran: 'Bendahara', motivasi: '-', emoji: '💰', img: 'assets/HAFSOH ZAHIDAH NAFISAH.jpeg' },
    { nama: 'JESAR DIAN MUHAMMAD', peran: 'Duta Kampus', motivasi: 'Tulis motivasi singkat di sini.', emoji: '💰', img: 'assets/JESAR DIAN MUHAMMAD.jpeg' },
    { nama: 'Fachri Irsyad Suherman', peran: 'Coach ML', motivasi: 'Makan bisi marati', emoji: '🎮', img: 'assets/Fachri Irsyad Suherman.jpeg' },
    { nama: 'MUKTI ABIMANYU HARDI SUCIPTO', peran: 'Media Informasi', motivasi: 'ganteng itu luka', emoji: '⚡', img: "assets/MUKTI ABIMANYU HARDI SUCIPTO.jpeg" },
    { nama: 'Muhammad Fikry Auladi I', peran: 'Anggota', motivasi: 'homo proponit, sed Deus disponit', img: 'assets/Muhammad Fikry Auladi I.jpeg', emoji: '🔥' },
    { nama: 'INTAN CAHYA PUTRI', peran: 'Anggota', motivasi: 'Fortune favors the bold', emoji: '🌸', img: 'assets/INTAN CAHYA PUTRI.jpeg' },
    { nama: 'DARY DARWISY RAMDHANI', peran: 'Anggota', motivasi: 'Tak perlu banyak warna untuk terlihat nyata. Cukup hitam yang tegas, dan hati yang tahu ke mana harus pulang.', img: 'assets/darydarwisyramdhani.jpeg', emoji: '😎' },
    { nama: 'Ridhwan Sulaiman Suzana', peran: 'Anggota', motivasi: 'Coding boleh error, hidup jangan.', img: 'assets/ridwan.jpeg', emoji: '💻' },
    { nama: 'Nama Anggota 4', peran: 'Keamanan', motivasi: 'Tulis motivasi singkat di sini.', emoji: '🎮' },
    { nama: 'Nama Anggota 5', peran: 'Keamanan', motivasi: 'Tulis motivasi singkat di sini.', emoji: '🚀' },
    { nama: 'MUHAMMAD FADHIL HISYAM', peran: 'Tukang pukul', motivasi: 'Cacing-Cacing Naga-Naga', emoji: '🎧', img: 'assets/MUHAMMAD FADHIL HISYAM.jpeg' },

    { nama: 'Nama Anggota 8', peran: 'Anggota', motivasi: 'Tulis motivasi singkat di sini.', emoji: '🌙' },
    { nama: 'Nama Anggota 9', peran: 'Anggota', motivasi: 'Tulis motivasi singkat di sini.', emoji: '🎯' },
    { nama: 'Nama Anggota 10', peran: 'Anggota', motivasi: 'Tulis motivasi singkat di sini.', emoji: '🧠' },
    { nama: 'Nama Anggota 11', peran: 'Anggota', motivasi: 'Tulis motivasi singkat di sini.', emoji: '🎨' },
    { nama: 'Nama Anggota 12', peran: 'Anggota', motivasi: 'Tulis motivasi singkat di sini.', emoji: '🏆' },
    { nama: 'Nama Anggota 12', peran: 'Anggota', motivasi: 'Tulis motivasi singkat di sini.', emoji: '🏆' },
    { nama: 'Nama Anggota 12', peran: 'Anggota', motivasi: 'Tulis motivasi singkat di sini.', emoji: '🏆' },
];


const barisTengah = 'flex max-w-full flex-wrap items-start justify-center gap-3.5';
const tingkat = [
    { peran: ['Ketua Kelas', 'Wakil Ketua'], wadah: barisTengah, lebar: 'w-[calc(50%-8px)] max-[420px]:w-full min-[760px]:w-[230px]' },
    { peran: ['Sekretaris', 'Bendahara'], wadah: barisTengah, lebar: 'w-[calc(50%-8px)] max-[420px]:w-full min-[760px]:w-[185px]' },
    { peran: ['Duta Kampus'], wadah: barisTengah, lebar: 'w-[calc(50%-8px)] max-[420px]:w-full min-[760px]:w-[200px]' },
    { peran: ['Keamanan', 'Tukang pukul'], wadah: barisTengah, lebar: 'w-[calc(50%-8px)] max-[420px]:w-full min-[760px]:w-[200px]' },
    { peran: ['Coach ML', 'Media Informasi'], wadah: barisTengah, lebar: 'w-[calc(50%-8px)] max-[420px]:w-full min-[760px]:w-[200px]' },
    {
        peran: ['Anggota'],
        wadah: 'grid w-full max-w-[1060px] grid-cols-2 gap-3.5 min-[560px]:grid-cols-3 min-[760px]:grid-cols-4 min-[1100px]:grid-cols-6',
        lebar: 'w-full',
    },
];

const karya = [

];

const kegiatan = [
    {
        tanggal: '1 November 2026',
        nama: 'Konferensi Mahasiswa Teknik Informatika',
        url_image: 'assets/kegiatan1.JPG',
        deskripsi: 'Kegiatan diadakan untuk memperbaiki dan menyempurnakan AD & ART organisasi mahasiswa teknik informatika.',
    },
    {
        tanggal: '20 October 2026 ',
        nama: 'Hari pertama pengambilan sal morris dan memulai kegiatan ospek organisasi mahasiswa teknik informatika',
        url_image: 'assets/morris.png',
        deskripsi: 'Kegitan memberikan informasi dan pengetahuan tentang organisasi mahasiswa teknik informatika kepada mahasiswa baru dan kegiatan apa aja di morris',
    },
];

/* ==========================================================
   LOADING SCREEN
   ========================================================== */
(function initLoading() {
    const screen = document.getElementById('loading-screen');
    if (!screen) return;

    const MIN_TAMPIL = 2200; // minimal tampil (ms)
    const mulai = performance.now();

    const selesai = () => {
        const sisa = Math.max(0, MIN_TAMPIL - (performance.now() - mulai));
        setTimeout(() => {
            screen.classList.add('is-hidden');
            document.body.classList.remove('is-loading');
            const durasiAnim = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 450 : 1100;
            setTimeout(() => screen.remove(), durasiAnim);
        }, sisa);
    };

    const foto = screen.querySelector('img');
    if (foto && !foto.complete) {
        foto.addEventListener('load', selesai, { once: true });
        foto.addEventListener('error', selesai, { once: true });
        setTimeout(selesai, 3000);
    } else {
        selesai();
    }
})();

const esc = (teks) =>
    String(teks).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const inisial = (nama) =>
    nama.split(' ').filter(Boolean).slice(0, 2).map((k) => k[0].toUpperCase()).join('');

const urlAman = (v) => (/^https?:\/\//i.test(String(v || '').trim()) ? String(v).trim() : '');
const urlIg = (v) => {
    const t = String(v || '').trim();
    if (!t) return '';
    if (/^https?:\/\//i.test(t)) return t;
    const user = t.replace(/^@/, '');
    return /^[\w.]+$/.test(user) ? `https://www.instagram.com/${user}/` : '';
};

const urlFoto = (p) => {
    const t = String(p || '').trim();
    if (!t) return '';
    try { return encodeURI(decodeURI(t)); } catch { return t; }
};

const ikonIg = `<svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>`;
const TINY_PLACEHOLDER = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect width="400" height="500" fill="%23161f2d"/%3E%3C/svg%3E';

const efekKartu = 'transition duration-300 hover:-translate-y-1.5 hover:border-accent/70 hover:bg-white/10 hover:shadow-[0_18px_35px_rgba(0,0,0,0.3)]';

const renderLazyImage = ({ src, alt, className }) => {
    const url = urlFoto(src);
    if (!url) return '';
    return `<img class="${className} lazy-image" src="${TINY_PLACEHOLDER}" data-src="${esc(url)}" alt="${esc(alt)}" loading="lazy" decoding="async" fetchpriority="low" />`;
};

const setupLazyImages = () => {
    const targets = document.querySelectorAll('img[data-src]');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
        targets.forEach((img) => {
            const src = img.dataset.src;
            if (src) img.src = src;
            delete img.dataset.src;
        });
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const img = entry.target;
            const src = img.dataset.src;
            if (!src) {
                obs.unobserve(img);
                return;
            }

            const temp = new Image();
            temp.onload = () => {
                img.src = src;
                img.removeAttribute('data-src');
                img.classList.add('is-loaded');
            };
            temp.onerror = () => {
                img.src = src;
                img.removeAttribute('data-src');
            };
            temp.src = src;
            obs.unobserve(img);
        });
    }, { rootMargin: '180px 0px' });

    targets.forEach((img) => observer.observe(img));
};

const kartuAnggota = (a, lebar) => {
    const href = urlIg(a.ig);
    const tag = href ? 'a' : 'article';
    const atribut = href
        ? ` href="${esc(href)}" target="_blank" rel="noopener noreferrer" aria-label="Buka Instagram ${esc(a.nama)}"`
        : '';

    const emoji = a.emoji || EMOJI_DEFAULT;

    return `
    <${tag}${atribut} class="glass group relative block ${lebar} max-w-full rounded-[18px] p-3 text-center ${efekKartu}">
      <!-- Emoji kustom di sudut kanan atas, miring -->
      <span
        class="pointer-events-none absolute -top-2 -right-2 z-10 grid size-9 place-items-center text-[1.5rem]  [transform:rotate(18deg)] transition-transform duration-300 group-hover:[transform:rotate(-8deg)_scale(1.15)]"
        aria-hidden="true">${esc(emoji)}</span>

      <div class="relative mb-3 grid aspect-[4/5] w-full place-items-center overflow-hidden rounded-xl bg-white/10">
        ${(a.foto || a.img)
            ? renderLazyImage({ src: a.foto || a.img, alt: `Foto ${a.nama}`, className: 'absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105' })
            : `<span class="text-3xl font-bold text-accent" aria-hidden="true">${esc(inisial(a.nama))}</span>`}
        ${href ? `<span class="absolute right-2 bottom-2 grid size-8 place-items-center rounded-full bg-black/55 text-white backdrop-blur-sm transition duration-300 group-hover:bg-accent group-hover:text-gray-900">${ikonIg}</span>` : ''}
      </div>
      <h3 class="break-words text-[0.95rem] font-semibold">${esc(a.nama)}</h3>
      <span class="mt-1.5 inline-block rounded-full bg-accent px-3 py-0.5 text-[0.7rem] font-semibold text-gray-900">${esc(a.peran)}</span>
      ${a.motivasi ? `<p class="mt-2.5 text-[0.78rem] leading-relaxed text-muted italic">&ldquo;${esc(a.motivasi)}&rdquo;</p>` : ''}
    </${tag}>`;
};

document.getElementById('member-grid').innerHTML = tingkat
    .map(({ peran, lebar, wadah }) => {
        const orang = anggota.filter((a) => peran.includes(a.peran));
        if (!orang.length) return '';
        return `<div class="${wadah}">${orang
            .map((a) => kartuAnggota(a, lebar))
            .join('')}</div>`;
    })
    .join('');

setupLazyImages();

document.getElementById('karya-list').innerHTML = karya
    .map(
        (p) => `
    <article class="glass rounded-[18px] p-[22px]">
      <h3 class="mb-1.5 text-[1.1rem] font-bold">${esc(p.nama)}</h3>
      <small class="mb-2.5 block font-semibold text-accent">${esc(p.info)}</small>
      <p class="text-[0.9rem] leading-[1.7] text-muted">${esc(p.deskripsi)}</p>
    </article>`
    )
    .join('');

if (!karya.length) {
    document.getElementById('karya-list').innerHTML =
        '<p class="glass col-span-full rounded-[18px] p-6 text-muted">Karya kelas akan segera ditambahkan.</p>';
}

const kartuKegiatan = (k) => {
    const href = urlAman(k.link);
    const tag = href ? 'a' : 'article';
    const atribut = href
        ? ` href="${esc(href)}" target="_blank" rel="noopener noreferrer" aria-label="Buka tautan ${esc(k.nama)}"`
        : '';
    return `
    <${tag}${atribut} class="glass group flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[18px] min-[760px]:w-[calc((100%-1rem)/2)] min-[1100px]:w-[calc((100%-2rem)/3)] ${efekKartu}">
      <div class="relative grid aspect-video w-full place-items-center overflow-hidden bg-white/10">
        ${k.url_image
            ? renderLazyImage({ src: k.url_image, alt: `Dokumentasi ${k.nama}`, className: 'absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105' })
            : '<span class="text-sm text-white/50">Foto belum ditambahkan</span>'}
        ${href ? `<span class="absolute right-2 bottom-2 grid size-8 place-items-center rounded-full bg-black/55 text-white backdrop-blur-sm transition duration-300 group-hover:bg-accent group-hover:text-gray-900">${ikonIg}</span>` : ''}
      </div>
      <div class="p-5">
        <time class="text-[0.8rem] font-semibold text-accent">${esc(k.tanggal)}</time>
        <h3 class="mt-0.5 mb-1.5 text-[1.05rem] font-bold">${esc(k.nama)}</h3>
        <p class="text-[0.9rem] leading-[1.7] text-muted">${esc(k.deskripsi)}</p>
      </div>
    </${tag}>`;
};

const eventList = document.getElementById('event-list');
eventList.innerHTML = kegiatan.map(kartuKegiatan).join('');
setupLazyImages();

/* ==========================================================
   CAROUSEL EVENTS
   ========================================================== */

const btnPrev = document.getElementById('event-prev');
const btnNext = document.getElementById('event-next');
const eventCount = document.getElementById('event-count');
const eventControls = document.getElementById('event-controls');
const GAP = 16; // sama dengan gap-4 pada #event-list

const langkah = () => {
    const slide = eventList.firstElementChild;
    return slide ? slide.offsetWidth + GAP : 0;
};

const perbaruiCarousel = () => {
    const maks = eventList.scrollWidth - eventList.clientWidth;
    eventControls.classList.toggle('hidden', maks <= 2);
    const idx = Math.round(eventList.scrollLeft / (langkah() || 1)) + 1;
    btnPrev.disabled = eventList.scrollLeft <= 2;
    btnNext.disabled = eventList.scrollLeft >= maks - 2;
    eventCount.textContent = `${Math.min(idx, kegiatan.length)} / ${kegiatan.length}`;
};

const geser = (arah) => {
    const kurangGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    eventList.scrollBy({ left: arah * langkah(), behavior: kurangGerak ? 'auto' : 'smooth' });
};

btnPrev.addEventListener('click', () => geser(-1));
btnNext.addEventListener('click', () => geser(1));
eventList.addEventListener('scroll', perbaruiCarousel, { passive: true });
eventList.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); geser(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); geser(-1); }
});
window.addEventListener('resize', perbaruiCarousel);
perbaruiCarousel();

const links = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('main section[id]');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((link) => {
                const aktif = link.getAttribute('href') === `#${entry.target.id}`;
                if (aktif) link.setAttribute('aria-current', 'page');
                else link.removeAttribute('aria-current');
            });
        });
    },
    { rootMargin: '-45% 0px -50% 0px' }
);

sections.forEach((section) => observer.observe(section));