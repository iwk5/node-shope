const db = require('../helpers/database');

module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    return db.execute('INSERT INTO products (title, price, description, imageUrl) VALUES(?, ?, ?, ?)',
    [this.title, this.price, this.description, this.imageUrl]);
  }
  static deleteById(){
    
  }

  static fetchAll() {
   return db.execute("SELECT * FROM products");
  }

  static findById(id){
    return db.execute('SELECT * FROM products WHERE products.id=?', [id]);
  }
};
