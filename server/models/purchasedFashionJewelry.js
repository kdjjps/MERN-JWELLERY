const Sequelize = require('sequelize') 
const sequelize = require('../loaders/mysql') 
const Order = require('./order')
  
const PurchasedFashionJewelry = sequelize.define('purchasedFashionJewelries', { 
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
    jewelryPrice: {
        type: Sequelize.STRING, 
        allowNull:false
    },
    smallDiamondQuality: {
        type: Sequelize.STRING,
        allowNull: true
    },
    smallDiamondPrice: {
        type: Sequelize.STRING,
        allowNull: true
    },
    solitaireDiamondQuality: {
        type: Sequelize.STRING,
        allowNull: true
    },
    solitaireDiamondPrice: {
        type: Sequelize.STRING,
        allowNull: true
    },
    createdAt: Sequelize.DATE, 
    updatedAt: Sequelize.DATE,
})

module.exports = PurchasedFashionJewelry