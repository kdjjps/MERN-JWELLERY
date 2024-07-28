const Sequelize = require('sequelize') 
const sequelize = require('../loaders/mysql') 
const Order = require('./order')
const PurchasedLooseDiamond = require('./purchasedLooseDiamond')
  
const PurchasedCustomJewelry = sequelize.define('purchasedCustomJewelries', { 
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
        allowNull: false
    },
    jewelryStockNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    jewelryMetal: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    jewelrySizeIndex: {
        type: Sequelize.STRING,
        allowNull: true
    },
    jewelrySizeStandard:{
        type: Sequelize.STRING,
        allowNull: true
    },
    jewelryPair: {
        type: Sequelize.BOOLEAN,
    },
    jewelryPrice: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    firstDiamondStockNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: PurchasedLooseDiamond,
            key: 'diamondStockNumber'
        }
    },
    secondDiamondStockNumber: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
            model: PurchasedLooseDiamond,
            key: 'diamondStockNumber'
        }
    },
    jewelryExtraSetting: {
        type: Sequelize.STRING,
        allowNull: true
    },
    createdAt: Sequelize.DATE, 
    updatedAt: Sequelize.DATE,
})

module.exports = PurchasedCustomJewelry