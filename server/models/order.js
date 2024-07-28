const Sequelize = require('sequelize')
const sequelize = require('../loaders/mysql') 
const User = require('./user')

const Order = sequelize.define('orders', {
    orderId: {
        type: Sequelize.STRING,
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
    orderAmount: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Order