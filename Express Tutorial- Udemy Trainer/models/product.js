const Sequelize = require('sequelize')

//importing database connection pool managed by sequelize
const sequelize = require('../util/database')

const Product = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    autoIncreament: true,
    allowNull: false,
    primaryKey: true
  },

  title: {
    type: Sequelize.STRING
  },

  price:{
    type:Sequelize.DOUBLE,
    allowNull:false
  },

  imageUrl:{
    type:Sequelize.STRING,
    allowNull:false

  },

  description:{
    type:Sequelize.STRING,
    allowNull:false
  }


})

module.exports=Product;