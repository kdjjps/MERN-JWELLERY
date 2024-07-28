import React, {useEffect, useState} from 'react'
import CustomGemstoneTopLabel from '../TopLabel/CustomGemstoneTopLabel'
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'
import GemstonePage from '../ListingComponents/GemstoneListings'
import GemstoneRingPage from '../ListingComponents/GemstoneRingListings'
import ReviewOrder from '../ReviewOrder'
import { checkForDefaultCookies } from '../../../helper/checkForDefaultCookies'
import {useCookies} from 'react-cookie'
import { useDispatch } from 'react-redux'
import { fetchJewelryData } from '../../../store/actions/jewelryActions'

export default function CreateGemstoneJewelry() {

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
            return dispatch(fetchJewelryData("gemRings"))
        })
        .then((response) => {
            setIsMasterAllSet(true)
        });
    },[])

    return (
        <div>
            <CustomGemstoneTopLabel/>
            <Switch>
                <Route path={`${path}/gemstones`} render={(props) => (
                    <GemstonePage 
                    {...props}
                    isMasterAllSet={isMasterAllSet}
                    />
                )} />
                <Route path={`${path}/rings`} render={(props) => (
                    <GemstoneRingPage 
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