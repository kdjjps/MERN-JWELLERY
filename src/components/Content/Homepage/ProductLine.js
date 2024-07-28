import React, { useState } from 'react'
import styled from 'styled-components'

const ProductBox = styled.div`
    margin-bottom: 50px;
    
    #products-container{
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 20px 5px;
    }

    section{
        padding: 5px;
        height: 220px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;

        img{
            width: 280px;
            position: relative;
            border: 2px solid #e4e4e4;
        }

        img:nth-child(1){
            display: ${(props)=> props.oneStatus ? 'block' : 'none'}
        }

        img:nth-child(2){
            display: ${(props)=> props.secondStatus ? 'block' : 'none'}
        }

        img:nth-child(3){
            display: ${(props)=> props.thirdStatus ? 'block' : 'none'}
        }

        img:nth-child(4){
            display: ${(props)=> props.fourthStatus ? 'block' : 'none'}
        }
    }

    .circles-container{
        width: 150px;
        margin: auto;
        display: flex;
        justify-content: space-around;
        position: relative;
        top: 20px;

        .circle{
            width: 25px;
            height: 25px;
            border-radius: 50%;
            padding: 5px;
        }

        .circle:nth-child(1){
            background-color: #efefef;
            border: ${(props) => props.oneStatus ? '1px solid #243050' : 'none'};

        }

        .circle:nth-child(2){
            background-color: #e9d590;
            border: ${(props) => props.secondStatus ? '1px solid #243050' : 'none'};
        }

        .circle:nth-child(3){
            background-color: #f5c8a9;
            border: ${(props) => props.thirdStatus ? '1px solid #243050' : 'none'};
        }

        .circle:nth-child(4){
            background-color: #c8c8c8;
            border: ${(props) => props.fourthStatus ? '1px solid #243050' : 'none'};
        }
    }

    @media (max-width:550px){
        #products-container{
            flex-direction: column;
            align-items: center;
        }

        section{ 
            margin-bottom: 15px;
        }
    }
`

export default function Test() {

    const [firstImageDisplay, setFirstImageDisplay] = useState(true)
    const [secondImageDisplay, setSecondImageDisplay] = useState(false)
    const [thirdImageDisplay, setThirdImageDisplay] = useState(false)
    const [fourthImageDisplay, setFourthImageDisplay] = useState(false)

    const changeMetal = (e) => {
        switch(e.target.id) {
            case "circle4":
              setFirstImageDisplay(false)
              setSecondImageDisplay(false)
              setThirdImageDisplay(false)
              setFourthImageDisplay(true)
              break;
            case "circle2":
              setFirstImageDisplay(false)
              setSecondImageDisplay(true)
              setThirdImageDisplay(false)
              setFourthImageDisplay(false)
              break;
            case "circle3":
              setFirstImageDisplay(false)
              setSecondImageDisplay(false)
              setThirdImageDisplay(true)
              setFourthImageDisplay(false)
              break;
              case "circle1":
              setFirstImageDisplay(true)
              setSecondImageDisplay(false)
              setThirdImageDisplay(false)
              setFourthImageDisplay(false)
              break;
          }
    }

    return (
        <ProductBox 
            oneStatus={firstImageDisplay}
            secondStatus={secondImageDisplay}
            thirdStatus={thirdImageDisplay}
            fourthStatus={fourthImageDisplay}
        >

            <div id="products-container">
                <section>
                    <img src="https://www.datocms-assets.com/25216/1596077721-vrai-and-oro-trillion-diamond-ring-white-gold-p-2-web.jpg" alt="ring-design-1" />
                    <img src="https://www.datocms-assets.com/25216/1596077708-vrai-and-oro-trillion-diamond-ring-rose-gold-p-2-web.jpg" alt="ring-design-2" />
                    <img src="https://www.datocms-assets.com/25216/1596077731-vrai-and-oro-trillion-diamond-ring-yellow-gold-p-2-web.jpg" alt="ring-design-3" />
                    <img src="https://www.datocms-assets.com/25216/1596077721-vrai-and-oro-trillion-diamond-ring-white-gold-p-2-web.jpg" alt="ring-design-4" />
                </section>

                <section>
                    <img src="https://www.datocms-assets.com/25216/1598315963-solitaire-round-brilliant-diamond-necklace-1-0ct-white-gold-front.jpg" alt="pedant-design-1" />
                    <img src="https://www.datocms-assets.com/25216/1598315979-solitaire-round-brilliant-diamond-necklace-1-0ct-rose-gold-front.jpg" alt="pedant-design-2" />
                    <img src="https://www.datocms-assets.com/25216/1598315905-solitaire-round-brilliant-diamond-necklace-1-0ct-yellow-gold-front.jpg" alt="pedant-design-3" />
                    <img src="https://www.datocms-assets.com/25216/1598315963-solitaire-round-brilliant-diamond-necklace-1-0ct-white-gold-front.jpg" alt="pedant-design-4" />
                </section>

                <section>
                    <img src="https://lgc-static.s3.ap-south-1.amazonaws.com/stud-designs/1595981748-trillion-diamond-bezel-earrings-white-gold-1.jpg" alt="studs-design-1" />
                    <img src="https://lgc-static.s3.ap-south-1.amazonaws.com/stud-designs/1595981445-marquise-diamond-bezel-earrings-rose-gold-1.jpg" alt="studs-design-2" />
                    <img src="https://lgc-static.s3.ap-south-1.amazonaws.com/stud-designs/1595981757-trillion-diamond-bezel-earrings-yellow-gold-1.jpg" alt="studs-design-3" />
                    <img src="https://lgc-static.s3.ap-south-1.amazonaws.com/stud-designs/1595981748-trillion-diamond-bezel-earrings-white-gold-1.jpg" alt="studs-design-4" />
                </section>

                <section>
                    <img src="https://lgc-static.s3.ap-south-1.amazonaws.com/11.jpg" alt="chain-design-1" />
                    <img src="https://lgc-static.s3.ap-south-1.amazonaws.com/12.jpg" alt="chain-design-2" />
                    <img src="https://lgc-static.s3.ap-south-1.amazonaws.com/13.jpg" alt="chain-design-3" />
                    <img src="https://lgc-static.s3.ap-south-1.amazonaws.com/14.jpg" alt="chain-design-4" />
                </section>
            </div>
            
            <div className="circles-container">
                <div className="circle" id="circle1" onClick={changeMetal}></div>
                <div className="circle" id="circle2" onClick={changeMetal}></div>
                <div className="circle" id="circle3" onClick={changeMetal}></div>
                <div className="circle" id="circle4" onClick={changeMetal}></div>
            </div>

        </ProductBox>
    )
}
