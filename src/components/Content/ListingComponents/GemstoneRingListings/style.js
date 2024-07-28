import styled from "styled-components";

const GemSettingDetailsBox = styled.div`
  color: rgba(30, 46, 76);
  position: relative;

  .details-page-upperbody {
    padding: 10px;
    display: grid;
    justify-content: space-between;
    grid-template-areas: "big-displayer summary";
  }

  .gemstone-setting-big-media-displayer {
    width: 460px;
    margin-bottom: 10px;
    grid-area: big-displayer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gemstone-setting-big-media-displayer .media-holder {
    position: relative;
    width: 100%;
    height: 400px;

    video {
      width: 100%;
      height: 100%;
    }

    .left,
    .right {
      width: 100%;
    }

    .left {
      position: absolute;
      z-index: 2;
      height: 100%;
      display: flex;
      align-items: center;
      background: #ffffff;
    }

    .left > img {
      width: 100%;
      height: auto;
      pointer-events: none;
      border: 1px solid rgba(30, 46, 76, 0.4);
    }

    .left:hover {
      opacity: 0;
    }

    .right {
      overflow: hidden;
      height: 100%;
    }

    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      background-repeat: no-repeat;
      transform: scale(1.5);
    }
  }

  .summary-holder {
    display: flex;
    flex-direction: column;
    grid-area: summary;

    p.heading {
      font-size: 2.1rem;
      letter-spacing: 1px;
      text-transform: capitalize;
      font-weight: bold;
    }

    p.info {
      font-size: 1.5rem;
      margin: 10px 0px;
    }

    p.sku {
      font-style: italic;
    }

    p.price {
      font-style: italic;
      font-size: 2.4rem;
      padding: 10px 0px;
      border-top: 1px solid rgba(30, 46, 76, 0.6);
      border-bottom: 1px solid rgba(30, 46, 76, 0.6);
      margin: 15px 0px;
    }

    div.note {
      background-color: rgb(248, 250, 255);
      padding: 10px;
      font-size: 1.5rem;
      margin-bottom: 10px;
      font-weight: bold;
    }

    a {
      display: block;
      width: 100%;
      margin: 5px 0px;
      background: rgb(30, 46, 76);
      color: #ffffff;
      text-decoration: none;
      text-align: center;
      padding: 6px;
      font-size: 1.4rem;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 1px;
    }

    section.drop-selection {
      margin-bottom: 10px;

      select {
        width: 100%;
        padding: 5px;
      }

      p {
        margin-bottom: 6px;
        font-weight: bold;
      }

      #ring-selector {
        display: flex;
        justify-content: space-between;

        select {
          width: 48%;
        }
      }

      #gem-setting-metal-changer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 3px;
        grid-row-gap: 3px;

        button {
          font-size: 1.2rem;
          color: rgb(30, 46, 76);
          margin: 0px;
        }

        button:nth-child(1) {
          background: rgb(222, 222, 222);
          border: ${(props) =>
            props.metalStatus === 0
              ? "2px solid rgb(30,46,76)"
              : "2px solid white;"};
        }

        button:nth-child(2) {
          background: rgb(238, 189, 160);
          border: ${(props) =>
            props.metalStatus === 1
              ? "2px solid rgb(30,46,76)"
              : "2px solid white;"};
        }

        button:nth-child(3) {
          background: rgb(222, 222, 222);
          border: ${(props) =>
            props.metalStatus === 2
              ? "2px solid rgb(30,46,76)"
              : "2px solid white;"};
        }

        button:nth-child(4) {
          background: rgb(239, 217, 167);
          border: ${(props) =>
            props.metalStatus === 3
              ? "2px solid rgb(30,46,76)"
              : "2px solid white;"};
        }

        button:nth-child(5) {
          background: rgb(222, 222, 222);
          border: ${(props) =>
            props.metalStatus === 4
              ? "2px solid rgb(30,46,76)"
              : "2px solid white;"};
        }

        button:nth-child(6) {
          background: rgb(239, 217, 167);
          border: ${(props) =>
            props.metalStatus === 5
              ? "2px solid rgb(30,46,76)"
              : "2px solid white;"};
        }
      }
    }

    section.buttons-container {
      display: flex;

      button {
        width: 100%;
        margin-right: 10px;
      }

      div {
        width: 40px;
        height: 40px;
        border: 1px solid rgb(30, 46, 76);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;

        :hover {
          cursor: pointer;
        }

        .fa-heart {
          color: ${(props) =>
            props.wishlistStatus == false ? "#adaaad" : "rgb(30,46,76)"};
        }
      }
    }

    section.summary-footer {
      .social-sharing {
        font-size: 1.5rem;
        margin: 10px 0px;

        img {
          width: 40px;
          vertical-align: middle;
        }
      }
    }
  }

  .details-page-lowerbody {
    margin: 20px 0px;
    display: grid;
    grid-column-gap: 30px;
    grid-template-areas: "details-table small-usp" "details-table big-usp";
    grid-template-columns: 1fr 1fr;

    section.details-table {
      grid-area: details-table;
    }

    h3 {
      font-size: 2.4rem;
      letter-spacing: 1px;
      padding: 20px 20px 0 20px;
      background-color: rgb(248, 250, 255);
    }

    .top-row {
      display: flex;
      justify-content: space-between;
      padding: 20px 20px 0 20px;
      background-color: rgb(248, 250, 255);
    }

    .details-body {
      padding: 10px 10px 20px 10px;
      background-color: rgb(248, 250, 255);

      .data-row {
        display: flex;
        justify-content: space-between;
        margin: 0px 10px;
        padding: 10px 0px;
        border-bottom: 1px solid rgb(30, 46, 76);

        p:nth-child(1) {
          font-weight: bold;
        }
      }
    }
  }

  @media (max-width: 780px) {
    .gemstone-setting-big-media-displayer {
      width: 100%;
    }

    .summary {
      width: 100%;
    }

    .details-page-upperbody {
      width: 100%;
      grid-template-areas: "big-displayer" "summary";
    }

    .details-page-lowerbody {
      grid-template-areas: "small-usp" "details-table" "big-usp";
      grid-template-columns: 1fr;
      grid-row-gap: 10px;
      padding: 5px;

      .top-row {
        padding: 10px;

        p {
          font-size: 1.2rem;
        }
      }

      .diamond-details {
        flex-direction: column;
        padding: 10px;

        div.data-col:nth-child(1) {
          border-right: none;
        }

        div.data-col:nth-child(1) {
          border-right: 0px solid rgba(30, 46, 76);
        }

        div.data-col {
          width: 100%;

          .data-row {
            padding: 10px;
            display: flex;
            justify-content: space-between;

            :nth-child(n + 1) {
              background-color: none;
            }
          }
        }
      }
    }
  }
`;

export { GemSettingDetailsBox };
