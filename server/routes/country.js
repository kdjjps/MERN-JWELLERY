const express = require('express');
const router = express.Router();
const axios = require('axios')

const options = {
    headers: {'X-CSCAPI-KEY': 'Y0NObmVuVFBvZHF4NERtdURIS3dtTHFJaWtzYXJmMk1FRWRJdWpiTg=='}
  };

router.get('/get-country', async (req,res) => {

    try{
        let countryAPIResponse = await axios.get('https://api.countrystatecity.in/v1/countries', options)
        res.send(countryAPIResponse.data)
    }
    catch(err){
        console.log(err)
    }

})

router.post('/get-states', async (req,res) => {

    try{
        let stateAPIResponse = await axios.get(`https://api.countrystatecity.in/v1/countries/${req.body.countryCode}/states`, options)
        res.send(stateAPIResponse.data)
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router