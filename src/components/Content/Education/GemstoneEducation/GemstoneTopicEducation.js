import React from 'react'
import {useParams} from 'react-router-dom'
import aboutGemstone from '../../../../fakedata/aboutGemstone'
import {GemstoneTopicEducationBox} from '../style'

export default function GemstoneTopicEducation() {
    
    let {gemId} = useParams()
    let gemstone = aboutGemstone.filter(item => {
        return item.gemstone === gemId
    })
    
    return (
        <GemstoneTopicEducationBox>
                <h1>
                    {gemstone[0].gemstone}
                </h1>
                <p>
                    {/* A collection perfect for any occasion */}
                </p>
            <section id='jewelry-category-box'>
                <div className='category-row'>
                    <div className='background-holder'  
                    style={{
                        backgroundImage:`url(${gemstone[0].aboutImageUrl})`
                    }}>
                       
                    </div>
                    <div className='row-box'>
                        <div className='category-description-box'>
                            <h3 >About</h3>
                            <p>{gemstone[0].about}</p>
                        </div>
                    </div>
                </div>

                <div className='category-row'>
                    <div className='row-box'>
                        <div className='category-description-box'>
                            <h3 >Composition</h3>
                            <p>{gemstone[0].composition}</p>
                        </div>
                    </div>
                    <div className='background-holder' 
                    style={{
                        backgroundImage:`url(${gemstone[0].compositionImageUrl})`,
                    }}>
                    </div>
                </div>

                <div className='category-row'>
                    <div className='background-holder' 
                    style={{
                        backgroundImage:`url(${gemstone[0].sourceImageUrl})`,
                    }}>
                    </div>
                    <div className='row-box'>
                        <div className='category-description-box'>
                            <h3 >Source</h3>
                            <p>{gemstone[0].source}</p>
                        </div>
                    </div>
                </div>             
            </section>
        </GemstoneTopicEducationBox>
    )
}