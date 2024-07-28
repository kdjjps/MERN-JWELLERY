import React,{useState, useEffect, useRef} from 'react'
import ViewOnEarBox from './style.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

function SampleNextArrow(props) {
    const { onClick } = props;

    return (
        <i className='fi-xnsrxl-chevron-solid' onClick={onClick} style={{color:'rgb(30,46,76)',fontSize:'2.5rem'}}></i>
    )
}
  
function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
        <i className='fi-xnsrxl-chevron-solid' onClick={onClick} style={{transform: 'rotate(180deg)', color:'rgb(30,46,76)',fontSize:'2.5rem'}}></i>
    )
}

export default function ViewOnEar({status, handleViewHandModal, stoneNumber, setStoneNumber, slider}) {
    
    const imgRef = React.createRef() 
    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)
    const [shapeNumber, setShapeNumber] = useState(stoneNumber)
    const [weightNumber, setWeightNumber] = useState(0)
    const [scale, setScale] = useState(false)

    const shapes = ['round','radiant','princess','pear','oval','marquise','heart','emerald','cushion','asscher']
    const weights = [0.25,0.30,0.40,0.50,0.60,0.75,1.00,1.25,1,50,1.75,2.00,2.50,3.00]
    const transformValue = [0.4222,0.4444,0.5111,0.5333,0.5777,0.6444,0.6888,0.7444,0.8,0.8333,0.8555,0.9555,1]
    const positionValues = [0,100,200,300,400,500,600,700,800,900]

    const diamondsSettings = {
        className: "center",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "60px",
        useCSS: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 600, // width to change options
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ],
          afterChange(currentSlide){
            setStoneNumber(currentSlide)
        }
      }

   const caratSettings = {
        className: 'center',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        useCSS: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
            breakpoint: 600, // width to change options
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
            }
        ],
        afterChange(currentSlide){
            setWeightNumber(currentSlide)
        }
    }

    useEffect(()=>{
        setHeight(imgRef.current.clientHeight)
        setWidth(imgRef.current.clientWidth)
    },[])

    const zoomIn = () => {
        setScale(true)
    }

    const zoomOut = () => {
        setScale(false)
    }
    
    return (
        <ViewOnEarBox status={status} scale={scale} shape={shapes[stoneNumber]} pValue={positionValues[stoneNumber]} tValue={transformValue[weightNumber]}>
            <div id='close-view-on-hand-module'>
                <div>
                    <img src='https://lgc-static.s3.ap-south-1.amazonaws.com/horizontal-logo.png' style={{width: '90px'}} />
                </div>
                <div onClick={()=>handleViewHandModal()}>
                    <i className='fas fa-times' style={{fontSize:'2rem' }} ></i>
                </div>
            </div>
            <div id='zoom-controller'>
                <button onClick={zoomIn} style={{padding: '5px'}}>
                    <i className="fi-xwsuxl-plus-solid"></i>
                </button>
                <button onClick={zoomOut} style={{padding: '5px'}}>
                    <i className="fi-xwsuxl-minus-solid"></i>
                </button>
            </div>
            <div className='handHolder' ref={imgRef}>
                <div className='hand'>
                    <div className='ringMid'>
                        <div className='stone'>
                        </div>
                    </div>
                </div>
            </div>
            <div id='slider-container'>
                <div id='shapeSlider'>
                    <Slider {...diamondsSettings} ref={slider}>
                        <div className='shape-holder'>
                            <img src={`https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_round.png`} alt='round_diamond' />
                        </div>
                        <div className='shape-holder'>
                            <img src={`https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_radiant.png`} alt='radiant_diamond' />
                        </div>
                        <div className='shape-holder'>
                            <img src={`https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_princess.png`} alt='princess_diamond' />
                        </div>
                        <div className='shape-holder'>
                            <img src={`https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_pear.png`} alt='pear_diamond' />
                        </div>
                        <div className='shape-holder'>
                            <img src={`https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_oval.png`} alt='oval_diamond' />
                        </div>
                        <div className='shape-holder'>
                            <img src={`https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_marquise.png`} alt='marquise_diamond' />
                        </div>
                        <div className='shape-holder'>
                            <img src={`https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_heart.png`} alt='heart_diamond' />
                        </div>
                        <div className='shape-holder'>
                            <img src={`https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_emerald.png`} alt='emerald_dinner' />
                        </div>
                        <div className='shape-holder'>
                            <img src={`https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_cushion.png`} alt='cushion_diamond' />
                        </div>
                        <div className='shape-holder'>
                            <img src={`https://lgc-static.s3.ap-south-1.amazonaws.com/diamond-shape-icons/stone_asscher.png`} alt='asscher_diamond' />
                        </div>
                    </Slider>
                </div>
                
                <div id='caratSlider'>
                    <Slider {...caratSettings}>
                        <div className='weight-holder'>
                            <p>0.25</p>
                        </div>
                        <div className='weight-holder'>
                            <p>0.30</p>
                        </div>
                        <div className='weight-holder'>
                            <p>0.40</p>
                        </div>
                        <div className='weight-holder'>
                            <p>0.50</p>
                        </div>
                        <div className='weight-holder'>
                            <p>0.60</p>
                        </div>
                        <div className='weight-holder'>
                            <p>0.75</p>
                        </div>
                        <div className='weight-holder'>
                            <p>1.00</p>
                        </div>
                        <div className='weight-holder'>
                            <p>1.25</p>
                        </div>
                        <div className='weight-holder'>
                            <p>1.50</p>
                        </div>
                        <div className='weight-holder'>
                            <p>1.75</p>
                        </div>
                        <div className='weight-holder'>
                            <p>2.00</p>
                        </div>
                        <div className='weight-holder'>
                            <p>2.50</p>
                        </div>
                        <div className='weight-holder'>
                            <p>3.00</p>
                        </div>
                    </Slider>
                </div>
            </div>
    </ViewOnEarBox>
    )
}