const Sequelize = require('sequelize') 
const sequelize = require('../loaders/mysql') 
const Order = require('./order')
  
const PurchasedLooseGemstone = sequelize.define('purchasedLooseGemstones', { 
    count: {
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true
    }, 
    gemStockNumber: {
        type: Sequelize.STRING, 
        allowNull:false
    },
    orderId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Order,
            key: 'orderId'
        }
    },
    gemstonePrice: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gemWeightIndex: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gemCertificationIndex: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: Sequelize.DATE, 
    updatedAt: Sequelize.DATE,
})

module.exports = PurchasedLooseGemstone