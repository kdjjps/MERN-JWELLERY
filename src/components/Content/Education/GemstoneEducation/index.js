import React from 'react'
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'
import GemstoneEducationHomepage from './GemstoneEducationHomepage'
import GemstoneTopicEducation from './GemstoneTopicEducation'

export default function GemstoneEducationPage() {
    
     let {path} = useRouteMatch()

    return (
        <Switch>
            <Route exact path={`${path}`} component={GemstoneEducationHomepage} />
            <Route exact path={`${path}/:gemId`} component={GemstoneTopicEducation} />
        </Switch>
    )
}