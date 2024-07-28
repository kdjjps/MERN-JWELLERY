import React,{useState} from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function RingShapeFilter({filter}) {

    const [shapeValue, setShapeValue] = useState(3)

    const onShapeSliderChange = (shapeValue) =>{
        setShapeValue(shapeValue)
        filter(shapeValue)
    }

    const marks = {
        0: {
            label: <img src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_round.png' style={{width:'20px', height:'20px'}} alt='diamond-shape-1' />
        },
        1: {
            label: <img src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_emerald.png' style={{width:'20px', height:'20px'}} alt='diamond-shape-3' />
        },
        2: {
            label: <img src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_asscher.png' style={{width:'20px', height:'20px'}} alt='diamond-shape-1' />
        },
        3: {
            label: <img src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_marquise.png' style={{width:'20px', height:'20px'}} alt='diamond-shape-5' />
        },
        4: {
            label: <img src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_cushion.png' style={{width:'20px', height:'20px'}} alt='diamond-shape-2' />
        },
        5: {
            label: <img src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_heart.png' style={{width:'20px', height:'20px'}} alt='diamond-shape-4' />
        },
        6: {
            label: <img src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_oval.png' style={{width:'20px', height:'20px'}} alt='diamond-shape-6' />
        },
        7: {
            label: <img src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_pear.png' style={{width:'20px', height:'20px'}} alt='diamond-shape-7' />
        },
        8: {
            label: <img src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_princess.png' style={{width:'20px', height:'20px'}} alt='diamond-shape-8' />
        },
        9: {
            label: <img src='https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_radiant.png' style={{width:'20px', height:'20px'}} alt='diamond-shape-9' />
        }
    }


    return (
        <section>
            <div className='filter-bound-container'>
                <Slider step={1} min={0} max={9} marks={marks} value={shapeValue}
                trackStyle={[{ backgroundColor: 'rgba(30,46,76)'}]}
                railStyle={{ backgroundColor: 'rgb(212,175,55)'}}
                />
            </div>
        </section>
    )
}


