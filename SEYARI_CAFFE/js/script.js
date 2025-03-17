const coffeeMenu = [
    { name: "Dalgona Coffe", price: "Rp 15.000", img: "assets/dalgona.jpg" },
    { name: "Ice Coffe", price: "Rp 20.000", img: "assets/ice-coffe.jpg" },
    { name: "Latte", price: "Rp 28.000", img: "assets/latte.jpg" }
];

const cakeMenu = [
    { name: "Lotus Cake", price: "Rp 30.000", img: "assets/cake lotus.jpg" },
    { name: "Pancake", price: "Rp 35.000", img: "assets/pancake.jpg" },
    { name: "Tiramisu", price: "Rp 40.000", img: "assets/tiramisu.jpg" },
    { name: "Redvelvet", price: "Rp 40.000", img: "assets/reddvelvet.jpg" },
    { name: "Choco Strawberry", price: "Rp 40.000", img: "assets/choco strawberry.jpg" }
];



function showMenu(category, containerId) {
    let menuList = document.getElementById(containerId);
    menuList.innerHTML = "";

    let selectedMenu = category === "coffee" ? coffeeMenu : cakeMenu;

    selectedMenu.forEach(item => {
        let menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <button onclick="addToCart('${item.name}', '${item.price}')">Tambahkan</button>
        `;
        menuList.appendChild(menuItem);
    });
}

let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    alert(`✅ ${itemName} telah ditambahkan ke pesanan!`);
}

function confirmOrder() {
    if (cart.length === 0) {
        alert("Keranjang kosong! Pilih menu dulu.");
    } else {
        alert("Pesanan berhasil dikonfirmasi! 🍰☕");
        cart = [];
    }
}
