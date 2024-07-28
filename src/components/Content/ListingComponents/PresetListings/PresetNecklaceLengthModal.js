import React, { useState } from 'react'
import {ModalBox} from './style'

export default function PresetNecklaceLengthModal({pendantSlideStatus, handleModalDisplay, changePendantLength}) {

    
    return (
        <ModalBox status={pendantSlideStatus}>
            <h1>Select Pendant Length</h1>
            <p>( Knowing the right length of your pendant is extremely important before selecting a pendant. Please refer our pendant guide to know your size ) 
            </p>
            <div className='input-container'>
                <select style={{padding:'5px'}} onChange={(e) => changePendantLength(e.target.value)}>
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
