const container = document.querySelector("#clothes-list");
const removeVoucherBtn = document.querySelector("#removeVoucher");
const addProductBtn = document.querySelector("#addProduct");
const stopAlertBtn = document.querySelector("#stopAlerts");

const showPriceBtn = document.querySelector("#showPrice");

let discount = Math.random() * 100;

discount = discount.toString();
discount = "Reduceri de pana la " + discount + ' %';
var clothesArray = [];
var totalPrice = 0;
let color = randomColor(); //Folosesc o functie importata din npm

//Ne da un alert , care va aparea la 4 secunde dupa ce intru pe pagina
function showAlert() {

    setTimeout(function() {
        Swal.fire(discount);
    }, 4000);
    console.log("alert");
}
showAlert();


document.getElementById("showPrice").addEventListener("click", displayPrice);

function displayPrice() {
    document.getElementById("total_price").innerHTML = totalPrice;
}


document.getElementById("title").style.color = color;
//Iau titlul si ii dau o culoare generata random, care se va schimba de fiecare data cand dam
//refresh paginii


const backgroundTheme = localStorage.getItem("background-theme");

if (backgroundTheme == "Sea")
    document.body.style.backgroundImage = "url(sea.jpg)";

if (backgroundTheme == "Pink")
    document.body.style.backgroundImage = "url(pink.jpg)";


if (backgroundTheme == "Party")
    document.body.style.backgroundImage = "url(party.jpg)";


const listTag = document.getElementsByTagName("list");
var iconArray = ["10% voucher", "20% voucher"];
var myInteval;
var isUserDisplayed = false;

//Event listener pentru butonul de adaugare , ne redirectioneaza catre o pagina 
//unde vom putea adauga un nou item
addProductBtn.addEventListener("click", async function(event) {
    //Se opreste la click-ul efectuat si nu se propaga mai departe in copii
    event.preventDefault();
    window.location.replace("file:///C:/Users/Miruna/Desktop/web/Proiect/javascript-project/frontend/add-product-page.html");
});


//Event listener pentru butonul de remove 
removeVoucherBtn.addEventListener("click", async function() {
    iconArray.pop();
    console.log("new array", iconArray);
    showViewPage()

});

//Event listener pentru butonul de oprire a "alert"-urilor

stopAlertBtn.addEventListener("click", async function() {
    console.log(localStorage)
    localStorage.removeItem("messageOffer");
    console.log(localStorage)
    clearInterval(myInterval);

});

//Initialize

function initializeItems() {
    const removeArray = document.querySelectorAll(".remove_item");
    const shopBtnArray = document.querySelectorAll("#shop");

    //Pentru fiecare element, cand apas butonul de delete,
    //facem trimitere catre server, catre metoda de delete
    removeArray.forEach(removeItemBtn => {
        removeItemBtn.addEventListener("click", async function() {
            let id = removeItemBtn.parentElement.parentElement.dataset.id;
            console.log("id este", id);
            //Ii spunem ce element din server sa stearga, adaugand id-ul
            const url = "http://localhost:4200/delete-clothes/" + id;
            console.log(url);
            const status = await deleteProduct(url);
            console.log(status);
            showViewPage();
        })
    });

    //Cand apasam butonul de shop vrem sa ne adune pretul acestuia intr-o variabila
    shopBtnArray.forEach(shopItemBtn => {
        shopItemBtn.addEventListener("click", async function() {
            const id = shopItemBtn.parentElement.parentElement.dataset.id;
            const foundItem = Object.values(clothesArray).find(item => item.id.id === id);
            console.log("FoundItem:", foundItem);
            totalPrice = totalPrice + parseInt(foundItem.id.price);
            console.log("Total price: ", totalPrice);
        })
    })

}


function addVoucherInArray(voucherString = '') {
    iconArray.push(voucherString);
    console.log(voucherString);
}

//Am folosit functia de pop
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
    clothesArray = await response.json(); //Primim din beckend raspunsul, array-ul nostru de haine
    //si il stocam intr-o variabila
    container.innerHTML = ''
    console.log("clothesArray:", clothesArray);
    const user = localStorage.getItem("userName"); ///Luam numele user-ului din pagina cu formularul


    if (user && !isUserDisplayed) {
        isUserDisplayed = true;
        // Creez un nou element header
        const header = document.createElement("h2");
        // Adaug numele utilizatorului completat in formular
        const node = document.createTextNode(`Welcome to our online shop, ${user}  !`);
        //Punem textul in variabila nostra
        header.appendChild(node);
        // adaugam elementul nostru nou-creat in header, folosind DOM
        var currentHeader = document.getElementById("header");
        document.body.insertBefore(header, currentHeader);
    }

    //La fiecare 10 de secunde va afisa mesajul stocal in localStorege,pana cand 
    //apelam functia de clearInterval
    myInterval = setInterval(function() {
        if (localStorage.getItem("messageOffer")) {
            const msj = localStorage.getItem("messageOffer");
            Swal.fire({
                title: msj,
                width: 600,
                padding: '3em',
                background: '#fff url(discount.jpg)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  left top
                  no-repeat
                `
            })

        }
    }, 10000);
    showIconsList(iconArray);
    console.log(localStorage.getItem("userName"));

    //Folosim Template literals 

    clothesArray.forEach(element => {
        const item = Object.values(element)[0];
        const product = `<div class="item" data-id=${item.id}>
        <h3>Name: ${item.name}</h3>
        <h3>Price: ${item.price}</h3>
        <img src=${item.image} alt="https://micilevedete.ro/wp-content/uploads/2017/04/yellow.png">
        <div class="menu">
            <button id="shop" >Shop</button>
            <i class="remove_item" aria-hidden="true">X</i>
        </div>`
        container.insertAdjacentHTML("beforeend", product); ///Va insera datele despre item pe pozitie
        ///la finalul fisierului HTML
    });


    initializeItems();
}

//Delete product
async function deleteProduct(url = '') {
    const response = await fetch(url, {
        method: 'DELETE', // Face trimitere catre server, catre metoda de stergere a unui element 
    });
    return response;

}

showViewPage()


input.onchange = function() { //Nu putem accesa URL-ul unui file local doar folosind 
    //input type-ul, avem nevoie de un fileReader pentru a putea incarca dinamic un
    //fisier audio
    var sound = document.getElementById('audio');
    var reader = new FileReader();
    reader.onload = function(e) {
        sound.src = this.result;
        sound.controls = true;
        sound.play();
    };
    reader.readAsDataURL(this.files[0]);
}