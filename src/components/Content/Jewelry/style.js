import styled from 'styled-components'

const JewelryHomepageBox = styled.div`
    color: rgb(30,46,76);
    padding: 10px;

    section.custom-section{
        text-align: center;
        margin: 30px 0px;
    }

    div#jewelry-category-box{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        grid-row-gap: 50px;
        margin-top: 20px;
    }

    div.grid-box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2.sub-title{
        font-size: 2rem;
        background: rgb(30,46,76);
        color: #FFFFFF;
        margin: 20px auto;
        width: fit-content;
        padding: 6px;
    }

    h3{
        font-size: 2rem;
        margin-bottom: 10px;
    }

    div.row{
        display: flex;
    }

    div.column{
        width: calc(100%/3);
    }

    div.category-box{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }

    div.category-description-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div.image-holder{
        width: 80%;
        margin-bottom: 30px;
        padding: 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    img{
        width: 100%;
    }

    a.for-cro{
        font-size: 1.5rem;
        letter-spacing: 1px;
        text-align: center;
        display: block;
        text-decoration: none;
        width: 300px;
        background: rgb(30,46,76);
        color: #FFFFFF;
        padding: 10px 0px;
    }

    p.seperator{
        font-size: 2rem;
        margin: 10px 0px;
        text-align: center;
    }

    @media (max-width:768px){

    div.row{
        flex-direction: column;
    }    
    
    div.column{
        width: 100%;
        margin-bottom: 30px;
        border-bottom: 3px solid rgba(30,46,76,0.2);
        padding: 0px 0px 30px 0px;
    }

    div#jewelry-category-box{
        grid-template-columns: 1fr;
    }
    }
`

const ItemScrollerBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;

    h2{
        font-size: 2vw;
        color: #1e2e4c;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 5px;
    }

    p{
        color: #1e2e4c;
        font-weight: bold;
        font-size: 1.5rem;
        text-transform: center;
        margin-bottom: 20px;
    }

    .slick-slider{
        width: 80%;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slick-slide{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
    }

    img{
        width: 150px;
        height: 150px;
        margin: 40px;
        position: relative;
        text-align: center;
    }

    .slick-next:before, .slick-prev:before {
        color: #000;
    }
    .center .slick-center img {
        opacity: 1;
        -ms-transform: scale(1.4);
        transform: scale(1.4);
    }
    .center img {
        transition: all .3s ease;
    }

    p.name-displayer{
        font-size: 2rem;
    }

    @media(max-width: 550px){
        margin: 50px 0px;

        h2{
            font-size: 6vw;
        }

        .slick-slider{
            width: 100%;
        }

        img{
            width: 100px;
            height: 100%;
            margin: 10px;
        }
    }
`

export {JewelryHomepageBox, ItemScrollerBox}