import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function RingMetalFilter() {
    const marks = {
        0: {
            label: <div style={{backgroundColor:'#dfb779', width:'20px',height:'20px',borderRadius:'50%'}}></div>
        },
        10: {
            label: <div style={{backgroundColor:'#e6cf8b', width:'20px',height:'20px',borderRadius:'50%'}}></div>
        },
        20: {
            label: <div style={{backgroundColor:'#d2d4d1', width:'20px',height:'20px',borderRadius:'50%'}}></div>
        },
        30: {
            label: <div style={{backgroundColor:'#bfbfbd', width:'20px',height:'20px',borderRadius:'50%'}}></div>
        }
    }
    
        return (
            <section>
                <div className='filter-bound-container'>
                    <Slider step={10} min={0} max={30} marks={marks}
                    trackStyle={[{ backgroundColor: 'rgba(30,46,76)'}]}
                    railStyle={{ backgroundColor: 'rgb(212,175,55)'}} />
                </div>
            </section>
        )
}