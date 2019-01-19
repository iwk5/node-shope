const Product = require('../models/product');
const Cart = require('../models/cart');
exports.getIndex = (req, res, next) => {
     Product.fetchAll()
     .then( ([rows, fieldData]) => {
        res.render('shop/product-list',{
            prods: rows, 
            pageTitle: 'Shop',
            path: '/'
        });
     })
     .catch(error => {
         console.log(error);
     });
 }
exports.getProducts = (req, res, next) => {
    Product.fetchAll()
    .then( ([rows, fieldData]) => {
       res.render('shop/product-list',{
           prods: rows, 
           pageTitle: 'Product List',
           path: '/products'
       });
    })
    .catch(error => {
        console.log(error);
    });
}
 exports.getProduct = (req, res, next) => {
     const prodId = req.params.porductId;

     Product.findById(prodId)
     .then(([product]) => {
        res.render('shop/product-detail',{
            product: product[0], 
            pageTitle: product.title,
            path: '/products'
        });
     })
     .catch(error => {
         console.log(error);
     })
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