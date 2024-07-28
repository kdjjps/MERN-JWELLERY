import React from 'react'
import {ListingPageBox} from '../style'
import GemstonePendantListings from './GemstonePendantListings'
import GemstonePendantDetails from './GemstonePendantDetails'
import {Switch, Route, useRouteMatch} from 'react-router-dom'

export default function GemstonePendantPage(props) {  
    
    let {path} = useRouteMatch()

    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}/`} render={() => (
                        <GemstonePendantListings 
                        {...props}
                        />
                    )} />
                    <Route path={`${path}/:gemstone/:stockNumber`} render={() => (
                        <GemstonePendantDetails
                        {...props}
                        />
                    )} />
                </Switch>
            </ListingPageBox>
    )
}