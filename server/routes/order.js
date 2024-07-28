const express = require('express');
const router = express.Router()
const Order = require('../models/order')

router.post('/get-orders', async(req,res) => {

    let orders = await (Order.findAll({
        where:{
            email: req.body.email,
        }
    }))

    if (orders.length != 0) {

        let orderArray = []

        for(i = 0 ; i < orders.length ; i++){
            orderArray.push(orders[i].dataValues)
        }
    
        res.json({
            success: true,
            message: 'Orders found successfully!',
            orderArray
        });
    }

    else {

        res.json({
            success: false,
            message: "No orders found!",
            orderArray: []
        });
    }
})

module.exports = router