  // ==========================================
  // 1. NAVIGASI PINDAH HALAMAN (HOME VS KATALOG)
  // ==========================================
  const navHome = document.getElementById('navHome');
  const navProducts = document.getElementById('navProducts');
  const btnGoToProducts = document.getElementById('btnGoToProducts');
  const homeSection = document.getElementById('homeSection');
  const productsSection = document.getElementById('productsSection');

  // Cek memori halaman terakhir saat halaman pertama kali dimuat (Refresh aman)ch
  window.addEventListener('DOMContentLoaded', () => {
    const lastPage = localStorage.getItem('mamba_active_page');
    if (lastPage === 'products') {
      homeSection.classList.add('hidden');
      productsSection.classList.remove('hidden');
    } else {
      homeSection.classList.remove('hidden');
      productsSection.classList.add('hidden');
    }
  });

  navHome.addEventListener('click', (e) => {
    e.preventDefault();
    homeSection.classList.remove('hidden');
    productsSection.classList.add('hidden');
    localStorage.setItem('mamba_active_page', 'home');
  });

  navProducts.addEventListener('click', (e) => {
    e.preventDefault();
    homeSection.classList.add('hidden');
    productsSection.classList.remove('hidden');
    localStorage.setItem('mamba_active_page', 'products');
  });

  if (btnGoToProducts) {
    btnGoToProducts.addEventListener('click', () => {
      homeSection.classList.add('hidden');
      productsSection.classList.remove('hidden');
      localStorage.setItem('mamba_active_page', 'products');
    });
  }


  // ==========================================
  // 2. TOGGLE DARK / LIGHT MODE
  // ==========================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const body = document.body;

  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    themeToggleBtn.textContent = body.classList.contains('light-mode') ? '🌙 Dark Mode' : '☀️ Light Mode';
  });


  // ==========================================
  // 3. FILTER KATEGORI PRODUK
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const selectedCategory = button.getAttribute('data-category');
      productCards.forEach(card => {
        const productCategory = card.getAttribute('data-category');
        card.style.display = (selectedCategory === 'all' || selectedCategory === productCategory) ? 'block' : 'none';
      });
    });
  });


  // ==========================================
  // 4. KERANJANG BELANJA & TOTAL HARGA
  // ==========================================
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartCountElement = document.getElementById('cartCount');
  const totalPriceElement = document.getElementById('totalPrice');

  let cartCount = 0;
  let totalAmount = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const price = parseInt(button.getAttribute('data-price'));
      cartCount++;
      totalAmount += price;

      cartCountElement.textContent = cartCount;
      totalPriceElement.textContent = 'Rp ' + totalAmount.toLocaleString('id-ID');
      alert('Produk ditambahkan ke keranjang!');
    });
  });


  // ==========================================
  // 5. MODAL & AUTHENTICATION (LOGIN/REGISTER/LOGOUT)
  // ==========================================
  const openAuthBtn = document.getElementById('openAuthBtn');
  const authModal = document.getElementById('authModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const tabLoginBtn = document.getElementById('tabLoginBtn');
  const tabRegisterBtn = document.getElementById('tabRegisterBtn');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const userStatus = document.getElementById('userStatus');
  const logoutBtn = document.getElementById('logoutBtn');

  openAuthBtn.addEventListener('click', () => authModal.style.display = 'flex');
  closeModalBtn.addEventListener('click', () => authModal.style.display = 'none');

  tabLoginBtn.addEventListener('click', () => {
    tabLoginBtn.classList.add('active');
    tabRegisterBtn.classList.remove('active');
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
  });

  tabRegisterBtn.addEventListener('click', () => {
    tabRegisterBtn.classList.add('active');
    tabLoginBtn.classList.remove('active');
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    localStorage.setItem('mamba_user', username);
    localStorage.setItem('mamba_pass', password);

    alert('Registrasi Berhasil! Silakan Login.');
    tabLoginBtn.click();
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputUser = document.getElementById('loginUsername').value;
    const inputPass = document.getElementById('loginPassword').value;

    const savedUser = localStorage.getItem('mamba_user');
    const savedPass = localStorage.getItem('mamba_pass');

    if (inputUser === savedUser && inputPass === savedPass) {
      alert('Login Berhasil! Selamat Datang, ' + inputUser);
      authModal.style.display = 'none';
      openAuthBtn.classList.add('hidden');
      userStatus.textContent = '👤 Hi, ' + inputUser;
      logoutBtn.classList.remove('hidden');
    } else {
      alert('Username/Password Salah atau Belum Register!');
    }
  });

  logoutBtn.addEventListener('click', () => {
    alert('Anda telah logout.');
    userStatus.textContent = '';
    logoutBtn.classList.add('hidden');
    openAuthBtn.classList.remove('hidden');
  });


  // ==========================================
  // 6. CHECKOUT & PROSES PEMBAYARAN
  // ==========================================
  const checkoutBtn = document.getElementById('checkoutBtn');
  const checkoutModal = document.getElementById('checkoutModal');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  const confirmOrderBtn = document.getElementById('confirmOrderBtn');

  const checkoutUser = document.getElementById('checkoutUser');
  const checkoutItems = document.getElementById('checkoutItems');
  const checkoutTotal = document.getElementById('checkoutTotal');

  checkoutBtn.addEventListener('click', () => {
    const savedUser = localStorage.getItem('mamba_user');

    if (cartCount === 0) {
      alert('Keranjang kamu masih kosong! Pilih barang dulu.');
      return;
    }

    if (!savedUser || userStatus.textContent === '') {
      alert('Silakan Login dulu sebelum melakukan Checkout!');
      authModal.style.display = 'flex';
      return;
    }

    checkoutUser.textContent = savedUser;
    checkoutItems.textContent = cartCount;
    checkoutTotal.textContent = 'Rp ' + totalAmount.toLocaleString('id-ID');
    checkoutModal.style.display = 'flex';
  });

  closeCheckoutBtn.addEventListener('click', () => {
    checkoutModal.style.display = 'none';
  });

  confirmOrderBtn.addEventListener('click', () => {
    const selectedPayment = document.getElementById('paymentMethod').value;
    
    alert(`Pesanan Berhasil Disimpan!\n\nMetode Pembayaran: ${selectedPayment}\nTotal: Rp ${totalAmount.toLocaleString('id-ID')}\n\nTerima kasih sudah belanja di MAMBA FASHION BDG!`);

    cartCount = 0;
    totalAmount = 0;
    cartCountElement.textContent = 0;
    totalPriceElement.textContent = 'Rp 0';
    checkoutModal.style.display = 'none';
  });