import styled from "styled-components";

const PalmistryBox = styled.div`
  padding: 2%;

  section {
    width: 100%;
    padding: 2% 0;
    margin: 2% 0;

    h2 {
      text-align: center;
      margin-bottom: 2%;
      color: rgba(30, 46, 76);
      text-transform: capitalize;
      padding: 2%;
    }

    .astro-layout {
      display: flex;
      flex-direction: column;
    }

    .astro-content-form {
      width: 100%;
    }

    .astro-content-testimony {
      width: 100%;
    }

    form {
      background-color: rgb(254, 251, 242);
      padding: 2%;
      border-radius: 5px;
      border: 2px solid black;
    }

    .row {
      width: 90%;
      display: flex;
      flex-direction: column;
      margin: 2% 0;
      justify-content: space-between;
      padding: 2%;

      button {
        width: 100%;
        background-color: rgba(30, 46, 76);
        color: white;
      }

      .col {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .input-container {
          width: 100%;
          margin-bottom: 2%;
        }

        div.gender-input-container {
          display: flex;

          div.input-box {
            padding: 2%;
            border-radius: 2px;
            border: 1px solid #ddd;
            font-size: 2rem;
            margin-right: 10px;
            width: 120px;
            cursor: pointer;
            font-weight: bold;
            display: flex;
            align-items: center;
          }

          div.input-box:nth-child(1) {
            background: ${(props) =>
              props.gender === "male" ? "rgb(30,46,76)" : "none"};
            color: ${(props) =>
              props.gender === "male" ? "white" : "rgb(30,46,76)"};
          }

          div.input-box:nth-child(2) {
            background: ${(props) =>
              props.gender === "female" ? "rgb(30,46,76)" : "none"};
            color: ${(props) =>
              props.gender === "female" ? "white" : "rgb(30,46,76)"};
          }

          .seperator {
            width: 2px;
            height: 15px;
            margin: 0 2%;
            background: ${(props) =>
              props.gender === "male" || props.gender === "female"
                ? "rgba(255,255,255,0.7)"
                : "rgba(30,46,76,0.5)"};
          }
        }

        .half-input-container,
        .small-input-container {
          width: 48%;
        }

        label {
          display: block;
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 2%;
        }

        input,
        select,
        textarea {
          width: 100%;
          height: 40px;
          padding: 2%;
          border-radius: 5px;
          outline: none;
          border: 1px solid #ddd;
          margin-bottom: 2%;
        }
      }

      .full-col {
        width: 100%;

        label {
          display: block;
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 1%;
        }

        .input-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        textarea {
          width: 100%;
          height: 120px;
          padding: 2%;
          border-radius: 5px;
          outline: none;
          border: 1px solid #ddd;
        }
      }
    }
  }

  .note {
    padding: 2%;
    font-size: 1.2rem;
  }

  section#payment-section {
    .payment-box {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    .payment-content-holder {
      width: 100%;
      padding: 2%;
    }

    .seperator {
      width: 100%;
      height: 2px;
      background: rgba(30, 46, 76, 0.2);
      margin-bottom: 2%;
    }

    .input-container {
      display: flex;
      justify-content: center;
    }

    .payment-input-container {
      margin-bottom: 2%;

      input {
        margin-right: 2%;
      }

      label {
        font-size: 1.4rem;
      }
    }

    .payment-button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.6rem;
      font-weight: bold;
      color: rgb(30, 46, 76);
    }
  }

  section.about-astro-consultation {
    border: 1px solid rgb(30, 46, 76);
    border-radius: 10px;
    padding: 2%;

    div.astro-content {
      padding: 2%;
      margin-bottom: 2%;
      color: rgb(30, 46, 76);
    }

    h2 {
      font-size: 1.4rem;
      background: rgb(30, 46, 76);
      color: #ffffff;
      margin: -2% -2% 2% -2%;
      border-radius: 10px 10px 0 0;
      padding: 2%;
    }

    h1 {
      font-size: 1.2rem;
      margin-bottom: 2%;
    }

    p {
      margin-bottom: 2%;
      text-transform: none;
    }

    ol {
      margin: 2% 2%;
    }

    ol li {
      font-size: 1rem;
      margin-bottom: 1%;
    }
  }

  @media (max-width: 1300px) {
    section .row {
      padding: 0 2%;
    }
  }

  @media (max-width: 990px) {
    padding: 1%;
    width: 100%;

    section .row .col {
      label {
        font-size: 1.2rem;
      }

      .input-container {
        padding: 0 2%;
      }

      .small-input-container {
        width: 100%;
        padding: 0 2%;
      }
    }

    section#payment-section {
      .payment-box {
        padding: 2%;
      }
    }
  }
`;

export { PalmistryBox };
