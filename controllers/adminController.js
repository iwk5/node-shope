const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product',{
        pageTitle:'Add Product',
        path: '/admin/add-product',
        editing: false
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
    product
    .save()
    .then(() => {
        res.redirect('/');
    })
    .catch(error => {
        console.log(error);
    });
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll()
    .then( ([rows, fieldData]) => {
       res.render('admin/products',{
           prods: rows, 
           pageTitle: 'Admin Shop',
           path: '/admin/products'
       });
    })
    .catch(error => {
        console.log(error);
    });
}

 exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;

    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('admin/edit-product',{
            pageTitle:'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
          });
    });
  }
  exports.postEditProduct = (req, res, next) => {

    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('admin/edit-product',{
            pageTitle:'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
          });
    });
  }