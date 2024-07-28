import styled from "styled-components";

const SidebarBox = styled.div`
    display:none;
    width: 100%;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    z-index:1000;
    font-family: 'Nunito Sans', sans-serif;
    color: rgb(30,46,76);
    overflow-y: scroll;

    a{
        text-transform: uppercase;
        font-size:1.5rem;
        text-decoration: none;
    }

    div#empty-space{
        width: 15%;
        height: 100%;
        color: rgba(218,165,32);
        font-size: 2rem;
    }

    div.sidebar-content{
        position: relative;
        width: 85%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: rgb(30,46,76);
    }

    div.sidebar-top{
        color: white;
        padding: 10px;

        section{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0px;

            a{
                color: white;
                text-decoration: none;
            }

            div{
                display: flex;
                align-items: center;
            }

            .search-container {
                width: 100%;

                form{
                    width: 100%;
                    display: flex; 
                    margin-top: 12px;
                }

                input[type=text] {                                                                                                                                                                                                                                                                                                                                      
                    padding: 6px;
                    font-size: 16px;
                    border: none;
                    width: 100%;
                    border-radius: 2px 0px 0px 2px;
                }

                button {
                    padding: 6px 10px;
                    background: #ddd;
                    font-size: 16px;
                    border: none;
                    cursor: pointer;
                    border-radius: 0px 2px 2px 0px;
                }
            }
        }
    }

    div.links-container{  
        width: 100%; 
        margin-top: 10px;

        div.label-container{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 10px;

            p{
                text-transform: uppercase;
                color: #ffffff;
                font-size: 1.6rem;
            }

            a{
                color: #ffffff;
            }
        }

        div.drop-content-title{
            padding: 10px;
            font-size: 1.8rem;
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 1px;
        }

        ul{
            padding: 15px;

            a{
                display: flex;

                p{
                    color: rgb(30,46,76);
                }

                img{
                    width:20px;
                    height:20px;
                    margin-right: 1rem;
                }
            }
        }

        div.jewelry-builder-drop-content{
            padding: 15px;
            font-size: 1.4rem;

            a{
                text-transform: capitalize;
            }

        }

        .jewelry-row{
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        section.jewelry-section-links{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 10px;

            div{
                padding: 8px;
                
                a{
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    color: rgb(30,46,76);
                }

                img{
                    width: 20px;
                    height: 20px;
                    margin-right: 5px;
                }

                div{
                    a{
                        font-size: 1.4rem;
                        text-transform: none;
                        text-decoration: none;
                        color: rgb(30,46,76);
                        margin-left: 10px;
                        margin-bottom: 5px;
                    }
                }
            }
        }

        section.drop-content{
            background: rgb(248, 250, 255);
            overflow: hidden;
            color: rgb(30,46,76);
        }

        ul li{
            display: flex;
            justify-content: space-between;
            padding: 5px;

            a.half-width-link{
                width: 50%;
                display: flex;
                align-items: center;
            }

            p{
                font-size: 1.4rem;
            }
        }

        #engagement .drop-content{
            height: ${(props) =>
              props.engagementDropDownMenuStatus ? "100%" : "0px"};
            transition: height 0s ease;
            padding: ${(props) =>
                props.engagementDropDownMenuStatus ? "20px 0px" : "0px"};
        }

        #engagement .fa-angle-left{
            transform: ${(props) =>
              props.engagementDropDownMenuStatus ? "rotate(-90deg)" : "none"};
            transition: transform 0s ease;
        }

        #diamonds .drop-content{
            height: ${(props) =>
              props.diamondDropDownMenuStatus ? "100%" : "0px"};
            transition: height 0s ease;
            padding: ${(props) =>
                props.diamondDropDownMenuStatus ? "20px 0px" : "0px"};
        }

        #diamonds .fa-angle-left{
            transform: ${(props) =>
              props.diamondDropDownMenuStatus ? "rotate(-90deg)" : "none"};
            transition: transform 0s ease;
        }

        #gemstones .drop-content{
            height: ${(props) =>
              props.gemstonesDropDownMenuStatus ? "100%" : "0px"};
            transition: height 0s ease; 
            padding: ${(props) =>
                props.gemstonesDropDownMenuStatus ? "20px 0px" : "0px"};
        }

        #gemstones .fa-angle-left{
            transform: ${(props) =>
              props.gemstonesDropDownMenuStatus ? "rotate(-90deg)" : "none"};
            transition: transform 0s ease;
        }

        #solitaires .drop-content{
            height: ${(props) =>
              props.solitairesDropDownMenuStatus ? "100%" : "0px"};
            transition: height 0s ease;
            padding: ${(props) =>
                props.solitairesDropDownMenuStatus ? "20px 0px" : "0px"};
        }

        #solitaires .fa-angle-left{
            transform: ${(props) =>
              props.solitairesDropDownMenuStatus ? "rotate(-90deg)" : "none"};
            transition: transform 0s ease;
        }

        #jewelry .drop-content{
            height: ${(props) =>
              props.jewelryDropDownMenuStatus ? "100%" : "0px"};
            transition: height 0s ease;
            padding: ${(props) =>
                props.jewelryDropDownMenuStatus ? "20px 0px" : "0px"};
        }

        #jewelry .fa-angle-left{
            transform: ${(props) =>
              props.jewelryDropDownMenuStatus ? "rotate(-90deg)" : "none"};
            transition: transform 0s ease;
        }

        #education .drop-content{
            height: ${(props) =>
              props.educationDropDownMenuStatus ? "100%" : "0px"};
            transition: height 0s ease;
            padding: ${(props) =>
                props.educationDropDownMenuStatus ? "20px 0px" : "0px"};
        }

        #education .fa-angle-left{
            transform: ${(props) =>
              props.educationDropDownMenuStatus ? "rotate(-90deg)" : "none"};
            transition: transform 0s ease;
        }
    }

    .jewelry-builder-drop-content{

        section.solitaire-section{
            display: flex;
            align-items: center;
    
            p{
                text-align: center;
                margin: 3px 0px;
                font-size: 1.2rem;
                font-weight: bold;
            }
        
            img{
                width: 80px;
                height: auto;
                margin-right: 3px;
                border: 1px solid rgba(30,46,76,0.2);
            }
        }

        a{
            display: block;
            color: white;
            background: rgb(30,46,76);
            text-decoration: none;
            font-size: 1.3rem;
            width: 180px;
            padding: 2px;
            text-align: center;
            letter-spacing: 0.06rem;
        }
    }


    div.sidebar-footer{
        width: 100%:
        padding: 5px;
        background: rgb(30,46,76);

        p{
            text-align: center;
            font-size: 1.2rem;
            color: white;
            padding: 5px;
        }
    }

    @media (max-width: 1230px){
        display: flex;
        transform: ${(props) =>
          props.status ? "translateX(0)" : "translateX(-100%)"};
        transition: transform 0.2s ease-in-out;
    }
`;

export default SidebarBox;
