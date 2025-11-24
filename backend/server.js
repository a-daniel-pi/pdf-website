const express = require('express');
const hbs = require('hbs');
const path = require('path');

const pdfRoute = require('./get_pdf');
const listPdfs = require('./list_pdf');

const PORT = 3000;

const app = express();

// Set up Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use('/pdfs', pdfRoute)

app.get('/', (req, res) => {
    res.render('index', {});
});

console.log(listPdfs());

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});