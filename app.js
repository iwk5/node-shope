const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const db = require('./helpers/database');
const app = express();


const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

// tell to express to use pug template engin and show them view folder to render
app.set('view engine','ejs');
app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use(errorController.get404Page);

app.listen(3000);