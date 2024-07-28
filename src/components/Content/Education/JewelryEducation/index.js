import React from 'react'
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'
import MetalsEducation from './MetalsEducation'
import RingSize from './RingSize'

export default function JewelryEducationPage() {

     let {path} = useRouteMatch()

    return (
        <Switch>
            <Route exact path={`${path}/metals`} component={MetalsEducation} />
            <Route exact path={`${path}/ring-size`} component={RingSize} />
        </Switch>       
    )
}