import React,{useEffect, useContext, useState} from 'react'
import {ListingPageBox} from '../../style'
import PresetNecklaceListings from './PresetNecklaceListings'
import PresetNecklaceDetails from './PresetNecklaceDetails'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import {PriceContext} from '../../../../../contexts/PriceContext'
import getFromAmount from '../../../../../helper/getFromAmount'
import {useCookies} from 'react-cookie'
import { useDispatch } from 'react-redux'
import { fetchJewelryData } from '../../../../../store/actions/jewelryActions'
import { checkForDefaultCookies } from '../../../../../helper/checkForDefaultCookies'

export default function PresetNecklacesPage(props) {
    
    const {path} = useRouteMatch() 
    const {diamondCaratPresetData,makingCharges} = useContext(PriceContext)

    const [isAllSet, setIsAllSet] = useState(false)

    let carat = props.carat
    let diamondQuality = props.diamondQuality
    let necklaceLength = props.necklaceLength 
    let handleModalDisplay = props.handleModalDisplay
    let getTotalPrice = props.getTotalPrice

    const dispatch = useDispatch()

    const [cookies, setCookie] = useCookies()

    useEffect(() =>{
        checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchJewelryData('solitaireNecklaces'))
        })
        .then(response => {
            setIsAllSet(true)
        })
    },[])

    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}`}
                     render={(props) => (
                         <PresetNecklaceListings
                         diamondCaratPresetData={diamondCaratPresetData}
                         makingCharges={makingCharges} getFromAmount={getFromAmount} isAllSet={isAllSet} />
                     )} />
                    <Route exact path={`${path}/:necklaceId`}
                    render={(props) => (
                        <PresetNecklaceDetails
                        diamondCaratPresetData={diamondCaratPresetData}
                         makingCharges={makingCharges}
                         carat={carat} diamondQuality={diamondQuality} necklaceLength={necklaceLength} handleModalDisplay={handleModalDisplay} isAllSet={isAllSet}
                         getTotalPrice={getTotalPrice} />
                    )} />
                </Switch>
            </ListingPageBox>
    )
}