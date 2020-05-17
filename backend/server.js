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
        size: 'Medium',
        type: 'Masc',
        category: 'Jeans',
        price: '150',
        image: 'https://www.yaaku.com/upload/201906/04/YW58042_7.jpg'
    },
    {
        id: uid(5),
        name: 'Biker jacket',
        description: 'This is a leather brown biker jacket for man',
        size: 'Large',
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
        size: 'Small',
        type: 'Fem',
        category: 'Dresses',
        price: '100',
        image: 'https://m.media-amazon.com/images/I/61kQQAwCmCL._SR500,500_.jpg'
    },
    {
        id: uid(5),
        name: 'Long dress',
        description: 'This is a long black dress for woman',
        size: 'Medium',
        type: 'Fem',
        category: 'Dresses',
        price: '180',
        image: 'https://cdn.shopify.com/s/files/1/2244/5817/products/1_f5c4dc38-573b-4081-bae1-095cee5f5bc5.jpg?v=1556177598'
    }


]
clothes = clothes.concat(clothesMan);


function copyRequestBody(id, { name, category, price, description, image, size, type }) {
    return { id, name, category, price, description, image, size, type };
}

app.get('/', function(_, res) {
    res.send('Hello World! Welcome, I am Miruna! This is my server running...');
});
app.get('/get-clothes', function(_, res) { //Redenumim path-urile 
    res.send(clothes.sort((itemA, itemB) => itemA.id - itemB.id).map(copyRequestBody));

});

app.get('/getById/:id', function(req, res) {
    const element = clothes.find(item => item.id == req.params.id);
    console.log(element);
    if (element) {
        res.send(element);
    } else {
        res.sendStatus(404);
    }
});

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


app.post('/add-clothes', function(req, res) {
    const id = uid(5);
    const newProduct = copyRequestBody(id, req.body || {});
    clothes.push(newProduct);

    res.status(201).send(newProduct); //Send status 201 Created and the created clothe
});



app.listen(port, function() {
    console.log(`Server listening on port ${port}... Press CTRL + C to stop.`)
});