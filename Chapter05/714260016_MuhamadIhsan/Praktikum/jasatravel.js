const bookingForm = document.getElementById("booking-form");
        const carSelect = document.getElementById("mobil");
        const formMessage = document.getElementById("form-message");
        const departureDate = document.getElementById("tanggal");
        const loginDialog = document.getElementById("login-dialog");
        const loginForm = document.getElementById("login-form");
        const loginMessage = document.getElementById("login-message");
        const loginButton = document.getElementById("login-open");
        const demoAccounts = [
            { email: "admin@jelajah.id", password: "jelajah123", role: "admin" },
            { email: "customer@jelajah.id", password: "jelajah123", role: "customer" }
        ];

        document.getElementById("year").textContent = new Date().getFullYear();
        departureDate.min = new Date().toISOString().split("T")[0];

        document.getElementById("login-open").addEventListener("click", () => {
            loginDialog.showModal();
        });

        document.getElementById("login-close").addEventListener("click", () => {
            loginDialog.close();
        });

        loginDialog.addEventListener("click", (event) => {
            if (event.target === loginDialog) loginDialog.close();
        });

        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!loginForm.reportValidity()) return;

            const formData = new FormData(loginForm);
            const email = formData.get("email").trim();
            const password = formData.get("password");

            const account = demoAccounts.find((demoAccount) =>
                demoAccount.email === email && demoAccount.password === password
            );

            if (account) {
                const roleLabel = account.role === "admin" ? "admin" : "customer";
                loginMessage.textContent = `Login demo berhasil sebagai ${roleLabel}.`;
                loginButton.textContent = `${roleLabel === "admin" ? "Admin" : "Customer"} (demo)`;
                return;
            }

            loginMessage.textContent = "Email atau kata sandi tidak sesuai dengan akun demo.";
        });

        document.querySelectorAll(".book-car").forEach((button) => {
            button.addEventListener("click", () => {
                carSelect.value = button.dataset.car;
                document.getElementById("pesan").scrollIntoView({ behavior: "smooth" });
                document.getElementById("nama").focus({ preventScroll: true });
            });
        });

        bookingForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!bookingForm.reportValidity()) return;

            const formData = new FormData(bookingForm);
            const nama = formData.get("nama").trim();
            const asal = formData.get("asal").trim();
            const tujuan = formData.get("tujuan").trim();
            formMessage.textContent = `Terima kasih, ${nama}! Permintaan perjalanan ${asal} ke ${tujuan} sudah tercatat. Tim kami akan menghubungi Anda untuk konfirmasi.`;
        });
