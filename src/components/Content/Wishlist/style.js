import styled from 'styled-components'

const WishListBox = styled.div`
    min-height: 60vh;
    font-family: 'Nunito Sans', sans-serif;
    color: rgb(30,46,76);

    section.wishlist-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 10px; 
        margin-top: 30px;
    }

    h2{
        font-size: 2.2rem;
        margin-bottom: 10px;
    }

    p{
        margin-bottom: 10px;
    }

    button{
        padding: 10px;
        width: 120px;
    }
    
    @media(max-width: 460px){

        section.wishlist-container{
            grid-template-columns: 1fr;
            padding: 10px;
        }

    }

`

const WishlistItemBox = styled.div`
color: rgb(30,46,76);
    margin-bottom: 10px;

    div.item{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 6px;

        div.item-top-bar{
            display: flex;
            justify-content: space-between; 
            align-items: center; 
            border-bottom: 1px solid rgba(30,46,76,0.3);
            padding: 5px;
        }

        p.category{
            letter-spacing: 1px;
            font-style: italic;
            font-size: 1rem;
        }

        div.buttons-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;

            button{
                width: fit-content;
            }

            button:nth-child(1){    
                background: white;
                border: 1px solid rgb(30,46,76);
                color: rgb(30,46,76);
            }

            button:nth-child(2){    
                background: rgb(30,46,76);
                border: 1px solid rgb(30,46,76);
            }
        }
    }

    div.item-holder{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 250px;
    }

    div.image-holder{
        width: 150px;
        height: 150px;
        display: flex;
        position: relative;
        margin-bottom: 20px;

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
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-transform: capitalize;

        h2{
            font-size: 1.5rem;
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

export {WishListBox, WishlistItemBox}