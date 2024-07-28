const Sequelize = require('sequelize') 
const sequelize = require('../loaders/mysql') 
const Order = require('./order')

const PurchasedMensJewelry = sequelize.define('purchasedMensJewelries',{
    count: {
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true
    }, 
    jewelryType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    jewelryStockNumber: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    orderId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Order,
            key: 'orderId'
        }
    },
    jewelryMetal: {
        type: Sequelize.STRING, 
        allowNull: true
    },
    jewelrySizeIndex: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jewelryPrice: {
        type: Sequelize.STRING,
        allowNull: false
    },
    jewelryPair: {
        type: Sequelize.BOOLEAN
    },
    diamondQuality: {
        type: Sequelize.STRING,
        allowNull: true
    },
    diamondCarat: {
        type: Sequelize.STRING,
        allowNull: true
    },
    createdAt: Sequelize.DATE, 
    updatedAt: Sequelize.DATE,
})

module.exports = PurchasedMensJewelry