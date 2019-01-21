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

    req.user.createProduct({
        title: title,
        imageUrl:imageUrl,
        price: price,
        description: description
    })
    .then(() => {
        res.redirect('/');
    })
    .catch(error => {
        console.log(error);
    });
}

exports.getProducts = (req, res, next) => {
    Product.findAll()
    .then( products => {
       res.render('admin/products',{
           prods: products, 
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
    Product
    .findById(prodId)
    .then(product => {
        res.render('admin/edit-product',{
            pageTitle:'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
          });
    })
    .catch(err => {
        console.log('Whats up');
    });
  }
  exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;

    const price = req.body.price;
    const description = req.body.description;
    Product
    .findById(prodId)
    .then(product => {
        product.title = title;
        product.imageUrl = imageUrl;
    
        product.price = price;
        product.description = description;
        return product.save();
    })
    .then(result => {
        res.redirect('/admin/products');
    })
    .catch(err =>{
        console.log(err);
    });
}

    exports.postDeleteProduct = (req, res, next) => {
        const prodId = req.body.productId;
        Product
        .findById(prodId)
        .then( product => {
            return product.destroy();
        })
        .then(result => {
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        });
    }


  