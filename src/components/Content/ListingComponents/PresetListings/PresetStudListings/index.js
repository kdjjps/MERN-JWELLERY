import React, {useEffect, useState} from 'react'
import {ListingPageBox} from '../../style'
import PresetStudDetails from './PresetStudDetails'
import PresetStudListings from './PresetStudListings'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import getFromAmount from '../../../../../helper/getFromAmount'
import { useDispatch } from 'react-redux'
import { fetchJewelryData } from '../../../../../store/actions/jewelryActions'
import {checkForDefaultCookies} from "../../../../../helper/checkForDefaultCookies"

export default function PresetStudsPage(props) {
    let {path} = useRouteMatch()
    let carat = props.carat
    let diamondQuality = props.diamondQuality
    let handleModalDisplay = props.handleModalDisplay
    let getTotalPrice = props.getTotalPrice

    const [isAllSet, setIsAllSet] = useState(false)

    const dispatch = useDispatch()

    const [cookies, setCookie] = useCookies()

    useEffect(() =>{
        checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchJewelryData('solitaireStuds'))
        })
        .then(response => {
            setIsAllSet(true)
        })
    },[])

    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}/`} render={(props) => (
                        <PresetStudListings getFromAmount={getFromAmount} isAllSet={isAllSet} />
                    )} />
                    <Route path={`${path}/:studId`} render={(props) => ( 
                        <PresetStudDetails 
                        getFromAmount={getFromAmount}
                        carat={carat} diamondQuality={diamondQuality} handleModalDisplay={handleModalDisplay}
                        getTotalPrice={getTotalPrice}
                         />
                    )} />
                </Switch>
            </ListingPageBox>
    )
}