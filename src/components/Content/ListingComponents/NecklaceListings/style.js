import styled from 'styled-components'

const PendantDetailsBox = styled.div`
 color: rgba(30,46,76);

 .details-upperbody{
    padding: 5px;
    display: flex;

    .data-holder{
        width: 50%;
        padding: 5px;  

        img{
            width: 100%;
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
    }

    #summary-holder{
        display: flex;
        flex-direction: column;
        padding: 20px;

        p.heading{
            font-size: 2.4rem;
            letter-spacing: 1px;
            text-transform: capitalize;
        }

        p.info{
            font-size: 1.9rem;
            margin: 6px 0px;
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

        select{
            min-width: 300px;
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
                text-decoration: none;
                font-size: 1.5rem;
                display: inline-block; 
                margin: 2px; 
                cursor: pointer;
                display: flex;
                color: rgb(30,46,76);
                padding: 10px;
                font-weight: bold;

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
        section:nth-child(1){
            margin-bottom: 10px;
        }

        section:nth-child(2){
            margin-bottom: 10px;
        }

        section{
            div.length-buttons-container{
                display: flex;
                margin-bottom: 15px;
            }

            div.length-button{
                padding: 8px;
                border: 1px solid rgba(30,46,76,0.4);
                margin-right: 10px;
                text-align: center;
                font-size: 1.4rem;
                font-weight: bold;
                cursor: pointer;
                width: 120px;

                :nth-child(1){
                    background: ${(props) => props.length === 16 ? 'rgba(30,46,76)' : 'none'};
                    color: ${(props) => props.length === 16 ? 'white' : 'rgba(30,46,76)'};
                }

                :nth-child(2){
                    background: ${(props) => props.length === 18 ? 'rgba(30,46,76)' : 'none'};
                    color: ${(props) => props.length === 18 ? 'white' : 'rgba(30,46,76)'};
                }

                :hover{
                    border: 1px solid rgba(30,46,76);
                }
            }

        }

        section.summary-footer{

            div.social-sharing{
                font-size: 1.5rem;
                margin: 6px 0px;

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
        }

        b{
            font-size: 1.4rem;
        }

        p{
            margin-bottom: 5px;
            text-transform: none;
        }
    }

    .gemstone-pendant-details-lowerbody {
        margin-top: 40px;

        section:nth-child(1){
            display: flex;
            border-bottom: 1px solid rgba(30,46,76);

            h2{
                padding: 15px;
                cursor: pointer;
            }

            h2:nth-child(1){
                border-bottom: ${(props) => props.status ? '5px solid rgba(30,46,76)' : 'none'} ;
            }

            h2:nth-child(2){
                border-bottom: ${(props) => props.status ? 'none' : '5px solid rgba(30,46,76)' } ;
            }
        }

        .diamond-details{
            display: flex;
            padding: 25px;

            div.data-col:nth-child(1){
                border-right: 1px solid rgba(30,46,76);
            }
    
            div.data-col{
                width: 50%;
    
                .data-row{
                    padding: 10px;
                    display: flex;
                    justify-content: space-between;
                    
        
                    :nth-child(2n+1){
                        background-color: rgb(248, 250, 255);
                    }
                }
            }
        }

        .diamond-report{
            display: ${(props) => props.status ? 'none' : 'flex'};
            justify-content: center;
            padding: 25px;

            section{
                width: 30rem;
                display: flex;
                flex-direction: column;
                padding: 1.5rem 1rem;
                background-color: #ffffff;
                border-radius: 2px;
                -webkit-box-shadow: 0px 4px 12px 5px rgba(0,0,0,0.26); 
                box-shadow: 0px 4px 12px 5px rgba(0,0,0,0.26);
                align-items: center;

                input{
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 10px;
                }
            }
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

const PendantItemBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    transition: all .3s ease;
    text-align: center;

    :hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        .details-link{
            visibility: visible;
        }
    }

    .jewelry-builder--grid-inner{
        background: #FFF;
        padding: 16px;
    }

    .jewelry-builder--grid-image{
        height: auto;
        overflow: hidden;

        img{
            max-width: 100%;
            margin: auto;
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

    .jewelry-builder--grid-metal-thumbnails{
        
        ul{
            list-style: none;
            text-align: center;
            width: 100%;
            height: 100%;
            transition: all 350ms ease;

            li{
                display: inline-block;
                cursor: pointer;
                height: 2rem;
                opacity:1;
                width: 2rem;
                margin: 4px;

                div{
                    height: 100%;
                }
            }
        }
    }

    .jewelry-builder--grid-info{

        .jewelry-builder--grid-name{
            color: #454D51;
            font-size: 15px;
            margin: auto;
            margin-bottom: 0.75rem;
            max-width: 275px;
            text-transform: capitalize;
        }

        .jewelry-builder--grid-price{
            color: rgb(30,46,76);
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
        }
    }

    .details-link{
        display: block;
        width: 100%;
        padding: 1.5rem; 
        font-size: 1.5rem; 
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        visibility: hidden;
        background: rgb(30,46,76);
        color: #FFFFFF;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
`

export {
    PendantItemBox,
    PendantDetailsBox
}