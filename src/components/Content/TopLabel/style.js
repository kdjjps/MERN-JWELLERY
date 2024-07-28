import styled from 'styled-components'

const TopLabelBox = styled.div`
    background-color: rgb(246,246,246);
    border-top: 1px solid rgba(30,46,76, 0.2);
    border-bottom: 1px solid rgba(30,46,76, 0.2);

    section{
        display: flex;
        justify-content: center;

        .step-container{
            position: relative;
            width: calc(100%/3);
            height: 60px;
            font-family: 'Nunito Sans', sans-serif;
            cursor: pointer;

            :nth-child(1){
                background-color: ${(props => props.stepStatus === 1 ? 'rgb(30,46,76)' : 'none')};
                color: ${(props => props.stepStatus === 1 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
            }

            :nth-child(2){
                background-color: ${(props => props.stepStatus === 2 ? 'rgb(30,46,76)' : 'rgb(246,246,246)')};
                color: ${(props => props.stepStatus === 2 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
                
            }

            :nth-child(3){
                background-color: ${(props => props.stepStatus === 3 ? 'rgb(30,46,76)' : 'rgb(246,246,246)')};
                color: ${(props => props.stepStatus === 3 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
            }

            a.step-one-link{
                text-decoration: none;
                color: ${(props => props.stepStatus === 1 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
            }

            a.step-two-link{
                text-decoration: none;
                color: ${(props => props.stepStatus === 2 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
            }

            .before-selected{
                h1{
                    font-size: 2rem;
                    text-transform: uppercase;
                }

                p{
                    font-size: 1.5rem;
                }
            }

            .step{
                position: relative;
                width: 100%;
                height: 100%;
                padding: 0px 5px 0px 20px;
                margin: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .step-details{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .step-number{
                    font-size: 3.5rem;
                    font-weight: bold;
                    margin-right: 6px;
                }

                .item-action{
                    font-size: 1.3rem;
                }

                .item-type{
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    font-weight: bold;
                }

                .step-shape{
                    margin-right: 10px;
                    padding: 2px 6px;
                    border-radius: 3px;

                    div.product-icon{
                        width: 38px;
                        height: 38px;
                    }

                    div.product-image{
                        display: flex;
                        height: auto;
                        align-items: center; 

                        section{
                            height: 50px;
                            disply: flex;
                            flex-direction: column;
                            padding: 5px 10px;
                            align-items: flex-end;
                            justify-content: space-between;
                        }

                        div{
                            display: flex;
                        }

                        p{
                            font-size: 1.8rem;
                        }

                        div.big-screen-content{
                            display: flex;
                            align-items: center;
                        }

                        div.small-screen-content{
                            display: none;
                        }
                    }

                    img{
                        width: 38px;
                        height: 38px;
                    }
                }
            }  
        }

        #custom-step-container::before{
                position: absolute;
                top: 0;
                left: 0px;
                content: "";
                color: black!important;
                width: 0;
                height: 0;
                border-color: ${(props => props.stepStatus === 1 ? 'transparent transparent transparent rgba(30,46,76)' : 'transparent transparent transparent rgb(246,246,246)')};
                border-style: solid;
                border-width: 30px 0 30px 10px;
                z-index: 3;
            }

        #custom-step-container::after{
                position: absolute;
                top: 0;
                left: 100%;
                content: "";
                color: black!important;
                width: 0;
                height: 0;
                border-color: ${(props => props.stepStatus === 2 ? 'transparent transparent transparent rgba(30,46,76)' : 'transparent transparent transparent rgb(246,246,246)')};
                border-style: solid;
                border-width: 30px 0 30px 10px;
                z-index: 3;
            }
    
        #custom-step::before{
                position: absolute;
                top: 0;
                left: 1px;
                content: "";
                color: black!important;
                width: 0;
                height: 0;
                border-color: ${(props => props.stepStatus === 2 || 3 ? 'transparent transparent transparent rgba(30,46,76, 0.2)' : 'transparent transparent transparent rgb(246,246,246)')};
                border-style: solid;
                border-width: 30px 0 30px 10px;
                z-index: 2;
            }

        #custom-step::after{
                position: absolute;
                top: 0;
                left:calc(100% + 1px);
                content: "";
                color: black!important;
                width: 0;
                height: 0;
                border-color: ${(props => props.stepStatus === 2||3 ? 'transparent transparent transparent rgba(30,46,76, 0.2)' : 'transparent transparent transparent rgb(246,246,246)')};
                border-style: solid;
                border-width: 30px 0 30px 10px;
                z-index: 2;
            }
    }

    @media (max-width:450px){

        section{
    
            .step-container{
    
                .before-selected{
                    h1{
                        font-size: 1.2rem;
                    }
    
                    p{
                        font-size: 0.9rem;
                    }
                }
    
                .step{
                   
                    padding: 0px 0px 0px 12px;

                    .item-action{
                        font-size: 0.9rem;
                        margin-bottom: 2px;
                    }
    
                    .item-type{
                        font-size: 1.2rem;
                        text-transform: uppercase;
                        font-weight: bold;
                    }

                    .step-number{
                        font-size: 2.4rem;
                    }
                }  
            }
        }
    }

    @media (max-width:620px){

        section{
    
            .step-container{

                .step{
                  
                    .step-shape{
                       display: none;
                    }
                }  
            }
        }
    }
`

const CustomRingTopLabelBox = styled.div`
background-color: rgb(246,246,246);
border-top: 1px solid rgba(30,46,76, 0.2);
border-bottom: 1px solid rgba(30,46,76, 0.2);

section{
    display: flex;
    justify-content: center;

    .step-container{
        position: relative;
        width: calc(100%/4);
        height: 60px;
        font-family: 'Nunito Sans', sans-serif;
        cursor: pointer;

        .before-selected{
            h1{
                font-size: 2rem;
                text-transform: uppercase;
            }

            p{
                font-size: 1.5rem;
            }
        }

        a.step-one-link{
            text-decoration: none;
            color: ${(props => props.stepStatus === 1 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
        }

        a.step-two-link{
            text-decoration: none;
            color: ${(props => props.stepStatus === 2 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
        }

        a.step-three-link{
            text-decoration: none;
            color: ${(props => props.stepStatus === 3 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
        }

        .step{
            position: relative;
            width: 100%;
            height: 100%;
            padding: 0px 5px 0px 20px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .step-details{
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .step-number{
                font-size: 3.5rem;
                font-weight: bold;
                margin-right: 6px;
            }

            .item-action{
                font-size: 1.3rem;
            }

            .item-type{
                font-size: 1.5rem;
                text-transform: uppercase;
                font-weight: bold;
            }

            .step-shape{
                display: flex;
                justify-content: center;
                align-items: center;

                div.product-icon{
                    width: 38px;
                    height: 38px;
                }

                div.product-image{
                    display: flex;
                    height: auto;
                    align-items: center; 

                    section{
                        height: 50px;
                        disply: flex;
                        flex-direction: column;
                        padding: 5px 10px;
                        align-items: flex-end;
                        justify-content: space-between;
                    }

                    div{
                        display: flex;
                    }

                    p{
                        font-size: 1.8rem;
                    }

                    div.big-screen-content{
                        display: flex;
                        align-items: center;
                    }

                    div.small-screen-content{
                        display: none;
                    }
                }

                    img{
                        width: 38px;
                        height: 38px;
                    }
            }
        }  
    }

    #step1::after{
            position: absolute;
            top: 0;
            left: 100%;
            content: "";
            color: black!important;
            width: 0;
            height: 0;
            border-color: ${(props => props.stepStatus === 1? 'transparent transparent transparent rgba(30,46,76)' : 'transparent transparent transparent rgb(246,246,246)')};
            border-style: solid;
            border-width: 30px 0 30px 10px;
            z-index: 3;
        }


    #step1 .step::after{
            position: absolute;
            top: 0;
            left:calc(100% + 1px);
            content: "";
            color: black!important;
            width: 0;
            height: 0;
            border-color: ${(props => props.stepStatus === 2||3 ? 'transparent transparent transparent rgba(30,46,76, 0.2)' : 'transparent transparent transparent rgb(246,246,246)')};
            border-style: solid;
            border-width: 30px 0 30px 10px;
            z-index: 2;
        }

    #step2::after{
        position: absolute;
        top: 0;
        left: 100%;
        content: "";
        color: black!important;
        width: 0;
        height: 0;
        border-color: ${(props => props.stepStatus === 2? 'transparent transparent transparent rgba(30,46,76)' : 'transparent transparent transparent rgb(246,246,246)')};
        border-style: solid;
        border-width: 30px 0 30px 10px;
        z-index: 3;
    }


    #step2 .step::after{
        position: absolute;
        top: 0;
        left:calc(100% + 1px);
        content: "";
        color: black!important;
        width: 0;
        height: 0;
        border-color: ${(props => props.stepStatus === 1 ? 'transparent transparent transparent rgba(30,46,76, 0.2)' : 'transparent transparent transparent rgb(246,246,246)')};
        border-style: solid;
        border-width: 30px 0 30px 10px;
        z-index: 2;
    }

    #step3::after{
        position: absolute;
        top: 0;
        left: 100%;
        content: "";
        color: black!important;
        width: 0;
        height: 0;
        border-color: ${(props => props.stepStatus === 3? 'transparent transparent transparent rgba(30,46,76)' : 'transparent transparent transparent rgb(246,246,246)')};
        border-style: solid;
        border-width: 30px 0 30px 10px;
        z-index: 3;
    }


    #step3 .step::after{
            position: absolute;
            top: 0;
            left:calc(100% + 1px);
            content: "";
            color: black!important;
            width: 0;
            height: 0;
            border-color: ${(props => props.stepStatus === 1||2 ? 'transparent transparent transparent rgba(30,46,76, 0.2)' : 'transparent transparent transparent rgb(246,246,246)')};
            border-style: solid;
            border-width: 30px 0 30px 10px;
            z-index: 2;
    }

    #step1{
        background-color: ${(props => props.stepStatus === 1 ? 'rgb(30,46,76)' : 'none')};
        color: ${(props => props.stepStatus === 1 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
        
    }

    #step2{
        background-color: ${(props => props.stepStatus === 2 ? 'rgb(30,46,76)' : 'rgb(246,246,246)')};
        color: ${(props => props.stepStatus === 2 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
        
    }

    #step3{
        background-color: ${(props => props.stepStatus === 3 ? 'rgb(30,46,76)' : 'rgb(246,246,246)')};
        color: ${(props => props.stepStatus === 3 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
    }

    #step4{
        background-color: ${(props => props.stepStatus === 4 ? 'rgb(30,46,76)' : 'rgb(246,246,246)')};
        color: ${(props => props.stepStatus === 4 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
    }

}

    @media (max-width:450px){

        section{
    
            .step-container{
                
    
                .before-selected{
                    h1{
                        font-size: 1.2rem;
                    }
    
                    p{
                        font-size: 0.9rem;
                    }
                }
    
                .step{
                   
                    padding: 0px 0px 0px 12px;

                    .item-action{
                        font-size: 0.8rem;
                        margin-bottom: 2px;
                    }
    
                    .item-type{
                        font-size: 1rem;
                        text-transform: uppercase;
                        font-weight: bold;
                    }

                    .step-number{
                        font-size: 1.4rem;
                    }
                  
                    .step-shape{
                        width: fit-content;
                        margin: 0px;
                        border: none;

                        div.product-image{

                            div.big-screen-content{
                                display: none;
                            }

                            div.small-screen-content{
                                display: block;
                                width: 20px;
                                height: 20px;
                            }
                        }
    
                        img{
                            width: 25px;
                            height: 25px;
                        }
                    }
                }  
            }
        }
    }

    @media (max-width: 620px){

            section{
        
                .step-container{
    
                    .step{
                      
                        .step-shape{
                           display: none;
                        }
                    }  
                }
            }

    }
`
const CustomGemstoneTopLabelBox = styled.div`
    background-color: rgb(246,246,246);
    border-top: 1px solid rgba(30,46,76, 0.2);
    border-bottom: 1px solid rgba(30,46,76, 0.2);

    section{
        display: flex;
        justify-content: center;

        .step-container{
            position: relative;
            width:calc(100%/3);
            height: 60px;
            font-family: 'Nunito Sans', sans-serif;
            cursor: pointer;

            .before-selected{
                h1{
                    font-size: 2rem;
                    text-transform: uppercase;
                }

                p{
                    font-size: 1.5rem;
                }
            }

            .after-selected{
                display: flex;
                align-items: center;

                h1{
                    font-size: 1.5rem;
                    text-transform: uppercase;
                }

                p{
                    font-size: 1.2rem;
                }

                #jewelry-modal{
                        display: ${(props => props.jewelryModalStatus ? 'block' : 'none')};
                        color: rgb(30,46,76);
                }

                #diamond-modal{
                    display: ${(props => props.diamondModalStatus ? 'block' : 'none')};
                    color: rgb(30,46,76);
                }

                .selection-displayer{
                    width:100%;
                    padding: 20px;
                    position: absolute;
                    top: calc(100% + 1px);
                    left: 0px;
                    z-index: 1000;
                    background-color: rgb(246,246,246);

                    img{
                        width: 50px;
                        height: 50px;
                    }

                    .details-container{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    a{
                        text-decoration: none;
                        padding: 10px;
                        display: block;
                        width: 100%;
                        background-color: rgb(30,46,76);
                        text-transform: uppercase;
                        text-align: center;
                        color: white;
                        font-size: 1.4rem;
                        margin-top: 10px;
                    }
                }
            }

            .step{
                position: relative;
                width: 100%;
                height: 100%;
                padding: 0px 5px 0px 20px;
                margin: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .step-details{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .step-number{
                    font-size: 4rem;
                    font-weight: bold;
                    margin-right: 6px;
                }

                .step-title .before-selected{
                    display: flex;
                }

                .step-shape{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img{
                        width: 30px;
                    }
                }
            }  
        }

        #step1::after{
                position: absolute;
                top: 0;
                left: 100%;
                content: "";
                color: black!important;
                width: 0;
                height: 0;
                border-color: ${(props => props.stepStatus === 1? 'transparent transparent transparent rgba(30,46,76)' : 'transparent transparent transparent rgb(246,246,246)')};
                border-style: solid;
                border-width: 30px 0 30px 10px;
                z-index: 3;
            }


        #step1 .step::after{
                position: absolute;
                top: 0;
                left:calc(100% + 1px);
                content: "";
                color: black!important;
                width: 0;
                height: 0;
                border-color: ${(props => props.stepStatus === 2||3 ? 'transparent transparent transparent rgba(30,46,76, 0.2)' : 'transparent transparent transparent rgb(246,246,246)')};
                border-style: solid;
                border-width: 30px 0 30px 10px;
                z-index: 2;
            }

        #step2::after{
            position: absolute;
            top: 0;
            left: 100%;
            content: "";
            color: black!important;
            width: 0;
            height: 0;
            border-color: ${(props => props.stepStatus === 2? 'transparent transparent transparent rgba(30,46,76)' : 'transparent transparent transparent rgb(246,246,246)')};
            border-style: solid;
            border-width: 30px 0 30px 10px;
            z-index: 3;
        }


        #step2 .step::after{
            position: absolute;
            top: 0;
            left:calc(100% + 1px);
            content: "";
            color: black!important;
            width: 0;
            height: 0;
            border-color: ${(props => props.stepStatus === 1 ? 'transparent transparent transparent rgba(30,46,76, 0.2)' : 'transparent transparent transparent rgb(246,246,246)')};
            border-style: solid;
            border-width: 30px 0 30px 10px;
            z-index: 2;
        }

        #step3::after{
            position: absolute;
            top: 0;
            left: 100%;
            content: "";
            color: black!important;
            width: 0;
            height: 0;
            border-color: ${(props => props.stepStatus === 3? 'transparent transparent transparent rgba(30,46,76)' : 'transparent transparent transparent rgb(246,246,246)')};
            border-style: solid;
            border-width: 30px 0 30px 10px;
            z-index: 3;
        }


        #step3 .step::after{
                position: absolute;
                top: 0;
                left:calc(100% + 1px);
                content: "";
                color: black!important;
                width: 0;
                height: 0;
                border-color: ${(props => props.stepStatus === 1||2 ? 'transparent transparent transparent rgba(30,46,76, 0.2)' : 'transparent transparent transparent rgb(246,246,246)')};
                border-style: solid;
                border-width: 30px 0 30px 10px;
                z-index: 2;
        }

        #step1{
            background-color: ${(props => props.stepStatus === 1 ? 'rgb(30,46,76)' : 'none')};
            color: ${(props => props.stepStatus === 1 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
            
        }

        #step2{
            background-color: ${(props => props.stepStatus === 2 ? 'rgb(30,46,76)' : 'rgb(246,246,246)')};
            color: ${(props => props.stepStatus === 2 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
            
        }

        #step3{
            background-color: ${(props => props.stepStatus === 3 ? 'rgb(30,46,76)' : 'rgb(246,246,246)')};
            color: ${(props => props.stepStatus === 3 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
        }

        #step4{
            background-color: ${(props => props.stepStatus === 4 ? 'rgb(30,46,76)' : 'rgb(246,246,246)')};
            color: ${(props => props.stepStatus === 4 ? 'rgb(255,255,255)' : 'rgb(30,46,76)')};
        }

    @media (max-width:550px){

        section{

            .step-container{

                .before-selected{
                    h1{
                        font-size: 1.2rem;
                    }

                    p{
                        font-size: 0.9rem;
                    }
                }

                .after-selected{

                    h1{
                        font-size: 1.2rem;
                    }

                    p{
                        font-size: 0.9rem;
                    }
                }

                .step{
                
                    padding: 0px 0px 0px 15px;

                    .step-number{
                        font-size: 2.5rem;
                    }
                
                    .step-shape{
                        width: 35px;
                        height: 35px;

                        img{
                            width: 25px;
                        }
                    }
                }  
            }
        }
    }
`

export {
    TopLabelBox,
    CustomRingTopLabelBox,
    CustomGemstoneTopLabelBox
}