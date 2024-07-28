import React, {useEffect, useState} from 'react'
import {ListingPageBox} from '../style'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import ChainDetails from './ChainDetails'
import ChainListings from './ChainListings'
import { useDispatch } from 'react-redux'
import { fetchJewelryData } from '../../../../store/actions/jewelryActions'
import { useCookies } from 'react-cookie'
import { checkForDefaultCookies } from '../../../../helper/checkForDefaultCookies'

export default function ChainPage() {
    const {path} = useRouteMatch()
    const [cookies, setCookie] = useCookies()

    const [isAllSet, setIsAllSet] = useState(false)

    const dispatch = useDispatch()

    useEffect(() =>{
        checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchJewelryData('mensChains'))
        })
        .then(response => {
            setIsAllSet(true)
        })
    },[])


    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}/`} render={(props) => (
                        <ChainListings 
                        {...props}
                        isAllSet={isAllSet}
                        />
                    )}/>
                    <Route exact path={`${path}/:chainId`} render={(props) => (
                        <ChainDetails 
                        {...props}
                        isAllSet={isAllSet}
                        />
                    )} />
                </Switch>
            </ListingPageBox>
    )
}