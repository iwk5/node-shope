const path = require('path');
const express = require('express');
const productController = require('../controllers/product');

//const rootDir = require('../helpers/path');

//const productData = require('./admin.js');

const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;
