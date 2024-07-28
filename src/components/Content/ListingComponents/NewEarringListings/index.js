import React, {useEffect, useState} from 'react'
import {ListingPageBox} from '../style'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import NewEarringDetails from './NewEarringDetails'
import NewEarringListings from './NewEarringListings'
import { useDispatch } from 'react-redux'
import { fetchJewelryData } from '../../../../store/actions/jewelryActions'
import { useCookies } from 'react-cookie'
import { checkForDefaultCookies } from '../../../../helper/checkForDefaultCookies'

export default function NewEarringPage() {
    const {path} = useRouteMatch()
    const [cookies, setCookie] = useCookies()

    const [isAllSet, setIsAllSet] = useState(false)

    const dispatch = useDispatch()

    useEffect(() =>{
        checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchJewelryData('diamondEarrings'))
        })
        .then(response => {
            setIsAllSet(true)
        })
    },[])

    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}/`} render={(props) => (
                        <NewEarringListings 
                        {...props}
                        isAllSet={isAllSet}
                        />
                    )} />
                    <Route exact path={`${path}/:earringId`} render={(props) => (
                        <NewEarringDetails
                        {...props}
                        isAllSet={isAllSet}
                        />
                    )} />
                </Switch>
            </ListingPageBox>
    )
}