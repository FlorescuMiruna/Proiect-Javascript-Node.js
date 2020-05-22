// These are Imports
const express = require('express');
const cors = require('cors');
const uid = require('uid'); //UID comes from Unique Identifier
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 4200;

const clothesMan = [{
        id: uid(5),
        name: 'Short jeans',
        description: 'This are summer green jeans for man',
        size: 'XL',
        type: 'Masc',
        category: 'Jeans',
        price: '150',
        image: 'https://images.timberland.com/is/image/TimberlandEU/A297TA58-hero?$PDP-FULL-IMAGE$'
    },
    {
        id: uid(5),
        name: 'Shirt',
        description: 'This is a red shirt for man',
        size: 'XL',
        type: 'Masc',
        category: 'Shirts',
        price: '170',
        image: 'https://rukminim1.flixcart.com/image/714/857/jiyvvrk0/shirt/g/v/r/40-bs-ns-002-bs-fashion-original-imaf4zyuppecyhbd.jpeg?q=50'
    },

    {
        id: uid(5),
        name: 'Biker jacket',
        description: 'This is a leather brown biker jacket for man',
        size: 'L',
        type: 'Masc',
        category: 'Jackets',
        price: '200',
        image: 'https://images.thejacketmaker.com/Mens-Ionic-Brown+Leather-Jacket1-1540266334298-2-1570100475366'
    }

]
let clothes = [{
        id: uid(5),
        name: 'Short dress',
        description: 'This is a short red dress for woman',
        size: 'XS',
        type: 'Fem',
        category: 'Dresses',
        price: '100',
        image: 'https://m.media-amazon.com/images/I/61kQQAwCmCL._SR500,500_.jpg'
    },
    {
        id: uid(5),
        name: 'Long dress',
        description: 'This is a long black dress for woman',
        size: 'M',
        type: 'Fem',
        category: 'Dresses',
        price: '400',
        image: 'https://cdn.shopify.com/s/files/1/2244/5817/products/1_f5c4dc38-573b-4081-bae1-095cee5f5bc5.jpg?v=1556177598'
    },
    {
        id: uid(5),
        name: 'Skirt',
        description: 'This is a short red skirt for woman',
        size: 'XS',
        type: 'Fem',
        category: 'Skirts',
        price: '120',
        image: 'https://media3.newlookassets.com/i/newlook/654134769D3/girls/clothing/skirts/girls-red-belted-denim-skirt.jpg?strip=true&qlt=80&w=720'
    }


]
clothes = clothes.concat(clothesMan);

///Primul array contine haine de barbati, al doilea haine de femei, le concatenam pe cele doua
//in al doilea array, acesta fiind cel pe care il vom folosi

function copyRequestBody(id, { name, category, price, description, image, size, type }) {
    return { id, name, category, price, description, image, size, type };
}

app.get('/', function(_, res) {
    res.send('Hello World! Welcome, I am Miruna! This is my server running...');
});


//READ
//Trimite lista noastra cu obiecte si statusul 200 "Request succeeded"
app.get('/get-clothes', function(_, res) {
    res.status(200).send(clothes.sort((itemA, itemB) => itemA.id - itemB.id).map(copyRequestBody));

});


//Trimite elementul cu id-ul specificat, daca nu exista trimite statusul 404 "Not found"
app.get('/getById/:id', function(req, res) {
    const element = clothes.find(item => item.id == req.params.id);
    console.log(element);
    if (element) {
        res.send(element);
    } else {
        res.sendStatus(404);
    }
});

//DELETE
//Daca elementul exista il stergem, daca nu trimite statusul 404 "Not found"
app.delete('/delete-clothes/:id', function(req, res) {
    const element = clothes.find(item => item.id == req.params.id);
    if (element) {
        const foundItemIndex = clothes.findIndex(item => item == element);
        console.log(foundItemIndex);
        clothes.splice(foundItemIndex, 1);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});


//UPDATE
//Modifica item-ul pe care il ia dupa id 
app.put('/edit-clothes/:id', function(req, res) {
    const element = clothes.find(item => item.id == req.params.id);
    if (element) {
        const editItemIndex = clothes.findIndex(item => item == element);
        clothes[editItemIndex] = copyRequestBody(req.params.id, req.body || {});
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }


});

//CREATE
app.post('/add-clothes', function(req, res) { //Create new product
    const id = uid(5); //Se creeaza un id unic pentru prosusul nostru
    const newProduct = copyRequestBody(id, req.body || {});
    clothes.push(newProduct);

    res.status(201).send(newProduct); //Trimite statusul 201 "Created" si creeaza produsul
});



app.listen(port, function() {
    console.log(`Server listening on port ${port}... Press CTRL + C to stop.`)
});