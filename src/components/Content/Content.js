import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {ContentBox} from './common-style'
import Homepage from './Homepage/Homepage'
import NonHomepage from './NonHomepage'
import BreadCrumb from './BreadCrumb'

export default function Content() {
    
    let pathname = window.location.pathname
    let crumbsArray = pathname.split('/')

    return (
        <ContentBox>

            {
            
            pathname !== '/'
            
            ?

            <BreadCrumb crumbsArray={crumbsArray}>
            </BreadCrumb>

            :

           <div>

           </div>

            }

            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route component={NonHomepage} />
            </Switch>
            
        </ContentBox>
    )
}