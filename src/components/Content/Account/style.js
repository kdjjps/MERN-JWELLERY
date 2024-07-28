import styled, {css, keyframes} from 'styled-components'

const LoginPageBox = styled.div`

    min-height: 60vh;
    display: flex;
    justify-content: center;
    color: rgb(30,46,76);
    letter-spacing: 1px;
    font-family: 'Nunito Sans', sans-serif;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;

    @media(max-width: 1030px){
        flex-direction: column;
        padding: 20px;
        text-align: center;
        align-items: space-between;
    }
`

const FormContainer = styled.div`
    width: fit-content;
    padding: 20px;

    p.form-title{
        font-size: 2.4rem;
        font-weight: bold;
        color:rgba(30,46,76);
        text-transform: uppercase;
    }

    p{
        margin-bottom: 15px;
        color: rgba(30,46,76,0.7);
        font-size: 1.4rem;
    }

    form{
        width: 100%;
    }

    form#login-form{
        position: relative;

        p.error-displayer{
            display: ${(props) => props.errorStatus ? 'block' : 'none'};
            padding: 2px;
        }
    }

    form#signup-form{
        position: relative;

        p.error-displayer{
            display: ${(props) => props.errorStatus ? 'block' : 'none'};
            padding: 2px;
        }

        p.validator-displayer{
            display: ${(props) => props.validatorStatus ? 'block' : 'none'};
            padding: 2px;
        }
    }

    div.seperator{
        position: relative;
        height: 1px;
        width: 100%;
        background: #adadad;
        text-transform: uppercase;
        margin: 30px 0px;

        div.seperator-text{
            font-size: 1.2rem;
            color: #adadad;
            position: absolute;
            top: -8px;
            left: 40%;
            background: #ffffff;
            padding: 0px 20px;
        }
    }

    input{
        width: 100%;
        padding: 8px;
        margin: 8px 0px;
    }

    button{
        width: 100%;
    }

    div.bottom-row{
        margin-top: 10px;
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        
        a{
            text-decoration: none;
            font-size: 1.4rem;
        }

    }

    div.button-container{
        background: rgb(30,46,76);
    }

    div#lgc-captcha{
        margin-bottom: 8px;
    }

    @media(max-width: 1030px){
        width: 100%;
        padding: 5px;

        form{
            width: 100%;
        }

        form#signup-form{
            padding-top: 60px;
        }
    }
`

const hide = keyframes`
        0%{
            bottom: 0;
            opacity: 0;
        }
        20%{
            bottom: 40px;
            opacity: 0.5;
        }
        40%{
            bottom: 80px;
            opacity: 1;
        }
        60%{
            bottom: 80px;
            opacity: 1;
        }
        80%{
            bottom: 120px;
            opacity: 0.5;
        }
        100%{
            bottom: 180px;
            opacity: 0;
        }
`

const PopUpModalBox = styled.div`
    width: fit-content;
    position: ${(props) => props.status  ? `fixed`  : 'none'};
    display: ${(props) => props.status  ? `block`  : 'none'};
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

export {
    LoginPageBox,
    FormContainer,
    PopUpModalBox
}