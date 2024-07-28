import React, {useEffect, useState} from 'react'
import {ListingPageBox} from '../style'
import GemstoneHomepage from './GemstoneHomepage'
import GemstoneListings from './GemstoneListings'
import GemstoneDetails from './GemstoneDetails'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchJewelryData } from '../../../../store/actions/jewelryActions'
import { checkForDefaultCookies } from '../../../../helper/checkForDefaultCookies'
import { useCookies } from 'react-cookie'

export default function GemstonePage(props) {

    const {path} = useRouteMatch()
    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies()

    const [isAllSet, setIsAllSet] = useState(false)

    useEffect(() => {
      checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchJewelryData("gemstones"))
        })
        .then((response) => {
          setIsAllSet(true);
        })
    }, []);

    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}/`} component={GemstoneHomepage} />
                    <Route exact path={`${path}/:gemstone`} render={() => (
                        <GemstoneListings 
                        {...props}
                        isAllSet={isAllSet}
                        />
                    )} />
                    <Route exact path={`${path}/:gemstone/:stockNumber`} render={() => (
                        <GemstoneDetails 
                        {...props}
                        isAllSet={path === 'gemstones' ? isAllSet : props.isAllSet}
                        />
                    )} />
                </Switch>
            </ListingPageBox>
    )
}