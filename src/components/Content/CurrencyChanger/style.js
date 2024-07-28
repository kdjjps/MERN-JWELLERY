import styled from 'styled-components'

const CurrencyChangerModal = styled.div`

    display: ${(props => props.status ? 'flex' : 'none')};
    width: 100%;
    height: 100vh;
    position: absolute;
    top:0;
    left:0;
    justify-content: center;
    align-items: center;
    z-index: 5000;
    background-color: rgba(255,255,255,0.7);
    text-align: center;

    section{
        position: relative;
        width: 600px;
        height: 350px;
        padding: 40px 20px;
        background-image: linear-gradient(to right, #1e2d4b, #1f2b43, #20293a, #202632, #21242a);
        color: white;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        h1{
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-top: 20px;
            padding: 10px 0px;
            border-bottom: 1px solid rgba(255,255,255,0.3);
            border-top: 1px solid rgba(255,255,255,0.3);
        }

        h3{
            font-size: 1.4rem;
        }

        p{
            text-transform: lowercase;
            font-size: 1.2rem;
        }

        button{
            background-color: #e8c99b;
            background-image: linear-gradient(315deg, #e8c99b 0%, #e8bc85 74%);
            border-radius: 0px;
            padding: 10px 40px;
        }

        #country-list{
            display: flex;
            border: 1px solid white;
            padding: 8px;
            justify-content: center;

            ul{
                margin: 20px;
                list-style-type: none;
                
                li{
                    font-size: 1.5rem;
                    margin-bottom: 5px;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;

                    img{
                        width: 35px;
                        height: auto;
                        margin-right: 10px;
                    }
                }
            }
        }
    }

    #note{
        letter-spacing: 1px;
    }

    @media (max-width: 540px) {

        section{
            width: 95%;

            h2{
                font-size: 1.2rem;
            }
            h1{
                font-size: 1.6rem;
            }
            h3{
                font-size: 1.2rem;
            }

            #country-list{

                ul li{
                    font-size: 1.1rem;
                }

            }       
        }
    }
`

export default CurrencyChangerModal