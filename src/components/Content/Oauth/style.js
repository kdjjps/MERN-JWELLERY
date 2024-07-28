import styled from 'styled-components'

const OauthPageBox = styled.div`
    margin: 20px 0px;
    display: ${(props) => props.status ? 'flex' : 'block'};
    justify-content: space-between;
    text-align: ${(props) => props.status ? 'none' : 'center'};

    div.login-button-container{
        display: flex;
        border: 1px solid rgb(30,46,76);
        border-radius: 5px;
        width: ${(props) => props.status ? '45%' : '200px'};
        margin-bottom: ${(props) => props.status ? '0px' : '10px'};
        align-items: center;
        padding: 6px;
        cursor: pointer;
        text-decoration: none;

        img{
            width: 24px;
            height: 24px;
            margin-right: 15px;
        }

        p{
            margin: 0px;
        }
    }

`

export default OauthPageBox