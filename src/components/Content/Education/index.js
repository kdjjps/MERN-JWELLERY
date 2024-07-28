import React from 'react'
import {
    useRouteMatch,
    Switch,
    Route
} from 'react-router-dom'
import EducationHomepage from './EducationHomepage'
import DiamondEducationPage from './DiamondEducation'
import GemstoneEducationPage from './GemstoneEducation'
import JewelryEducationPage from './JewelryEducation'

export default function EducationPage() {
    let {path} = useRouteMatch()

    return (
            <Switch>
                <Route exact path={`${path}`} component={EducationHomepage} />
                <Route path={`${path}/diamonds`} component={DiamondEducationPage} />
                <Route path={`${path}/gemstones`} component={GemstoneEducationPage} />
                <Route path={`${path}/jewelry`} component={JewelryEducationPage} />
            </Switch>
    )
}