import React from 'react'
import {ModalBox} from '../style'
import {useCookies} from "react-cookie"
import {useParams} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function GemstoneSettingModal({status, setOptionModalStatus, weightSelected, certificateSelected, addLooseGemstone, letsShowFlash}) {

    const [cookies, setCookie] = useCookies()
    const { gemstone, stockNumber } = useParams()

    const dispatch = useDispatch()

    const selectGemstone = (e) => {
        let id = e.target.id
    
        switch (id) {
            case 'ring-selector':
                if (cookies.whatGotSelectedFirstForCustomGemRing === undefined){
                    setCookie('whatGotSelectedFirstForCustomGemRing', 'gem', { path: '/' })
                    setCookie('_gemstoneSelectedForCustomGemRing', {gemstone, stockNumber}, { path: '/' })
                    setCookie('_gemstoneWeightForCustomGemRing', weightSelected, {path:'/'})
                    setCookie('_gemstoneCertificationForCustomGemRing', certificateSelected, {path:'/'})
                    setCookie('_gemstoneTypeForCustomGemRing', gemstone, {path: '/'})
                    window.location = `/create-your-own-gem-ring/rings?gem=${gemstone}`
                }
                else if (cookies.whatGotSelectedFirstForCustomGemRing === 'ring') {
                    setCookie('_gemstoneSelectedForCustomGemRing', {gemstone, stockNumber}, { path: '/' })
                    setCookie('_gemstoneWeightForCustomGemRing', weightSelected, {path:'/'})
                    setCookie('_gemstoneCertificationForCustomGemRing', certificateSelected, {path:'/'})
                    window.location = `/create-your-own-gem-ring/review-order`
                }
                else{
                    setCookie('_gemstoneSelectedForCustomGemRing', {gemstone, stockNumber}, { path: '/' })
                    setCookie('_gemstoneWeightForCustomGemRing', weightSelected, {path:'/'})
                    setCookie('_gemstoneCertificationForCustomGemRing', certificateSelected, {path:'/'})
                    window.location = `/create-your-own-gem-ring/rings?gem=${gemstone}`
                }
                break;
            case 'pendant-selector':
                if (cookies.whatGotSelectedFirstForCustomGemPendant === undefined){
                    setCookie('whatGotSelectedFirstForCustomGemPendant', 'gem', { path: '/' })
                    setCookie('_gemstoneSelectedForCustomGemPendant', {gemstone, stockNumber}, { path: '/' })
                    setCookie('_gemstoneWeightForCustomGemPendant', weightSelected, {path:'/'})
                    setCookie('_gemstoneCertificationForCustomGemPendant', certificateSelected, {path:'/'})
                    setCookie('_gemstoneTypeForCustomGemPendant', gemstone, {path: '/'})
                    window.location = `/create-your-own-gem-pendant/pendants?gem=${gemstone}`
                }
                else if (cookies.whatGotSelectedFirstForCustomGemPendant === 'pendant') {
                    setCookie('whatGotSelectedFirstForCustomGemPendant', 'gem', { path: '/' })
                    setCookie('_gemstoneSelectedForCustomGemPendant', {gemstone, stockNumber}, { path: '/' })
                    setCookie('_gemstoneWeightForCustomGemPendant', weightSelected, {path:'/'})
                    setCookie('_gemstoneCertificationForCustomGemPendant', certificateSelected, {path:'/'})
                    window.location = `/create-your-own-gem-pendant/review-order`
                }
                else{
                    setCookie('_gemstoneSelectedForCustomGemPendant', {gemstone, stockNumber}, { path: '/' })
                    setCookie('_gemstoneWeightForCustomGemPendant', weightSelected, {path:'/'})
                    setCookie('_gemstoneCertificationForCustomGemPendant', certificateSelected, {path:'/'})
                    window.location = `/create-your-own-gem-pendant/pendants?gem=${gemstone}`
                }
                break;
            case 'loose-gemstone-selector':
                dispatch(addLooseGemstone({gemstoneId: stockNumber, weightIndex: weightSelected, certificationIndex: certificateSelected} ))
                dispatch(letsShowFlash('Gemstone Added To The Cart'))
                setCookie('_gemstoneSelectedAsLoose', {gemstone, stockNumber}, { path: '/' }) 
                setOptionModalStatus()
                break;
            default:
                return
        }
    }

    return (
        <ModalBox status={status}>
            <section id='gemstone-setting-modal'>
                <p>
                    What would you like to do?
                </p>
                <button id='ring-selector' onClick={selectGemstone}>
                    Add a ring
                </button>
                <button id='pendant-selector' onClick={selectGemstone}>
                    Add a pendant
                </button>
                <button id='loose-gemstone-selector' onClick={selectGemstone}>
                    Add gemstone to bag
                </button>
                <div className='close-button' onClick={setOptionModalStatus}>
                    <FontAwesomeIcon icon={faTimes} style={{fontSize: '2rem', color: 'rgb(30,46,76)'}} />
                </div>
            </section>
        </ModalBox>
    )
}