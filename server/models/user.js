const Sequelize = require('sequelize') 
const sequelize = require('../loaders/mysql') 
  
const User = sequelize.define('users', { 
    fname: {
        type: Sequelize.STRING, 
        allowNull:false
    }, 
    lname: {
        type: Sequelize.STRING, 
        allowNull:true
    }, 
    email: {
        type: Sequelize.STRING, 
        allowNull: false,
        isEmail: true,
        primaryKey: true
    }, 
    password: {
        type: Sequelize.STRING,
        allowNull:false
    },
    signupMethod: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING,
        allowNull:false
    },
    createdAt: Sequelize.DATE, 
    updatedAt: Sequelize.DATE,
    lastLogin: Sequelize.DATE
})

module.exports = User