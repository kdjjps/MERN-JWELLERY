import styled from 'styled-components'

const CreateJewelryBox = styled.div`

    .about-listing-page{
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: rgba(30,46,76);

        h1.page-title{
            font-size: 36px;
            letter-spacing: .05em;
            line-height: 1.2;
            text-transform: capitalize;
            margin: 0 auto;
            margin-bottom: 15px;
            font-weight: normal;
            text-align: center;
        }

        p.page-subtitle{
            margin-bottom: 15px;
            text-align: center;
        }
    }

    @media (max-width:550px){
        width: 100%;
        margin: none;
    }
`

export default CreateJewelryBox