import styled from 'styled-components'

const CustomerTestimonyBox = styled.div`
    width: 100%;
    height: 30em;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:20px;

    h1{
        color: #1e2e4c;
    }

    p{
        color: #1e2e4c;
        margin-bottom: 10px;
    }

    .slick-slider{
        width: 90%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slick-slide{
        height: 18em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 200px;
        height: 140px;
        margin: 50px;
        padding: 2%;
        position: relative;
        text-align: center;
    }

    .slick-next:before, .slick-prev:before {
        color: #000;
    }

    .center .slick-center img {
        opacity: 1;
        -ms-transform: scale(1.8);
        transform: scale(1.8);
    }

    .center img {
        transition: all .3s ease;
    }

`

export default CustomerTestimonyBox