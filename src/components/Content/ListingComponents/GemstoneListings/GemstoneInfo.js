import React,{useState} from 'react'
import {GemstoneInfoBox} from './style'
import GemstoneWearGuideTable from './GemstoneWearGuideTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default function GemstoneInfo({filteredStoneForTableData}) {
    const [linkOneStatus, setLinkOneStatus] = useState(false)
    const [linkTwoStatus, setLinkTwoStatus] = useState(false)
    const [linkThreeStatus, setLinkThreeStatus] = useState(false)

    const getInfo = (e) => {

        switch (e.target.id) {
            case 'link-one':
                    setLinkOneStatus(!linkOneStatus)
                    setLinkTwoStatus(false)
                    setLinkThreeStatus(false)
                break;
        
            case 'link-two':
                    setLinkOneStatus(false)
                    setLinkTwoStatus(!linkTwoStatus)
                    setLinkThreeStatus(false)
                break;

            case 'link-three':
                    setLinkOneStatus(false)
                    setLinkTwoStatus(false)
                    setLinkThreeStatus(!linkThreeStatus)
                break;
            default:
                setLinkOneStatus(!linkOneStatus)
                setLinkTwoStatus(false)
                setLinkThreeStatus(false)                
                break;
        }

    }


    return (
        <GemstoneInfoBox linkOneStatus={linkOneStatus} linkTwoStatus={linkTwoStatus} linkThreeStatus={linkThreeStatus}>
            <section className='info-links'>
                <ul>
                    <li id='link-one' onClick={getInfo}>
                        How to wear?
                        <FontAwesomeIcon icon={faAngleUp} style={{color: '#ffffff', marginLeft:'5px'}}></FontAwesomeIcon>
                    </li>
                    {/* <li id='link-two' onClick={getInfo}>
                        Benefits
                        <i className='fas fa-angle-right'></i>
                    </li>
                    <li id='link-three' onClick={getInfo}>
                        Properties
                        <i className='fas fa-angle-right'></i>
                    </li> */}
                </ul>
            </section>
            <section className='info-container'>
                <div className='info-content'>
                    <GemstoneWearGuideTable filteredStoneForTableData={filteredStoneForTableData} />
                </div>
                {/* <div className='info-content'>
                    Benefits
                </div>
                <div className='info-content'>
                    Properties
                </div> */}
            </section>
        </GemstoneInfoBox>
    )
}