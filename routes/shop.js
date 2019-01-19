//const path = require('path');
const express = require('express');
const shopController = require('../controllers/shopController');

//const rootDir = require('../helpers/path');

//const productData = require('./admin.js');

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/products/', shopController.getProducts);
router.get('/products/:porductId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);


router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getProducts);


module.exports = router;
