import React from 'react'
import {FilterBox} from '../style'

export default function KadaFilters() {
    return (
        <FilterBox>
        <div className='solitaire-desktop-filters'>
            <ul>
                <li>
                    <div>
                        <p>Metal</p>
                        <i className="fas fa-angle-down" style={{color:'rgba(30,46,76)', fontSize:'1.8rem'}}></i>
                    </div>
                    <section className='dropdown-content'>
                        <div className='metal-option-container'>
                            <div className='label-container'>
                                <input type='radio' id='white-gold' name='shape' value='white-gold'/>
                                <label for='white-gold'>
                                    White Gold
                                </label>
                            </div>
                            <div className='color-box' style={{background: '#e7eaeb'}}>

                            </div>
                        </div>
                        <div className='metal-option-container'>
                            <div className='label-container'>
                                <input type='radio' id='yellow-gold' name='shape' value='yellow-gold'/>
                                <label for='yellow-gold'>
                                    Yellow Gold
                                </label>
                            </div>
                            <div className='color-box' style={{background: '#efd9a7'}}>

                            </div>
                        </div>
                        <div className='metal-option-container'>
                            <div className='label-container'>
                                <input type='radio' id='rose-gold' name='shape' value='rose-gold'/>
                                <label for='rose-gold'>
                                    Rose Gold
                                </label>
                            </div>
                            <div className='color-box' style={{background: '#f7ccb3'}}>

                            </div>
                        </div>
                        <div className='metal-option-container'>
                            <div className='label-container'>
                                <input type='radio' id='platinum' name='shape' value='platinum'/>
                                <label for='platinum'>
                                    Platinum
                                </label>
                            </div>
                            <div className='color-box' style={{background: '#e7eaeb'}}>

                            </div>
                        </div>
                    </section>
                </li>
                <li>
                    <div>
                        <p>Shape</p>
                        <i className="fas fa-angle-down" style={{color:'rgba(30,46,76)', fontSize:'1.8rem'}}></i>
                    </div>
                    <section className='dropdown-content'>
                        <div className='row'>
                            <div className='shape-option-container'>
                                <div className='label-container'>
                                    <input type='radio' id='round' name='shape' value='round'/>
                                    <label for='round'>
                                        Round
                                    </label>
                                </div>
                                <div className='image-box'>
                                    <img
                                        src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_round.png'
                                        alt='diamond-shape-round'
                                    />     
                                </div>
                            </div>
                            <div className='shape-option-container'>
                                <div className='label-container'>
                                    <input type='radio' id='princess' name='shape' value='princess'/>
                                    <label for='princess'>
                                        Princess
                                    </label>
                                </div>
                                <div className='image-box'>
                                    <img
                                        src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_princess.png'
                                        alt='diamond-shape-princess'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='shape-option-container'>
                                <div className='label-container'>
                                    <input type='radio' id='cushion' name='shape' value='cushion'/>
                                    <label for='cushion'>
                                        Cushion
                                    </label>
                                </div>
                                <div className='image-box'>
                                    <img
                                        src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_cushion.png'
                                        alt='diamond-shape-cushion'
                                    />
                                </div>
                            </div>
                            <div className='shape-option-container'>
                                <div className='label-container'>
                                    <input type='radio' id='oval' name='shape' value='oval'/>
                                    <label for='oval'>
                                        Oval
                                    </label>
                                </div>
                                <div className='image-box'>
                                    <img
                                        src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_oval.png'
                                        alt='diamond-shape-oval'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='shape-option-container'>
                                <div className='label-container'>
                                    <input type='radio' id='pear' name='shape' value='pear'/>
                                    <label for='pear'>
                                        Pear
                                    </label>
                                </div>
                                <div className='image-box'>
                                    <img
                                        src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_pear.png'
                                        alt='diamond-shape-pear'
                                    />
                                </div>
                            </div>
                            <div className='shape-option-container'>
                                <div className='label-container'>
                                    <input type='radio' id='emerald' name='shape' value='emerald'/>
                                    <label for='emerald'>
                                        Emerald
                                    </label>
                                </div>
                                <div className='image-box'>
                                    <img
                                        src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_emerald.png'
                                        alt='diamond-shape-emerald'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='shape-option-container'>
                                <div className='label-container'>
                                    <input type='radio' id='heart' name='shape' value='heart'/>
                                    <label for='heart'>
                                        Heart
                                    </label>
                                </div>
                                <div className='image-box'>
                                    <img
                                        src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_heart.png'
                                        alt='diamond-shape-heart'
                                    />
                                </div>
                            </div>
                            <div className='shape-option-container'>
                                <div className='label-container'>
                                    <input type='radio' id='radiant' name='shape' value='radiant'/>
                                    <label for='radiant'>
                                        Radiant
                                    </label>
                                </div>
                                <div className='image-box'>
                                    <img
                                        src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_radiant.png'
                                        alt='diamond-shape-radiant'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='shape-option-container'>
                                <div className='label-container'>
                                    <input type='radio' id='asscher' name='shape' value='asscher'/>
                                    <label for='asscher'>
                                        Asscher
                                    </label>
                                </div>
                                <div className='image-box'>
                                    <img
                                        src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_asscher.png'
                                        alt='diamond-shape-asscher'
                                    />
                                </div>
                            </div>
                            <div className='shape-option-container'>
                                <div className='label-container'>
                                    <input type='radio' id='marquise' name='shape' value='marquise'/>
                                    <label for='marquise'>
                                        Marquise
                                    </label>
                                </div>
                                <div className='image-box'>
                                    <img
                                        src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_marquise.png'
                                        alt='diamond-shape-marquise'
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </li>
                <li>
                    <div>
                        <p>Price</p>
                        <i className="fas fa-angle-down" style={{color:'rgba(30,46,76)', fontSize:'1.8rem'}}></i>
                    </div>
                    <section className='dropdown-content'>
                        Price Filter
                    </section>
                </li>
            </ul>
        </div>
        {/* <div className='mobile-filters'>
                <div>
                    <h3>
                        Mobile Filter Rings
                    </h3>
                    <button>
                        Reset all
                    </button>
                </div>
                
                <div className='filter-row'>
                    <div className='filter-container'>
                        <h3>Price</h3>
                        <RingPriceFilter />
                    </div>
                    <div className='filter-container'>
                        <h3>Color</h3>
                        <RingMetalFilter />
                    </div>
                    <div className='filter-container'>
                        <h3>Shape</h3>
                        <RingShapeFilter />
                    </div>
                </div>
        </div> */}
    </FilterBox>
    )
}
