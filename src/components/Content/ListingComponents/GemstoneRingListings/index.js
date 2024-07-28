import React from 'react'
import {ListingPageBox} from '../style'
import GemstoneRingListings from './GemstoneRingListings'
import GemstoneRingDetails from './GemstoneRingDetails'
import {Switch, Route, useRouteMatch} from 'react-router-dom'

export default function GemstoneRingPage(props) {  

    let {path} = useRouteMatch()

    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}`} render={() => (
                        <GemstoneRingListings
                        {...props}
                        />
                    )} />
                    <Route path={`${path}/:gemstone/:stockNumber`} render={() => (
                        <GemstoneRingDetails
                        {...props}
                        />
                    )} />
                </Switch>
            </ListingPageBox>
    )
}