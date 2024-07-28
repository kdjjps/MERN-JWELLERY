import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'

export default function Orders() {

  const [orders, setOrders] = useState([])
  const [cookies] = useCookies()

  useEffect(() => {
    (async () => {
      const orderApiResponse = await axios.post('/order/get-orders', {email: cookies.userEmail})
      if (orderApiResponse.data.orderArray.length !== 0){
        setOrders([...orderApiResponse.data.orderArray])
      }
    })()
  }, [orders])

    return (
      <div className='my-orders'>
        <table>
            <tr>
              <th style={{width:'16.6%'}}>Order No.</th>
              <th style={{width:'16.6%'}}>Order Details</th>
              <th style={{width:'16.6%'}}>Order Total</th>
              <th style={{width:'16.6%'}}>Order Status</th>
              <th style={{width:'16.6%'}}>Order Placed</th>
              <th style={{width:'16.6%'}}>Est. Delivery Date</th>
            </tr>
                {
                  orders.length === 0 

                  ?

                  <tr>
                    <td colSpan='9' style={{border: '1px solid #d2d2d2', height: '60px', textAlign:'center', fontSize:'1.4rem'}}>
                      There are no orders
                    </td>
                  </tr>

                :

                orders.map((item, index) => {
                  return(
                  <tr>
                    <td>
                      {item.orderId}
                    </td>
                    <td>
                      Details
                    </td>
                    <td>
                      {item.orderAmount}
                    </td>
                    <td>
                      Preparing
                    </td>
                    <td>
                      {item.createdAt}
                    </td>
                    <td>
                      25 December
                    </td>
                  </tr>
                  )
                  
                })

                }
        </table>
      </div>
    );
}