const Sequelize = require('sequelize') 
const sequelize = require('../loaders/mysql') 
const Order = require('./order')
  
const PurchasedPresetJewelry = sequelize.define('purchasedPresetJewelries', { 
    count: {
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true
    }, 
    orderId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Order,
            key: 'orderId'
        }
    },
    jewelryType: {
        type: Sequelize.STRING, 
        allowNull:false
    },
    jewelryStockNumber: {
        type: Sequelize.STRING,
        allowNull:false
    },
    jewelryMetal: {
        type: Sequelize.STRING,
        allowNull: false
    },
    jewelrySizeIndex: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jewelryPair: {
        type: Sequelize.BOOLEAN
    },
    jewelryPrice: {
        type: Sequelize.STRING, 
        allowNull:false
    },
    diamondCarat: {
        type: Sequelize.STRING,
        allowNull: false
    },
    diamondQuality: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: Sequelize.DATE, 
    updatedAt: Sequelize.DATE,
})

module.exports = PurchasedPresetJewelry