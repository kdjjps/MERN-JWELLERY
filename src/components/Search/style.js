import styled from 'styled-components'

const SearchPageBox = styled.div`

    min-height: 500px;
    color: rgb(30,46,76);

    section.top-bar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid rgba(0,0,0,0.1);
        padding: 10px 20px;

        input{
            padding: 8px;
            margin-right: 5px;
        }

        label{
            font-size: 1.4rem;
        }
    }

    div.filter-title{
        display: flex;
    }

    .radio-button-container{
        display: flex;

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;

            input{
                margin-right: 5px;
            }

            label{
                font-size: 1.4rem;
            }
        }
    }

    div.page-mover{
        display: flex;
        justify-content: space-between;
        height: 40px;
    }

    section.listings-box{
        padding: 10px;
    }

    div.listings{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    div.search-filters{
        display: flex;
        justify-content: space-between;
        align-items: center;
        // border-bottom: 1px solid rgba(0,0,0,0.1);
        font-size: 1.4rem;

         ul li{
             position: relative;
             display: inline-block;
             list-style: none;
             padding: 10px;
             cursor: pointer;
        
            div.dropdown-content{
                min-width: 300px;
                position: absolute;
                display: none;
                top: 100%;
                left: 0;
                padding: 10px;
                background: yellow;
            }

         }

         li:hover div.dropdown-content{
            display: block;
        }
    }
    
`

const SearchGridItemBox = styled.div`
    
    height: 100%;
    padding: 30px 10px;
    cursor: pointer;

    img{
        width: 100%;
        margin-bottom: 20px;
    }

    p{
        text-align: center;
    }

`

export {
    SearchPageBox,
    SearchGridItemBox
}