const express = require('express');
const router = express.Router()
const Order = require('../models/order')
const ShippingAddress = require('../models/shippingAddress')
const BillingAddress = require('../models/billingAddress')
const axios = require('axios')

router.post('/save-address', async(req,res) => {

    try{

        let order = await Order.create({
            orderId: req.body.orderId,
            email : req.body.email,
            orderAmount: req.body.amount,
        })

        let orderId = order.orderId
    
        let shippingAddress = await ShippingAddress.create({
            email: req.body.email,
            orderId: orderId,
            addresseeFname: req.body.addressData.shipping.recepientFname,
            addresseeLname: req.body.addressData.shipping.recepientLname,
            addresseeEmail: req.body.addressData.shipping.recepientEmail,
            addresseeCountry: req.body.addressData.shipping.recepientCountryCode,
            addresseeHouse: req.body.addressData.shipping.recepientAddressLine1,
            addresseeArea: req.body.addressData.shipping.recepientAddressLine2,
            addresseeCity: req.body.addressData.shipping.recepientCity,
            addresseeState: req.body.addressData.shipping.recepientState,
            addresseePostCode: req.body.addressData.shipping.recepientPostCode,
            addresseePhone: req.body.addressData.shipping.recepientPhoneNumber
        })
    
        let billingAddress = await BillingAddress.create({
            email: req.body.email,
            orderId: orderId,
            addresserFname: req.body.addressData.billing.billerFname,
            addresserLname: req.body.addressData.billing.billerLname,
            addresserEmail: req.body.addressData.billing.billerEmail,
            addresserCountry: req.body.addressData.billing.billerCountryCode,
            addresserHouse: req.body.addressData.billing.billerAddressLine1,
            addresserArea: req.body.addressData.billing.billerAddressLine2,
            addresserCity: req.body.addressData.billing.billerCity,
            addresserState: req.body.addressData.billing.billerState,
            addresserPostCode: req.body.addressData.billing.billerPostCode,
            addresserPhone: req.body.addressData.billing.billerPhoneNumber
        })

        res.send({
            success: true
        })
    }
    catch (error){
        console.log(error)
        res.send(500)
    }
})

module.exports = router