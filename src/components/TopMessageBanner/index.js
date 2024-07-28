import React from 'react'
import TopMessageBannerBox from './style'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export default function HeaderBanner() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        arrows: false
      }
      
    return (
        <TopMessageBannerBox>
            <section>
                <Slider {...settings}>
                    <div>
                        <h4>
                            WorldWide Shipping Available
                        </h4>
                    </div>
                    <div>
                        <h4>
                            Paypal Accepted
                        </h4>                
                    </div>
                    <div>
                        <h4>
                            Accepting Orders Now
                        </h4>                
                    </div>
                </Slider>
            </section>
        </TopMessageBannerBox>
    )
}