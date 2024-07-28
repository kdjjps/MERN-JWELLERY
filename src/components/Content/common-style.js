import styled from 'styled-components'

const ContentBox = styled.div`
    div.homepage{
       padding: 1rem;
    }

    div.non-homepage{
        max-width: 1200px;
        margin: auto;
    }

    div.empty-display{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 400px;
        color: rgb(30,46,76);

        h2{
            font-size: 2.4rem;
            text-transform: capitalize;
            text-align: center;
        }
    }

    @media (max-width:1315px){
        position: relative;

        div.non-homepage{
            padding: 4px;
            width: 100%;
        }
    }
`

const FooterContentBox = styled.div`
    color: rgb(30,46,76);

    h1{
        margin-bottom: 20px;
        text-align: center;
        letter-spacing: 1px;
        padding: 5px;
        text-decoration: underline;
    }

    h2{
        width: fit-content;
        margin-bottom: 10px;
        letter-spacing: 1px;
        background: rgb(30,46,76);
        color: white;
        padding: 5px;
    }

    h3{
        margin-bottom: 10px;
    }

    p{
        line-height: 1.5;
        margin-bottom: 10px;
    }

    ul{
        margin-bottom: 10px;
        li{
            font-size: 1.5rem;
            line-height: 2;
        }
    }

    @media(max-width: 640px){
        text-align: justify;
        padding: 8px;

        h1,h2,h3{
            width: 100%;
            text-align: center;
        }
    }
`

const PageBannerBox = styled.div`
    height: 300px;
    border: 2px solid #243050;

    display: flex;
    justify-content: center;
    align-items: center;
`

const BannerBox = styled.div`
    height: 300px;
    padding: 20px;
    background-image: ${(props) => `url(${props.image})`};
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;

    div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h1{
        font-size: 4vw;
        color: rgb(30,46,76);
    }
    h2{
        font-size: 2vw;
        color: rgb(30,46,76);
        margin-bottom: 20px;
        text-transform: uppercase;
    }

    p{
        color: rgb(30,46,76);
        line-height: 1.2;
    }

    h1.astro-big-heading{
        font-size: 4vw;
        color: #ffffff;
        text-shadow: 2px 2px #ff0000;
    }

    h2.astro-small-heading{
        font-size: 2vw;
        color: #eeae6b;
    }
    
    @media(max-width: 1300px){
        h1{
            font-size: 6vw;
        }

        h1.astro-big-heading{
            font-size: 6vw;
        }

        h2{
            font-size: 4vw;
        }

        h2.astro-small-heading{
            font-size: 4vw;
        }
    }
    @media(max-width: 990px){
        height: 150px;
    }

    @media(max-width: 640px){
        h2{
            font-size: 1.6rem;
            margin-bottom: 10px;
        }

        h2.astro-small-heading{
            font-size: 1.4rem;
            margin-bottom: 10px;
        }

        h1.astro-big-heading{
            font-size: 1.8rem;
        }

        p{
            font-size: 1rem;
            line-height: 1.3;
        }
    }
`

export {
    ContentBox,
    PageBannerBox,
    FooterContentBox,
    BannerBox
}