const Sequelize = require('sequelize')
const sequelize = require('../loaders/mysql')
const User = require('./user')
const Order = require('./order')

const ShippingAddress = sequelize.define('shippingAddresses', {
    addresseeId: {
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
    addresseeFname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    addresseeLname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    addresseeEmail:{
        type: Sequelize.STRING,
        allowNull: false
    },
    addresseeCountry: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addresseeHouse: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addresseeArea: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addresseeCity: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addresseeState: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addresseePostCode: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addresseePhone: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = ShippingAddress