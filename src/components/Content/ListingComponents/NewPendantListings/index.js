import React, {useEffect, useState} from 'react'
import {ListingPageBox} from '../style'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import NewPendantDetails from './NewPendantDetails'
import NewPendantListings from './NewPendantListings'
import { useDispatch } from 'react-redux'
import { fetchJewelryData } from '../../../../store/actions/jewelryActions'
import { useCookies } from 'react-cookie'
import { checkForDefaultCookies } from '../../../../helper/checkForDefaultCookies'

export default function NewPendantPage() {
    const {path} = useRouteMatch()
    const [cookies, setCookie] = useCookies()

    const [isAllSet, setIsAllSet] = useState(false)

    const dispatch = useDispatch()

    useEffect(() =>{
        checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchJewelryData('diamondPendants'))
        })
        .then(response => {
            setIsAllSet(true)
        })
    },[])


    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}/`} render={(props) => (
                        <NewPendantListings
                        {...props}
                        isAllSet={isAllSet}
                        />
                    )} />
                    <Route exact path={`${path}/:pendantId`} render={(props) => (
                        <NewPendantDetails 
                        {...props}
                        isAllSet={isAllSet}
                        />
                    )} />
                </Switch>
            </ListingPageBox>
    )
}