import React, {useState, useEffect} from 'react'
import CustomPendantTopLabel from '../TopLabel/CustomPendantTopLabel'
import {
    Route,
    Switch,
    useRouteMatch,
    useLocation
} from 'react-router-dom'
import CreateJewelryBox from './style'
import DiamondPage from '../ListingComponents/DiamondListings'
import NecklacePage from '../ListingComponents/NecklaceListings'
import ReviewOrder from '../ReviewOrder'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { checkForDefaultCookies } from '../../../helper/checkForDefaultCookies'
import { fetchDiamondData } from '../../../store/actions/diamondActions'
import { fetchJewelryData } from '../../../store/actions/jewelryActions'
import queryString from 'query-string'

export default function CreateJewelry() {
    const [isMasterAllSet, setIsMasterAllSet] = useState(false)
    const [cookies, setCookie] = useCookies("")
    let { path } = useRouteMatch()
    const { search } = useLocation();
    const filter = queryString.parse(search);

    const dispatch = useDispatch()

    useEffect(() => {
        checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchDiamondData(filter))
        })
        .then(() => {
            return dispatch(fetchJewelryData('solitaireNecklaces'))
        })
        .then(() => {
            setIsMasterAllSet(true)
        })
    },[])

    return (
        <CreateJewelryBox>
            {
                window.location.pathname === '/create-your-own-necklace/necklaces'

                ?

                <div className='about-listing-page'>
                    <h1 className='page-title'>
                        <span>
                            Create Your Own <br/>
                        </span>
                        <span>
                            Diamond Necklace
                        </span>
                    </h1>
                    <p className='page-subtitle'>
                    Choose a setting and start creating your personalised solitaire necklace
                    </p>
                </div>

                :

                ""

            }
            <CustomPendantTopLabel/>
            <Switch>
                <Route path={`${path}/necklaces`} render={(props) => (
                    <NecklacePage
                        {...props}
                        isMasterAllSet={isMasterAllSet}
                    />
                )} />
                <Route path={`${path}/diamonds`} render={(props) => (
                    <DiamondPage
                        {...props}
                        isMasterAllSet={isMasterAllSet}
                    />
                )} />
                <Route path={`${path}/review-order`} render={(props) => (
                    <ReviewOrder
                        {...props}
                        isMasterAllSet={isMasterAllSet}
                    />
                )} />
            </Switch>
        </CreateJewelryBox>
    )
}