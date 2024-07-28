import React,{useContext, useEffect, useState} from 'react'
import {ListingPageBox} from '../../style'
import PresetRingListings from './PresetRingListings'
import PresetRingDetails from './PresetRingDetails'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import {PriceContext} from '../../../../../contexts/PriceContext'
import {useCookies} from 'react-cookie'
import { useDispatch } from 'react-redux'
import { fetchJewelryData } from '../../../../../store/actions/jewelryActions'
import { checkForDefaultCookies } from '../../../../../helper/checkForDefaultCookies'

export default function PresetRingsPage(props) {
    const {path} = useRouteMatch()
    const {diamondCaratPresetData,makingCharges} = useContext(PriceContext)

    const [isAllSet, setIsAllSet] = useState(false)

    let carat = props.carat
    let setCarat = props.setCarat
    let ringSize = props.ringSize
    let diamondQuality = props.diamondQuality
    let handleModalDisplay = props.handleModalDisplay
    let getTotalPrice = props.getTotalPrice

    const dispatch = useDispatch()

    const [cookies, setCookie] = useCookies()

    const getFromAmount = (weight, currencyCode) => {
        let chargesWithoutGST = (weight * 13 + weight * (cookies.goldPrice['18KT']/cookies.exchangeRate['INR']) + 330 ) * cookies.exchangeRate[currencyCode]
        let GST = chargesWithoutGST * 0.03
        
        return parseInt(chargesWithoutGST + GST)
    }

    useEffect(() =>{
        checkForDefaultCookies(cookies, setCookie)
        .then(() => {
            return dispatch(fetchJewelryData('solitaireRings'))
        })
        .then(response => {
            setIsAllSet(true)
        })
    },[])

    return (
            <ListingPageBox>
                <Switch>
                    <Route exact path={`${path}`} render={(props) => (
                        <PresetRingListings 
                        diamondCaratPresetData={diamondCaratPresetData}
                        makingCharges={makingCharges} getFromAmount={getFromAmount} isAllSet={isAllSet}
                         />
                    )} />
                    <Route path={`${path}/:ringId`} render={(props) => (
                        <PresetRingDetails 
                        diamondCaratPresetData={diamondCaratPresetData}
                        makingCharges={makingCharges} getTotalPrice={getTotalPrice}
                        carat={carat} ringSize={ringSize} diamondQuality={diamondQuality} handleModalDisplay={handleModalDisplay} setCarat={setCarat} isAllSet={isAllSet}
                        />
                    )} />
                </Switch>
            </ListingPageBox>
    )
}