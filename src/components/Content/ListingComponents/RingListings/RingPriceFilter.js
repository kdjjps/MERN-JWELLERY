import React,{useState} from 'react'
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function RingPriceFilter() {

    const [priceLowerBound, setPriceLowerBound] = useState(0)
    const [priceUpperBound, setPriceUpperBound] = useState(999)
    const [priceValue, setPriceValue] = useState([0,999])

    // const onPriceLowerBoundChange = (e) =>{
    //     setPriceLowerBound(e.target.value)
    //     onPriceHandleApply()
    // }

    // const onPriceUpperBoundChange = (e) =>{
    //     setPriceUpperBound(e.target.value)
    //     onPriceHandleApply()
    // }

    const onPriceSliderChange = (priceValue) =>{
        console.log(priceValue)
        setPriceValue(priceValue)
    }

    // const onPriceHandleApply = () =>{
    //     setPriceValue([priceLowerBound, priceUpperBound])
    // }

    const marks = {
        0: {
            label: <div style={{width:'20px',height:'20px',borderRadius:'50%'}}>$0</div>
        },
        100: {
            label: <div style={{width:'20px',height:'20px',borderRadius:'50%'}}>$9999</div>
        }
    }

    return (
        <section>
            <div className='filter-bound-container'>
                <Range value={priceValue} onChange={onPriceSliderChange}
                        trackStyle={[{ backgroundColor: 'rgba(30,46,76)'}]}
                        railStyle={{ backgroundColor: 'rgb(212,175,55)'}}
                        min={0} max={100} marks={marks}
                />
                {/* <div>
                    <div>
                        <label>Min Price: </label>
                        <input type='number' value={priceLowerBound} onChange={onPriceLowerBoundChange} />
                    </div>
                    <div>
                        <label>Max Price: </label>
                        <input type='number' value={priceUpperBound} onChange={onPriceUpperBoundChange} />
                    </div>
                </div> */}
            </div>
        </section>
    )
}