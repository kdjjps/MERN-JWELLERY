import React from 'react'
import {AboutUsHomepageBox} from './style'
import AboutUs from './AboutUs'
import EthicalSourcing from './EthicalSourcing'
import {Switch, Route, useRouteMatch, Link} from 'react-router-dom'

export default function AboutUsHomepage() {

    const {url, path} = useRouteMatch()

    return (
        <AboutUsHomepageBox>
            <section className='side-links'>
                <Link to={`${url}`}>
                    About Us
                </Link>
                <Link to={`${url}/ethical-sourcing`}>
                    Ethical Sourcing
                </Link>
                <Link to={`/faq/delivery-and-shipment`}>
                    FAQs
                </Link>
            </section>
            <section className='about-us-content'>
                <Switch>
                    <Route exact path={`${path}/`} component={AboutUs} />
                    <Route exact path={`${path}/ethical-sourcing`} component={EthicalSourcing} />
                </Switch>
            </section>
        </AboutUsHomepageBox>
    )
}
