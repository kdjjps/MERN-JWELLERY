import React from 'react'
import {Switch, Route, useRouteMatch, Link} from 'react-router-dom'
import {FAQHomepageBox} from './style'
import DeliveryAndShipment from './DeliveryAndShipment'
import OnlinePurchase from './OnlinePurchase'
import Payments from './Payments'

export default function FAQHomepage() {

    const {url, path} = useRouteMatch()

    return (

        <FAQHomepageBox>
            <section className='side-links'>
                <Link to={`${url}/delivery-and-shipment`}>
                    Delivery & Shipment
                </Link>
                <Link to={`${url}/online-purchase`}>
                    Online Purchase
                </Link>
                <Link to={`${url}/payments`}>
                    Payments
                </Link>
            </section>
            <section className='faq-content'>
                <Switch>
                    <Route path={`${path}/delivery-and-shipment`} component={DeliveryAndShipment} />
                    <Route path={`${path}/online-purchase`} component={OnlinePurchase} />
                    <Route path={`${path}/payments`} component={Payments} />
                </Switch>
            </section>
        </FAQHomepageBox>
        
    )
}
