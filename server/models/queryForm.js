const Sequelize = require('sequelize') 
const sequelize = require('../loaders/mysql') 
  
const QueryForm = sequelize.define('queryForm', { 
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING, 
        allowNull:false
    }, 
    email: {
        type: Sequelize.STRING, 
        allowNull: false,
        isEmail: true,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    country: {
        type: Sequelize.STRING,
        allowNull:false
    },
    query: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: Sequelize.DATE, 
    updatedAt: Sequelize.DATE,
})

module.exports = QueryForm;