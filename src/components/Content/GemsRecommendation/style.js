import styled from 'styled-components'

const GemsRecommendationBox = styled.div`
    width: 70%;
    margin: auto;
    font-family: 'Open Sans';
    padding: 10px;

    section{
        width: 100%;
        padding: 20px 0px;
        background-color: rgb(248, 250, 255);
        margin: 20px 0px;

        h2{ 
            text-transform: uppercase;
            font-size: 2rem;
            text-align: center;
            margin-top: 20px;
            color: rgba(30,46,76);
        }
    
        h4{
            font-size: 1.2rem;
            text-align: center;
            margin-bottom: 20px;
            color: rgba(30,46,76);
        }

        .row{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 10px;

            button{
                width: 100%;
                background-color: rgba(30,46,76);
                color: white;
            }


            .col{
                width: 49%;
                display: flex;
                justify-content: space-between;

                .input-container{
                    width: 100%;
                }

                .small-input-container{
                    padding: 0px 5px;
                }

                label{
                    display: block;
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 4px;
                }

                input{
                    width: 100%;
                    height: 40px;
                    padding: 10px;
                    border-radius: 5px;
                    outline: none;
                    border: 1px solid grey;
                }

                select{
                    width: 100%;
                    height: 40px;
                    padding: 10px;
                    border-radius: 5px;
                    outline: none;
                    border: 1px solid grey;
                    background-color: white;
                }

               
            }
        }
    }

`

export default GemsRecommendationBox