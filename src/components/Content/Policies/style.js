import styled from 'styled-components'

const PoliciesHomepageBox = styled.div`
    
    display: flex;
    color: rgb(30,46,76);

    section.side-links{
        width: 300px;
        height: 500px;

        a{
            padding: 10px;
            margin-bottom: 5px;
            background: rgb(30,46,76);
            font-size: 1.6rem;
            color: #FFFFFF;
            text-decoration: none;
            display: block;
        }
    }

    section.policy-content{
        width: 900px;
        padding: 15px;
    }

    div.question-container{
        display: flex;
    }

`

const PolicyContentBox = styled.div`
    letter-spacing: 1px;
    line-height: 1.3;

    p.policy-title{
        font-size: 1.8rem;
        text-transform: capitalize;
        margin-bottom: 20px;
        font-weight: bold;
    }

    p.note{
        font-style: italic;
        margin: 20px 0px;
    }

    p.policy-para-title{
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 5px;
    }

    div.policy-para{
        margin-bottom: 30px;
        font-size: 1.5rem;

        ul{
            margin-top: 15px;
        }

        ul li{
            margin: 5px 0px;
            font-size: 1.4rem;
            font-style: italic;
        }
    }

    div.user-discretion{
                
        p.discretion{
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 20px;
        }

        p.ps{
            font-size: 1.2rem;
        }
    }

`


export {
    PoliciesHomepageBox,
    PolicyContentBox
}