// ==========================================
// DATA DUMMY AKUN (2 AKUN DUMMY)
// ==========================================
const dummyUsers = [
    {
        email: "metalhead@gmail.com",
        password: "metal123",
        name: "Metalhead Sejati"
    },
    {
        email: "headbanger@gmail.com",
        password: "head123",
        name: "Headbanger Pro"
    }
];

// ==========================================
// ELEMEN DOM
// ==========================================
const authSection = document.getElementById('auth-section');
const mainContent = document.getElementById('main-content');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegisterBtn = document.getElementById('show-register');
const showLoginBtn = document.getElementById('show-login');

const userDisplayName = document.getElementById('user-display-name');
const btnLogout = document.getElementById('btn-logout');

// Modal & Checkout Elements
const checkoutModal = document.getElementById('checkout-modal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalTicketType = document.getElementById('modal-ticket-type');
const modalTicketPrice = document.getElementById('modal-ticket-price');
const ticketQtyInput = document.getElementById('ticket-qty');
const btnConfirmPay = document.getElementById('btn-confirm-pay');
const buyButtons = document.querySelectorAll('.btn-buy');

// E-Ticket & QR Elements
const modalBodyContent = document.getElementById('modal-body-content');
const eticketResult = document.getElementById('eticket-result');
const qrcodeContainer = document.getElementById('qrcode');
const ticketIdCode = document.getElementById('ticket-id-code');
const btnCloseTicket = document.getElementById('btn-close-ticket');

let selectedPricePerItem = 0;
let qrCodeInstance = null; // Menyimpan objek QR code

// ==========================================
// 1. NAVIGATION BETWEEN LOGIN & REGISTER
// ==========================================
showRegisterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

showLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// ==========================================
// 2. LOGIKA LOGIN & REGISTRASI
// ==========================================
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('login-email').value.trim();
    const passwordInput = document.getElementById('login-password').value.trim();

    const foundUser = dummyUsers.find(
        user => user.email === emailInput && user.password === passwordInput
    );

    if (foundUser) {
        alert(`Selamat datang di arena, ${foundUser.name}! 🤘🔥`);
        localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
        showMainApp(foundUser.name);
        loginForm.reset();
    } else {
        alert("❌ Email atau Password salah!\n");
    }
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('reg-name').value.trim();
    const emailInput = document.getElementById('reg-email').value.trim();
    const passwordInput = document.getElementById('reg-password').value.trim();

    const existingUser = dummyUsers.find(user => user.email === emailInput);
    if (existingUser) {
        alert("❌ Email ini sudah terdaftar!");
        return;
    }

    const newUser = { name: nameInput, email: emailInput, password: passwordInput };
    dummyUsers.push(newUser);

    alert("✅ Akun berhasil dibuat! Silakan masuk.");
    registerForm.reset();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

btnLogout.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    mainContent.classList.add('hidden');
    authSection.classList.remove('hidden');
    alert("Kamu telah keluar dari arena. ☠️");
});

function showMainApp(userName) {
    userDisplayName.textContent = userName;
    authSection.classList.add('hidden');
    mainContent.classList.remove('hidden');
}

window.addEventListener('DOMContentLoaded', () => {
    const savedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (savedUser) {
        showMainApp(savedUser.name);
    }
});

// ==========================================
// 3. LOGIKA PEMBELIAN TIKET & QR CODE
// ==========================================
buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const ticketCategory = e.target.getAttribute('data-ticket');
        selectedPricePerItem = parseInt(e.target.getAttribute('data-price'));

        // Reset tampilan modal ke mode form pembelian
        modalTitle.textContent = "KONFIRMASI PEMBELIAN";
        modalBodyContent.classList.remove('hidden');
        eticketResult.classList.add('hidden');

        modalTicketType.textContent = ticketCategory;
        ticketQtyInput.value = 1;
        updateTotalPrice();

        checkoutModal.classList.remove('hidden');
    });
});

ticketQtyInput.addEventListener('input', updateTotalPrice);

function updateTotalPrice() {
    const qty = parseInt(ticketQtyInput.value) || 1;
    const totalPrice = selectedPricePerItem * qty;
    modalTicketPrice.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
}

// Tutup Modal dengan tombol (x)
closeModal.addEventListener('click', () => {
    checkoutModal.classList.add('hidden');
});

// Tutup modal dengan tombol "SELESAI" di e-ticket
btnCloseTicket.addEventListener('click', () => {
    checkoutModal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
        checkoutModal.classList.add('hidden');
    }
});

// Ketika Tombol Bayar Sekarang Ditekan -> Generate QR Code
btnConfirmPay.addEventListener('click', () => {
    const qty = ticketQtyInput.value;
    const ticketType = modalTicketType.textContent;
    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
    
    // Buat kode unik tiket (Contoh: SKULL-2026-X9A2)
    const randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
    const uniqueTicketId = `SKULL-2026-${randomString}`;

    // Sembunyikan form pembayaran, tampilkan e-ticket section
    modalTitle.textContent = "E-TICKET KONSER";
    modalBodyContent.classList.add('hidden');
    eticketResult.classList.remove('hidden');
    ticketIdCode.textContent = uniqueTicketId;

    // Bersihkan QR Code lama jika ada
    qrcodeContainer.innerHTML = "";

    // Data yang akan tersimpan di dalam QR Code saat di-scan petugas gate
    const qrTextContent = `EVENT: SKULL CRUSH FESTIVAL 2026\nKATEGORI: ${ticketType}\nJUMLAH: ${qty} Tiket\nNAMA: ${currentUser ? currentUser.name : 'Metalhead'}\nID: ${uniqueTicketId}`;

    // Generate QR Code baru menggunakan library qrcode.js
    new QRCode(qrcodeContainer, {
        text: qrTextContent,
        width: 160,
        height: 160,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});