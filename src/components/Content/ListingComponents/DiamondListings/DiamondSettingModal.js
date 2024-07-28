import React from 'react'
import {ModalBox} from '../style'
import {useCookies} from "react-cookie"
import {useParams} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addLooseDiamond } from '../../../../store/actions/cartActions'
import { letsShowFlash } from '../../../../store/actions/flashAction.js'

export default function DiamondSettingModal({status, setOptionModalStatus, shape,
    lab,
    carat,
    color,
    cut,
    clarity,
    culet,
    symmetry,
    fluorescence,
    measurement,
    polish,
    ratio,
    girdlePercentage,
    depth,
    table,
    black,
    white
}) {

    const dispatch = useDispatch()
    const [cookies, setCookie, removeCookie] = useCookies()
    const {diamondId} = useParams()

    const selectDiamond = (e) => {
        let id = e.target.id

        switch (id) {
            case 'ring-selector':
             
                setCookie('whatGotSelectedFirstForCustomRing', 'diamond', { path: '/' })
                setCookie('_diamondSelectedForCustomRing', diamondId, { path: '/' })
                setCookie('_diamondShapeSelectedForCustomRing', shape, { path: '/' })
                removeCookie('_ringSelectedForCustomRing', {path: '/'})
                removeCookie('_ringSizeForCustomRing', {path: '/'})
                removeCookie('_ringSizeStandardForCustomRing', {path: '/'})
                removeCookie('_ringMetalForCustomRing', {path: '/'})
                window.location = `/create-your-own-ring/rings?shape=${shape}`
             
                break;
            case 'necklace-selector':
               
                setCookie('whatGotSelectedFirstForCustomNecklace', 'diamond', { path: '/' })
                setCookie('_diamondSelectedForCustomNecklace', diamondId, { path: '/' })
                setCookie('_diamondShapeSelectedForCustomNecklace', shape, { path: '/' })
                removeCookie('_necklaceSelectedForCustomNecklace', {path: '/'})
                removeCookie('_necklaceMetalForCustomNecklace', {path: '/'})
                removeCookie('_necklaceLengthForCustomNecklace', {path: '/'})
                window.location = `/create-your-own-necklace/necklaces?shape=${shape}`
                
                break;
            
            case 'studs-selector':
            
                setCookie('whatGotSelectedFirstForCustomStud', 'diamond', { path: '/' })
                setCookie('_firstDiamondSelectedForCustomStud', diamondId, { path: '/' })
                setCookie('_diamondShapeSelectedForCustomStud', shape, { path: '/' })
                setCookie('_diamondCaratSelectedForCustomStud', carat, { path: '/' })
                removeCookie('_studSelectedForCustomStud', {path: '/'})
                removeCookie('_studMetalForCustomStud', {path: '/'})
                removeCookie('_studBackingForCustomStud', {path: '/'})
                removeCookie('_secondDiamondSelectedForCustomStud', { path: '/' })
                window.location = `/create-your-own-stud/studs?shape=${shape}`
                
                break;
            case 'loose-diamond-selector':
                dispatch(letsShowFlash('Diamond Added To The Cart!'))
                dispatch(addLooseDiamond({diamondId: diamondId, diamondShape: shape, carat, cut, clarity, color, lab, culet, symmetry, fluorescence, ratio, polish, depth, table, girdlePercentage, measurement, black, white}))
                setOptionModalStatus()                
                break;
        }
    }

    return (
        <ModalBox status={status}>
            <section id='gemstone-setting-modal'>
                <p>
                    What would you like to do?
                </p>
                <button id='ring-selector' onClick={selectDiamond} style={{textAlign:'center'}}>
                    Add to a ring
                </button>
                <button id='necklace-selector' onClick={selectDiamond}>
                    Add to a necklace
                </button>
                <button id='studs-selector' onClick={selectDiamond}>
                    Add to studs
                </button>
                <button id='loose-diamond-selector' onClick={selectDiamond}>
                    Add diamond to bag
                </button>
                <div className='close-button' onClick={setOptionModalStatus}>
                    <i className='fas fa-times' style={{fontSize:'2rem', color: 'rgb(30,46,76)' }} ></i>
                </div>
            </section>
        </ModalBox>
    )
}
