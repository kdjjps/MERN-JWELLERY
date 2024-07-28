import React, { useState } from 'react'
import {ModalBox} from './style'

export default function PresetQualityModal({changeDiamondQuality, qualitySlideStatus, handleModalDisplay}) {

    
    return (
        <ModalBox status={qualitySlideStatus}>
            <h1>Select Diamond Quality</h1>
            <p>( Quality is how pure a diamond is. More pure means more money. To know more, refer our diamond education section ) 
            </p>
            <div className='input-container'>
            <select onChange={(e) => changeDiamondQuality(e.target.value)}>
                <option value='IJSI'>
                    IJ SI
                </option>
                <option value='VSSI'>
                    VS SI
                </option>
            </select>
            <button onClick={handleModalDisplay}>Select</button>
            </div>
            <div onClick={handleModalDisplay} style={{position:'absolute', top:'10px',right:'10px',fontSize:'2rem',color:'rgba(30,46,76)', cursor:'pointer'}}>
                <i className="fas fa-times" ></i>
            </div>
        </ModalBox>
    )
}
