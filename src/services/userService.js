import axios from 'axios'
import authHeader from './authHeader'

export default class UserService{

    getUserAccountDetails(){
        return axios
        .get('/user/account-details', { headers: authHeader() })
        .then(response => console.log(response.data))
    }

    getUserOrders(){
        return axios
        .get('/user/orders', { headers: authHeader() })
        .then(response => console.log(response.data))
    }

    getUserWishlist(){
        return axios
        .get('/user/wishlist', { headers: authHeader() })
        .then(response => console.log(response.data))
    }
    
}