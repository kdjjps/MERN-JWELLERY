import React, { useEffect, useState } from 'react'
import CustomGemstonePendantTopLabel from '../TopLabel/CustomGemstonePendantTopLabel'
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'
import GemstonePage from '../ListingComponents/GemstoneListings'
import GemstonePendantPage from '../ListingComponents/GemstonePendantListings'
import ReviewOrder from '../ReviewOrder'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { fetchJewelryData } from '../../../store/actions/jewelryActions'
import { checkForDefaultCookies } from '../../../helper/checkForDefaultCookies'

export default function CreateGemstonePendant() {
    
    let { path} = useRouteMatch()
    const [isMasterAllSet, setIsMasterAllSet] = useState(false)
    const [cookies, setCookie] = useCookies()

    const dispatch = useDispatch()

    useEffect(() => {
        checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchJewelryData("gemstones"))
        })
        .then(() => {
            return dispatch(fetchJewelryData("gemPendants"))
        })
        .then((response) => {
            setIsMasterAllSet(true)
        });
    },[])

    return (
        <div>
            <CustomGemstonePendantTopLabel />
            <Switch>
                <Route path={`${path}/gemstones`} render={(props)=> (
                    <GemstonePage 
                    {...props}
                    isMasterAllSet={isMasterAllSet}
                    />
                )} />
                <Route path={`${path}/pendants`} render={(props) => (
                    <GemstonePendantPage
                    {...props}
                    isMasterAllSet={isMasterAllSet}
                    />
                )} />
                <Route path={`${path}/review-order`} render={(props) => (
                    <ReviewOrder
                    {...props}
                    isMasterAllSet={isMasterAllSet}
                    />
                )} />
            </Switch>
        </div>
    )
}