import React from 'react'
import {FilterBox} from '../style.js'
import GemstoneCaratFilter from './GemstoneCaratFilter'
import GemstonePriceFilter from './GemstonePriceFilter'
import GemstoneRattiFilter from './GemstoneRattiFilter'
import GemstonePricePerCaratFilter from './GemstonePricePerCaratFilter'

export default function RingFilters({status, onChangeMenuStatus}) {
    return (
        <FilterBox status={status}>
            <div className="desktop-filters">
                <section className='basic-filters'>
                    <div className='filter-container'>
                        <h3>Carat</h3>
                        <GemstoneCaratFilter />
                    </div>
                    <div className='filter-container'>
                        <h3>Ratti</h3>
                        <GemstoneRattiFilter />
                    </div>
                    <div className='filter-container'>
                        <h3>Price</h3>
                        <GemstonePriceFilter />
                    </div>
                    <div className='filter-container'>
                        <h3>Price Per Carat</h3>
                        <GemstonePricePerCaratFilter />
                    </div>
                </section>
            </div>


            <div className="mobile-filters">
                <div className='button-container'>
                    <button onClick={onChangeMenuStatus}>
                        View Result
                    </button>
                    <button>
                        Reset all
                    </button>
                </div>
                <div className="filter-row">
                    <div className='filter-container'>
                        <h3>Carat</h3>
                        <GemstoneCaratFilter />
                    </div>
                    <div className='filter-container'>
                        <h3>Ratti</h3>
                        <GemstoneRattiFilter />
                    </div>
                    <div className='filter-container'>
                        <h3>Price</h3>
                        <GemstonePriceFilter />
                    </div>
                    <div className='filter-container'>
                        <h3>Price Per Carat</h3>
                        <GemstonePricePerCaratFilter />
                    </div>
                </div>
            </div>
        </FilterBox>
    )
}