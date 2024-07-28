import styled from 'styled-components'

const FAQHomepageBox = styled.div`
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

    section.faq-content{
        width: 900px;
        padding: 15px;
    }

    div.question-container{
        display: flex;
    }

`

const FAQQuestionsBox = styled.div`

    p.faq-title{
        font-size: 1.8rem;
        text-transform: capitalize;
        margin-bottom: 20px;
    }

    div.drop-content-parent{
        margin-bottom: 10px;
    }

    div.question-container{
        display: flex;
        align-items: center;
        
        p{
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

    section.drop-content{
        border-bottom: 1px solid rgba(30,46,76,0.2);
        font-size: 1.5rem;
        padding: 10px 15px;
        line-height: 1.2;

        ol{
            margin-top: 5px;
            padding: 10px;
        }

        ol li{
            font-style: italic;
        }
    }

`

export {
    FAQHomepageBox,
    FAQQuestionsBox
    }