const menus = [
  {nama:"Espresso",kategori:"kopi",best:true,harga:28000,desc:"Kopi hitam pekat, bold & klasik",img:"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80"},
  {nama:"Cappuccino",kategori:"kopi",best:true,harga:35000,desc:"Espresso dengan steamed milk yang lembut",img:"https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80"},
  {nama:"Kopi Susu Senja",kategori:"kopi",best:false,harga:32000,desc:"Kopi susu gula aren khas Kopi Senja",img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80"},
  {nama:"Cafe Latte",kategori:"kopi",best:false,harga:25000,desc:"Espresso + susu steamed creamy",img:"https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80"},
  {nama:"Lychee Tea",kategori:"nonkopi",best:false,harga:22000,desc:"Teh + sirup leci segar",img:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80"},
  {nama:"Croissant",kategori:"makanan",best:false,harga:20000,desc:"Roti mentega renyah",img:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80"},
  {nama:"Nasi Goreng Senja",kategori:"makanan",best:false,harga:35000,desc:"Nasi goreng spesial cafe",img:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80"},
  {nama:"Brownies",kategori:"makanan",best:true,harga:24000,desc:"Brownies coklat lumer",img:"https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80"},
];

const menuGrid = document.getElementById("menuGrid");
function tampilkanMenu(data){
  menuGrid.innerHTML = "";
  data.forEach(item => {
    const idx = menus.indexOf(item);
    menuGrid.innerHTML += `
    <div class="menu-card">
      ${item.best ? `<span class="badge">Best Seller</span>` : ""}
      <img src="${item.img}" alt="${item.nama}">
      <div class="card-body">
        <h3>${item.nama}</h3>
        <p>${item.desc}</p>
        <div class="card-bottom">
          <b>Rp ${item.harga.toLocaleString()}</b>
          <button class="add-btn" onclick="tambahPesanan(${idx})">+</button>
        </div>
      </div>
    </div>`;
  });
}
tampilkanMenu(menus);

// Filter
let filterAktif = "all";
let keyword = "";
function filterData(){
  let hasil = menus;
  if(filterAktif==="best") hasil = hasil.filter(m=>m.best);
  else if(filterAktif!=="all") hasil = hasil.filter(m=>m.kategori===filterAktif);
  if(keyword) hasil = hasil.filter(m=>m.nama.toLowerCase().includes(keyword));
  tampilkanMenu(hasil);
}
document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    filterAktif = btn.dataset.filter;
    filterData();
  });
});
document.getElementById("searchInput").addEventListener("input",e=>{
  keyword = e.target.value.toLowerCase();
  filterData();
});

// Cart
let cart=[], total=0;
function tambahPesanan(i){
  cart.push(menus[i]); total+=menus[i].harga;
  updateCart();
}
function updateCart(){
  document.getElementById("cartCount").textContent = cart.length;
  document.getElementById("cartTitleCount").textContent = cart.length;
  document.getElementById("totalHarga").textContent = total.toLocaleString();
  if(cart.length===0) document.getElementById("cartList").innerHTML = `<li class="empty">Belum ada pesanan.</li>`;
  else document.getElementById("cartList").innerHTML = cart.map(c=>`<li><span>${c.nama} x1</span><b>Rp ${c.harga.toLocaleString()}</b></li>`).join("");
}
document.getElementById("checkoutBtn").addEventListener("click",()=>{
  const msg = document.getElementById("checkoutMsg");
  if(cart.length===0){ msg.textContent="Keranjang masih kosong!"; msg.style.color="red"; }
  else{ msg.textContent=`Terima kasih! Pesanan Rp ${total.toLocaleString()} sedang diproses.`; msg.style.color="green"; cart=[]; total=0; updateCart(); }
});
document.getElementById("hamburger").addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("show"));
document.getElementById("modeBtn").addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  document.getElementById("modeBtn").textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});