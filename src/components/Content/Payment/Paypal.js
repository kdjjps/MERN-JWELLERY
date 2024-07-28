import React from 'react'
import ReactDOM from "react-dom"
import { useHistory } from "react-router-dom"
import axios from 'axios'
import {useCookies} from 'react-cookie'

export default function Paypal({cartItems, cartItemsPriceArray, cartTotal, shipperState, billerState}) {

    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM })
    const history = useHistory()
    const [cookies, setCookie] = useCookies()
    console.log(cartItemsPriceArray)

    const createOrder = (data, actions) =>{
      
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: cartTotal,
              },
              "shipping": {
                "address": {
                  "name": {
                    "give_name":`${shipperState.recepientFname}`,
                    "surname":`${shipperState.recepientLname}`
                  },
                  "address_line_1": `${shipperState.recepientAddressLine1}`,
                  "address_line_2": `${shipperState.recepientAddressLine2}`,
                  "admin_area_2": `${shipperState.recepientCity}`,
                  "admin_area_1": `${shipperState.recepientCity}`,
                  "postal_code": `${shipperState.recepientPostCode}`,
                  "country_code": `${shipperState.recepientCountryCode}`
                }
              }
            },
          ],
        });
      
    };
    
    const onApprove = (data, actions) => {

        return actions.order.capture().then(async (details) => {
          
          if (details.status === 'COMPLETED'){
            let addressData = {
              shipping: shipperState,
              billing: billerState
            }

            let saveAddressResponse = await axios.post('/address/save-address', {cartItems, addressData, email: cookies.userEmail, orderId: details.id, amount: details.purchase_units[0].amount.value})
            let savePurchasedProductResponse = await axios.post('/product/save-purchase', {cartItems, cartItemsPriceArray, email: cookies.userEmail, orderId: details.id})

            if (saveAddressResponse.data.success && savePurchasedProductResponse.data.success){
              localStorage.removeItem('cart')
              history.push('/thankyou')
            }
        
          }
        })

    };

    return (
        <div>
            <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
            />
        </div>
    )
}