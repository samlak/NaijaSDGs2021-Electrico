const express = require('express');
const path = require('path');

const PageController = require('./controllers/page');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.locals.publicPath = "/../../../";

// PUBLIC ROUTE

app.get('/', async (req, res) => {
    await PageController.homepage(req, res);
});

app.get('/login', (req, res) => {
    await PageController.login(req, res);
});

app.get('/register', (req, res) => {
    await PageController.register(req, res);
});

app.get('/login', (req, res) => {
    await PageController.login(req, res);
});

app.get('/404', (req, res) => {
    res.render('custom/404');
});

app.use(
  