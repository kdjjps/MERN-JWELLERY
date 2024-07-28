import React, {useState} from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import PresetRingsPage from './PresetRingListings'
import PresetNecklacesPage from './PresetNecklaceListings'
import PresetStudsPage from './PresetStudListings'
import PresetCaratModal from './PresetCaratModal'
import PresetQualityModal from './PresetQualityModal'
import PresetRingSizeModal from './PresetRingSizeModal'
import PresetNecklaceLengthModal from './PresetNecklaceLengthModal'
import { makingCharges } from '../../../../fakedata/chargesData'
import {useCookies} from 'react-cookie'

export default function PresetJewelryPage() {
    const {path} = useRouteMatch()
    const [cookies] = useCookies()
    const [carat, setCarat] = useState('0.3')
    const [diamondQuality, setDiamondQuality] = useState('IJSI')
    const [ringSize, setRingSize] = useState(3)
    const [necklaceLength, setNecklaceLength] = useState(12)
    const [carartModalSlideStatus, setCaratModalSlideStatus] = useState(false)
    const [qualityModalSlideStatus, setQualityModalSlideStatus] = useState(false)
    const [ringSizeModalSlideStatus, setRingSizeModalSlideStatus] = useState(false)
    const [necklaceLengthModalSlideStatus, setNecklaceLengthModalSlideStatus] = useState(false)

    const changeCarat = (carat) => {
        setCarat(carat)
    }

    const changeDiamondQuality = (quality) => {
        setDiamondQuality(quality)
    }

    const changeRingSize = (size) => {
        setRingSize(size)
    }

    const changeNecklaceLength = (length) => {
        setNecklaceLength(length)
    }

    const getTotalPrice = (carat, quality, makingCharge, jewelryWeight) => {
       let diamondPrice =  0

       switch (carat) {
            case 0.3:
                if (quality === 'IJSI'){
                    diamondPrice = 330
                }
                else if (quality === 'VSSI'){
                    diamondPrice = 440
                }
                break;
            case 0.5:
                if (quality === 'IJSI'){
                    diamondPrice = 820
                }
                else if (quality === 'VSSI'){
                    diamondPrice = 1230
                }
                break;
            case 0.7:
                if (quality === 'IJSI'){
                    diamondPrice = 1650
                }
                else if (quality === 'VSSI'){
                    diamondPrice = 2330
                }
                break;
            case 1:
                if (quality === 'IJSI'){
                    diamondPrice = 4110
                }
                else if (quality === 'VSSI'){
                    diamondPrice = 6300
                }
                break;
            case 2:
                if (quality === 'IJSI'){
                    diamondPrice = 13010
                }
                else if (quality === 'VSSI'){
                    diamondPrice = 20550
                }
                break;
            default:
                break;
        }

        return parseInt(cookies.exchangeRate[cookies.currencyCode] * ((jewelryWeight * makingCharges[1].price) + (jewelryWeight  * cookies.goldPrice['18KT']) + parseInt(diamondPrice)))

    }

    const onHamburgerClick = (e) =>{

        switch(e.currentTarget.id){
            case 'carat':
                if (carartModalSlideStatus === false) {
                    setCaratModalSlideStatus(true)
                    document.body.setAttribute('style', `position: fixed; top: ${window.scrollY}; left: 0; right: 0;`)
                  }
                else{
                setCaratModalSlideStatus(false)
                document.body.setAttribute('style', '')
                window.scrollTo(0, window.scrollY)
                }
                break;
            case 'quality':
                if (qualityModalSlideStatus === false) {
                    setQualityModalSlideStatus(true)
                    document.body.setAttribute('style', `position: fixed; top: ${window.scrollY}; left: 0; right: 0;`)
                    }
                else{
                setQualityModalSlideStatus(false)
                document.body.setAttribute('style', '')
                window.scrollTo(0, window.scrollY)
                }
                break;
            case 'ring-size':
                if (ringSizeModalSlideStatus === false) {
                    setRingSizeModalSlideStatus(true)
                    document.body.setAttribute('style', `position: fixed; top: ${window.scrollY}; left: 0; right: 0;`)
                    }
                else{
                setRingSizeModalSlideStatus(false)
                document.body.setAttribute('style', '')
                window.scrollTo(0, window.scrollY)
                }
                break;
            case 'necklace-length':
                if (necklaceLengthModalSlideStatus === false) {
                    setNecklaceLengthModalSlideStatus(true)
                    document.body.setAttribute('style', `position: fixed; top: ${window.scrollY}; left: 0; right: 0;`)
                    }
                else{
                setNecklaceLengthModalSlideStatus(false)
                document.body.setAttribute('style', '')
                window.scrollTo(0, window.scrollY)
                }
                break;
            default:
                setCaratModalSlideStatus(false)
                setQualityModalSlideStatus(false)
                setRingSizeModalSlideStatus(false)
                setNecklaceLengthModalSlideStatus(false)
                document.body.setAttribute('style', '')
                window.scrollTo(0, window.scrollY)

        }
 
      }

    return (
        <div>
            <Switch>
                <Route path={`${path}/rings`} render={(props) => (
                    <PresetRingsPage 
                    carat={carat} 
                    setCarat={setCarat}
                    diamondQuality={diamondQuality}
                    ringSize={ringSize} 
                    handleModalDisplay={onHamburgerClick}
                    getTotalPrice={getTotalPrice}
                    />
                )}  />
                <Route path={`${path}/necklaces`} render={(props) => (
                    <PresetNecklacesPage 
                    carat={carat} 
                    setCarat={setCarat}
                    diamondQuality={diamondQuality} 
                    necklaceLength={necklaceLength} 
                    necklaceSlideStatus={necklaceLengthModalSlideStatus}
                    caratSlideStaus={carartModalSlideStatus} 
                    qualityStatus={qualityModalSlideStatus}
                    handleModalDisplay={onHamburgerClick}
                    getTotalPrice={getTotalPrice}
                    />
                )}  />
                <Route path={`${path}/studs`} render={(props) => (
                    <PresetStudsPage 
                    carat={carat} 
                    setCarat={setCarat}
                    diamondQuality={diamondQuality} 
                    caratSlideStaus={carartModalSlideStatus} 
                    qualityStatus={qualityModalSlideStatus}
                    handleModalDisplay={onHamburgerClick} 
                    getTotalPrice={getTotalPrice}
                    />
                    
                )}  />
                <Route path={`${path}/mens/studs`} render={(props) => (
                    <PresetStudsPage 
                    carat={carat} 
                    setCarat={setCarat}
                    diamondQuality={diamondQuality} 
                    caratSlideStaus={carartModalSlideStatus} 
                    qualityStatus={qualityModalSlideStatus}
                    handleModalDisplay={onHamburgerClick} 
                    getTotalPrice={getTotalPrice}
                    />
                    
                )}  />
            </Switch>
            <PresetCaratModal changeCarat={changeCarat} caratSlideStatus={carartModalSlideStatus} handleModalDisplay={onHamburgerClick} />
            <PresetQualityModal changeDiamondQuality={changeDiamondQuality} qualitySlideStatus={qualityModalSlideStatus} handleModalDisplay={onHamburgerClick}/>
            <PresetRingSizeModal changeRingSize={changeRingSize} ringSlideStatus={ringSizeModalSlideStatus} handleModalDisplay={onHamburgerClick}/>
            <PresetNecklaceLengthModal changeNecklaceLength={changeNecklaceLength} necklaceSlideStatus={necklaceLengthModalSlideStatus} handleModalDisplay={onHamburgerClick}/>
        </div>
    )
}
