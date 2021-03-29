const express = require('express');
const path = require('path');

const PageController = require('./controllers/page');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(
    express.static(path.join(__dirname, '/../public')),
);

app.locals.publicPath = "/../../../";

app.get('/', async (req, res) => {
    await PageController.homepage(req, res);
});

app.get('/dashboard', async (req, res) => {
    await PageController.dashboard(req, res);
});

app.get('/register', async (req, res) => {
    await PageController.register(req, res);
});

app.get('/login', async (req, res) => {
    await PageController.login(req, res);
});

app.use(
    function(req, res, next){
        res.status(404);
        res.render('custom/404', {url: req.url});
        return;
    },
);

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
