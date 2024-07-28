import React, { useContext } from 'react'
import axios from 'axios'
import checkDeliverDoableOrNot from '../../../helper/checkDeliveryDoableOrNot'
import {useCookies} from 'react-cookie'

export default function Razorpay({cartTotal, shipperState}) {
    const [cookies, setCookie] = useCookies()

    const currencyCode = cookies.currencyCode

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
  
    const displayRazorpay = async () => {

            const res = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );
      
            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
            }
      
            const result = await axios.post("/payment/orders",{cartTotal, currencyCode});
                  
            if (!result) {
                alert("Server error. Are you online?");
                return;
            }
      
            const { amount, id: order_id, currency } = result.data;
      
            const options = {
                key: "rzp_test_fWZVJwq4dgKntN",
                amount: amount.toString(),
                currency: currency,
                name: "Luxury Gems Company",
                description: "Diamond & Jewelry Shopping",
                order_id: order_id,
                handler: async function (response) {
                    const data = {
                        orderCreationId: order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    };
      
                    const result = await axios.post("/payment/success", data);
      
                    alert(result.data.msg);
                },
                theme: {
                    color: "#61dafb",
                },
            };
      
            const paymentObject = new window.Razorpay(options);
            paymentObject.open()
       
    }
    
    return (
            <button style={{width: '100%', marginBottom:'20px'}} onClick={displayRazorpay}>
                  Pay Now
            </button>
    )
}
