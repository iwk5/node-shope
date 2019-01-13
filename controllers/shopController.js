const Product = require('../models/product');
exports.getProducts = (req, res, next) => {
    // const products = productData.products;
     Product.fetchAll((products) => {
         res.render('shop/product-list',{
             prods: products, 
             pageTitle: 'Shop',
             path: '/'
         });
     });
    
     //console.log(productData.products);
     //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
 }
 exports.getIndex = (req, res, next) => {
    // const products = productData.products;
     Product.fetchAll((products) => {
         res.render('shop/product-list',{
             prods: products, 
             pageTitle: 'Shop',
             path: '/'
         });
     });
    
     //console.log(productData.products);
     //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
 }
 exports.getCart = (req, res, next) => {
         res.render('shop/cart',{
             pageTitle: 'Cart',
             path: '/cart'
         });
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