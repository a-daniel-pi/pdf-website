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

app.use(express.static('public')) // Static files (pretty much just css)

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use('/pdfs', pdfRoute); // Attach route to pdfs

app.get('/', (req, res) => {
    res.render('index', {pdfs: listPdfs});
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('404', {"url": req.path});
});

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});