import styled from 'styled-components'

const BespokeHomepageBox = styled.div`

    width: 100%
    height: auto;
    color: rgba(30,46,76);
    margin: 0px auto;

    h2{
        font-size: 2.5rem;
        text-align: center;
        text-transform: uppercase;
    }

    div.category-row{
        width: fit-content;
        display: flex;
        margin-bottom: 20px;
    }

    div.row-box{
        width: 50%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        div.category-description-box{
            padding: 10px;
        }
    }

    div.image-holder{
        width: 50%;
        display: flex;
        padding: 10px;

        img{
           width: 100%;
           height: auto;
        }
    }

    div.deco-line{
        width: 100px;
        height: 3px;
        background: rgb(30,46,76);
        margin-bottom: 20px;
    }

    p{
        margin-bottom: 20px;
    }

    p.step{
        font-size: 1.6rem;
        text-transform: uppercase;
    }

    p.step-title{
        font-size: 3.2rem;
    }

    p.step-description{
        font-size: 1.6rem;
        letter-spacing: 0.5px;
        line-height: 22px;
    }

    a{
        background: #de9d05;
        color: rgb(30,46,76);
        padding: 10px;
        text-decoration: none;
        font-size: 1.8rem;
    }

    div.button-container{
        text-align: center;
        margin: 40px 0px;

        button{
            width: 200px;
            padding: 20px;
        }
    }

    @media(max-width: 660px){

        padding: 5px;

        h2{
            font-size: 6vw;
        }

        div.category-row{
            width: 100%;
            margin-bottom: 5px;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-areas:
                "row-box"
                "image-holder";
        }

        div.row-box{
            width: 100%;
            grid-area: row-box;

            div.category-description-box{
                height: 100%;
            }
        }

        p{
            margin-bottom: 10px;
        }
    
        p.step{
            font-size: 1.4rem;
            text-transform: uppercase;
        }
    
        p.step-title{
            font-size: 2.4rem;
        }
    
        p.step-description{
            font-size: 1.4rem;
            letter-spacing: 0.5px;
            line-height: 20px;
            text-align: justify;
        }

        div.image-holder{
            width: 100%;
            grid-area: image-holder;
        }
    }
`

const BespokeModalBox = styled.div`
    width: 100%;
    height: 100vh;
    display: ${(props) => props.status  ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    color: rgb(30,46,76);
    z-index: 1000;

    div.modal-container{
        width: 100%;
        height: 100%;
        background: rgba(30,46,76, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section{
        width: 800px;
        height: 550px;
        background: rgb(238,238,238);
        position: relative;
    }

    div.bespoke-headline{
        h2{
            width: fit-content;
            margin: 20px auto 5px auto;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 2.4rem;
        }
    
        p{
            width: fit-content;
            margin: 5px auto 10px auto;
            text-transform: uppercase;
            letter-spacing: 1px; 
        }
    }

    form{
        padding: 20px;
        height: auto;
    }

    div.row{
        display: flex;

        div{
            width: 50%;
            padding: 10px;
            display: flex;
            flex-direction: column;
        }

        label{
            margin-bottom: 8px;
            font-size: 1.6rem;
        }

        input, textarea{
            padding: 8px;
            border: none;
            border-radius: 2px;
        }
    }

    div.button-container{
        display: flex; 
        justify-content: space-between; 
        padding: 10px;
    }

    input[type="checkbox"]{
        width: 35px;
        height: 35px;
        cursor: pointer;
        margin-right: 15px;
      }

      @media(max-width: 600px){
          overflow: scroll;

          section{
            width: 100%;
            height: 100%;
            overflow: scroll;
          }

          div.row{
              flex-direction: column;

              div{
                  width: 100%;
              }
          }

          div.button-container{
            flex-direction: column;

            button{
                margin-top: 20px;
            }
          }
      }
    
`

export {
    BespokeHomepageBox,
    BespokeModalBox
}