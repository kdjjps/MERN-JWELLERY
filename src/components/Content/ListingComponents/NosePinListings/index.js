import React, {useEffect, useState} from 'react'
import {ListingPageBox} from '../style'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import NosePinDetails from './NosePinDetails'
import NosePinListings from './NosePinListings'
import { useDispatch } from 'react-redux'
import { fetchJewelryData } from '../../../../store/actions/jewelryActions'
import { useCookies } from 'react-cookie'
import { checkForDefaultCookies } from '../../../../helper/checkForDefaultCookies'

export default function NosePinPage() {
    const {path} = useRouteMatch()
    const [cookies, setCookie] = useCookies()

    const [isAllSet, setIsAllSet] = useState(false)

    const dispatch = useDispatch()

    useEffect(() =>{
        checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchJewelryData('nosePins'))
        })
        .then(response => {
            setIsAllSet(true)
        })
    },[])

    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}/`} render={(props) => (
                        <NosePinListings 
                        {...props}
                        isAllSet={isAllSet}
                        />
                    )} />
                    <Route exact path={`${path}/:pinId`} render={(props) => (
                        <NosePinDetails 
                        {...props}
                        isAllSet={isAllSet}
                        />
                    )} />
                </Switch>
            </ListingPageBox>
    )
}