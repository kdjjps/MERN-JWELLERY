import React, {useEffect, useState} from 'react'
import {ListingPageBox} from '../style'
import KadaDetails from './KadaDetails'
import KadaListings from './KadaListings'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import { useDispatch } from 'react-redux'
import { fetchJewelryData } from '../../../../store/actions/jewelryActions'
import {checkForDefaultCookies} from '../../../../helper/checkForDefaultCookies'

export default function KadaPage() {
    const {path} = useRouteMatch()
    const [cookies, setCookie] = useCookies()

    const [isAllSet, setIsAllSet] = useState(false)

    const getTotalRingPrice = (weight, makingCharge) => {
        return parseInt(cookies.exchangeRate[cookies.currencyCode] * ((weight * makingCharge) + (weight  * cookies.goldPrice['22KT'])))
    }

    const dispatch = useDispatch()

    useEffect(() =>{
        checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchJewelryData('mensKadas'))
        })
        .then(response => {
            setIsAllSet(true)
        })
    },[])

    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}/`} render={(props) => (
                        <KadaListings getTotalRingPrice={getTotalRingPrice} isAllSet={isAllSet} />
                    )} />
                    <Route exact path={`${path}/:kadaId`} render={(props) => (
                        <KadaDetails getTotalRingPrice={getTotalRingPrice} isAllSet={isAllSet} />
                    )} />
                </Switch>
            </ListingPageBox>
    )
}
