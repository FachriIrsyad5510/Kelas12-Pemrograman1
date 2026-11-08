// ==========================================================================
// Data Menu Kuliner & Cafe (Edisi Cute Pink Patisserie & Cafe 🌸🍓)
// ==========================================================================
const menuData = [
    {
        id: 1,
        name: "Es Kopi Susu Pink Ciyhuy",
        category: "coffee",
        price: 26000,
        rating: "4.9",
        badge: "🎀 Best Seller",
        sticker: "🧋",
        desc: "Perpaduan espresso Arabika Gayo, susu pink velvet lembut, dan gula aren organik.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Rose Berry Iced Americano",
        category: "coffee",
        price: 32000,
        rating: "4.8",
        badge: "🌸 Floral Fresh",
        sticker: "🌷",
        desc: "Seduhan kopi Flores Bajawa dingin dengan sentuhan sirup kelopak mawar dan buah beri segar.",
        image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Caramel Ribbon Cloud Latte",
        category: "coffee",
        price: 34000,
        rating: "4.9",
        badge: "💖 Favorit",
        sticker: "🧸",
        desc: "Double shot espresso dengan saus karamel manis dan foam awan lembut bertabur gula pink.",
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Strawberry Matcha Cloud Latte",
        category: "non-coffee",
        price: 33000,
        rating: "4.9",
        badge: "🍓 Kawaii Pick",
        sticker: "🍓",
        desc: "Lapisan cantik puree stroberi segar, susu creamy, dan matcha Kyoto murni di atasnya.",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Sakura Peach Sparkling Tea",
        category: "non-coffee",
        price: 28000,
        rating: "4.8",
        badge: "✨ Segar Manis",
        sticker: "🍑",
        desc: "Teh bunga sakura dengan potongan buah persik manis, nata de coco, dan soda dingin menyegarkan.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Pink Velvet Marshmallow Choco",
        category: "non-coffee",
        price: 32000,
        rating: "4.9",
        badge: "🍬 Super Cute",
        sticker: "🍡",
        desc: "Coklat putih ruby pink hangat dengan whipped cream tinggi dan marshmallow bakar lucu.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Nasi Goreng Sei Sapi Spesial",
        category: "food",
        price: 48000,
        rating: "5.0",
        badge: "👑 Chef Choice",
        sticker: "🍳",
        desc: "Nasi goreng rempah harum dengan daging sei sapi empuk dan telur mata sapi bentuk hati.",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Pink Rose Creamy Carbonara",
        category: "food",
        price: 52000,
        rating: "4.9",
        badge: "🍝 Creamy Rose",
        sticker: "🍝",
        desc: "Pasta fettuccine dengan saus krim tomat rosella pink yang gurih, smoked beef, dan keju parmesan.",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "Kawaii Katsu Curry Rice Bowl",
        category: "food",
        price: 42000,
        rating: "4.9",
        badge: "🍱 Populer",
        sticker: "🍱",
        desc: "Nasi hangat dengan ayam katsu renyah keemasan, saus kari Jepang manis-gurih, dan salad segar.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "Strawberry Ribbon Croissant",
        category: "pastry",
        price: 29000,
        rating: "4.9",
        badge: "🥐 Fresh Baked",
        sticker: "🥐",
        desc: "Croissant butter berlapis renyah dengan glasir coklat stroberi pink dan buah beri segar.",
        image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "Sweet Parisien Pink Macarons",
        category: "pastry",
        price: 27000,
        rating: "4.9",
        badge: "🎀 Sweet Bite",
        sticker: "🧁",
        desc: "Set macaron pastel Perancis rasa rasberi, vanila mawar, dan pistachio dengan krim lembut.",
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "Berry Shortcake & Cheesecake",
        category: "pastry",
        price: 36000,
        rating: "5.0",
        badge: "🍰 Lembut Manis",
        sticker: "🍰",
        desc: "Kue bolu lembut berlapis krim vanila segar dan potongan stroberi manis yang lumer di mulut.",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
    }
];

// ==========================================================================
// Data Akun Admin & Member + Riwayat Pesanan & Reservasi
// ==========================================================================
const usersData = [
    {
        id: 1,
        name: "Admin Senja",
        email: "admin@senjarasa.com",
        password: "admin123",
        role: "admin",
        points: 0
    },
    {
        id: 2,
        name: "Dary Ramdhani",
        email: "member@senjarasa.com",
        password: "member123",
        role: "member",
        points: 120
    }
];

let currentUser = null;

let ordersHistory = [
    {
        code: "SNJ-4821",
        customer: "Dary Ramdhani (Meja 04)",
        email: "member@senjarasa.com",
        itemsText: "2x Es Kopi Susu Senja, 1x French Butter Almond Croissant",
        total: 76725,
        status: "Selesai"
    },
    {
        code: "SNJ-5109",
        customer: "Andini Putri (Meja 11)",
        email: "guest",
        itemsText: "1x Nasi Goreng Sei Sapi Sambal Luat, 1x Uji Matcha Cream Latte",
        total: 89100,
        status: "Diproses"
    }
];

let reservationsHistory = [
    {
        id: 101,
        name: "Citra Lestari",
        phone: "081298765432",
        guests: "3-4 Orang",
        date: "2026-11-08",
        time: "18:30",
        area: "Semi-Outdoor (Taman Senja)",
        status: "Dikonfirmasi"
    }
];

// ==========================================================================
// State Aplikasi
// ==========================================================================
let activeCategory = "all";
let searchQuery = "";
let sortBy = "default";
let favorites = [1, 7]; // Default contoh menu favorit
let cart = [];
let activeVoucher = null; // { code: "SENJA20", amount: 15000 }

// State Custom Coffee Builder
const customCoffee = {
    temp: { val: "Iced", price: 0 },
    base: { val: "Arabika Gayo", price: 22000, color: "#4a1930" },
    milk: { val: "Strawberry Pink Milk", price: 8000, color: "#fbcfe8" },
    sweet: { val: "Sakura Rose Syrup", price: 5000, color: "#f472b6" },
    topping: { val: "Pink Berry Whipped Cream", price: 6000, color: "#fda4af" }
};

// ==========================================================================
// Helper Format Rupiah
// ==========================================================================
function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(number);
}

// ==========================================================================
// DOM Elements
// ==========================================================================
const menuGrid = document.getElementById("menuGrid");
const categoryTabs = document.getElementById("categoryTabs");
const favTabCount = document.getElementById("favTabCount");
const menuSort = document.getElementById("menuSort");
const menuSearch = document.getElementById("menuSearch");
const cartToggle = document.getElementById("cartToggle");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartOverlay = document.getElementById("cartOverlay");
const cartDrawer = document.getElementById("cartDrawer");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartCount = document.getElementById("cartCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const memberDiscountRow = document.getElementById("memberDiscountRow");
const cartDiscount = document.getElementById("cartDiscount");
const voucherDiscountRow = document.getElementById("voucherDiscountRow");
const voucherLabel = document.getElementById("voucherLabel");
const cartVoucherDiscount = document.getElementById("cartVoucherDiscount");
const voucherCodeInput = document.getElementById("voucherCodeInput");
const applyVoucherBtn = document.getElementById("applyVoucherBtn");
const cartTax = document.getElementById("cartTax");
const cartTotal = document.getElementById("cartTotal");
const clearCartBtn = document.getElementById("clearCartBtn");
const checkoutBtn = document.getElementById("checkoutBtn");
const tableNumberInput = document.getElementById("tableNumber");
const claimPromoBtn = document.getElementById("claimPromoBtn");
const reservationForm = document.getElementById("reservationForm");
const newsletterForm = document.getElementById("newsletterForm");
const modalOverlay = document.getElementById("modalOverlay");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModalBtn");
const toastEl = document.getElementById("toast");
const themeToggle = document.getElementById("themeToggle");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");
const backToTopBtn = document.getElementById("backToTopBtn");

// Auth & Dashboard Elements
const authBtn = document.getElementById("authBtn");
const authModalOverlay = document.getElementById("authModalOverlay");
const closeAuthModalBtn = document.getElementById("closeAuthModalBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const fillMemberBtn = document.getElementById("fillMemberBtn");
const fillAdminBtn = document.getElementById("fillAdminBtn");
const dashboardModalOverlay = document.getElementById("dashboardModalOverlay");
const closeDashModalBtn = document.getElementById("closeDashModalBtn");
const logoutBtn = document.getElementById("logoutBtn");
const dashRoleBadge = document.getElementById("dashRoleBadge");
const dashTitle = document.getElementById("dashTitle");
const memberDashboardContent = document.getElementById("memberDashboardContent");
const adminDashboardContent = document.getElementById("adminDashboardContent");
const memberPointsDisplay = document.getElementById("memberPointsDisplay");
const memberOrdersList = document.getElementById("memberOrdersList");
const adminStatMenus = document.getElementById("adminStatMenus");
const adminStatOrders = document.getElementById("adminStatOrders");
const adminStatRes = document.getElementById("adminStatRes");
const adminOrdersList = document.getElementById("adminOrdersList");
const adminReservationsList = document.getElementById("adminReservationsList");
const adminMenusList = document.getElementById("adminMenusList");
const addMenuForm = document.getElementById("addMenuForm");

// Lightbox Elements
const galleryGrid = document.getElementById("galleryGrid");
const lightboxOverlay = document.getElementById("lightboxOverlay");
const closeLightboxBtn = document.getElementById("closeLightboxBtn");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxDesc = document.getElementById("lightboxDesc");

// ==========================================================================
// Helper Gambar Fallback Otomatis (Ilustrasi Kawaii Ciyhuy Pink Cafe)
// ==========================================================================
function getMenuFallbackSvg(item) {
    const icon = item.sticker || "🍓";
    const safeName = item.name.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="420" viewBox="0 0 600 420">
        <defs>
            <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#fff0f6"/>
                <stop offset="50%" stop-color="#fce7f3"/>
                <stop offset="100%" stop-color="#fbcfe8"/>
            </linearGradient>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="3" fill="#f472b6" fill-opacity="0.22"/>
                <circle cx="30" cy="30" r="3" fill="#fb7185" fill-opacity="0.22"/>
            </pattern>
        </defs>
        <rect width="600" height="420" fill="url(#pinkGrad)"/>
        <rect width="600" height="420" fill="url(#dots)"/>
        <rect x="24" y="24" width="552" height="372" rx="28" fill="none" stroke="#f472b6" stroke-width="3" stroke-dasharray="10 8"/>
        <circle cx="300" cy="175" r="86" fill="#ffffff" stroke="#fbcfe8" stroke-width="4"/>
        <ellipse cx="255" cy="205" rx="14" ry="8" fill="#fda4af" opacity="0.7"/>
        <ellipse cx="345" cy="205" rx="14" ry="8" fill="#fda4af" opacity="0.7"/>
        <text x="300" y="192" font-size="76" text-anchor="middle">${icon}</text>
        <text x="190" y="120" font-size="26">✨</text>
        <text x="400" y="130" font-size="26">🎀</text>
        <text x="300" y="312" font-family="Georgia, serif" font-size="23" font-weight="bold" fill="#831843" text-anchor="middle">${safeName}</text>
        <text x="300" y="346" font-family="sans-serif" font-size="15" font-weight="bold" fill="#db2777" text-anchor="middle">🌸 Ciyhuy Sweet &amp; Cute Menu 🌸</text>
    </svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// ==========================================================================
// Render Daftar Menu (Filter, Favorit, Sortir, Search)
// ==========================================================================
function renderMenu() {
    if (favTabCount) {
        favTabCount.textContent = favorites.length;
    }

    const filtered = menuData.filter((item) => {
        const matchCategory =
            activeCategory === "all"
                ? true
                : activeCategory === "favorites"
                    ? favorites.includes(item.id)
                    : item.category === activeCategory;

        const matchSearch =
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    if (sortBy === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating-desc") {
        filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    }

    if (filtered.length === 0) {
        menuGrid.innerHTML = `
            <div class="empty-state">
                <p>Maaf, tidak ada menu yang sesuai filter atau pencarian Anda 🥺🌸</p>
            </div>
        `;
        return;
    }

    menuGrid.innerHTML = filtered
        .map((item) => {
            const isFav = favorites.includes(item.id);
            const fallbackSrc = getMenuFallbackSvg(item);
            const cuteSticker = item.sticker || "🍓";
            return `
        <article class="menu-card">
            <div class="menu-img-frame">
                <div class="menu-img-wrapper">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" data-fallback="${fallbackSrc}" onerror="this.onerror=null; this.src=this.dataset.fallback;">
                    <span class="menu-badge">${item.badge}</span>
                    <button type="button" class="fav-btn ${isFav ? "active" : ""}" data-fav-id="${item.id}" title="Simpan ke Favorit">
                        ♥
                    </button>
                    <span class="menu-cute-sticker" title="${item.name}">${cuteSticker}</span>
                </div>
            </div>
            <div class="menu-body">
                <div class="menu-title-row">
                    <h3>${item.name}</h3>
                    <span class="menu-rating">★ ${item.rating}</span>
                </div>
                <p class="menu-desc">${item.desc}</p>
                <div class="menu-footer">
                    <span class="menu-price">${formatRupiah(item.price)}</span>
                    <button class="add-btn" data-add-id="${item.id}">+ Pesan 💖</button>
                </div>
            </div>
        </article>
    `;
        })
        .join("");
}

// ==========================================================================
// Custom Coffee Builder (Simulasi Gelas & Harga Real-Time)
// ==========================================================================
function updateCoffeeBuilderUI() {
    const total =
        customCoffee.temp.price +
        customCoffee.base.price +
        customCoffee.milk.price +
        customCoffee.sweet.price +
        customCoffee.topping.price;

    document.getElementById("cupTempBadge").textContent =
        customCoffee.temp.val === "Iced" ? "🧊 Iced Cup" : "☕ Hot Cup";
    document.getElementById("cupIce").style.opacity = customCoffee.temp.val === "Iced" ? "1" : "0";

    const layerBase = document.getElementById("layerBase");
    const layerSweet = document.getElementById("layerSweet");
    const layerMilk = document.getElementById("layerMilk");
    const layerTopping = document.getElementById("layerTopping");

    layerBase.style.backgroundColor = customCoffee.base.color;
    layerBase.style.height = customCoffee.milk.price === 0 ? "70%" : "38%";

    layerSweet.style.backgroundColor = customCoffee.sweet.color;
    layerSweet.style.height = customCoffee.sweet.price === 0 ? "0%" : "14%";

    layerMilk.style.backgroundColor = customCoffee.milk.color;
    layerMilk.style.height = customCoffee.milk.price === 0 ? "0%" : "32%";

    layerTopping.style.backgroundColor = customCoffee.topping.color;
    layerTopping.style.height = customCoffee.topping.price === 0 ? "0%" : "16%";

    const milkTitle =
        customCoffee.milk.val === "Tanpa Susu (Black)" ? "Black" : `+ ${customCoffee.milk.val}`;
    document.getElementById("customDrinkTitle").textContent = `${customCoffee.temp.val} ${customCoffee.base.val} ${milkTitle}`;
    document.getElementById("customDrinkDesc").textContent = `${customCoffee.sweet.val} • ${customCoffee.topping.val}`;
    document.getElementById("customDrinkPrice").textContent = formatRupiah(total);
}

function bindBuilderOptionGroup(groupId, stateKey) {
    const container = document.getElementById(groupId);
    if (!container) return;
    container.addEventListener("click", (e) => {
        const pill = e.target.closest(".opt-pill");
        if (!pill) return;

        container.querySelectorAll(".opt-pill").forEach((b) => b.classList.remove("active"));
        pill.classList.add("active");

        customCoffee[stateKey] = {
            val: pill.dataset.val,
            price: Number(pill.dataset.price),
            color: pill.dataset.color || "transparent"
        };
        updateCoffeeBuilderUI();
    });
}

bindBuilderOptionGroup("optTemp", "temp");
bindBuilderOptionGroup("optBase", "base");
bindBuilderOptionGroup("optMilk", "milk");
bindBuilderOptionGroup("optSweet", "sweet");
bindBuilderOptionGroup("optTopping", "topping");

const addCustomCoffeeBtn = document.getElementById("addCustomCoffeeBtn");
if (addCustomCoffeeBtn) {
    addCustomCoffeeBtn.addEventListener("click", () => {
        const total =
            customCoffee.temp.price +
            customCoffee.base.price +
            customCoffee.milk.price +
            customCoffee.sweet.price +
            customCoffee.topping.price;

        const customName = `Racikan: ${customCoffee.temp.val} ${customCoffee.base.val} (${customCoffee.milk.val}, ${customCoffee.sweet.val})`;
        addToCart({
            id: Date.now(),
            name: customName,
            price: total
        });
        openCart();
    });
}

// ==========================================================================
// Logika Keranjang Pesanan (Cart) + Diskon Member 15% + Kode Voucher
// ==========================================================================
function addToCart(itemObj) {
    const existing = cart.find((item) => item.id === itemObj.id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...itemObj, qty: 1 });
    }
    updateCartUI();
    showToast(`✓ ${itemObj.name} ditambahkan ke pesanan`);
}

function changeQty(id, delta) {
    const item = cart.find((entry) => entry.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter((entry) => entry.id !== id);
    }
    updateCartUI();
}

function calculateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const isMember = currentUser && currentUser.role === "member";
    const discount = isMember ? Math.round(subtotal * 0.15) : 0;
    const voucherCut = activeVoucher && subtotal > 0 ? Math.min(activeVoucher.amount, subtotal - discount) : 0;
    const afterDiscount = Math.max(0, subtotal - discount - voucherCut);
    const tax = Math.round(afterDiscount * 0.1);
    const grandTotal = afterDiscount + tax;
    return { subtotal, isMember, discount, voucherCut, tax, grandTotal };
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-state">
                <p>Keranjang pesanan masih kosong.<br>Yuk pilih menu favoritmu!</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart
            .map(
                (item) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <strong>${item.name}</strong>
                    <span>${formatRupiah(item.price * item.qty)}</span>
                </div>
                <div class="qty-controls">
                    <button class="qty-btn" data-qty-id="${item.id}" data-delta="-1">−</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" data-qty-id="${item.id}" data-delta="1">+</button>
                </div>
            </div>
        `
            )
            .join("");
    }

    const { subtotal, isMember, discount, voucherCut, tax, grandTotal } = calculateCartTotals();

    cartSubtotal.textContent = formatRupiah(subtotal);
    if (isMember) {
        memberDiscountRow.style.display = "flex";
        cartDiscount.textContent = `-${formatRupiah(discount)}`;
    } else {
        memberDiscountRow.style.display = "none";
    }

    if (activeVoucher && voucherCut > 0) {
        voucherDiscountRow.style.display = "flex";
        voucherLabel.textContent = `🎟️ Voucher (${activeVoucher.code})`;
        cartVoucherDiscount.textContent = `-${formatRupiah(voucherCut)}`;
    } else {
        voucherDiscountRow.style.display = "none";
    }

    cartTax.textContent = formatRupiah(tax);
    cartTotal.textContent = formatRupiah(grandTotal);
}

function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
}

function closeCart() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
}

// ==========================================================================
// Sistem Akun Admin & Member (Login, Register, Dashboard, Tukar Poin)
// ==========================================================================
function updateAuthUI() {
    authBtn.classList.remove("logged-member", "logged-admin");

    if (!currentUser) {
        authBtn.innerHTML = `👤 <span id="authBtnText">Masuk</span>`;
        return;
    }

    if (currentUser.role === "admin") {
        authBtn.classList.add("logged-admin");
        authBtn.innerHTML = `🛠️ <span id="authBtnText">Panel Admin</span>`;
    } else {
        authBtn.classList.add("logged-member");
        authBtn.innerHTML = `👑 <span id="authBtnText">${currentUser.name.split(" ")[0]} (${currentUser.points} Poin)</span>`;
        if (!tableNumberInput.value) {
            tableNumberInput.value = `${currentUser.name} (Member)`;
        }
        const resNameInput = document.getElementById("resName");
        if (resNameInput && !resNameInput.value) {
            resNameInput.value = currentUser.name;
        }
    }

    updateCartUI();
}

function openDashboardModal() {
    if (!currentUser) return;

    if (currentUser.role === "admin") {
        dashRoleBadge.textContent = "ADMIN";
        dashRoleBadge.classList.add("admin");
        dashTitle.textContent = `Dashboard Admin — ${currentUser.name}`;
        memberDashboardContent.style.display = "none";
        adminDashboardContent.style.display = "block";
        renderAdminDashboard();
    } else {
        dashRoleBadge.textContent = "MEMBER";
        dashRoleBadge.classList.remove("admin");
        dashTitle.textContent = `Halo, ${currentUser.name}!`;
        adminDashboardContent.style.display = "none";
        memberDashboardContent.style.display = "block";
        renderMemberDashboard();
    }

    dashboardModalOverlay.classList.add("open");
}

function renderMemberDashboard() {
    memberPointsDisplay.textContent = `${currentUser.points} Poin`;
    const myOrders = ordersHistory.filter((o) => o.email === currentUser.email);

    if (myOrders.length === 0) {
        memberOrdersList.innerHTML = `<p style="color: var(--text-secondary);">Belum ada riwayat pesanan.</p>`;
        return;
    }

    memberOrdersList.innerHTML = myOrders
        .map(
            (o) => `
            <div class="dash-item">
                <div>
                    <strong>${o.code} — ${formatRupiah(o.total)}</strong>
                    <div style="color: var(--text-secondary); font-size: 0.8rem;">${o.itemsText}</div>
                </div>
                <span class="status-chip ${o.status === "Selesai" ? "done" : ""}">${o.status}</span>
            </div>
        `
        )
        .join("");
}

function renderAdminDashboard() {
    adminStatMenus.textContent = menuData.length;
    adminStatOrders.textContent = ordersHistory.length;
    adminStatRes.textContent = reservationsHistory.length;

    if (ordersHistory.length === 0) {
        adminOrdersList.innerHTML = `<p style="color: var(--text-secondary);">Belum ada pesanan masuk.</p>`;
    } else {
        adminOrdersList.innerHTML = ordersHistory
            .map(
                (o, idx) => `
                <div class="dash-item">
                    <div>
                        <strong>${o.code} • ${o.customer}</strong>
                        <div style="color: var(--text-secondary); font-size: 0.8rem;">${o.itemsText}</div>
                        <strong style="color: var(--accent); font-size: 0.84rem;">${formatRupiah(o.total)}</strong>
                    </div>
                    <div class="dash-item-actions">
                        <span class="status-chip ${o.status === "Selesai" ? "done" : ""}">${o.status}</span>
                        <button class="mini-btn" data-toggle-order="${idx}">
                            ${o.status === "Selesai" ? "Ubah Diproses" : "✓ Selesai"}
                        </button>
                    </div>
                </div>
            `
            )
            .join("");
    }

    if (reservationsHistory.length === 0) {
        adminReservationsList.innerHTML = `<p style="color: var(--text-secondary);">Belum ada reservasi meja.</p>`;
    } else {
        adminReservationsList.innerHTML = reservationsHistory
            .map(
                (r, idx) => `
                <div class="dash-item">
                    <div>
                        <strong>${r.name} (${r.guests}) — ${r.phone}</strong>
                        <div style="color: var(--text-secondary); font-size: 0.8rem;">
                            📅 ${r.date} pukul ${r.time} WIB • ${r.area}
                        </div>
                    </div>
                    <div class="dash-item-actions">
                        <span class="status-chip ${r.status === "Dikonfirmasi" ? "done" : ""}">${r.status}</span>
                        <button class="mini-btn" data-toggle-res="${idx}">
                            ${r.status === "Dikonfirmasi" ? "Ubah Menunggu" : "✓ Konfirmasi"}
                        </button>
                    </div>
                </div>
            `
            )
            .join("");
    }

    adminMenusList.innerHTML = menuData
        .map(
            (m) => `
            <div class="dash-item">
                <div>
                    <strong>${m.name}</strong>
                    <span style="color: var(--accent); font-weight: 700; margin-left: 6px;">${formatRupiah(m.price)}</span>
                    <div style="color: var(--text-secondary); font-size: 0.78rem;">Kategori: ${m.category} • Badge: ${m.badge}</div>
                </div>
                <button class="mini-btn danger" data-delete-menu="${m.id}">Hapus</button>
            </div>
        `
        )
        .join("");
}

// ==========================================================================
// Notifikasi Toast & Modal
// ==========================================================================
let toastTimer;
function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toastEl.classList.remove("show");
    }, 2600);
}

function showModal(icon, title, htmlContent) {
    modalIcon.textContent = icon;
    modalTitle.textContent = title;
    modalBody.innerHTML = htmlContent;
    modalOverlay.classList.add("open");
}

function closeModal() {
    modalOverlay.classList.remove("open");
}

// ==========================================================================
// Status Jam Buka Cafe Otomatis
// ==========================================================================
function updateStoreStatus() {
    const dot = document.getElementById("storeStatusDot");
    const text = document.getElementById("storeStatusText");
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 8 && hour < 22) {
        dot.classList.remove("closed");
        text.textContent = "Sedang Buka Sekarang • 08.00 – 22.00 WIB";
    } else {
        dot.classList.add("closed");
        text.textContent = "Sedang Tutup • Buka Kembali Pukul 08.00 WIB";
    }
}

// ==========================================================================
// Event Listeners
// ==========================================================================
// Filter Kategori Menu
categoryTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;

    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category;
    renderMenu();
});

// Sortir Menu
if (menuSort) {
    menuSort.addEventListener("change", (e) => {
        sortBy = e.target.value;
        renderMenu();
    });
}

// Pencarian Menu Real-time
menuSearch.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderMenu();
});

// Klik Tombol "+ Pesan" atau "♥ Favorit" pada Kartu Menu
menuGrid.addEventListener("click", (e) => {
    const favBtn = e.target.closest("[data-fav-id]");
    if (favBtn) {
        const favId = Number(favBtn.dataset.favId);
        if (favorites.includes(favId)) {
            favorites = favorites.filter((id) => id !== favId);
            showToast("Dihapus dari daftar Favorit");
        } else {
            favorites.push(favId);
            showToast("❤️ Ditambahkan ke menu Favorit!");
        }
        renderMenu();
        return;
    }

    const addBtn = e.target.closest("[data-add-id]");
    if (!addBtn) return;

    const id = Number(addBtn.dataset.addId);
    const selectedItem = menuData.find((item) => item.id === id);
    if (selectedItem) {
        addToCart(selectedItem);
    }
});

// Pakai Kode Voucher di Keranjang
if (applyVoucherBtn) {
    applyVoucherBtn.addEventListener("click", () => {
        const code = voucherCodeInput.value.trim().toUpperCase();
        if (!code) {
            showToast("Masukkan kode promo terlebih dahulu");
            return;
        }

        const promoCatalog = {
            SENJA20: 20000,
            CIYHUY25: 25000,
            LUCKY15: 15000,
            SWEET10: 10000,
            KOPIHEMAT: 10000,
            POIN15K: 15000,
            POIN30K: 30000
        };

        if (promoCatalog[code]) {
            activeVoucher = { code, amount: promoCatalog[code] };
            updateCartUI();
            showToast(`🎟️ Kode ${code} aktif! Potongan ${formatRupiah(promoCatalog[code])}`);
        } else {
            showToast("❌ Kode voucher tidak ditemukan (Coba: SENJA20)");
        }
    });
}

// Buka & Tutup Keranjang
cartToggle.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// Tambah / Kurang Jumlah di Keranjang
cartItemsContainer.addEventListener("click", (e) => {
    const qtyBtn = e.target.closest("[data-qty-id]");
    if (!qtyBtn) return;

    const id = Number(qtyBtn.dataset.qtyId);
    const delta = Number(qtyBtn.dataset.delta);
    changeQty(id, delta);
});

// Kosongkan Keranjang
clearCartBtn.addEventListener("click", () => {
    if (cart.length === 0) return;
    cart = [];
    activeVoucher = null;
    voucherCodeInput.value = "";
    updateCartUI();
    showToast("Keranjang pesanan dikosongkan");
});

// Klaim Promo Sore Hari
claimPromoBtn.addEventListener("click", () => {
    const promoItem = {
        id: 99,
        name: "Paket Senja Berdua (Promo)",
        price: 75000
    };
    addToCart(promoItem);
    openCart();
});

// Checkout Pesanan
checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("Pilih minimal 1 menu terlebih dahulu!");
        return;
    }

    const tableOrName =
        tableNumberInput.value.trim() ||
        (currentUser ? `${currentUser.name} (${currentUser.role.toUpperCase()})` : "Walk-in / Takeaway");

    const { isMember, discount, voucherCut, grandTotal } = calculateCartTotals();
    const orderCode = "SNJ-" + Math.floor(1000 + Math.random() * 9000);

    const itemListHtml = cart
        .map((item) => `<p>• ${item.qty}x ${item.name} — <strong>${formatRupiah(item.price * item.qty)}</strong></p>`)
        .join("");

    const itemsSummaryText = cart.map((item) => `${item.qty}x ${item.name}`).join(", ");

    ordersHistory.unshift({
        code: orderCode,
        customer: tableOrName,
        email: currentUser ? currentUser.email : "guest",
        itemsText: itemsSummaryText,
        total: grandTotal,
        status: "Diproses"
    });

    let extraBenefitsHtml = "";
    if (isMember) {
        currentUser.points += 10;
        updateAuthUI();
        extraBenefitsHtml += `<p style="color: #16a34a; font-weight: 600;">👑 Diskon Member 15% (-${formatRupiah(discount)}) &amp; +10 Poin Senja Club!</p>`;
    }
    if (voucherCut > 0 && activeVoucher) {
        extraBenefitsHtml += `<p style="color: #16a34a; font-weight: 600;">🎟️ Voucher ${activeVoucher.code} (-${formatRupiah(voucherCut)})</p>`;
    }

    closeCart();
    showModal(
        "🧾",
        "Pesanan Diterima!",
        `
            <p><strong>Kode Pesanan:</strong> ${orderCode}</p>
            <p><strong>Meja / Pemesan:</strong> ${tableOrName}</p>
            <hr style="margin: 10px 0; border: none; border-top: 1px dashed var(--border-color);">
            ${itemListHtml}
            <hr style="margin: 10px 0; border: none; border-top: 1px dashed var(--border-color);">
            ${extraBenefitsHtml}
            <p><strong>Total Bayar (Termasuk Pajak): ${formatRupiah(grandTotal)}</strong></p>
            <p style="margin-top:8px; color: var(--text-secondary);">Silakan tunjukkan kode ini ke kasir atau tunggu barista kami mengantarkan ke meja Anda.</p>
        `
    );

    cart = [];
    activeVoucher = null;
    voucherCodeInput.value = "";
    updateCartUI();
});

// Form Reservasi Meja
reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("resName").value;
    const phone = document.getElementById("resPhone").value;
    const guests = document.getElementById("resGuests").value;
    const date = document.getElementById("resDate").value;
    const time = document.getElementById("resTime").value;
    const area = document.getElementById("resArea").value;

    reservationsHistory.unshift({
        id: Date.now(),
        name,
        phone,
        guests,
        date,
        time,
        area,
        status: "Menunggu"
    });

    showModal(
        "✨",
        "Reservasi Terkonfirmasi!",
        `
            <p>Terima kasih <strong>${name}</strong>, meja Anda telah kami catat:</p>
            <p>• <strong>Tanggal &amp; Jam:</strong> ${date} pukul ${time} WIB</p>
            <p>• <strong>Jumlah Tamu:</strong> ${guests}</p>
            <p>• <strong>Area Pilihan:</strong> ${area}</p>
            <p>• <strong>Kontak WhatsApp:</strong> ${phone}</p>
        `
    );

    reservationForm.reset();
    setDefaultReservationDate();
});

// ==========================================================================
// Event Listeners: Full-Screen Login Gate, Mascot Interaktif & Dashboard
// ==========================================================================
const loginMascot = document.getElementById("loginMascot");
const mascotSpeech = document.getElementById("mascotSpeech");
const loginEmailInput = document.getElementById("loginEmail");
const loginPasswordInput = document.getElementById("loginPassword");
const regNameInput = document.getElementById("regName");
const regEmailInput = document.getElementById("regEmail");
const regPasswordInput = document.getElementById("regPassword");

function setMascotState(emoji, message) {
    if (!loginMascot || !mascotSpeech) return;
    loginMascot.textContent = emoji;
    mascotSpeech.innerHTML = message;
    loginMascot.classList.remove("jelly-pop");
    void loginMascot.offsetWidth;
    loginMascot.classList.add("jelly-pop");
}

// Klik pada Maskot untuk Ganti Ekspresi Lucu
const cuteMascots = [
    { emoji: "🧸", text: "Halo! Aku Beruang Barista Ciyhuy 🌸" },
    { emoji: "🐰", text: "Kelinci Strawberry siap menyeduh minuman manismu! 🍓" },
    { emoji: "🐱", text: "Meow~ Jangan lupa cobain Pink Sakura Latte yaa! 🐾💖" },
    { emoji: "🧁", text: "Member Senja Club otomatis dapat diskon 15% lho! 🎀" }
];
let mascotIndex = 0;

if (loginMascot) {
    loginMascot.addEventListener("click", (e) => {
        mascotIndex = (mascotIndex + 1) % cuteMascots.length;
        setMascotState(cuteMascots[mascotIndex].emoji, cuteMascots[mascotIndex].text);
        if (e.clientX && e.clientY) spawnCuteParticles(e.clientX, e.clientY);
    });
}

// Reaksi Maskot saat Pengguna Mengetik Email / Password
[loginEmailInput, regNameInput, regEmailInput].forEach((inputEl) => {
    if (!inputEl) return;
    inputEl.addEventListener("focus", () => {
        setMascotState("🥰", "Asik! Ketik datamu atau klik tombol <strong>Akun Demo</strong> di atas yaa 💕");
    });
});

[loginPasswordInput, regPasswordInput].forEach((inputEl) => {
    if (!inputEl) return;
    inputEl.addEventListener("focus", () => {
        setMascotState("🙈", "Tenang, aku tutup mata kok waktu kamu ketik kata sandi! 🤫💖");
    });
    inputEl.addEventListener("blur", () => {
        setMascotState("🧸", "Sudah selesai ketik sandinya? Yuk klik tombol Masuk! 🌸");
    });
});

authBtn.addEventListener("click", () => {
    if (currentUser) {
        openDashboardModal();
    } else {
        authModalOverlay.classList.add("open");
    }
});

if (closeAuthModalBtn) {
    closeAuthModalBtn.addEventListener("click", () => {
        if (currentUser) authModalOverlay.classList.remove("open");
    });
}

authModalOverlay.addEventListener("click", (e) => {
    // Hanya boleh ditutup jika sudah login
    if (e.target === authModalOverlay && currentUser) {
        authModalOverlay.classList.remove("open");
    }
});

closeDashModalBtn.addEventListener("click", () => {
    dashboardModalOverlay.classList.remove("open");
});

dashboardModalOverlay.addEventListener("click", (e) => {
    if (e.target === dashboardModalOverlay) dashboardModalOverlay.classList.remove("open");
});

document.querySelectorAll("[data-auth-tab]").forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
        document.querySelectorAll("[data-auth-tab]").forEach((b) => b.classList.remove("active"));
        tabBtn.classList.add("active");
        const mode = tabBtn.dataset.authTab;
        if (mode === "login") {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
            setMascotState("🧸", "Silakan masuk dengan akunmu atau pilih <strong>Akun Demo</strong> di bawah yaa 🌸");
        } else {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
            setMascotState("🍓", "Yeay! Daftar jadi Member baru langsung dapat bonus <strong>+100 Poin</strong> &amp; Diskon 15%! 🎀");
        }
    });
});

fillMemberBtn.addEventListener("click", () => {
    document.getElementById("loginEmail").value = "member@senjarasa.com";
    document.getElementById("loginPassword").value = "member123";
    setMascotState("👑", "Yay! Akun <strong>Member</strong> sudah terisi! Klik <em>Masuk ke Cafe Sekarang</em> yaa 💖");
    showToast("👑 Kredensial Member terisi! Klik Masuk Sekarang");
});

fillAdminBtn.addEventListener("click", () => {
    document.getElementById("loginEmail").value = "admin@senjarasa.com";
    document.getElementById("loginPassword").value = "admin123";
    setMascotState("🛠️", "Siap Bos! Akun <strong>Admin</strong> sudah terisi! Klik <em>Masuk ke Cafe Sekarang</em> ✨");
    showToast("🛠️ Kredensial Admin terisi! Klik Masuk Sekarang");
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    const foundUser = usersData.find((u) => u.email.toLowerCase() === email && u.password === password);
    if (!foundUser) {
        setMascotState("🥺", "Ups! Email atau kata sandinya belum cocok nih. Klik tombol <strong>Akun Demo</strong> di atas yuk! 💕");
        const card = authModalOverlay.querySelector(".auth-modal-card");
        if (card) {
            card.classList.remove("cute-shake");
            void card.offsetWidth;
            card.classList.add("cute-shake");
        }
        showToast("❌ Email atau kata sandi salah!");
        return;
    }

    currentUser = foundUser;
    setMascotState("🥳", `Yeay! Selamat datang <strong>${currentUser.name}</strong>! Membuka pintu cafe... 🌸🎉`);

    setTimeout(() => {
        authModalOverlay.classList.remove("open");
        document.body.classList.remove("locked-until-login");
        loginForm.reset();
        updateAuthUI();

        if (currentUser.role === "admin") {
            showToast(`🛠️ Selamat datang, ${currentUser.name}!`);
            openDashboardModal();
        } else {
            showToast(`👑 Selamat datang Member ${currentUser.name}! Diskon 15% aktif 💖`);
        }
    }, 420);
});

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim().toLowerCase();
    const password = document.getElementById("regPassword").value;

    if (usersData.some((u) => u.email.toLowerCase() === email)) {
        setMascotState("😯", "Wah, email itu sudah terdaftar! Coba gunakan email lain atau langsung Login yaa 🌸");
        showToast("⚠️ Email tersebut sudah terdaftar!");
        return;
    }

    const newMember = {
        id: Date.now(),
        name,
        email,
        password,
        role: "member",
        points: 100
    };

    usersData.push(newMember);
    currentUser = newMember;
    setMascotState("🥳", `Selamat bergabung <strong>${name}</strong>! Kamu dapat +100 Poin! 🍓🎉`);

    setTimeout(() => {
        authModalOverlay.classList.remove("open");
        document.body.classList.remove("locked-until-login");
        registerForm.reset();
        updateAuthUI();
        showToast(`🎉 Selamat bergabung ${name}! Bonus 100 Poin & Diskon 15% aktif.`);
    }, 420);
});

// Tukar Poin Member menjadi Voucher Keranjang
memberDashboardContent.addEventListener("click", (e) => {
    const redeemBtn = e.target.closest("[data-redeem-points]");
    if (!redeemBtn || !currentUser) return;

    const cost = Number(redeemBtn.dataset.redeemPoints);
    const val = Number(redeemBtn.dataset.redeemVal);
    const code = redeemBtn.dataset.redeemCode;

    if (currentUser.points < cost) {
        showToast(`⚠️ Poin belum cukup! Anda membutuhkan ${cost} Poin.`);
        return;
    }

    currentUser.points -= cost;
    activeVoucher = { code, amount: val };
    voucherCodeInput.value = code;
    updateAuthUI();
    renderMemberDashboard();
    dashboardModalOverlay.classList.remove("open");
    openCart();
    showToast(`🎁 Berhasil tukar ${cost} Poin! Voucher ${formatRupiah(val)} terpasang di keranjang.`);
});

logoutBtn.addEventListener("click", () => {
    currentUser = null;
    tableNumberInput.value = "";
    dashboardModalOverlay.classList.remove("open");
    updateAuthUI();
    // Kunci kembali layar dan tampilkan Login Gate saat Logout
    document.body.classList.add("locked-until-login");
    authModalOverlay.classList.add("open");
    setMascotState("👋", "Sampai jumpa lagi! Silakan login kembali untuk masuk ke <strong>Ciyhuy</strong> 🌸🍓");
    showToast("Anda telah keluar dari akun");
});

document.querySelectorAll("[data-admin-tab]").forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
        document.querySelectorAll("[data-admin-tab]").forEach((b) => b.classList.remove("active"));
        tabBtn.classList.add("active");

        const target = tabBtn.dataset.adminTab;
        document.getElementById("adminOrdersPanel").style.display = target === "orders" ? "block" : "none";
        document.getElementById("adminReservationsPanel").style.display = target === "reservations" ? "block" : "none";
        document.getElementById("adminMenusPanel").style.display = target === "menus" ? "block" : "none";
    });
});

adminOrdersList.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-toggle-order]");
    if (!btn) return;
    const idx = Number(btn.dataset.toggleOrder);
    if (ordersHistory[idx]) {
        ordersHistory[idx].status = ordersHistory[idx].status === "Selesai" ? "Diproses" : "Selesai";
        renderAdminDashboard();
        showToast(`Status pesanan ${ordersHistory[idx].code} diperbarui`);
    }
});

adminReservationsList.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-toggle-res]");
    if (!btn) return;
    const idx = Number(btn.dataset.toggleRes);
    if (reservationsHistory[idx]) {
        reservationsHistory[idx].status =
            reservationsHistory[idx].status === "Dikonfirmasi" ? "Menunggu" : "Dikonfirmasi";
        renderAdminDashboard();
        showToast(`Status reservasi ${reservationsHistory[idx].name} diperbarui`);
    }
});

addMenuForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("newMenuName").value.trim();
    const category = document.getElementById("newMenuCategory").value;
    const price = Number(document.getElementById("newMenuPrice").value);
    const badge = document.getElementById("newMenuBadge").value.trim();
    const desc = document.getElementById("newMenuDesc").value.trim();

    const defaultImages = {
        coffee: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
        "non-coffee": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
        food: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        pastry: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
    };

    const newMenu = {
        id: Date.now(),
        name,
        category,
        price,
        rating: "5.0",
        badge,
        desc,
        image: defaultImages[category] || defaultImages.coffee
    };

    menuData.unshift(newMenu);
    addMenuForm.reset();
    renderMenu();
    renderAdminDashboard();
    showToast(`✓ Menu "${name}" berhasil ditambahkan ke katalog!`);
});

adminMenusList.addEventListener("click", (e) => {
    const delBtn = e.target.closest("[data-delete-menu]");
    if (!delBtn) return;
    const id = Number(delBtn.dataset.deleteMenu);
    const index = menuData.findIndex((m) => m.id === id);
    if (index !== -1) {
        const removed = menuData.splice(index, 1)[0];
        renderMenu();
        renderAdminDashboard();
        showToast(`Menu "${removed.name}" dihapus dari katalog`);
    }
});

// ==========================================================================
// Galeri Suasana Lightbox & Tombol Back to Top
// ==========================================================================
if (galleryGrid) {
    galleryGrid.addEventListener("click", (e) => {
        const card = e.target.closest(".gallery-item");
        if (!card) return;
        const imgEl = card.querySelector("img");
        lightboxImg.src = imgEl.src;
        lightboxTitle.textContent = card.dataset.title;
        lightboxDesc.textContent = card.dataset.caption;
        lightboxOverlay.classList.add("open");
    });
}

if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener("click", () => {
        lightboxOverlay.classList.remove("open");
    });
}

if (lightboxOverlay) {
    lightboxOverlay.addEventListener("click", (e) => {
        if (e.target === lightboxOverlay) lightboxOverlay.classList.remove("open");
    });
}

if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Form Newsletter
newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletterEmail").value;
    showToast(`🎉 Kode voucher SENJA20 telah dikirim ke ${email}`);
    newsletterForm.reset();
});

// Tutup Modal Struk
closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
});

// Toggle Tema Gelap / Terang
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// Navigasi Hamburger Mobile
hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
        navLinks.classList.remove("open");
        document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
        e.target.classList.add("active");
    }
});

// Scroll-Spy Navigasi Aktif & Back-to-Top Visibility
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 140;
    if (backToTopBtn) {
        backToTopBtn.classList.toggle("show", window.scrollY > 400);
    }

    sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll(".nav-link").forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
        }
    });
});

// Filter dari Link di Footer
document.querySelectorAll("[data-filter-link]").forEach((link) => {
    link.addEventListener("click", () => {
        const targetCategory = link.dataset.filterLink;
        activeCategory = targetCategory;
        document.querySelectorAll(".tab-btn").forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.category === targetCategory);
        });
        renderMenu();
    });
});

// Set Tanggal Default Reservasi = Hari Ini
function setDefaultReservationDate() {
    const resDate = document.getElementById("resDate");
    if (resDate) {
        const today = new Date().toISOString().split("T")[0];
        resDate.value = today;
        resDate.min = today;
    }
}

// Efek Partikel Hati & Bunga Romantis Saat Klik Tombol
function spawnCuteParticles(x, y) {
    const emojis = ["💖", "🌸", "🍓", "✨", "🎀"];
    for (let i = 0; i < 4; i++) {
        const span = document.createElement("span");
        span.className = "cute-heart-particle";
        span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        const offsetX = (Math.random() - 0.5) * 50;
        const offsetY = (Math.random() - 0.5) * 20;
        span.style.left = `${x + offsetX}px`;
        span.style.top = `${y + offsetY}px`;
        document.body.appendChild(span);
        setTimeout(() => span.remove(), 1000);
    }
}

document.addEventListener("click", (e) => {
    const interactiveBtn = e.target.closest(".btn, .add-btn, .fav-btn, .opt-pill, .tab-btn");
    if (interactiveBtn && e.clientX && e.clientY) {
        spawnCuteParticles(e.clientX, e.clientY);
    }
});

// Animasi Kelopak Bunga Sakura & Hati Melayang di Latar Belakang
function initSakuraPetals() {
    const container = document.getElementById("sakuraContainer");
    if (!container) return;

    const petalSymbols = ["🌸", "💮", "🌷", "💕", "✨"];
    for (let i = 0; i < 14; i++) {
        const petal = document.createElement("span");
        petal.className = "sakura-petal";
        petal.textContent = petalSymbols[i % petalSymbols.length];
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${8 + Math.random() * 9}s`;
        petal.style.animationDelay = `${Math.random() * 6}s`;
        petal.style.fontSize = `${0.85 + Math.random() * 0.65}rem`;
        container.appendChild(petal);
    }
}

// ==========================================================================
// Fitur Baru 1: Kuis Mood Matcher Ciyhuy 🔮
// ==========================================================================
const moodData = {
    sweet: {
        emoji: "🍡🍰",
        title: "Paket Pelukan Manis",
        desc: "Pink Velvet Marshmallow Choco + Berry Shortcake. Dijamin bikin hatimu langsung meleleh bahagia!",
        price: 62000,
        save: "Hemat Rp 6.000!"
    },
    focus: {
        emoji: "🧋🥐",
        title: "Paket Semangat Produktif",
        desc: "Es Kopi Susu Pink Ciyhuy + Strawberry Ribbon Croissant. Bikin fokus nugas & WFC seharian!",
        price: 49000,
        save: "Hemat Rp 6.000!"
    },
    romance: {
        emoji: "🍓🧁",
        title: "Paket Kasmaran Romantis",
        desc: "Strawberry Matcha Cloud Latte + Sweet Parisien Pink Macarons. Manisnya pas buat momen spesial!",
        price: 54000,
        save: "Hemat Rp 6.000!"
    },
    hungry: {
        emoji: "🍝🍑",
        title: "Paket Kenyang Bahagia",
        desc: "Pink Rose Creamy Carbonara + Sakura Peach Sparkling Tea. Porsi mantap dan super menyegarkan!",
        price: 72000,
        save: "Hemat Rp 8.000!"
    }
};

let activeMoodKey = "sweet";
const moodButtonsContainer = document.getElementById("moodButtons");
const orderMoodBundleBtn = document.getElementById("orderMoodBundleBtn");

if (moodButtonsContainer) {
    moodButtonsContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".mood-btn");
        if (!btn) return;

        moodButtonsContainer.querySelectorAll(".mood-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        activeMoodKey = btn.dataset.mood;
        const selected = moodData[activeMoodKey];
        if (!selected) return;

        const box = document.getElementById("moodResultBox");
        document.getElementById("moodResultEmoji").textContent = selected.emoji;
        document.getElementById("moodResultTitle").textContent = selected.title;
        document.getElementById("moodResultDesc").textContent = selected.desc;
        document.getElementById("moodResultPrice").textContent = formatRupiah(selected.price);
        box.querySelector(".mood-save").textContent = selected.save;

        box.classList.remove("jelly-pop");
        void box.offsetWidth;
        box.classList.add("jelly-pop");
    });
}

if (orderMoodBundleBtn) {
    orderMoodBundleBtn.addEventListener("click", () => {
        const selected = moodData[activeMoodKey];
        if (!selected) return;
        addToCart({
            id: 700 + Object.keys(moodData).indexOf(activeMoodKey),
            name: `${selected.title} (Mood Bundle)`,
            price: selected.price
        });
        openCart();
    });
}

// ==========================================================================
// Fitur Baru 2: Roda Gacha Keberuntungan Ciyhuy 🎡
// ==========================================================================
const wheelPrizes = [
    { label: "Voucher Diskon Rp 25.000 (CIYHUY25)", type: "voucher", code: "CIYHUY25", amount: 25000 },
    { label: "Gratis 1 Sweet Pink Macaron (Rp 0)!", type: "freeItem", name: "🎁 Gratis Pink Macaron (Gacha)", price: 0 },
    { label: "Bonus +50 Poin Loyalitas Member!", type: "points", points: 50 },
    { label: "Voucher Potongan Rp 15.000 (LUCKY15)", type: "voucher", code: "LUCKY15", amount: 15000 },
    { label: "Voucher Potongan Rp 10.000 (SWEET10)", type: "voucher", code: "SWEET10", amount: 10000 },
    { label: "Bonus +30 Poin Loyalitas Member!", type: "points", points: 30 }
];

let wheelRotation = 0;
let isSpinning = false;
const luckyWheel = document.getElementById("luckyWheel");
const spinWheelBtn = document.getElementById("spinWheelBtn");
const wheelStatusText = document.getElementById("wheelStatusText");

if (spinWheelBtn && luckyWheel) {
    spinWheelBtn.addEventListener("click", () => {
        if (isSpinning) return;
        isSpinning = true;
        spinWheelBtn.disabled = true;
        wheelStatusText.textContent = "Roda sedang berputar... Semoga beruntung! 🎡✨";

        const prizeIndex = Math.floor(Math.random() * wheelPrizes.length);
        const extraSpins = 5 * 360;
        const randomDegree = Math.floor(Math.random() * 360);
        wheelRotation += extraSpins + randomDegree;
        luckyWheel.style.transform = `rotate(${wheelRotation}deg)`;

        setTimeout(() => {
            const prize = wheelPrizes[prizeIndex];
            wheelStatusText.textContent = `🎉 Selamat! Kamu dapat: ${prize.label}`;

            if (prize.type === "voucher") {
                activeVoucher = { code: prize.code, amount: prize.amount };
                if (voucherCodeInput) voucherCodeInput.value = prize.code;
                updateCartUI();
                showToast(`🎟️ Hadiah Gacha ${prize.code} otomatis terpasang di keranjang!`);
            } else if (prize.type === "freeItem") {
                addToCart({ id: 888, name: prize.name, price: 0 });
                showToast("🧁 Gratis Pink Macaron telah masuk ke keranjangmu!");
            } else if (prize.type === "points") {
                if (currentUser) {
                    currentUser.points += prize.points;
                    updateAuthUI();
                }
                showToast(`👑 Kamu mendapat +${prize.points} Poin Keberuntungan!`);
            }

            isSpinning = false;
            spinWheelBtn.disabled = false;
        }, 3850);
    });
}

// ==========================================================================
// Fitur Baru 3: Dinding Catatan Manis Pengunjung (Sweet Sticky Notes) 💌📌
// ==========================================================================
const stickyNotesData = [
    {
        id: 1,
        author: "Nadia & Raka",
        message: "Tempat date paling lucu di Bandung! Pink Sakura Latte-nya wajib banget dicoba 🌸💖",
        color: "pink",
        sticker: "🧸",
        likes: 14
    },
    {
        id: 2,
        author: "Alya Putri",
        message: "Suka banget sama desain kafenya yang gemas! Croissant stroberinya renyah pol 🍓🥐",
        color: "peach",
        sticker: "🍓",
        likes: 9
    },
    {
        id: 3,
        author: "Dary",
        message: "Nugas di lantai 2 nyaman banget, Wi-Fi kencang dan dapet diskon member 15%! ⚡👑",
        color: "lavender",
        sticker: "🐰",
        likes: 19
    },
    {
        id: 4,
        author: "Salsa",
        message: "Barusan putar roda gacha dan dapet gratis Pink Macaron! Makasih Ciyhuy Cafe 🎀🧁",
        color: "mint",
        sticker: "🐱",
        likes: 11
    }
];

const stickyNotesGrid = document.getElementById("stickyNotesGrid");
const sweetNoteForm = document.getElementById("sweetNoteForm");

function renderStickyNotes() {
    if (!stickyNotesGrid) return;
    stickyNotesGrid.innerHTML = stickyNotesData
        .map(
            (note) => `
            <div class="sticky-note color-${note.color}">
                <span class="sticky-pin">📌</span>
                <div class="sticky-top">
                    <span class="sticky-author">${note.author}</span>
                    <span class="sticky-sticker">${note.sticker}</span>
                </div>
                <p class="sticky-msg">"${note.message}"</p>
                <button type="button" class="sticky-like-btn" data-like-note="${note.id}">
                    💖 ${note.likes} Suka
                </button>
            </div>
        `
        )
        .join("");
}

if (sweetNoteForm) {
    sweetNoteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const author = document.getElementById("noteAuthor").value.trim();
        const message = document.getElementById("noteMessage").value.trim();
        const color = document.getElementById("noteColor").value;
        const sticker = document.getElementById("noteSticker").value;

        if (!author || !message) return;

        stickyNotesData.unshift({
            id: Date.now(),
            author,
            message,
            color,
            sticker,
            likes: 1
        });

        sweetNoteForm.reset();
        renderStickyNotes();
        showToast(`💌 Catatan manismu berhasil ditempel di dinding Ciyhuy!`);
    });
}

if (stickyNotesGrid) {
    stickyNotesGrid.addEventListener("click", (e) => {
        const likeBtn = e.target.closest("[data-like-note]");
        if (!likeBtn) return;
        const id = Number(likeBtn.dataset.likeNote);
        const targetNote = stickyNotesData.find((n) => n.id === id);
        if (targetNote) {
            targetNote.likes += 1;
            renderStickyNotes();
            if (e.clientX && e.clientY) spawnCuteParticles(e.clientX, e.clientY);
        }
    });
}

// ==========================================================================
// Fitur Baru 4: Maskot Kucing Cafe Mengambang (Mochi si Kucing Pink) 🐱🐾
// ==========================================================================
let petLove = 5;
const petEmoji = document.getElementById("petEmoji");
const petLoveCount = document.getElementById("petLoveCount");
const petSpeechBubble = document.getElementById("petSpeechBubble");
const petAvatarBtn = document.getElementById("petAvatarBtn");
const petPatBtn = document.getElementById("petPatBtn");
const petFeedBtn = document.getElementById("petFeedBtn");

const petPatQuotes = [
    "Purr~ Elusanmu hangat banget! Makasih yaa 🐾💖",
    "Meow~ Jangan lupa klaim kode promo SENJA20 di keranjang! 🌸",
    "Nyaa~ Hari ini kamu kelihatan manis banget seperti macaron! 🧁💕",
    "Purr~ Yuk cobain racik kopi pink versimu sendiri! 🍓✨"
];

function interactWithPet(mode, event) {
    petLove += mode === "feed" ? 3 : 1;
    if (petLoveCount) petLoveCount.textContent = `♥ ${petLove}`;

    if (mode === "feed") {
        if (petEmoji) petEmoji.textContent = "😻";
        if (petSpeechBubble) {
            petSpeechBubble.textContent = "Nyam nyam! Kue stroberinya enak banget! Sayang kamu +3 ♥ 🍰🍓";
        }
    } else {
        if (petEmoji) petEmoji.textContent = "😽";
        const quote = petPatQuotes[petLove % petPatQuotes.length];
        if (petSpeechBubble) petSpeechBubble.textContent = quote;
    }

    if (petAvatarBtn) {
        petAvatarBtn.classList.remove("jelly-pop");
        void petAvatarBtn.offsetWidth;
        petAvatarBtn.classList.add("jelly-pop");
    }

    if (event && event.clientX && event.clientY) {
        spawnCuteParticles(event.clientX, event.clientY);
    }

    setTimeout(() => {
        if (petEmoji) petEmoji.textContent = "🐱";
    }, 1800);
}

if (petAvatarBtn) petAvatarBtn.addEventListener("click", (e) => interactWithPet("pat", e));
if (petPatBtn) petPatBtn.addEventListener("click", (e) => interactWithPet("pat", e));
if (petFeedBtn) petFeedBtn.addEventListener("click", (e) => interactWithPet("feed", e));

// ==========================================================================
// Inisialisasi Awal
// ==========================================================================
setDefaultReservationDate();
updateStoreStatus();
renderMenu();
updateCoffeeBuilderUI();
updateAuthUI();
renderStickyNotes();
initSakuraPetals();
