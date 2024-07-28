import styled from 'styled-components'

const AboutUsHomepageBox = styled.div`
    
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

    section.about-us-content{
        width: 900px;
        padding: 15px;
    }

    div.question-container{
        display: flex;
    }

`

const AboutUsContentBox = styled.div`
    letter-spacing: 1px;
    line-height: 1.3;

    p.title{
        font-size: 1.8rem;
        text-transform: capitalize;
        margin-bottom: 20px;
        font-weight: bold;
    }

    p.note{
        font-style: italic;
        margin: 20px 0px;
    }

    p.para-title{
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 5px;
    }

    p.para{
        margin-bottom: 30px;
    }

`

export {
    AboutUsHomepageBox,
    AboutUsContentBox
}