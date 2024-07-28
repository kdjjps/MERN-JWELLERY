import styled from 'styled-components'

const CartBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: rgb(30,46,76);
    width: 80%;
    margin: auto;
    
    #checkout-box{
        width: 300px;
        height: fit-content;
        border: 1px solid gray;
        padding: 10px;
        text-align: center;

        div.row{
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        div.checkout-button{
            margin-bottom: 10px;
            width: 100%;
            padding: 10px;
            background: rgb(30,46,76);
            border-radius: 4px;

            a{
                font-size: 1.5rem;
                color: #ffffff;
                text-transform: uppercase;
                font-weight: bold;
                text-decoration: none;
            }
            
        }


        div.paypal-button{
            margin-bottom: 10px;

            button{
                width: 100%;
                font-size: 1.5rem;
                height: 42px;
                color: #ffffff;
                text-transform: uppercase;
                font-weight: bold;
                background: #ebebeb url('https://css.brilliantearth.com/static/img/icon/paypal.png') no-repeat center;
            }
        }

        div.payment-graphic{
            text-align: left;

            p{
                font-size: 1.2rem;
                margin: 20px 0px 3px 3px;
            }
            
            img{
                width: 100%;
            }
        }
    }

    .cart-items-holder{
        width: 60%;
        height: 100%;
    }

  
    @media(max-width: 1025px){
        flex-direction: column;
        width: 100%;

        .cart-items-holder{
            width: 100%;
        }

        #checkout-box{
            width: 100%;
        }
    }

`

const CartItemBox = styled.div`
    color: rgb(30,46,76);
    margin-bottom: 10px;

    div.item{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 6px;

        p.category{
            margin-bottom: 5px;
            letter-spacing: 1px;
            font-style: italic;
            font-size: 1rem;
        }

        div.buttons-container{
            display: flex;
            align-items: center;

            p{
                font-size: 1.0rem;
                text-transform: uppercase;
                color: rgb(30,46,76);
                cursor: pointer;
                letter-spacing: 0.05rem;
            }

            div.seperator{
                width: 1px;
                height: 14px;
                background: rgb(30,46,76);
                margin: 0px 10px;
            }
        }
    }

    div.item-holder{
        display: flex;
        justify-content: space-between;
    }

    div.image-holder{
        width: 120px;
        height 120px;
        display: flex;
        position: relative;

        p{
            margin: 0px 5px;
            font-size: 1.8rem;
            font-weight: bold;
        }

        img{
            width: 100%;
            height: 100%;
        }

        img.stone-image{
            position: absolute;
            top: 0;
            left: 0;
            width: ${(props) => props.stoneImageStatus ? '120px' : '40px'};
            height: ${(props) => props.stoneImageStatus ? '120px' : '40px'};
            z-index: ${(props) => props.stoneImageStatus ? '1' : '2'};
        }

        img.jewelry-image{
            position: absolute;
            top: 0;
            left: 0;
            width: ${(props) => props.jewelryImageStatus ? '120px' : '40px'};
            height: ${(props) => props.jewelryImageStatus ? '120px' : '40px'};
            z-index: ${(props) => props.jewelryImageStatus ? '1' : '2'};
        }
    }

    div.details-holder{
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-transform: capitalize;

        h2{
            font-size: 1.5rem;
            text-transform: capitalize;
        }    

        .item-price{
            font-size: 2.5rem;
            margin-top: 20px;
        }
    }

    @media(max-width: 460px){

        div.details-holder{
            
    
            h2{
                font-size: 1.1rem;
            } 
    
            .item-price{
                font-size: 2rem;
                margin-top: 20px;
            }
        }

        
    }

`

export {CartBox, CartItemBox}