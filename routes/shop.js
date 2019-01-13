//const path = require('path');
const express = require('express');
const shopController = require('../controllers/shopController');

//const rootDir = require('../helpers/path');

//const productData = require('./admin.js');

const router = express.Router();

router.get('/', shopController.getProducts);

router.get('/product-list', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getProducts);


module.exports = router;
