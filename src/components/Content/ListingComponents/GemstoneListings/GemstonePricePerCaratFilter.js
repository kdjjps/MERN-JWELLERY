import React,{useState} from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

export default function GemstonePricePerCaratFilter({filterDiamonds}) {

    const [priceLowerBound, setPriceLowerBound] = useState(100)
    const [priceUpperBound, setPriceUpperBound] = useState(200000)
    const [priceValue, setPriceValue] = useState([100,200000])
    
    // const onPriceLowerBoundChange = (e) =>{
    //     setPriceLowerBound(e.target.value)
    //     onPriceHandleApply()
    // }
    
    // const onPriceUpperBoundChange = (e) =>{
    //     setPriceUpperBound(e.target.value)
    //     onPriceHandleApply()
    // }
    
    const onPriceSliderChange = (priceValue) =>{
        setPriceValue(priceValue)
        filterDiamonds("carat", priceLowerBound, priceUpperBound)
    }
    
    const onPriceHandleApply = () =>{
        setPriceValue([priceLowerBound, priceUpperBound])
    }
        return (
                <section>
                    <Range max={200000} value={priceValue} onChange={onPriceSliderChange}
                    trackStyle={[{backgroundColor: 'rgba(30,46,76)', height: '6px'}]}
                    railStyle={{backgroundColor: 'rgba(30,46,76,0.5)', height: '6px'}}
                    handleStyle={{width:'25px', height:'25px', bottom:-5.5}}
                    dotStyle={{bottom:-5.5, backgroundColor:'white', width: '4px', height: '15px', borderRadius: 0, verticalAlign:'middle', border:'1px solid white', marginLeft:'-2px'}} />
                    <div className="filter-bound-container">
                        <div>
                            <p className='label'>Min Carat: </p>
                            <p className='displayer'>{priceLowerBound}</p>
                        </div>
                        <div>
                            <p className='label'>Max Carat: </p>
                            <p className='displayer'>{priceUpperBound}</p>
                        </div>
                    </div>
                </section>
        )
    }