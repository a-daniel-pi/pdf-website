const express = require('express');
const hbs = require('hbs');
const path = require('path');

const PORT = 3000;

const app = express();

// Set up Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use((req, res) => {
    res.render('index', {});
});

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});