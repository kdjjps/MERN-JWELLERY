import React, {useEffect, useState} from 'react'
import {ListingPageBox} from '../style'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import EngagementRingDetails from './EngagementRingDetails'
import EngagementRingListings from './EngagementRingListings'
import { useDispatch } from 'react-redux'
import { fetchJewelryData } from '../../../../store/actions/jewelryActions'
import { useCookies } from 'react-cookie'
import { checkForDefaultCookies } from '../../../../helper/checkForDefaultCookies'

export default function EngagementRingPage() {
    const {path} = useRouteMatch()
    const [cookies, setCookie] = useCookies()

    const [isAllSet, setIsAllSet] = useState(false)

    const dispatch = useDispatch()

    useEffect(() =>{
        checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchJewelryData('fashionRings'))
        })
        .then(response => {
            setIsAllSet(true)
        })
    },[])

    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}`} render={(props) => (
                        <EngagementRingListings 
                        {...props}
                        isAllSet={isAllSet}
                        />
                        )} 
                    />
                    <Route exact path={`${path}/:ringId`} render={(props) => (
                        <EngagementRingDetails 
                        {...props}
                        isAllSet={isAllSet}
                        />
                        )} 
                    />
                </Switch>
            </ListingPageBox>
    )
}