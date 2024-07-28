import React from 'react'
import HomepageBanner from './HomepageBanner'
import CreateDreamRingComponent from './CreateDreamRingComponent'
import JewelrySection from './JewelrySection'
import GemstonesScroller from './GemstonesScroller'
import DiamondShapesScroller from './DiamondShapeScroller'

export default function Homepage() {

    return (
        <div className='homepage'>
            <HomepageBanner />
            <DiamondShapesScroller />
            <CreateDreamRingComponent />
            <GemstonesScroller />
            <JewelrySection />
        </div>
    )
}