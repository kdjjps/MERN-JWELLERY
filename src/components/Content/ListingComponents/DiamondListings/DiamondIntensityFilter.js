import React,{useState} from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import queryString from 'query-string'
import {useLocation, useHistory} from 'react-router-dom'
import { FilterItemBox } from '../style'

const Range = Slider.Range

export default function DiamondIntensityFilter({filterStatus}) {

    const [cutLowerBound, setCutLowerBound] = useState(0)
    const [cutUpperBound, setCutUpperBound] = useState(6)
    const [cutRange, setCutRange] = useState([0,6])
    const location = useLocation()
    const history = useHistory()
    
    // const onCutLowerBoundChange = (e) =>{
    //     setCutLowerBound(e.target.value)
    //     onCutHandleApply()
    // }
    
    // const onCutUpperBoundChange = (e) =>{
    //     setCutUpperBound(e.target.value)
    //     onCutHandleApply()
    // }
    
    const onCutSliderChange = (cutRange) =>{
        setCutRange(cutRange)
        setCutLowerBound(cutRange[0])
        setCutUpperBound(cutRange[1])
    }
    
    // const onCutHandleApply = () =>{
    //     setCutRange([cutLowerBound, cutUpperBound])
    // }

    const onHandleHoldAndUp = (lowerCut, upperCut) => {
        const parsed = queryString.parse(location.search)
        parsed.cutFrom = lowerCut
        parsed.cutTo = upperCut
        const stringified = queryString.stringify(parsed)
        location.search = stringified
        history.push(`?${location.search}`)
    }

    const marks = {
        1: {
            style:{
                top: '5px',
                fontSize:'1.3rem',
                marginLeft: '-8.4%',
                width: '25%'
            },
            label:'Light'
        },
        2: {
            style:{
                top: '5px',
                fontSize:'1.3rem',
                marginLeft: '-8.4%',
                width: '25%'
            },
            label:'Normal'
        },
        3: {
            style:{
                top: '5px',
                fontSize:'1.3rem',
                marginLeft: '-8.4%',
                width: '25%'
            },
            label:'Intense'
        },
        4: {
            style:{
                top: '5px',
                fontSize:'1.3rem',
                marginLeft: '-8.4%',
                width: '25%'
            },
            label:'Vivid'
        },
        5: {
            style:{
                top: '5px',
                fontSize:'1.3rem',
                marginLeft: '-8.4%',
                width: '25%'
            },
            label:'Deep'
        },
        6: {
            style:{
                top: '5px',
                fontSize:'1.3rem',
                marginLeft: '-8.4%',
                width: '25%'
            },
            label:'Dark'
        }
    }
        return (
                <FilterItemBox>                   
                    <Range 
                    disabled={filterStatus}
                    step={1} 
                    min={0} 
                    max={6} 
                    marks={marks} 
                    value={cutRange}
                    allowCross={false}
                    pushable={1} 
                    onChange={onCutSliderChange}
                    onAfterChange={()=>onHandleHoldAndUp(cutLowerBound,cutUpperBound)}
                    trackStyle={[{backgroundColor: 'rgba(30,46,76)', height: '5px'}]}
                    railStyle={{backgroundColor: 'rgba(30,46,76,0.5)', height: '5px'}}
                    handleStyle={[{width:'25px', height:'25px', bottom:-5.5, cursor: 'pointer'}, {width:'25px', height:'25px', bottom:-5.5, cursor: 'pointer' }]}
                    dotStyle={{bottom:-5.5, backgroundColor:'white', width: '2px', height: '15px', borderRadius: 0, verticalAlign:'middle', border:'1px solid white', marginLeft:'-2px'}}
                    />
                </FilterItemBox>
        )
    }