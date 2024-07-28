import React,{useState} from 'react'
import {EducationNavBox} from './style'

export default function EducationNav() {

    const [diamondDropDownMenuStatus, setDiamondDropDownMenuStatus] = useState(false)
    const [gemstonesDropDownMenuStatus, setGemstonesDropDownMenuStatus] = useState(false)
    const [metalDropDownMenuStatus, setMetalDropDownMenuStatus] = useState(false)
    const [otherDropDownMenuStatus, setOtherDropDownMenuStatus] = useState(false)
    const [policiesDropDownMenuStatus, setPoliciesDropDownMenuStatus] = useState(false)

    const onChangeDropdown = (e) => {
        let id = e.currentTarget.id
        switch(id){
            case 'diamonds':
                setDiamondDropDownMenuStatus(!diamondDropDownMenuStatus)
                setGemstonesDropDownMenuStatus(false)
                setMetalDropDownMenuStatus(false)
                setOtherDropDownMenuStatus(false)
                setPoliciesDropDownMenuStatus(false)
                break;
            case 'gemstones':
                setDiamondDropDownMenuStatus(false)
                setGemstonesDropDownMenuStatus(!gemstonesDropDownMenuStatus)
                setMetalDropDownMenuStatus(false)
                setOtherDropDownMenuStatus(false)
                setPoliciesDropDownMenuStatus(false)
                break;
            case 'metals':
                setDiamondDropDownMenuStatus(false)
                setGemstonesDropDownMenuStatus(false)
                setMetalDropDownMenuStatus(!metalDropDownMenuStatus)
                setOtherDropDownMenuStatus(false)
                setPoliciesDropDownMenuStatus(false)
                break;
            case 'other-guide':
                setDiamondDropDownMenuStatus(false)
                setGemstonesDropDownMenuStatus(false)
                setMetalDropDownMenuStatus(false)
                setOtherDropDownMenuStatus(!otherDropDownMenuStatus)
                setPoliciesDropDownMenuStatus(false)
                break;
            case 'policies':
                setDiamondDropDownMenuStatus(false)
                setGemstonesDropDownMenuStatus(false)
                setMetalDropDownMenuStatus(false)
                setOtherDropDownMenuStatus(false)
                setPoliciesDropDownMenuStatus(!policiesDropDownMenuStatus)
                break;
            default:
                setDiamondDropDownMenuStatus(!diamondDropDownMenuStatus)
                setGemstonesDropDownMenuStatus(false)
                setMetalDropDownMenuStatus(false)
                setOtherDropDownMenuStatus(false)
                setPoliciesDropDownMenuStatus(false)
                break;
        }
    }

    return (
        <EducationNavBox
            diamondDropStatus={diamondDropDownMenuStatus}
            gemDropStatus={gemstonesDropDownMenuStatus}
            metalDropStatus={metalDropDownMenuStatus}
            otherDropStatus={otherDropDownMenuStatus}
            policiesDropStatus={policiesDropDownMenuStatus}
        >
            <div className='education-nav'>
            <div className='education-nav-parent' id='diamonds' onClick={onChangeDropdown}>
                <div className='education-nav-box'>
                    Diamond Education
                    <i className='fas fa-angle-left' style={{color:'white', fontSize:'2rem'}}></i>
                </div>
                <div className='education-drop-content'>
                    <ul>
                        <li>
                            Diamond Shape
                        </li>
                        <li>
                            Diamond Color
                        </li>
                        <li>
                            Diamond Carat
                        </li>
                        <li>
                            Diamond Cut
                        </li>
                        <li>
                            Diamond Clarity
                        </li>
                        <li>
                            Diamond Cerification
                        </li>
                        <li>
                            Diamond Anatomy
                        </li>
                        <li>
                            Diamond Fluorescence
                        </li>
                    </ul>
                </div>
            </div>
            
                <div className='education-nav-parent' id='gemstones' onClick={onChangeDropdown}>
                    <div className='education-nav-box'>
                        Gemstone Education
                        <i className='fas fa-angle-left' style={{color:'white', fontSize:'2rem'}}></i>
                    </div>
                    <div className='education-drop-content'>
                        <ul>
                            <li>
                                Blue Sapphire
                            </li>
                            <li>
                                Yellow Sapphire
                            </li>
                            <li>
                                Red Coral
                            </li>
                            <li>
                                Hessonite
                            </li>
                            <li>
                                Ruby
                            </li>
                            <li>
                                Opal
                            </li>
                            <li>
                                Pearl
                            </li>
                            <li>
                                Cat's Eye
                            </li>
                            <li>
                                Emerald
                            </li>
                        </ul>
                    </div>
                </div>
           
                <div className='education-nav-parent' id='metals' onClick={onChangeDropdown}>
                    <div className='education-nav-box'>
                        Metal Education
                        <i className='fas fa-angle-left' style={{color:'white', fontSize:'2rem'}}></i>
                    </div>
                    <div className='education-drop-content'>
                        <ul>
                            <li>
                                White Gold
                            </li>
                            <li>
                                Yellow Gold
                            </li>
                            <li>
                                Rose Gold
                            </li>
                            <li>
                                Platinum
                            </li>
                            <li>
                                Silver
                            </li>
                        </ul>
                    </div>
                </div>
            
                <div className='education-nav-parent' id='other-guide' onClick={onChangeDropdown}>
                    <div className='education-nav-box'>
                        Other Guide
                        <i className='fas fa-angle-left' style={{color:'white', fontSize:'2rem'}}></i>
                    </div>
                    <div className='education-drop-content'>
                        <ul>
                            <li>
                                Ring Size
                            </li>
                            <li>
                                Chain Length
                            </li>
                            <li>
                                Jewelry Care
                            </li>
                        </ul>
                    </div>
                </div>
            
                <div className='education-nav-parent' id='policies' onClick={onChangeDropdown}>
                    <div className='education-nav-box'>
                        Policies
                        <i className='fas fa-angle-left' style={{color:'white', fontSize:'2rem'}}></i>
                    </div>
                    <div className='education-drop-content'>
                        <ul>
                            <li>
                                Shipping Policy
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                            <li>
                                Terms & Condition
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </EducationNavBox>
    )
}
