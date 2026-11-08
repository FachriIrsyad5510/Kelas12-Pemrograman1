function switchTab(target) {
    const loginSection = document.getElementById("loginSection");
    const registerSection = document.getElementById("registerSection");
    const tabLogin = document.getElementById("tabLogin");
    const tabRegister = document.getElementById("tabRegister");

    if (target === 'login') {
        loginSection.style.display = "block";
        registerSection.style.display = "none";
        tabLogin.style.backgroundColor = "";
        tabRegister.style.backgroundColor = "#666"; 
    } else {
        loginSection.style.display = "none";
        registerSection.style.display = "block";
        tabRegister.style.backgroundColor = ""; 
        tabLogin.style.backgroundColor = "#666";
    }
}

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("regEmail").value.trim();
        const password = document.getElementById("regPassword").value;

        if (!email.includes("@")) {
            alert("Format email tidak valid! Harap masukkan email yang benar.");
            return;
        }

        if (password.length < 6) {
            alert("Kata sandi minimal harus 6 karakter!");
            return;
        }

        let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        const userExists = registeredUsers.find(user => user.email === email);
        if (userExists) {
            alert("Email ini sudah terdaftar! Silakan langsung login.");
            switchTab('login');
            return;
        }

        registeredUsers.push({ email: email, password: password });
        localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

        alert("Registrasi berhasil! Silakan masuk menggunakan akun Anda.");
        document.getElementById("registerForm").reset();
        switchTab('login'); 
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;
        const role = document.getElementById("roleSelect").value;

        if (role === "admin") {
            if (username === "admin" && password === "admin") {
                alert("Login Berhasil! Selamat datang, Admin.");
                window.location.href = "admin.html";
            } else {
                alert("Username atau Password Admin salah! (Gunakan username: admin dan password: admin)");
            }
            return;
        }

        if (!username.includes("@")) {
            alert("Login pelanggan wajib menggunakan email yang valid (mengandung '@') dan tidak boleh sembarang teks!");
            return;
        }

        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const foundUser = registeredUsers.find(user => user.email === username);

        if (!foundUser) {
            alert("Email belum terdaftar! Anda harus melakukan registrasi terlebih dahulu.");
            switchTab('register'); 
            return;
        }

        if (foundUser.password !== password) {
            alert("Kata sandi salah!");
            return;
        }

        alert("Login Berhasil! Selamat datang, " + username);
        window.location.href = "index.html";
    });
}

let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
}

function buyDirect(name, price) {
    cart = [{ name, price }];
    updateCartUI();
    checkoutCart();
}

function updateCartUI() {
    const cartList = document.getElementById("cartList");
    const cartTotalPrice = document.getElementById("cartTotalPrice");
    
    if (!cartList) return;

    if (cart.length === 0) {
        cartList.innerHTML = "<li>Keranjang masih kosong.</li>";
        cartTotalPrice.innerText = "Rp 0";
        return;
    }

    cartList.innerHTML = "";
    let total = 0;
    cart.forEach((item) => {
        total += item.price;
        cartList.innerHTML += `<li><span>${item.name}</span> <span>Rp ${item.price.toLocaleString()}</span></li>`;
    });
    cartTotalPrice.innerText = `Rp ${total.toLocaleString()}`;
}

function checkoutCart() {
    if (cart.length === 0) {
        alert("Keranjang Anda masih kosong!");
        return;
    }

    const queueNo = "KS-" + Math.floor(100 + Math.random() * 900);
    let total = cart.reduce((sum, item) => sum + item.price, 0);

    const orderData = {
        id: queueNo,
        items: [...cart],
        total: total,
        status: "Menunggu Konfirmasi"
    };

    localStorage.setItem("activeOrder", JSON.stringify(orderData));
    displayReceipt(orderData);
    
    cart = [];
    updateCartUI();
    alert("Pesanan berhasil dibuat! Struk antrian diterbitkan.");
}

function displayReceipt(order) {
    const receiptSection = document.getElementById("receiptSection");
    const queueNumber = document.getElementById("queueNumber");
    const receiptItemList = document.getElementById("receiptItemList");
    const receiptTotal = document.getElementById("receiptTotal");

    if (!receiptSection) return;

    receiptSection.style.display = "block";
    queueNumber.innerText = order.id;
    receiptItemList.innerHTML = "";

    order.items.forEach(i => {
        receiptItemList.innerHTML += `<li><span>${i.name}</span> <span>Rp ${i.price.toLocaleString()}</span></li>`;
    });
    receiptTotal.innerText = `Rp ${order.total.toLocaleString()}`;
}

function cancelOrder() {
    if (confirm("Yakin ingin membatalkan pesanan ini?")) {
        localStorage.removeItem("activeOrder");
        document.getElementById("receiptSection").style.display = "none";
        alert("Pesanan dibatalkan dan struk telah dihapus.");
    }
}

function loadAdminOrders() {
    const adminContainer = document.getElementById("adminOrderContainer");
    if (!adminContainer) return;

    const order = JSON.parse(localStorage.getItem("activeOrder"));

    if (!order) {
        adminContainer.innerHTML = `<p style="text-align: center; color: #666;">Belum ada pesanan masuk saat ini.</p>`;
        return;
    }

    let itemsHtml = order.items.map(i => `<li>${i.name} (Rp ${i.price.toLocaleString()})</li>`).join("");

    adminContainer.innerHTML = `
        <div class="admin-order-card">
            <div>
                <h4>No. Antrian: ${order.id}</h4>
                <ul style="margin: 5px 0 10px 15px; font-size: 14px;">${itemsHtml}</ul>
                <p><strong>Total: Rp ${order.total.toLocaleString()}</strong></p>
            </div>
            <div>
                <button class="btn-confirm" onclick="confirmOrder()">Konfirmasi Selesai</button>
            </div>
        </div>
    `;
}

function confirmOrder() {
    alert("Pesanan telah dikonfirmasi oleh Admin!");
    localStorage.removeItem("activeOrder");
    loadAdminOrders();
}

document.addEventListener("DOMContentLoaded", function() {
    const savedOrder = JSON.parse(localStorage.getItem("activeOrder"));
    if (savedOrder && document.getElementById("receiptSection")) {
        displayReceipt(savedOrder);
    }

    loadAdminOrders();

    const reviewForm = document.getElementById("reviewForm");
    if (reviewForm) {
        reviewForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("reviewerName").value;
            const rating = document.getElementById("reviewRating").value;
            const comment = document.getElementById("reviewComment").value;
            const container = document.getElementById("reviewContainer");

            const newCard = document.createElement("div");
            newCard.classList.add("review-card");
            newCard.innerHTML = `
                <div class="stars">${rating}</div>
                <p class="review-text">"${comment}"</p>
                <span class="reviewer-name">- ${name}</span>
            `;

            container.prepend(newCard);
            alert("Terima kasih! Ulasan Anda berhasil ditambahkan.");
            reviewForm.reset();
        });
    }
});