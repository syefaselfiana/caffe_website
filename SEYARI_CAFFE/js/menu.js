// Daftar menu Cake dan Coffee
const menuData = {
    cake: [
        {  name: "Lotus Cake", price: "Rp 30.000", img: "assets/cake lotus.jpg" },
        { name: "Pancake", price: "Rp 35.000", img: "assets/pancake.jpg" },
        { name: "Tiramisu", price: "Rp 40.000", img: "assets/tiramisu.jpg" },
        { name: "Redvelvet", price: "Rp 40.000", img: "assets/reddvelvet.jpg" },
        { name: "Choco Strawberry", price: "Rp 40.000", img: "assets/choco strawberry.jpg" }
    ],
    coffee: [
        { name: "Dalgona Coffe", price: "Rp 25.000", img: "assets/dalgona.jpg" },
        { name: "Ice Coffe", price: "Rp 30.000", img: "assets/ice-coffe.jpg" },
        { name: "Latte", price: "Rp 28.000", img: "assets/latte.jpg" }
    ]
};

// Fungsi untuk menampilkan menu sesuai kategori
function showMenu(category) {
    let menuList = document.getElementById("menu-list");
    menuList.innerHTML = ""; // Bersihkan menu sebelumnya

    menuData[category].forEach(item => {
        let menuItem = `
            <div class="menu-item">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>
        `;
        menuList.innerHTML += menuItem;
    });
}
