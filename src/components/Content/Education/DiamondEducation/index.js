import React from 'react'
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'
import DiamondEducationHomepage from './DiamondEducationHomepage'
import DiamondTopicEducation from './DiamondTopicEducation'

export default function DiamondEducationPage() {
     let {path} = useRouteMatch()

    return (
        <Switch>
            <Route exact path={`${path}`} component={DiamondEducationHomepage} />
            <Route path={`${path}/:topicID`} component={DiamondTopicEducation} />
        </Switch>
    )
}