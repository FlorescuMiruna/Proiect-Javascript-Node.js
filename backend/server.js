// These are Imports
const express = require('express');
const cors = require('cors');
const uid = require('uid'); //UID comes from Unique Identifier
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 4200;

let chlotes = [{
        id: uid(5),
        name: 'Short dress',
        description: 'This is a short red dress for woman',
        size: 'Small',
        type: 'Fem',
        category: 'Dresses',
        price: '100',
        image: ''
    },
    {
        id: uid(5),
        name: 'Long dress',
        description: 'This is a long black dress for woman',
        size: 'Medium',
        type: 'Fem',
        category: 'Dresses',
        price: '180',
        image: ''
    },
    {
        id: uid(5),
        name: 'Biker jacket',
        description: 'This is a leather brown biker jacket for man',
        size: 'Large',
        type: 'Masc',
        category: 'Jackets',
        price: '200',
        image: ''
    },
    {
        id: uid(5),
        name: 'Short jeans',
        description: 'This are summer green jeans for man',
        size: 'Medium',
        type: 'Masc',
        category: 'Jeans',
        price: '150',
        image: ''
    }
]

function copyRequestBody(id, { name, category, price, description, image, size, type }) {
    return { id, name, category, price, description, image, size, type };
}

app.get('/', function(_, res) {
    res.send('Hello World! Welcome, I am Miruna! This is my server running...');
});
app.get('/chlotes', function(_, res) {
    res.send(chlotes.sort((itemA, itemB) => itemA.id - itemB.id).map(copyRequestBody));
});

app.get('/chlotes/:id', function(req, res) {
    const element = chlotes.find(item => item.id == req.params.id);
    console.log(element);
    if (element) {
        res.send(element);
    } else {
        res.sendStatus(404);
    }
});

app.delete('/chlotes/:id', function(req, res) {
    const element = chlotes.find(item => item.id == req.params.id);
    if (element) {
        const foundItemIndex = chlotes.findIndex(item => item == element);
        console.log(foundItemIndex);
        chlotes.splice(foundItemIndex, 1);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

app.post('/chlotes', function(req, res) {
    const id = uid(5);
    const chlote = copyRequestBody(id, req.body || {});
    chlotes.push(chlote);
    res.send(chlote);
});

app.listen(port, function() {
    console.log(`Server listening on port ${port}... Press CTRL + C to stop.`)
});