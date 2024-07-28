import React from 'react'
import {Switch, Route, useRouteMatch, Link} from 'react-router-dom'
import {PoliciesHomepageBox} from './style'
import PrivacyPolicy from './PrivacyPolicy'
import ReturnPolicy from './ReturnPolicy'
import ShippingPolicy from './ShippingPolicy'
import TermsAndCondition from './TermsAndCondition'

export default function PoliciesHomepage() {

    const {url, path} = useRouteMatch()

    return (
        <PoliciesHomepageBox>
            <section className='side-links'>
                <Link to={`${url}/privacy-policy`}>
                    Privacy Policy
                </Link>
                <Link to={`${url}/return-policy`}>
                    Return Policy
                </Link>
                <Link to={`${url}/shipping-policy`}>
                    Shipping Policy
                </Link>
                <Link to={`${url}/terms-and-conditions`}>
                    Terms & Conditions
                </Link>
            </section>
            <section className='policy-content'>
                <Switch>
                    <Route path={`${path}/privacy-policy`} component={PrivacyPolicy} />
                    <Route path={`${path}/return-policy`} component={ReturnPolicy} />
                    <Route path={`${path}/shipping-policy`} component={ShippingPolicy} />
                    <Route path={`${path}/terms-and-conditions`} component={TermsAndCondition} />
                </Switch>
            </section>
        </PoliciesHomepageBox>
    )
}
