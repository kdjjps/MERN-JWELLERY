import React from 'react'
import {ListingPageBox} from '../style'
import RingListings from './RingListings'
import RingDetails from './RingDetails'
import {Switch, Route, useRouteMatch} from 'react-router-dom'

export default function RingPage({isMasterAllSet}) {  
    
    let {path} = useRouteMatch()

    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}/`} render={(props) => (
                        <RingListings 
                        {...props}
                        isMasterAllSet={isMasterAllSet}
                        />
                    )}  />
                    <Route exact path={`${path}/:ringId`} render={(props) => (
                        <RingDetails 
                        {...props}
                        isMasterAllSet={isMasterAllSet}
                        />
                    )}  />
                </Switch>
            </ListingPageBox>
    )
}