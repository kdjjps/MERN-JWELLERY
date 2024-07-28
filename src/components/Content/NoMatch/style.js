import styled from 'styled-components'

const NoMatchBox = styled.div`

    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(30,46,76);

    .error-display{
        display: flex;
        align-items: center;

        span{
            font-size: 20rem;
        }

        img{
            width: 180px;
        }
    }

    .error-message{
        text-align: center;

        h1{
            margin-bottom: 20px;
        }

        a{
            display: block;
            margin-top: 20px;
            padding: 10px;
            background: rgb(30,46,76);
            text-decoration: none;
            font-size: 1.8rem;
            color: white;
        }
    }

    @media(max-width: 460px){
        height: 400px;

        .error-display{
    
            span{
                font-size: 14rem;
            }
    
            img{
                width: 150px;
            }
        }

        .error-message{
    
            h1{
                font-size: 2.5rem;
            }
    
            a{
                padding: 5px;
                font-size: 1.5rem;
                color: white;
            }
        }

    }

`

export default NoMatchBox