const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product',{
        pageTitle:'Add Product',
        path: '/admin/add-product'
      });
   // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  }

  exports.postProdcut = (req, res, next) => {
    //products.push({title: req.body.title});
    const product = new Product(req.body.title);
    product.save();

    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
   // const products = productData.products;
   const products = Product.fetchAll();
    res.render('shop',{
        prods: products, 
        pageTitle: 'Shop',
        path: '/'
    });
    //console.log(productData.products);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}