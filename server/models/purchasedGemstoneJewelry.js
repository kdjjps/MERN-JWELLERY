const Sequelize = require('sequelize') 
const sequelize = require('../loaders/mysql') 
const Order = require('./order')
  
const PurchasedGemstoneJewelry = sequelize.define('purchasedGemstoneJewelries', { 
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
    gemWeightIndex: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gemCertificationIndex: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gemJewelryType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gemJewelryPrice: {
        type: Sequelize.STRING, 
        allowNull:false
    },
    gemJewelryStockNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gemJewelryMetalIndex: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gemJewelrySizeIndex: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: Sequelize.DATE, 
    updatedAt: Sequelize.DATE,
})

module.exports = PurchasedGemstoneJewelry