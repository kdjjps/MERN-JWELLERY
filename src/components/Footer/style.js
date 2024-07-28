import styled from 'styled-components'

const FooterBox = styled.div`
    width: 100%;
    padding: 10px;
    background-image: linear-gradient(to right, #1e2d4b, #1f2b43, #20293a, #202632, #21242a);
    font-family: 'Nunito Sans', sans-serif;

    section#mobile-footer{
        display: none;
        color: white;
        padding: 20px;
        
        .drop-content-parent{

            .label-container{
                display: flex;
                justify-content: space-between;
                text-transform: uppercase;
                color: rgba(255,215,0, 0.6);
                margin-bottom: 10px;
                letter-spacing: 1px;
            }

            .link-container{
                margin-bottom: 10px;
            }

            a{
                display: block;
                font-size: 1.4rem;
                color: rgba(255,255,255,0.6);
                text-decoration: none;
                letter-spacing: 1px;

                :hover{
                    color: white;
                }
            }
        }

        .social{
            display: flex;

            a{
                margin: 0 10px;
            }
        }
    }

    section#desktop-footer{
        width: 100%;
        margin: 0px auto 10px auto;
        padding: 20px;
        border-bottom: 1px solid rgba(255,255,255,0.3);

        #footer-top{
            display: flex;
        }

        .links-container-row{
            width: 1200px;
            margin: auto;
            display: flex;
            justify-content: space-between;

                .column{
                    padding: 10px;
                    width: 20%;

                    h2{
                        text-transform: uppercase;
                        color: rgba(212, 196, 55, 0.8);
                        margin-bottom: 30px;
                        letter-spacing: 1px;
                        font-size: 20px;
                    }
                   
                    a{
                        display: block;
                        font-size: 1.4rem;
                        color: rgba(255,255,255,0.6);
                        text-decoration: none;
                        letter-spacing: 1px;
                        margin-bottom: 10px;
                        letter-spacing: 1px;
                        font-weight: 400;
                        text-transform: capitalize;

                        :hover{
                            color: white;
                        }
                    }

                    p{
                        font-size: 1.4rem;
                        color: rgba(255,255,255,0.6);
                        letter-spacing: 1px;
                        margin-bottom: 10px;
                        letter-spacing: 1px;
                        font-weight: 400;
                        text-transform: capitalize;
                        vertical-align: middle;
                    }

                    .social-icons-container{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: rgba(255,255,255,0.6);
                        margin-bottom: 5px;
                    }

                    .social{
                        display: flex;

                        a{
                            margin: 0 10px;
                        }
                    }
                }
        }

    }

    section.drop-content{
        overflow: hidden;
        font-size: 1.4rem;
        margin-bottom: 10px;
    }

    #about-us .drop-content{
        height: ${(props) => props.aboutUsDDStatus  ? 'auto' : '0px'};
        transition: height 0.2s ease;
    }

    #about-us .fa-angle-left{
        transform: ${(props) => props.aboutUsDDStatus  ? 'rotate(-90deg)' : 'none'};
        transition: transform 0.2s ease;
    }

    #policies .drop-content{
        height: ${(props) => props.policiesDDStatus  ? 'auto' : '0px'};
        transition: height 0.2s ease;
    }

    #policies .fa-angle-left{
        transform: ${(props) => props.policiesDDStatus  ? 'rotate(-90deg)' : 'none'};
        transition: transform 0.2s ease;
    }

    #jewelry-guide .drop-content{
        height: ${(props) => props.jewelryGuideDDStatus  ? 'auto' : '0px'};
        transition: height 0.2s ease;
    }

    #jewelry-guide .fa-angle-left{
        transform: ${(props) => props.jewelryGuideDDStatus  ? 'rotate(-90deg)' : 'none'};
        transition: transform 0.2s ease;
    }

    #shop-with-confidence .drop-content{
        height: ${(props) => props.shopWithConfidenceDDStatus  ? 'auto' : '0px'};
        transition: height 0.2s ease;
    }

    #shop-with-confidence .fa-angle-left{
        transform: ${(props) => props.shopWithConfidenceDDStatus  ? 'rotate(-90deg)' : 'none'};
        transition: transform 0.2s ease;
    }

    #customer-delight .drop-content{
        height: ${(props) => props.customerDelightDDStatus  ? 'auto' : '0px'};
        transition: height 0.2s ease;
    }

    #customer-delight .fa-angle-left{
        transform: ${(props) => props.customerDelightDDStatus  ? 'rotate(-90deg)' : 'none'};
        transition: transform 0.2s ease;
    }

    section#footer-bottom{
        width: 1200px;
        margin: auto;
        color: rgba(255,255,255,0.6);
        padding: 10px;
        font-size: 1.5rem;
        letter-spacing: 1px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


  @media (max-width: 1180px){

    padding: 5px;

    section#desktop-footer{
        display: none;
    }

    section#mobile-footer{
        display: block;
    }

    section#footer-bottom{
        width: 100%;
        flex-direction: column;

        .column{
            margin: 10px 0;
            text-align: center;
        }
    }
        
  }


`

export default FooterBox