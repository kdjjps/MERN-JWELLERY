import React, { createContext, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import {diamondCaratPresetData, makingCharges, gemstoneJewelrySettingCharges} from '../fakedata/chargesData'

export const PriceContext = createContext()

export const PriceContextProvider = ({children}) => {
    const [currencyArray, setCurrencyArray] = useState([
        {
            currencyCode: 'AUD',
            imageText: 'flag-of-aud'
        },
        {
            currencyCode: 'USD',
            imageText: 'flag-of-usd'
        },
        {
            currencyCode: 'INR',
            imageText: 'flag-of-inr'
        },
        {
            currencyCode: 'EUR',
            imageText: 'flag-of-eur'
        },
        {
            currencyCode: 'NZD',
            imageText: 'flag-of-nzd'
        },
        {
            currencyCode: 'SGD',
            imageText: 'flag-of-sgd'
        },
        {
            currencyCode: 'AED',
            imageText: 'flag-of-aed'
        },
        {
            currencyCode: 'GBP',
            imageText: 'flag-of-gbp'
        }
    ])

    const [cookies, setCookie] = useCookies()
    var date = new Date()
    var tomorrow = date.setDate(date.getDate()) + 1

    // const fetchCurrencyConversionData = async () => {
    //     try {
    //       const apiData = await axios('/api/price-multiplier')
    //       const ratesObject = await apiData.data
    //       setCookie("exchangeRate", JSON.stringify(ratesObject.currencyTable),{path: '/', maxAge: tomorrow})
    //       setCookie("goldPrice", JSON.stringify(ratesObject.goldPrices),{path: '/', maxAge: tomorrow})

    //       if (typeof(cookies.currencyCode) === 'undefined'){
    //         setCookie('currencyCode', 'USD', { path: '/' })
    //         // handleCurrencyArraySequence('USD')
    //         } 
    //         else{
    //             handleCurrencyArraySequence(cookies.currencyCode)
    //         }

    //     }
    //     catch (e) {
    //         console.log(e.message, 'Problem with Currency Api')
    //     }
    // }

    const onClickCurrencySetter = (currencyCode) => {
        switch(currencyCode){
            case 'INR':
                setCookie('currencyCode', 'INR', { path: '/' })
                break
            case 'USD':
                setCookie('currencyCode', 'USD', { path: '/' })
                break
            case 'EUR':
                setCookie('currencyCode', 'EUR', { path: '/' })
                break
            case 'AUD':
                setCookie('currencyCode', 'AUD', { path: '/' })
                break
            case 'NZD':
                setCookie('currencyCode', 'NZD', { path: '/' })
                break
            case 'SGD':
                setCookie('currencyCode', 'SGD', { path: '/' })
                break
            case 'AED':
                setCookie('currencyCode', 'AED', { path: '/' })
                break
            case 'GBP':
                setCookie('currencyCode', 'GBP', { path: '/' })
                break
        }
    }

    const handleCurrencyArraySequence = (currencyCode) => {
        let filteredCurrencyArray = currencyArray.filter(item => item.currencyCode !== currencyCode)
        let newArray = [{
            currencyCode : currencyCode ,imageText : `flag-of-${currencyCode.toLowerCase()}`
        }]
        setCurrencyArray([...newArray, ...filteredCurrencyArray])
    }

    return ( 
        <PriceContext.Provider value={{ 
            onClickCurrencySetter, 
            currencyArray, 
            handleCurrencyArraySequence,
            diamondCaratPresetData,
            makingCharges,
            gemstoneJewelrySettingCharges}} >
            { children }
        </PriceContext.Provider>
     )
}
