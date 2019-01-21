const Sequelize = require('sequelize');

const sequelize = require('../helpers/database');

const Product = sequelize.define('product', {
  id : {
    type : Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price : {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull:false
  }

});

module.exports= Product;