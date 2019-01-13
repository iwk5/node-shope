const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product',{
        pageTitle:'Add Product',
        path: '/admin/add-product'
      });
   // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  }

  exports.postProdcut = (req, res, next) => {
    //products.push({title: req.body.title});
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;

    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imageUrl, price, description);
    product.save();

    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    // const products = productData.products;
     Product.fetchAll((products) => {
         res.render('admin/products',{
             prods: products, 
             pageTitle: 'admin Shop',
             path: '/admin/products'
         });
     });
 }