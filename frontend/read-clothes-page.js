const container = document.querySelector("#clothes-list");
const removeVoucherBtn = document.querySelector("#removeVoucher");
const addProductBtn = document.querySelector("#addProduct");
const stopAlertBtn = document.querySelector("#stopAlerts");

const listTag = document.getElementsByTagName("list");
var iconArray = ["10% voucher", "20% voucher"];
var myInteval;
var isUserDisplayed = false;

//Event listener for add button
addProductBtn.addEventListener("click", async function(event) {
    //Se opreste la click-ul efectuat si nu se propaga mai departe in copii
    //atunci cand ai o structura complexa cu mai multe obiecte, divuri sau imagini
    event.preventDefault();
    window.location.replace("file:///C:/Users/Miruna/Desktop/web/Proiect/javascript-project/frontend/add-product-page.html");
});

//Event listener for remove button
removeVoucherBtn.addEventListener("click", async function() {
    iconArray.pop();
    console.log("new array", iconArray);
    showViewPage()

});

//Event listener for stop allerts
stopAlertBtn.addEventListener("click", async function() {
    console.log(localStorage)
    localStorage.removeItem("messageOffer");
    console.log(localStorage)
    clearInterval(myInterval);

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

function addVoucherInArray(voucherString = '') {
    iconArray.push(voucherString);
    console.log(voucherString);
}

//Icon list to use pop function from array/Voucher list
function showIconsList() {
    iconArray.forEach(icon => {
        const view = `<div class="item">
        <span>${icon}</span>
        </div>`
        container.insertAdjacentHTML("beforeend", view);

    });
}

//Get products
async function showViewPage() {
    localStorage.setItem("messageOffer", "Nu uita sa verifici ofertele");

    const response = await fetch('http://localhost:4200/get-clothes');
    const clothesArray = await response.json();
    container.innerHTML = ''
    console.log("clothesArray", clothesArray);
    const user = localStorage.getItem("userName");
    if (user && !isUserDisplayed) {
        isUserDisplayed = true;
        // create a new header element
        const header = document.createElement("h2");
        //add some content text for header
        const node = document.createTextNode(`Welcome ${user} This is new`);
        //add the text to header
        header.appendChild(node);
        // add the newly created element and its content into the DOM 
        var currentHeader = document.getElementById("header");
        document.body.insertBefore(header, currentHeader);
    }
    myInterval = setInterval(function() {
        if (localStorage.getItem("messageOffer")) {
            alert(localStorage.getItem("messageOffer"))
        } else {
            alert("Verifica vouchere!")
        }
    }, 10000);
    showIconsList(iconArray);
    console.log(localStorage.getItem("userName"));

    //Punctul de creare/stergere elemente intra aici la template literals?
    clothesArray.forEach(element => {
        const item = Object.values(element)[0];
        const product = `<div class="item" data-id=${item.id}>
        <h3>Name: ${item.name}</h3>
        <h3>Price: ${item.price}</h3>
        <img src=${item.image} alt="https://micilevedete.ro/wp-content/uploads/2017/04/yellow.png">
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