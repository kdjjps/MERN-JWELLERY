// Include Sequelize module. 
const Sequelize = require('sequelize') 
const sequelize = require('../loaders/mysql') 
const User = require('./user')
  
const Wishlist = sequelize.define('wishes', { 
    wishId:{ 
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true
    },
    email : {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: User,
            key: 'email'
        }
    },
    stockNumber: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    itemType: {
        type: Sequelize.STRING,
        allowNull: false
    }
}) 

module.exports = Wishlist