// FITUR 1: FILTER DAN SEARCH MENU

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");
const searchInput = document.getElementById("search");
const emptyMessage = document.getElementById("emptyMessage");

let selectedCategory = "all";

function filterMenu() {
    let keyword = searchInput.value.toLowerCase();
    let count = 0;

    menuCards.forEach(card => {
        let category = card.dataset.category;
        let name = card.dataset.name.toLowerCase();

        let categoryMatch =
            selectedCategory === "all" ||
            category === selectedCategory;

        let searchMatch = name.includes(keyword);

        if (categoryMatch && searchMatch) {
            card.style.display = "block";
            count++;
        } else {
            card.style.display = "none";
        }
    });

    emptyMessage.hidden = count > 0;
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        filterMenu();
    });
});

searchInput.addEventListener("input", filterMenu);


// FITUR 2: SHOPPING CART

let cart = [];

const cartItems = document.getElementById("cartItems");
const totalElement = document.getElementById("total");

function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(number);
}

document.querySelectorAll(".add-btn").forEach(button => {
    button.addEventListener("click", () => {

        let name = button.dataset.name;
        let price = Number(button.dataset.price);

        let existing = cart.find(item => item.name === name);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        renderCart();

        alert(name + " berhasil ditambahkan!");
    });
});

function renderCart() {
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        let li = document.createElement("li");

        li.innerHTML = `
            ${item.name} x ${item.quantity}
            - ${formatRupiah(item.price * item.quantity)}
            <button class="remove-btn" data-index="${index}">
                Hapus
            </button>
        `;

        cartItems.appendChild(li);
    });

    totalElement.textContent = formatRupiah(total);

    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", () => {
            cart.splice(Number(button.dataset.index), 1);
            renderCart();
        });
    });
}


// FITUR 3: DARK MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀";
    } else {
        themeToggle.textContent = "☾";
    }
});


// CHECKOUT

document.getElementById("checkout").addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    let total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    alert(
        "Terima kasih sudah memesan di Harbymo!\n" +
        "Total pembayaran: " + formatRupiah(total)
    );

    cart = [];
    renderCart();
});