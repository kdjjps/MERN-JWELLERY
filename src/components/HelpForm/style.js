import styled, {css, keyframes} from 'styled-components'

const HelpFormBox = styled.div`
    display: ${(props) => props.status  ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(249,249,249,0.5);
    z-index: 9001;
    overflow: hidden;
    align-items: center;
    justify-content: center;

    section{
        position: relative;
        padding: 20px;
        text-align: center;
        background-color: #ffffff;
        border-radius: 2px;
        -webkit-box-shadow: 0px 4px 12px 5px rgba(0,0,0,0.26); 
        box-shadow: 0px 4px 12px 5px rgba(0,0,0,0.26);
    }

    h2{
        font-size: 2vw;
        color: #1e2e4c;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 5px;
    }

    p{
        color: #1e2e4c;
        font-weight: bold;
        font-size: 1.5rem;
        text-transform: center;
    }

    form{
        width: 800px;
        margin-top: 10px;
        padding: 1.5rem 1rem;
    }

    div.query-input-container{
        display: flex;
        justify-content: space-between;
    }

    div.query-button-container{
        display: flex;
        justify-content: center;
        padding: 5px;
        background: rgb(30,46,76);
        margin: 5px;
    }

    input{
        width: 50%;
        padding: 10px;
        margin: 5px;
    }

    textarea{
        width: 100%;
        padding: 10px;
        margin: 5px;
    }

    button{
        width: 100%;
        background-color: rgba(30,46,76);
        color: #ffffff;

        :hover{
            background: rgba(30,46,76, 0.5);
        }
    }

    div.close-button{
        position: absolute;
        top: 5px;
        right: 10px;
    }

    @media(max-width: 1150px){
        padding: 20px;

        section{
            width: 100%;
            padding: 10px;
        }

        form{
            width: 100%;
        }

        input{
            width: 100%;
        }

        div.query-input-container{
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

`

const hide = keyframes`

        0%{
            bottom: 0;
            opacity: 0;
        }
        50%{
            bottom: 220px;
            opacity: 1;
        }
        100%{
            bottom: 450px;
            opacity: 0;
        }
`

const PopUpModalBox = styled.div`
    width: fit-content;
    position: ${(props) => props.status  ? `fixed`  : 'none'};    
    font-size: 1.4rem;
    font-weight: bold;
    z-index: 8000;
    opacity: 0;
    bottom: 450px;
    left: 48%;
    padding: 10px;
    color: #FFFFFF;
    border-radius: 5px;
    background: rgb(222,157,5);
    animation: ${(props) => props.status  ? css `${hide} 1.5s ease-out`  : ''};

    @media(max-width: 900px){
        left: 40%;
    }
    `

export {HelpFormBox, PopUpModalBox}