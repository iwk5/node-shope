const path = require('path');

const express = require('express');

const rootDir = require('../helpers/path');

const router = express.Router();
const productController = require('../controllers/product.js');

// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productController.postProdcut);

module.exports = router;
