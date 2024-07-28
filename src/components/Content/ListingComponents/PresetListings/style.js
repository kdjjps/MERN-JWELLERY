import styled from 'styled-components'

const PresetDetailsBox = styled.div`
color: rgba(30,46,76);
margin-bottom: 20px;

.details-upperbody{
    padding: 5px;
    display:flex;

    .data-holder{
        width: 50%;
        padding: 5px; 

        img.white-gold{
            display: ${(props)=> props.metal === 'white-gold' ? 'block' : 'none'}
        }
        
        img.yellow-gold{
            display: ${(props)=> props.metal === 'yellow-gold' ? 'block' : 'none'}
        }
        
        img.rose-gold{
            display: ${(props)=> props.metal === 'rose-gold' ? 'block' : 'none'}
        }
        
        img.platinum{
            display: ${(props)=> props.metal === 'platinum' ? 'block' : 'none'}
        }

        video.white-gold{
            display: ${(props)=> props.metal === 'white-gold' ? 'block' : 'none'}
        }
        
        video.yellow-gold{
            display: ${(props)=> props.metal === 'yellow-gold' ? 'block' : 'none'}
        }
        
        video.rose-gold{
            display: ${(props)=> props.metal === 'rose-gold' ? 'block' : 'none'}
        }
        
        video.platinum{
            display: ${(props)=> props.metal === 'platinum' ? 'block' : 'none'}
        }

    }

    .product-images-box{
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 80%;
        }

        img.white-gold{
            display: ${(props)=> props.metal === 'white-gold' ? 'block' : 'none'}
        }
        
        img.yellow-gold{
            display: ${(props)=> props.metal === 'yellow-gold' ? 'block' : 'none'}
        }
        
        img.rose-gold{
            display: ${(props)=> props.metal === 'rose-gold' ? 'block' : 'none'}
        }
        
        img.platinum{
            display: ${(props)=> props.metal === 'platinum' ? 'block' : 'none'}
        }

    }

    #studs-image{
        height: 400px;
    }

    .small-displayer{

        display: flex;
        justify-content: space-around;

        img{
            width: 85px;
            height: 85px;
            margin-right: 10px;
            border: 1px solid rgba(30,46,76,0.2);
        }

        img.productImage{
            border: ${(props) => props.imageViewStatus ? '2px solid rgb(30,46,76)' : '1px solid rgba(30,46,76,0.2)'}
        }

        video{
            width: 85px;
            height: 85px;
            margin-right: 10px;
            border: ${(props) => props.videoViewStatus ? '2px solid rgb(30,46,76)'  : '1px solid rgba(30,46,76,0.2)'}
        }
        
    }

    #summary-holder{
        display: flex;
        flex-direction: column;

        p{
            margin-bottom: 5px;
        }

        p.heading{
            font-size: 2.4rem;
            letter-spacing: 1px;
            text-transform: capitalize;
        }

        p.sku{
            font-style: italic;
        }

        p.price{
            font-style: italic;
            font-size: 2.4rem;
            padding: 10px 0px;
            border-top: 1px solid rgba(30,46,76,0.6);
            border-bottom: 1px solid rgba(30,46,76,0.6);
            margin: 15px 0px;
        }

        a{
            text-decoration: none;
            font-size: 1.5rem;
            display: inline-block; 
            margin: 2px; 
            cursor: pointer;
            color: rgb(30,46,76);
            padding: 10px;
            font-weight: bold;
            text-align: center;
            background: rgb(30,46,76);
            color: white;
        }

        #metal-changer{
            display: flex;
            
            a{
                color: rgb(30,46,76);

                :nth-child(1){
                    background: #dedede;
                }

                :nth-child(2){
                    background: #efd9a7;
                }

                :nth-child(3){
                    background: #eebda0;
                }

                :nth-child(4){
                    background: #dedede;
                }
            }
        }

        #stud-quantity-selector{
            display: flex;
            color: rgb(30,46,76);

            div.input-container{
                width: 50%;
                border: 1px solid rgba(30,46,76,0.3);
                display: flex;
                align-items: center;
                margin-right: 10px;
            }

            div.radio-box{
                width: 35px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgb(248, 250, 255);
                margin-right: 10px;
            }
        }

        button{
            display: block;
            width: 100%;
            margin: 10px 0px;

            .dropdown-content{
                width: 100%;
            }
        }

        .modifier{
            background-color: rgb(248, 250, 255);
            padding: 10px;
            width: 350px;

            .row{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 0px;

                button{
                    width: 150px;
                }
            }
        }

        #metal-changer{
            display: flex;
            
            .metal-dots-container{
                padding: 2px;
                display: flex;
                border: 1px solid rgb(30,46,76);
                border-radius: 5px;
                align-items: center;
                text-transform: capitalize;
                margin-right: 5px;
                font-size: 1.4rem;
                cursor: pointer;
            }
        }

        section:nth-child(1){
            margin-bottom: 10px;
        }

        section:nth-child(2){
            margin-bottom: 10px;
        }

        section.summary-footer{

            div.social-sharing{
                font-size: 1.5rem;
                margin: 10px 0px;

                img{
                    width: 40px;
                    vertical-align: middle;
                }
            }

            img{
                width: 70%;
            }
        }
    }
}

.details-lowerbody{
    height: auto;
    margin: 30px 0px;
    background: rgb(248,250,255);
    padding: 15px 40px;

    .details-container{
        width: 70%;
    }

    h1{
        font-size: 2.4rem;
        margin-bottom: 15px;
        text-transform: capitalize;
        border-bottom: 1px solid rgb(30,46,76);
        width: fit-content;
        padding-bottom: 10px;
    }

    section{
        margin-bottom: 15px;

        table{
            margin: 20px 0px;
            border-spacing: 0px;

            th{
                font-style: none;
                width: 150px;
                font-size: 1.5rem;
                padding-bottom: 10px;
                border-bottom: 1px solid black;
                text-align: left;
                border-collapse: collapse;
            }

            td{
                padding-top: 10px;
                font-size: 1.4rem;
            }
        }
    }

    b{
        font-size: 1.4rem;
    }

    p{
        margin-bottom: 5px;
        text-transform: none;
    }
}

@media(max-width: 1180px){

    .details-upperbody{
            #summary-holder{

                p.diamond-heading{
                    font-size: 2rem;
                }

                p.diamond-info{
                    font-size: 1.5rem;
                    margin: 5px 0px;
                }

                p.diamond-price{
                    font-size: 2rem;
                    margin: 5px 0px;
                }

                section.enquiry-section{
                    div{
                        font-size: 1.2rem;
                    }
                }

        }
    }

}

@media(max-width: 990px){

    .details-upperbody{
        flex-direction: column;

        .data-holder{
            width: 100%;
        }
    }

}

@media(max-width: 550px){
        width: 100%;

        .details-upperbody{
            flex-direction: column;

            .data-holder{
                width: 100%;
            }

        }

        .big-image{
            img{
                width: 100%;
            }
        }
    }
`

const ModalBox = styled.div`
    width: 500px;
    height: 100vh;
    padding: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgb(248, 250, 255);
    transform: ${(props) => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 5000;


    p{
        font-size: 1.4rem;
    }

    .input-container{

        select{
            display: block;
            width: 100%;
            margin: 30px 0px;
            outline: none;
            border: 2px solid rgb(30,46,76);
            background: white;
            border-radius: 5px;
            height: 35px;
        }

        button{
            width: 100%;
        }
    }

    @media(max-width: 500px){
        width: 100%;
    }
`

export {
    PresetDetailsBox,
    ModalBox
}