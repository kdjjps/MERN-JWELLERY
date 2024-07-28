import styled, {css, keyframes} from 'styled-components'

const AskQueryBox = styled.div`
    padding: 50px 0px;
    margin: 0px 0px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid rgba(0,0,0,0.1);
    border-bottom: 1px solid rgba(0,0,0,0.1);

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
        width: 1100px;
        margin-top: 10px;
        padding: 1.5rem 1rem;
        background-color: #ffffff;
        border-radius: 2px;
        -webkit-box-shadow: 0px 4px 12px 5px rgba(0,0,0,0.26); 
        box-shadow: 0px 4px 12px 5px rgba(0,0,0,0.26);
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


    @media(max-width: 1150px){
        width: 100%;
        padding: 10px;

        form{
            width: 100%;
        }

        h2{
            font-size: 6vw;
        }

        div.query-input-container{
           flex-direction: column;
        }

        input{
            width: 100%;
            margin: 0 0 10px 0;
        }
    
        textarea{
            width: 100%;
            margin: 0 0 10px 0;
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

export {AskQueryBox, PopUpModalBox}