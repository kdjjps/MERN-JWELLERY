import styled from 'styled-components'

const ThankYouPageBox = styled.div`
    height: 500px;
    color: rgb(30,46,76);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;

    h1{
        font-size: 5.6rem;
        margin-bottom: 20px;
    }

    h2{
        margin-bottom: 40px;
    }

    section{
        display: flex;
        align-items: center;
        margin: 20px 0px;
        max-width: 600px;
        border: 2px dotted rgb(30,46,76);
        padding: 8px;
        border-radius: 8px;

        p{
            letter-spacing: 1px;
        }
        
        img{
            width: 60px;
            height: 60px;
            margin-right: 20px;
        }
    }
`

export default ThankYouPageBox