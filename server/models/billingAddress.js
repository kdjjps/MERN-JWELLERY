const Sequelize = require('sequelize')
const sequelize = require('../loaders/mysql')
const User = require('./user')
const Order = require('./order')

const BillingAddress = sequelize.define('billingAddresses', {
    addresserId: {
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        allowNull: false, 
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: User,
            key: 'email'
        }
    },
    orderId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Order,
            key: 'orderId'
        }
    },
    addresserFname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    addresserLname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    addresserEmail:{
        type: Sequelize.STRING,
        allowNull: false
    },
    addresserCountry: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addresserHouse: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addresserArea: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addresserCity: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addresserState: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addresserPostCode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addresserPhone: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = BillingAddress