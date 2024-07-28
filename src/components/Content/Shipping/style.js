import styled from "styled-components";

const ShippingPageBox = styled.div`
  width: 100%;
  z-index: 2000;
  color: rgb(30, 46, 76);
  margin: auto;
  padding: 20px;

  div.seperator {
    position: relative;
    height: auto;
    width: 1px;
    background: #adadad;
    text-transform: uppercase;
    margin: 30px 0px;

    div.seperator-text {
      font-size: 1.6rem;
      color: #adadad;
      position: absolute;
      top: 45%;
      left: -16px;
      background: rgb(248, 250, 255);
      padding: 0px 5px;
    }
  }

  section.login-form-container {
    display: flex;
    padding: 20px;

    div.oauth-login-container {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    div.bottom-row {
      width: 300px;
      display: flex;
      justify-content: space-between;
      margin: 20px auto 0px auto;
    }

    form#login-form {
      width: 50%;

      p {
        margin-bottom: 10px;
      }

      div.input-container {
        margin-bottom: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input {
          width: 300px;
          padding: 8px;
        }
      }
    }
  }

  section.shipping-form-box {
    display: flex;
    justify-content: space-between;
    min-height: 70vh;
    width: 100%;
    margin: auto;

    .content-column {
      width: 48%;

      section {
        margin-bottom: 30px;
        background: rgb(248, 250, 255);
        padding: 20px;
      }

      section#billing-address-form {
        display: ${(props) => (props.addressDifferent ? "block" : "none")};
      }
    }

    h2 {
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 5px;
    }

    .input-row {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }

    #shipping-buttons-container {
      display: ${(props) => (props.addressDifferent ? "none" : "flex")};
      justify-content: space-between;

      button {
        width: 100px;
      }
    }

    #billing-buttons-container {
      display: ${(props) => (props.addressDifferent ? "flex" : "none")};
      justify-content: space-between;
      margin-top: 10px;

      button {
        width: 100px;
      }
    }

    .error-message {
      font-size: 1rem;
      letter-spacing: 1px;
      color: #8b0000;
      font-weight: bold;
      height: 20px;
    }

    .shipping-input-container {
      display: flex;
      flex-direction: column;

      input {
        padding: 8px;
        margin-top: 7px;
      }

      select {
        padding: 8px;
        margin-top: 7px;
      }
    }

    .payment-input-container {
      display: flex;
      align-item: center;
      margin-bottom: 8px;

      input {
        margin-right: 5px;
      }
    }

    .input-label {
      font-size: 1.3rem;
      color: rgba(30, 46, 76, 0.7);
    }

    .full-width {
      width: 100%;
    }

    .half-width {
      width: 48%;
    }

    p {
      font-size: 1.3rem;
      color: rgba(30, 46, 76, 0.8);
      line-height: 2.2rem;
    }

    .items-displayer {
      .heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .items-container {
        max-height: 240px;
        overflow-y: scroll;
      }
    }
  }

  .logo-container {
    height: 15vh;
    background-color: rgb(248, 250, 255);
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      text-decoration: none;
      font-size: 1.4rem;
      color: rgb(30, 46, 76);
      font-weight: bold;
    }

    img {
      width: 90px;
    }
  }

  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div.seperator {
      position: relative;
      height: 1px;
      width: 100%;

      div.seperator-text {
        left: 46%;
        top: -6px;
      }
    }

    section.login-form-container {
      flex-direction: column;
      width: 100%;

      div.oauth-login-container {
        width: 100%;
        justify-content: center;
      }

      div.bottom-row {
        width: 100%;
      }

      form#login-form {
        width: 100%;
      }
    }

    section.shipping-form-box {
      width: 100%;
      flex-direction: column;
      align-items: center;

      .content-column {
        width: 100%;
      }
    }
  }
`;

export default ShippingPageBox;
