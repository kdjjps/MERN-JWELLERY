import styled from 'styled-components'

const BreadCrumbBox = styled.div`
    display: flex; 
    width: 1300px;
    margin: auto;
    padding: 10px;
    color: rgb(30,46,76); 
    text-transform: capitalize; 
    letter-spacing: 1px;
    font-size: 1.4rem;
    overflow-x: hidden;

    @media(max-width: 1300px){
        font-size: 1.2rem;
        width: 100%;
    }

    @media(max-width: 500px){
        padding: 10px 4px;
        font-size: 0.8rem;
        width: 100%;
    }
`

export default BreadCrumbBox