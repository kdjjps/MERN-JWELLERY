const Sequelize = require('sequelize') 
const sequelize = require('../loaders/mysql') 
const Order = require('./order')
  
const PurchasedLooseDiamond = sequelize.define('purchasedLooseDiamonds', { 
    diamondStockNumber: {
        type: Sequelize.STRING, 
        allowNull: false, 
        primaryKey: true
    }, 
    vendor: {
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
    diamondPrice: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    carat: {
        type: Sequelize.STRING, 
        allowNull:false
    },
    lab: {
        type: Sequelize.STRING, 
        allowNull: true
    },
    shape: {
        type: Sequelize.STRING, 
        allowNull:true
    },
    color: {
        type: Sequelize.STRING, 
        allowNull:true
    },
    clarity: {
        type: Sequelize.STRING, 
        allowNull:true
    },
    cut: {
        type: Sequelize.STRING, 
        allowNull:true
    },
    culet: {
        type: Sequelize.STRING, 
        allowNull:true
    },
    symmetry: {
        type: Sequelize.STRING, 
        allowNull:true
    },
    fluorescence: {
        type: Sequelize.STRING, 
        allowNull:true
    },
    measurement: {
        type: Sequelize.STRING, 
        allowNull:true
    },
    polish: {
        type: Sequelize.STRING, 
        allowNull:true
    },
    girdlePercentage: {
        type: Sequelize.STRING, 
        allowNull:true
    },
    ratio: {
        type: Sequelize.STRING, 
        allowNull:true
    },
    table: {
        type: Sequelize.STRING, 
        allowNull:true
    },
    depth: {
        type: Sequelize.STRING, 
        allowNull:true
    },
    black: {
        type: Sequelize.BOOLEAN, 
        allowNull:true
    },
    white: {
        type: Sequelize.BOOLEAN, 
        allowNull:true
    },
    createdAt: Sequelize.DATE, 
    updatedAt: Sequelize.DATE,
})

module.exports = PurchasedLooseDiamond