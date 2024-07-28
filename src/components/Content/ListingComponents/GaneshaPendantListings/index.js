import React, {useEffect, useState} from 'react'
import {ListingPageBox} from '../style'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import GaneshaPendantDetails from './GaneshaPendantDetails'
import GaneshaPendantListings from './GaneshaPendantListings'
import { useDispatch } from 'react-redux'
import { fetchJewelryData } from '../../../../store/actions/jewelryActions'
import { checkForDefaultCookies } from '../../../../helper/checkForDefaultCookies'
import { useCookies } from 'react-cookie'

export default function EngagementRingPage() {
    const {path} = useRouteMatch()
    const [cookies, setCookie] = useCookies()

    const [isAllSet, setIsAllSet] = useState(false)

    const dispatch = useDispatch()

    useEffect(() =>{
        checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchJewelryData('alphabetPendants'))
        })
        .then(response => {
            setIsAllSet(true)
        })
    },[])

    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}/`} render={(props) => (
                        <GaneshaPendantListings 
                        {...props}
                        isAllSet={isAllSet}
                        />
                    )} />
                    <Route exact path={`${path}/:pendantId`} render={(props) => (
                        <GaneshaPendantDetails
                        {...props}
                        isAllSet={isAllSet}
                        />
                    )} />
                </Switch>
            </ListingPageBox>
    )
}