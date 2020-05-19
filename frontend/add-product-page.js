const createNewProductBtn = document.querySelector("#createBtn");

//Event listener for add button
createNewProductBtn.addEventListener("click", async function() {

    console.log("Sunt in eventListener");
    const name = document.querySelector("#name").value;
    const description = document.querySelector("#description").value;
    const select = document.querySelector("#size");
    const size = select.options[select.selectedIndex].value;
    let type = ''
    if (document.querySelector('input[name="type"]:checked')) {
        type = document.querySelector('input[name="type"]:checked').value;
    }
    const price = document.getElementById("price").value;
    const image = document.querySelector("#image").value;

    const newProductBody = {
        name,
        description,
        size,
        type,
        price,
        image
    }
    console.log("Product", newProductBody);
    const url = 'http://localhost:4200/add-clothes';
    const responseFromServer = await addNewProduct(url, newProductBody);
    console.log(responseFromServer)
    window.location.replace("file:///C:/Users/Miruna/Desktop/web/Proiect/javascript-project/frontend/read-clothes-page.html");

})

//Add new product
async function addNewProduct(url = '', productBody = {}) {
    const response = await fetch(url, {
        method: 'POST', //Add product
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productBody)
    });
    return response.json;
}