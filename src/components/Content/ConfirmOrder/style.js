import styled from 'styled-components'

const PresetDetailsBox = styled.div`
    display: flex;

    .data-holder{
        width: 50%;
    }

    section {
            display: flex;
            flex-direction: column;

            img{
                width: 300px;
            }
        }


    section{
        height: 100%;
        padding: 10px;

        h2{
            font-size: 2.6rem;
            margin-bottom: 30px;
        }

        div{
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(242,242,242);

            .detail-label{
                font-size: 1.6rem;
                width: 250px;
            }

            .detail-text{
                font-size: 1.6rem;
                font-weight: bold;
                width: 250px;
            }
            
        }
    }

    section:nth-child(1){
        width: 40%;
    }

    section:nth-child(2){
        width: 60%;
    }

    .buttons-container{
        margin-top: 4rem;

        button{ 
            width: 100%;
            margin: 0.5rem;
        }

        button:nth-child(1){
            background-color: rgba(30,46,76);
            color: white;
        }

        button:nth-child(2){
            background: white;
            color: rgba(30,46,76);
            border: 1px solid rgba(30,46,76);
        }
    }

    #modal-bottom-layer{
        display: ${(props) => props.status ? 'block' : 'none'};
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(255,255,255,0.5);
    }
`

const ModalBox = styled.div`
    .modal{
        position: fixed;
        top: 0;
        left: 100%;
        width: 600px;
        height: 100vh;
        padding: 10px;
        background-color: yellow;
        transform: ${(props) => props.status ? 'translateX(-100%)' : 'translateX(100%)'};
        transition: transform 0.4s ease-in-out;
        box-shadow: 0px 0px 10px #232931;
        background-color: rgb(248, 250, 255);
        }

        .close-modal-cross{
            text-align: right;
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }
        h1{
            margin-bottom: 10px;
        }
        .option-container{
            width: 100%;
            height: 80px;
            border: 1px solid rgba(30,46,76);
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color:  rgba(30,46,76);
            margin-bottom: 2rem;

            div:nth-child(1){
                display: flex;
                height: 100%;
                align-items: center;

                div{
                    background-color: rgba(30,46,76);
                }
            }

            input[type=radio]{
                width: 40px;
                padding: 5px;
                background-color:yellow;
            }

            img{
                width: 80px;
            }

            p{
                font-size: 1.5rem;
                font-weight: bold;
                padding: 0px 0.5rem;
            }
            
        }
`
export {
    PresetDetailsBox,
    ModalBox
}
