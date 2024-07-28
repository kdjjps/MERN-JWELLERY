import React, {useEffect, useState} from 'react'
import CustomRingTopLabel from '../TopLabel/CustomRingTopLabel'
import {
    Switch,
    Route,
    useRouteMatch,
    useLocation
} from 'react-router-dom'
import CreateJewelryBox from './style'
import DiamondPage from '../ListingComponents/DiamondListings'
import StudPage from '../ListingComponents/StudListings'
import ReviewOrder from '../ReviewOrder'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { checkForDefaultCookies } from '../../../helper/checkForDefaultCookies'
import { fetchDiamondData } from '../../../store/actions/diamondActions'
import { fetchJewelryData } from '../../../store/actions/jewelryActions'
import queryString from "query-string";

export default function CreateJewelry() {
    const [stepStatus, setStepStatus] = useState(1)
    const [isMasterAllSet, setIsMasterAllSet] = useState(false)
    const [cookies, setCookie] = useCookies("")
    let { path } = useRouteMatch()
    const { search } = useLocation();
    const filter = queryString.parse(search);

    const dispatch = useDispatch()

    const onChangeStatus = (e) => {
        switch(e.target.id){
            case 'change-diamond':
                setStepStatus(1)
                break
            case 'change-earring':
                setStepStatus(2)
                break
        }
    }

    useEffect(() => {
        checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchDiamondData(filter))
        })
        .then(() => {
           return dispatch(fetchJewelryData('solitaireStuds'))
        })
        .then(() => {
            setIsMasterAllSet(true)
        })
    },[])

    return (
        <CreateJewelryBox>
            {
                window.location.pathname === 'create-your-own-stud/studs'
                
                ?

                <div className='about-listing-page'>
                    <h1 className='page-title'>
                        <span>
                            Create Your Own <br/>
                        </span>
                        <span>
                            Diamond Stud
                        </span>
                    </h1>
                    <p className='page-subtitle'>
                    Choose a setting and start creating your personalised solitaire stud 
                    </p>
                </div>

                :
                
                ""
            }
            <CustomRingTopLabel/>
            <Switch>
                <Route path={`${path}/studs`} render={(props) => (
                    <StudPage
                        {...props}
                        isMasterAllSet={isMasterAllSet}
                    />
                )} />
                <Route path={`${path}/diamonds/first`} render={(props) => (
                    <DiamondPage
                        {...props}
                        isMasterAllSet={isMasterAllSet}
                    />
                )} />
                <Route path={`${path}/diamonds/second`} render={(props) => (
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