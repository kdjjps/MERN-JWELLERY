import React, { useState } from 'react'
import {ModalBox} from './style'

export default function PresetCaratModal({changeCarat, caratSlideStatus, handleModalDisplay }) {

    
    return (
        <ModalBox status={caratSlideStatus}>
            <h1>Select Carat</h1>
            <p>( We offer four carat settings. Carat is the measured weight of the diamond. 
                More the weight, more the price. To find out more, visit our Diamond Education Section ) 
            </p>
            <div className='input-container'>
                <select style={{padding:'5px'}} onChange={(e) => changeCarat(e.target.value)}>
                    <option value='0.3'>0.3</option>
                    <option value='0.5'>0.5</option>
                    <option value='0.7'>0.7</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                </select>
                <button onClick={handleModalDisplay}>Select</button>
            </div>
            <div onClick={handleModalDisplay} style={{position:'absolute', top:'10px',right:'10px',fontSize:'2rem',color:'rgba(30,46,76)', cursor:'pointer'}}>
                <i className="fas fa-times" ></i>
            </div>
        </ModalBox>
    )
}
