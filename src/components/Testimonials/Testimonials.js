import React from 'react'
import CustomerTestimonyBox from './style.js'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <i className="fi-cnsrxl-chevron-solid" onClick={onClick} style={{color:"rgb(218,165,32, 0.7)"}}></i> 
    )
}
  
function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
        <i className="fi-cnslxl-chevron-solid" onClick={onClick} style={{color:"rgb(218,165,32, 0.7)"}}></i>
    );
}


export default function Testimonials() {
    const testimonialsSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
          ]
      }
    return (
        <CustomerTestimonyBox>
        <h1>Our Happy Customers</h1>
        <p>
            This is what our customers say about us
        </p>
        <Slider {...testimonialsSettings}>
            <div className="bestseller-item-container">
                <img src={`${d1}`} alt="tm1" />
            </div>
            <div className="bestseller-item-container">
                <img src={`${d2}`} alt="tm2" />
            </div>
            <div className="bestseller-item-container">
                <img src={`${d3}`} alt="tm3" />
            </div>
            <div className="bestseller-item-container">
                <img src={`${d4}`} alt="tm4" />
            </div>
            <div className="bestseller-item-container">
                <img src={`${d5}`} alt="tm5" />
            </div>
            <div className="bestseller-item-container">
                <img src={`${d6}`} alt="tm6" />
            </div>
            <div className="bestseller-item-container">
                <img src={`${d7}`} alt="tm7" />
            </div>
            <div className="bestseller-item-container">
                <img src={`${d8}`} alt="tm8" />
            </div>
            <div className="bestseller-item-container">
                <img src={`${d9}`} alt="tm9" />
            </div>
            <div className="bestseller-item-container">
                <img src={`${d10}`} alt="tm10" />
            </div>
        </Slider>
</CustomerTestimonyBox>

    )
}
