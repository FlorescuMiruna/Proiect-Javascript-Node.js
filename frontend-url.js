// These are Imports
const express = require('express');

const app = express();
app.use(express.static("frontend"))
const port = 3000;

//Define paths for frontend
app.get('/clothes', function(req, res) {
    res.sendFile(__dirname + '/frontend/read-clothes-page.html');
});
app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/frontend/login-page.html');
});
app.get('/add-clothes', function(req, res) {
    res.sendFile(__dirname + '/frontend/add-product.html');
});
app.get('*', function(req, res) {
    res.status(404).sendFile(__dirname + '/frontend/page-not-found.html');
});

app.listen(port, function() {
    console.log(`Frontend listening on port ${port}... Press CTRL + C to stop.`)
});