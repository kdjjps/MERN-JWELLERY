import styled from "styled-components";

const HeaderBox = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1000;
`;
const HeaderTopBox = styled.div`
  height: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-bottom: 1px solid #e4e5e5;

  section {
    width: 455px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HeaderBottomBox = styled.div`
  position: relative;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: #ffffff;
  box-sizing: border-box;

  @media (max-width: 930px) {
    display: none;
  }
`;

const QuickHelpBox = styled.div`
  width: fit-content;
  padding: 1.3rem;
  box-sizing: border-box;

  div {
    display: flex;
    align-items: center;

    p {
      font-size: 1.2rem;
      color: rgba(30, 46, 76);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bolder;
    }
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

const CurrencyLookerBox = styled.div`
  position: relative;
  width: 90px;
  height: 30px;
  color: rgb(30, 46, 76);

  #responsive-currency-changer {
    display: none;
  }

  ul {
    position: absolute;
    z-index: 10;
    background: #fff;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 12px;
    letter-spacing: normal;
    list-style-type: none;
  }

  ul li:first-child:after {
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 3px solid #656565;
    position: absolute;
    top: 12px;
    right: 3px;
    content: "";
  }

  ul:hover {
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }

  ul li:first-child {
    display: block;
  }

  li {
    padding: 6px;
    display: ${(props) => (props.expandListStatus ? "block" : "none")};
    cursor: pointer;
    letter-spacing: 1px;
  }

  li:hover {
    background: rgba(30, 46, 76, 0.1);
  }

  li > span,
  li > img {
    display: inline-block;
    vertical-align: middle;
    line-height: 16px;
    background-repeat: no-repeat;
  }

  .flag {
    width: 35px;
    height: auto;
    margin-right: 4px;
  }
`;

const HamburgerBox = styled.div`
  div {
    width: 22px;
    height: 1.5px;
    background-color: white;
    margin-top: 6px;
    margin-bottom: 6px;
  }
`;

const RightSideIconsBox = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 20px;
    position: relative;

    #user-account-icon {
      display: flex;
      align-items: center;
      padding: 5px;

      div {
        font-size: 1.6rem;
        margin-right: 10px;
      }
    }

    #account-dropdown-content-before-login {
      display: none;
      padding: 10px;
      position: absolute;
      width: 350px;
      height: auto;
      top: 100%;
      right: -120px;
      z-index: 999;
      font-family: "Nunito Sans", sans-serif;
      background: white;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      cursor: pointer;

      section {
        width: 300px;
        display: flex;
        flex-direction: column;
      }

      .create-account {
        padding: 10px;
        background: rgb(30, 46, 76);
        color: white;
        margin: 10px 0px;
        width: 100%;
        font-size: 1.33rem;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
      }

      button {
        width: 100%;
        margin: 10px 0;
      }

      input {
        width: 100%;
        height: 40px;
        margin: 10px 0;
        padding: 5px;
      }

      #signin-form {
        padding-top: 15px;
        position: relative;

        a {
          font-weight: bold;
        }
      }

      div.new-element {
        padding: 20px;

        h1 {
          font-size: 2.5rem;
          color: rgb(30, 46, 76);
          text-transform: none;
        }

        p {
          margin: 20px 0px;
          color: rgb(30, 46, 76);
        }

        a {
          display: inline-block;
          text-align: center;
          border-radius: 5px;
          font-size: 1.5rem;
          margin-right: 20px;
          font-weight: bold;
          margin-top: 10px;
          width: 100px;
          height: 36px;
          line-height: 36px;
        }

        a:nth-child(1) {
          color: white;
          background: linear-gradient(to right, #de57e5, #8863fb);
        }

        a:nth-child(2) {
          color: rgb(30, 46, 76);
          border: 1px solid rgb(30, 46, 76);
        }
      }
    }

    #account-dropdown-content {
      display: none;
      padding: 10px;
      position: absolute;
      width: 100%;
      height: auto;
      top: 100%;
      // right: -120px;
      z-index: 999;
      font-family: "Nunito Sans", sans-serif;
      background: white;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

      .logged-in-drop-content {
        width: 100%;
        display: flex;
        flex-direction: column;

        p {
          color: rgb(30, 46, 76);
          cursor: pointer;
          width: 100%;
          padding: 5px;
          text-align: center;

          :hover {
            background: rgba(30, 46, 76, 0.3);
          }
        }

        a {
          width: 100%;
          font-size: 1.5rem;
          padding: 5px;
          text-align: center;

          :hover {
            background: rgba(30, 46, 76, 0.3);
          }
        }
      }
    }

    :hover #account-dropdown-content-before-login {
      display: block;
    }

    :hover #account-dropdown-content {
      display: block;
    }
  }

  a {
    text-decoration: none;
    color: rgba(30, 46, 76);

    .number-displayer {
      width: 20px;
      height: 20px;
      background: #de9d05;
      // background: rgb(212, 196, 55);
      border-radius: 50%;
      position: absolute;
      top: -12px;
      right: -12px;
      font-size: 1.2rem;
      font-weight: bold;
      font-family: "Nunito Sans", sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }

  @media (max-width: 930px) {
    a {
      margin-right: 0px;
    }

    #user-account-icon {
      display: none;
    }

    // #wishlist-icon{
    //     display: none;
    // }

    .currency-handler {
      display: none;
    }
  }
`;

const LogoBox = styled.div`
  a {
    color: rgb(22, 35, 69, 0.9);
    font-weight: bold;
    text-decoration: none;
    padding: 1rem;
  }

  #logo-2 {
    img {
      width: 115px;
      height: 115px;
    }
  }

  #logo-3 {
    display: none;
    position: absolute;
    left: 5px;
    top: 0;
    img {
      width: 100px;
    }
  }

  @media (max-width: 550px) {
    #logo-2 {
      img {
        width: 90px;
        height: 90px;
      }
    }
  }
`;

const NavbarBox = styled.div`
  width: 700px;
  height: 100%;
  font-family: "Nunito Sans", sans-serif;

  ul.nav-links {
    display: flex;
    justify-content: space-between;
    height: 100%;

    li {
      display: flex;
      text-decoration: none;
      align-items: center;
      font-size: 1.3rem;
      font-weight: bold;
      letter-spacing: 1px;
      cursor: pointer;

      a {
        text-decoration: none;
        color: rgb(30, 46, 76);
      }

      a.link-text {
        display: block;
        text-decoration: none;
        color: rgb(30, 46, 76);
        text-transform: uppercase;
      }
    }
  }

  .dropdown-content {
    padding: 2rem;
    display: none;
    position: absolute;
    background-color: white;
    width: 100%;
    top: 100%;
    left: 0;
    z-index: 1;
    font-family: "Nunito Sans", sans-serif;
    color: rgba(30, 46, 76);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .row {
    min-width: 900px;
    height: 100%;
    margin: auto;
    display: flex;
  }

  .column {
    width: calc(100% / 3);
    height: 100%;
    padding: 0 25px;

    img.learning-center-image {
      width: 60%;
    }

    a.column-title {
      display: block;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.2rem;
      letter-spacing: 2px;
      margin-bottom: 2rem;
    }
  }

  .engagement-menu-column {
    width: fit-content;
    height: 100%;
    padding: 0 25px;

    img.learning-center-image {
      width: 120px;
    }

    a.column-title {
      display: block;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.2rem;
      letter-spacing: 2px;
      margin-bottom: 2rem;
    }
  }

  .diamond-menu-column {
    width: fit-content;
    height: 100%;
    padding: 0 25px;

    img.learning-center-image {
      width: 120px;
    }

    a.column-title {
      display: block;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.2rem;
      letter-spacing: 2px;
      margin-bottom: 2rem;
    }
  }

  .gem-menu-column {
    width: fit-content;
    height: 100%;
    padding: 0 25px;

    img.learning-center-image {
      width: 120px;
    }

    a.column-title {
      display: block;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.2rem;
      letter-spacing: 2px;
      margin-bottom: 2rem;
    }
  }

  section.create-your-own {
    ul li {
      display: flex;
      margin-bottom: 10px;

      a {
        display: flex;
        align-items: center;

        :hover {
          color: rgba(30, 46, 76, 0.5);
        }

        p {
          font-size: 1.2rem;
        }
      }
    }

    img.nav-diamond-images {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  section.metal-section {
    ul li {
      a {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        :hover {
          color: rgba(30, 46, 76, 0.5);
        }

        p {
          font-size: 1.2rem;
        }

        div {
          width: 35px;
          height: 25px;
          border-radius: 5px;
          margin-right: 10px;
        }
      }
    }
  }

  section.shop-by-shape {
    ul li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      a {
        display: flex;
        align-items: center;

        :hover {
          color: rgba(30, 46, 76, 0.5);
        }

        p {
          font-size: 1.2rem;
        }
      }
    }

    img.nav-fancy-diamond-images {
      width: 20px;
      height: 20px;
      margin-right: 20px;
    }
  }

  section.diamond-section {
    ul li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      a {
        display: flex;
        align-items: center;

        :hover {
          color: rgba(30, 46, 76, 0.5);
        }

        p {
          font-size: 1.2rem;
        }
      }

      a.diamond-menu-link {
        width: 40%;
      }
    }

    img.nav-diamond-images {
      width: 20px;
      height: 20px;
      margin-right: 15px;
    }

    img.nav-fancy-diamond-images {
      width: 20px;
      height: 20px;
      margin-right: 15px;
    }

    img.nav-gemstone-image {
      width: 95px;
      height: 80px;
      padding: 2px;
    }
  }

  section.solitaire-section {
    ul li {
      margin-bottom: 10px;
      display: flex;
      align-items: flex-start;

      a {
        display: block;
        font-size: 1rem;
        margin-bottom: 5px;

        :hover {
          color: rgba(30, 46, 76, 0.5);
        }
      }

      p {
        margin: 3px 0px 10px 0px;
        font-size: 1.2rem;
      }
    }

    img.nav-diamond-images {
      width: 20px;
      height: 20px;
      margin-right: 15px;
    }
  }

  section.gemstone-section {
    ul li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      a {
        display: flex;
        align-items: center;

        :hover {
          color: rgba(30, 46, 76, 0.5);
        }

        p {
          font-size: 1.1rem;
        }
      }

      a.diamond-menu-link {
        width: 40%;
      }
    }

    img.nav-gemstone-image {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }

  section.education-section {
    ul li {
      a {
        margin-bottom: 1.2rem;
        font-size: 1.3rem;

        :hover {
          color: rgba(30, 46, 76, 0.5);
        }

        p {
          font-size: 1.2rem;
        }
      }
    }
  }

  section.jewelry-section {
    ul li {
      display: flex;
      justify-content: space-between;

      a {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        :hover {
          color: rgba(30, 46, 76, 0.5);
        }

        p {
          font-size: 1.2rem;
        }
      }
    }

    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  section .category-box {
    width: 250px;
    height: 315px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    margin: 0.5rem;

    img {
      width: 80%;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        text-decoration: none;
        margin: 10px 0px;
        width: 100%;
        padding: 0.9rem;
        background-color: rgba(30, 46, 76);
        color: #ffffff;
        font-size: 1.1rem;
        border-radius: 2px;
        text-align: center;

        :hover {
          background: rgba(30, 46, 76, 0.5);
        }
      }
    }
  }

  .dropdown-link:hover,
  .dropdown-link.selected {
    border-bottom: 3px solid #de9d05;
  }

  .dropdown-link:hover .dropdown-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(22, 35, 69, 0.9);

  input {
    padding: 8px 0px;
    background: none;
    outline: none;
    border: none;
  }

  div {
    height: 18px;
  }

  @media (max-width: 1230px) {
    display: none;
  }
`;

const StickyHeaderBox = styled.div`
  position: sticky;
  top: 0;
  height: 95px;
  z-index: 100;
  background: white;
  display: ${(props) => (props.stickyStatus ? "flex" : "none")};
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1230px) {
    display: none;
  }
`;

export {
  HeaderBox,
  HeaderTopBox,
  HeaderBottomBox,
  QuickHelpBox,
  CurrencyLookerBox,
  LogoBox,
  NavbarBox,
  HamburgerBox,
  RightSideIconsBox,
  SearchBox,
  StickyHeaderBox,
};
