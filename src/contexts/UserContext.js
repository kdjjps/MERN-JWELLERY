import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {

    const [cookies, setCookie, removeCookie] = useCookies()
    const [isUserAuthorized, setIsUserAuthorized] = useState(false)
    const [user, setUser] = useState(null)
    const [isUserContextLoading, setIsUserContextLoading] = useState(true)
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    useEffect(() => {
        const userToken = localStorage.getItem('userToken')
  
        if (userToken){
          (async () => {
            const verificationResponse = await axios.get('/user/verify-user', {headers : { Authorization: JSON.parse(localStorage.getItem('userToken')) } })
            if (verificationResponse.data.success === true){
                setIsUserAuthorized(true)
                setCookie('userEmail', verificationResponse.data.user.email, {path: '/'})
                setCookie('userName', verificationResponse.data.user.fname, {path: '/'})
                setCookie('isSignedIn', true, {path: '/'})
                setIsUserContextLoading(false)
                setIsUserSignedIn(true)
                setUser(verificationResponse.data.user)
                let dbWishlistTableResponse = await axios.post('/user-specific/get-wishlist', {email: verificationResponse.data.user.email})
                let dbWishlist = dbWishlistTableResponse.data.wishlistArray.length !== 0 ? dbWishlistTableResponse.data.wishlistArray.map((item,index) => {
                  return {itemType: item.itemType, stockNumber: item.stockNumber}
                }) : []
                if (JSON.parse(localStorage.getItem('wishlist')).length === 0){
                  localStorage.setItem('wishlist', JSON.stringify(dbWishlist))
                }
                let browserWishlist = JSON.parse(localStorage.getItem('wishlist'))
                let combinedWishlist = [...new Set([...dbWishlist, ...browserWishlist])]
                let stockNumberArray = combinedWishlist.map(item => item.stockNumber)
                let itemTypeArray = combinedWishlist.map(item => item.itemType)
                axios.post('/user-specific/sync-wishlist', {email: verificationResponse.data.user.email, combinedWishlist, stockNumberArray, itemTypeArray})
            }
            else{
              setCookie('userName', null, {path: '/'})
              setCookie('userEmail', null, {path: '/'})
              removeCookie('isSignedIn', false, {path: '/'})
              setIsUserContextLoading(false)
            }
          })()
        }
        
      },[])

    return ( 
        <UserContext.Provider value={{isUserAuthorized, setIsUserAuthorized, user, setUser, isUserContextLoading, isUserSignedIn}}>
            { children }
        </UserContext.Provider>
     )
}
