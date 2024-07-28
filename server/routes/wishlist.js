const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Wishlist = require('../models/wishlist')
const axios = require('axios')

router.post('/get-wishlist', async (req, res) => {

    const wishes = await (Wishlist.findAll({
        where:{
            email: req.body.email,
        }
    }));

    if (wishes.length != 0) {

        let wishlistArray = []

        for(i = 0 ; i < wishes.length ; i++){
            wishlistArray.push(wishes[i].dataValues)
        }
    
        res.json({
            success: true,
            message: 'Wishes found successfully!',
            wishlistArray
        });
    }

    else {

        res.json({
            success: false,
            message: "No wishes found!",
            wishlistArray: []
        });
    }

});

router.post('/sync-wishlist', async (req, res) => {

    let wishes = await (Wishlist.findAll({
        where:{
            email: req.body.email,
        }
    }))

    let stockNumberArrayFromWishes = wishes.length != 0 ? wishes.map(item => item.stockNumber) : []

    if (stockNumberArrayFromWishes.length === 0){
       req.body.combinedWishlist.forEach(element => {
            Wishlist.create({
                itemType: element.itemType,
                stockNumber: element.stockNumber,
                email: req.body.email
            })
       })
    }
    else{
        req.body.stockNumberArray.forEach((item, index) => {
            if (!stockNumberArrayFromWishes.includes(item)){
                Wishlist.create({
                    itemType: req.body.itemTypeArray[index],
                    stockNumber: item,
                    email: req.body.email
                })
            }
        })
   }

    res.json({
        success: true,
        message: 'Successfully synced!'
    })

});

module.exports = router