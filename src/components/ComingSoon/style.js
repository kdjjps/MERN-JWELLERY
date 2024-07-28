import styled from 'styled-components'

const ComingSoonBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    z-index: 100000;
    // background-image: url('https://lgc-static.s3.ap-south-1.amazonaws.com/coming-soon-image3.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: rgb(30,46,76);
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    section.maintenance-message{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;

        p{
            font-size: 1.6rem;
            margin-bottom: 8px;
            font-weight: bold;
        }
    }

    // section{
    //     position: relative;
    //     top: 30%;
    //     left: 30px;
    //     width: 500px;
    //     height: 500px;
    //     text-align: center;
    // }

    // img{
    //     width: 200px;
    //     height: 200px;
    // }

    h1{
        font-size: 4rem;
        margin: 30px 0px;
    }

    #time{
        font-size: 2.4rem;
    }

    @media(max-width: 1180px){

        section{
            width: 100%;
            height: 100vh;
            top: 0px;
            left: 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgba(255,255,255,0.6);
            padding: 20px;
        }

        img{
            margin-bottom: 30px;
        }

        #time{
            font-size: 1.6rem;
            font-weight: bold;
            background: rgb(30,46,76);
            color: white;
            padding: 8px;
        }

    }
`

export default ComingSoonBox