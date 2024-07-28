import styled from 'styled-components'

const HamburgerBox = styled.div`
    display: none;
    width: 25px;
    height: 18px;

    div{
        width: 100%;
        height: 2px;
        background-color: rgba(218,165,32);
        transform-origin: 1px;
        transition: all 0.3s linear;
    }

    @media (max-width: 1230px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        div:nth-child(1) {
            transform: ${(props) => props.status ? 'rotate(45deg)' : 'rotate(0)'};
          }

        div:nth-child(2) {
            transform: ${(props) => props.status ? 'translateX(0)' : 'translateX(0)'};
            opacity: ${(props) => props.status ? 0 : 1};
          }
          
        div:nth-child(3) {
            transform: ${(props) => props.status ? 'rotate(-45deg)' : 'rotate(0)'};
          }
    }
`

export default HamburgerBox
