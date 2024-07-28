import React, { useEffect, useState } from 'react'
import {WishListBox} from './style'
import WishlistItem from './WishlistItem'
import { useSelector, useDispatch } from 'react-redux'
import { checkForDefaultCookies } from '../../../helper/checkForDefaultCookies'
import { fetchDiamondData, findDiamond } from '../../../store/actions/diamondActions'
import { fetchJewelryData } from '../../../store/actions/jewelryActions'
import { findJewelry } from '../../../store/actions/jewelryActions'
import {useCookies} from 'react-cookie'
import queryString from "query-string";
import { useLocation } from 'react-router-dom'
import { loadingCompleted } from '../../../store/actions/diamondActions'
import { removeFromWishlist } from '../../../store/actions/wishlistActions'
import Loader from '../Loader/Loader'

export default function WishList() {

    const [cookies, setCookie] = useCookies()
    const nfObject = new Intl.NumberFormat('en-US');
    const { search } = useLocation();
    const filter = queryString.parse(search);

    const [wishlistArray, setWishlistArray] = useState([])
    const [isAllSet, setIsAllSet] = useState(false)

    const data = useSelector(state => state)
    const dispatch = useDispatch()

    const {wishlistItems} = data.wishlistReducer

    const {unfilteredDiamondArray} = data.diamondReducer
    const {
      unfilteredSolitaireRingsArray,
      unfilteredSolitaireNecklacesArray,
      unfilteredSolitaireStudsArray,
      unfilteredFashionRingsArray,
      unfilteredDiamondPendantsArray,
      unfilteredAlphabetPendantsArray,
      unfilteredDiamondEarringsArray,
      unfilteredNosePinsArray,
      unfilteredMensChainsArray,
      unfilteredMensKadasArray,
      unfilteredMensBraceletsArray,
      unfilteredMensStudsArray,
      unfilteredMensRingsArray,
      unfilteredGemstonesArray,
      unfilteredGemstonesRingsArray,
      unfilteredGemstonesPendantsArray
    } = data.jewelryReducer;

   
    useEffect(() => {
        setWishlistArray([...wishlistItems])
      }, [wishlistItems])
  
      const dispatchAll = () => {
        return Promise.all([
          dispatch(fetchDiamondData(filter)),
          dispatch(fetchJewelryData('solitaireRings')),
          dispatch(fetchJewelryData('solitaireNecklaces')),
          dispatch(fetchJewelryData('solitaireStuds')),
          dispatch(fetchJewelryData('fashionRings')),
          dispatch(fetchJewelryData('diamondPendants')),
          dispatch(fetchJewelryData('alphabetPendants')),
          dispatch(fetchJewelryData('diamondEarrings')),
          dispatch(fetchJewelryData('nosePins')),
          dispatch(fetchJewelryData('mensRings')),
          dispatch(fetchJewelryData('mensChains')),
          dispatch(fetchJewelryData('mensBracelets')),
          dispatch(fetchJewelryData('mensKadas')),
          dispatch(fetchJewelryData('gemstones')),
          dispatch(fetchJewelryData('gemRings')),
          dispatch(fetchJewelryData('gemPendants'))
        ])
      }
  
  
      useEffect(() => {
        checkForDefaultCookies(cookies, setCookie)
          .then(() => {
            return dispatchAll();
          })
          .then(() => {
            setIsAllSet(true);
            dispatch(loadingCompleted());
          });
      }, []);

    return (

      isAllSet

      ?


        wishlistArray.length > 0 

        ?
        
        <WishListBox>
            <div>
                <h2>
                    Wish List ({JSON.parse(localStorage.getItem('wishlist')).length})
                </h2>
                {
                  cookies.isSignedIn

                  ?

                  <div></div>

                  :
                  
                  <p>
                    To save your Wish List, <a href='/account/sign-up' style={{textDecoration: 'none', fontWeight: 'bold'}}>Sign up</a> or <a href='/account/login' style={{textDecoration: 'none', fontWeight: 'bold'}}>Login</a>
                </p>
                }
            </div>
            <section className='wishlist-container'>
                {
                    wishlistArray.map((product, index) =>  <WishlistItem key={index} 
                        wishlistItems={wishlistItems}
                        product={product} 
                        unfilteredDiamondArray={unfilteredDiamondArray}
                        findDiamond={findDiamond}
                        unfilteredSolitaireRingsArray={unfilteredSolitaireRingsArray}
                        unfilteredSolitaireNecklacesArray={unfilteredSolitaireNecklacesArray}
                        unfilteredSolitaireStudsArray={unfilteredSolitaireStudsArray}
                        unfilteredFashionRingsArray={unfilteredFashionRingsArray}
                        unfilteredDiamondPendantsArray={unfilteredDiamondPendantsArray}
                        unfilteredDiamondEarringsArray={unfilteredDiamondEarringsArray}
                        unfilteredAlphabetPendantsArray={unfilteredAlphabetPendantsArray}
                        unfilteredGemstonesArray={unfilteredGemstonesArray}
                        unfilteredGemstonesRingsArray={unfilteredGemstonesRingsArray}
                        unfilteredGemstonesPendantsArray={unfilteredGemstonesPendantsArray}
                        unfilteredMensBraceletsArray={unfilteredMensBraceletsArray}
                        unfilteredMensStudsArray={unfilteredMensStudsArray}
                        unfilteredMensChainsArray={unfilteredMensChainsArray}
                        unfilteredMensKadasArray={unfilteredMensKadasArray}
                        unfilteredMensRingsArray={unfilteredMensRingsArray}
                        unfilteredNosePinsArray={unfilteredNosePinsArray}
                        removeFromWishlist={removeFromWishlist}
                        findJewelry={findJewelry}
                        nfObject={nfObject}
                        isAllSet={isAllSet}
                        />)
                }
            </section>
        </WishListBox>

        :

        <div className='empty-display'>
            <i className='fas fa-heart' style={{fontSize:'10rem', marginBottom: '20px'}}></i>
            <h2>
            No item in your wishlist
            </h2>
        </div>

    :

    <Loader/>
    )
}