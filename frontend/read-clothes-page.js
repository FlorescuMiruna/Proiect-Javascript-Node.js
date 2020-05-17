const container = document.querySelector("#clothes-list");
const removeVoucherBtn = document.querySelector("#removeVoucher")
const addProductBtn = document.querySelector("#addProduct")

const listTag = document.getElementsByTagName("list");
var iconArray = ["10%voucher", "20%voucher", "30%voucher"];

//Event listener for add button
addProductBtn.addEventListener("click", async function() {
    window.location.replace("file:///C:/Users/Miruna/Desktop/Proiect/javascript-project/frontend/add-product-page.html");
});

//Event listener for remove button
removeVoucherBtn.addEventListener("click", async function() {
    iconArray.pop();
    console.log("new array", iconArray);
    showViewPage()

});

//Initialize
function initializeItems() {
    const removeArray = document.querySelectorAll(".remove_item");

    removeArray.forEach(removeItem => {
        removeItem.addEventListener("click", async function() {
            let id = removeItem.parentElement.parentElement.dataset.id;
            console.log("id este", id)
            const url = "http://localhost:4200/delete-clothes/" + id;
            console.log(url);
            const status = await deleteProduct(url);
            console.log(status);
            showViewPage();
        })
    });

}

//Icon list to use pop function from array/Voucher list
function showIconsList() {
    console.log(iconArray);
    iconArray.forEach(icon => {
        const view = `<div class="item">
        <span>${icon}</span>
        </div>`
        container.insertAdjacentHTML("beforeend", view);

    });
}

//Get products
async function showViewPage() {
    console.log("clothes page")
    const response = await fetch('http://localhost:4200/get-clothes');
    const clothesArray = await response.json();
    container.innerHTML = ''
    console.log("clothesArray", clothesArray)
    showIconsList(iconArray);
    //Punctul de creare/stergere elemente intra aici la template literals?
    clothesArray.forEach(element => {
        const item = Object.values(element)[0];
        const product = `<div class="item" data-id=${item.id}>
        <h3>Name: ${item.name}</h3>
        <h3>Price: ${item.price}</h3>
        <img src=${item.image} alt="imagine-haine">
        <div class="menu">
            <button>Shop</button>
            <i class="fa remove_item" aria-hidden="true">X</i>
        </div>`

        container.insertAdjacentHTML("beforeend", product);
    });
    initializeItems();
}

//Delete product
async function deleteProduct(url = '') {
    const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    });
    return response;

}

showViewPage()