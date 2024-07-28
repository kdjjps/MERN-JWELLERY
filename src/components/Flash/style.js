import styled, {css, keyframes} from 'styled-components'

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

const FlashBox = styled.div`

    display: ${(props) => props.status ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 250px;
    height: 320px;
    border-radius: 2px;
    text-align: center;
    padding: 15px;  
    position : fixed;  
    top: 50%;
    left: 50%;
    background: white;
    color: rgb(30,46,76);
    transform: translate(-50%, -50%);
    z-index: 1111;
    font-size: 1.6rem;  
    font-weight: bold;  
    opacity: ${(props) => props.status ? 1 : 0};
    transition: opacity 0.4s linear, display 0.4s linear; 
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    
    button{
        background: rgb(222,157,5);
        color: white;
    }
`

export {
    FlashBox
}