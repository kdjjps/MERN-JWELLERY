import React,{useState, useEffect, useContext} from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'

export default function AccountSettings() {

    const {url} = useRouteMatch()
    const {isUserAuthorized, user} = useContext(UserContext)

    return (
        <div className='my-account'>
            {
            
             isUserAuthorized && user

            ?

            <section>
                <p className='title'>My Account</p>
                <p className='sub-title'>Hi {user.fname}, welcome to your account!</p>
                <p className='logged-in-detail'>You are logged in via {user.email}</p>
                <div className='orders-tracker'>
                    <p>
                        No orders to track
                    </p>
                </div>
                <div className='links-container'>
                    <div>
                        <Link to={`${url}/profile`}>
                            <p className='box-title'>
                                My Details
                            </p>
                            <p>
                                Manage account details
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link to={`${url}/orders`}>
                            <p className='box-title'>
                                My Orders
                            </p>
                            <p>
                                Manage your orders
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link to={`${url}/wishlist`}>
                            <p className='box-title'>
                                Wishlist
                            </p>
                            <p>
                                Browse your favorite items
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link to={`${url}/offers`}>
                            <p className='box-title'>
                                Offers
                            </p>
                            <p>
                                Browse a range of coupons
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            :

            <div style={{height:'280px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2rem', fontWeight:'bold'}}>
                    Please login with correct credentials
            </div>

            }

        </div>
    )
}
