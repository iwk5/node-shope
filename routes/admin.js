//const path = require('path');
const express = require('express');

const rootDir = require('../helpers/path');

const router = express.Router();
const adminController = require('../controllers/adminController');

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postProdcut);

router.get('/products', adminController.getProducts);

router.get ('/edit-product/:productId', adminController.getEditProduct);
router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
