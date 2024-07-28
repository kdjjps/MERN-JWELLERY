import styled from 'styled-components'

const HelpBox = styled.div`
   
    div{
        padding: 5px;
        position: fixed;
        right: 20px;
        width: 50px;
        height: 50px; 
        background: #1e2e4c;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: bottom 0.3s;
        cursor: pointer;
        color: #de9d05;
        font-size: 1.2rem;
        font-weight: bold;
        border: 2px solid #1e2e4c;
        z-index: 9000;

        #help{
            display: ${(props)=>props.status ? 'none' : 'block'};
        }

        #cross-icon{
            display: ${(props)=>props.status ? 'block' : 'none'};
        }

        img{
            width: 100%;
        }

        :nth-child(4){
            bottom: 30px;
        }

        :nth-child(3){
            bottom:${(props)=>props.status ? '90px' : '30px'};
        }

        :nth-child(2){
            bottom: ${(props)=>props.status ? '150px' : '30px'};
        }

        :nth-child(1){
            bottom: ${(props)=>props.status ? '210px' : '30px'};
        }
    }
`

export default HelpBox