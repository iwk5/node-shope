const Product = require('../models/product');
const Cart = require('../models/cart');


exports.getIndex = (req, res, next) => {
     Product.fetchAll((products) => {
         res.render('shop/product-list',{
             prods: products, 
             pageTitle: 'Shop',
             path: '/'
         });
     });
 }
exports.getProducts = (req, res, next) => {
    // const products = productData.products;
     Product.fetchAll((products) => {
         res.render('shop/product-list',{
             prods: products, 
             pageTitle: 'Shop',
             path: '/products'
         });
     });
    
     //console.log(productData.products);
     //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
 }
 exports.getProduct = (req, res, next) => {
     const prodId = req.params.porductId;
     Product.findById(prodId, product => {
        res.render('shop/product-detail',{
            product: product, 
            pageTitle: product.title,
            path: '/products'
        });
     });
 }
 exports.getCart = (req, res, next) => {
         res.render('shop/cart',{
             pageTitle: 'Cart',
             path: '/cart'
         });
 }
 exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price);
    })
    res.redirect('/cart');
}
 exports.getOrders = (req, res, next) => {
    res.render('shop/orders',{
        pageTitle: 'My Orders',
        path: '/orders'
    });
}
exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout',{
        pageTitle: 'Checkout',
        path: '/checkout'
    });
}