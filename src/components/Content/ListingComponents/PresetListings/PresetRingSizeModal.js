import React, { useState } from 'react'
import {ModalBox} from './style'

export default function PresetRingSizeModal({ringSlideStatus, changeRingSize, handleModalDisplay}) {

    
    return (
        <ModalBox status={ringSlideStatus}>
            <h1>Select Ring Size</h1>
            <p>( Knowing the right size of your finger is extremely important before selecting a ring. Please refer our ring guide to know your size ) 
            </p>
            <div className='input-container'>
                <select style={{padding:'5px'}} onChange={(e) => changeRingSize(e.target.value)}>
                    <option value={3}>3</option>
                    <option value={3.5}>3.5</option>
                    <option value={4}>4</option>
                    <option value={4.5}>4.5</option>
                    <option value={5}>5</option>
                    <option value={5.5}>5.5</option>
                    <option value={6}>6</option>
                    <option value={6.5}>6.5</option>
                    <option>7</option>
                    <option>7.5</option>
                    <option>8</option>
                    <option>8.5</option>
                    <option>9</option>
                    <option>9.5</option>
                    <option>10</option>
                    <option>10.5</option>
                    <option>11</option>
                    <option>11.5</option>
                    <option>12</option>
                    <option>12.5</option>
                    <option>13</option>
                    <option>13.5</option>
                </select>
                <button onClick={handleModalDisplay}>Select</button>
            </div>
            <div onClick={handleModalDisplay} style={{position:'absolute', top:'10px',right:'10px',fontSize:'2rem',color:'rgba(30,46,76)', cursor:'pointer'}}>
                <i className="fas fa-times" ></i>
            </div>
        </ModalBox>
    )
}
