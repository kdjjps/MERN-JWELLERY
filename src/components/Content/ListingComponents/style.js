import styled, { css, keyframes } from "styled-components";

const ListingPageBox = styled.div`
  display: grid;
  grid-template-areas:
    "label"
    "filter"
    "result";
  grid-template-columns: 100%;
  box-sizing: border-box;

  @media (max-width: 550px) {
    width: 100%;
    margin: none;
  }
`;

const ListingsBox = styled.div`
  color: rgb(30, 46, 76);
  grid-area: result;
  box-sizing: border-box;
  margin: 20px 0px;

  .banner {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .reset-filter-message {
    width: 100%;
    font-size: 2rem;
    color: rgb(30, 46, 76);
    text-align: center;
    margin: 50px 0px;
  }

  .listings-top-heading {
    text-align: center;

    p:nth-child(1) {
      margin: 10px auto;
      text-transform: capitalize;
      font-size: 3.2rem;
    }

    p:nth-child(2) {
      font-size: 1.6rem;
      margin-bottom: 30px;
    }
  }

  #setting-status-display {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(30, 46, 76);

    h2 {
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }

    a {
      padding: 10px;
      text-decoration: none;
      background: rgb(30, 46, 76);
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  #no-diamonds-available {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    text-align: center;
    color: rgb(30, 46, 76);

    h2 {
      margin-bottom: 10px;
      font-size: 1.8rem;
    }
  }

  .mobile-component {
    display: none;
  }

  select {
    border: none;
    background: none;
    outline: none;
  }

  .listings-functions-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;

    div {
      display: flex;
      align-items: center;
    }
  }

  section {
    .result-container {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 2rem;
    }
  }

  section#gemstone-result-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 3.5rem;
    row-gap: 1rem;
  }

  section#diamond-result-container-grid-view {
    position: relative;
    display: ${(props) => (props.viewStatus === "grid" ? "grid" : "none")};
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 3.5rem;
    row-gap: 1rem;
  }

  section#diamond-result-container-list-view {
    position: relative;
    display: ${(props) => (props.viewStatus === "list" ? "flex" : "none")};
    justify-content: space-between;

    #mini-details-displayer {
      width: 22%;
      padding: 10px;
      max-height: 520px;
      border: 1px solid gray;
      overflow: hidden;
      color: rgb(30, 46, 76);

      section#pre-hover {
        height: 100%;
        display: ${(props) => (props.miniDisplayStatus ? "none" : "flex")};
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
      }

      section#after-hover {
        height: 100%;
        display: ${(props) => (props.miniDisplayStatus ? "flex" : "none")};
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
      }

      img {
        width: 100%;
      }

      h2 {
        font-size: 2rem;
      }

      button {
        width: 100%;
      }
    }

    table {
      width: 75%;
      border-collapse: collapse;
      s tbody:nth-child(odd) {
        background: rgb(248, 250, 255);
      }

      th {
        border-right: 1px solid gray;
        padding: 10px;
        font-size: 1.4rem;
        font-weight: bold;
        color: white;
        background: rgba(30, 46, 76);
      }

      tr:nth-child(2n + 2) {
        background: rgb(248, 250, 255);
      }

      tr:hover {
        background: rgb(30, 46, 76);
        color: #ffffff;
        cursor: pointer;
        font-weight: bold;

        a {
          color: #ffffff;
        }
      }

      td {
        padding: 2px;
        text-align: center;
        font-size: 1.2rem;

        img {
          width: 30px;
        }

        a {
          text-decoration: none;
          color: rgb(30, 46, 76);
        }
      }
    }
  }

  div.see-more-button {
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.loading-more-button {
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
  }

  @media (max-width: 1200px) {
    section#gemstone-result-container {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2rem;
    }

    section#diamond-result-container-grid-view {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2rem;
    }

    section {
      .result-container {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }

  @media (max-width: 1000px) {
    .listings-functions-container {
      display: none;
    }

    .mobile-component {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    section#gemstone-result-container {
      grid-template-columns: 1fr 1fr;
    }

    section#diamond-result-container-grid-view {
      grid-template-columns: 1fr 1fr;
    }

    section {
      .result-container {
        grid-gap: 5px;
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0px 6px;

    #no-diamonds-available {
      h2 {
        margin-bottom: 10px;
        font-size: 1.4rem;
      }

      p {
        font-size: 1.2rem;
      }
    }

    section#gemstone-result-container {
      grid-template-columns: 1fr 1fr;
    }

    section#diamond-result-container-grid-view {
      grid-template-columns: 1fr;
    }

    section {
      .result-container {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
`;

const ListGridItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  color: rgb(30, 46, 76);

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    a.details-page-link {
      visibility: visible;
    }

    div.details-page-linkk {
      visibility: visible;
    }
  }

  section.details-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .media-container {
    width: 100%;
    position: relative;

    a {
      font-size: 18px;
      font-style: italic;
      text-decoration: none;
      color: rgba(30, 46, 76);
    }

    img {
      width: 100%;
    }

    video {
      display: none;
      width: 100%;
    }
  }

  .diamond-details-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: rgba(30, 46, 76);
    letter-spacing: 1px;
  }

  .detail-item {
    display: flex;
    flex-direction: column;
    width: 30%;

    h3:nth-child(1) {
      font-size: 1.4rem;
      color: #867575;
    }

    h3:nth-child(2) {
      font-size: 1.2rem;
      text-transform: uppercase;
    }
  }

  .wish-heart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 30px;

    img {
      width: 30px;
      height: 30px;
    }
  }

  .view-on-hand-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    width: 60px;

    img {
      width: 40px;
      height: auto;
    }

    p {
      font-size: 1.4rem;
      font-weight: bold;
      text-align: center;
      position: absolute;
      display: none;
      background: rgba(255, 255, 255, 0.8);
    }

    :hover p {
      display: block;
    }
  }

  div.detail-container {
    width: 100%;
    padding: 6px;
    background-color: rgb(248, 250, 255);

    div.detail-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .add-to-wishlist {
        display: none;
      }
    }
  }

  div.details-page-linkk {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    cursor: pointer;
    padding: 8px;
    visibility: hidden;
    font-size: 1.3rem;
    font-weight: bold;
    background: rgb(30, 46, 76);
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1px;

    .fa-heart {
      font-size: 2rem;
      color: ${(props) =>
        props.wishlistStatus == false ? "#adaaad" : "#de9d05"};
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;

    section.details-container {
      flex-direction: row;
    }

    .media-container {
      width: 50%;

      img {
        height: 100%;
      }
    }

    .diamond-details-box {
      width: 50%;
    }

    div.detail-container {
      height: 100%;

      div.detail-row {
        .add-to-wishlist {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          padding: 5px;
          background: rgba(30, 46, 76, 0.1);

          .fa-heart {
            font-size: 2rem;
            color: ${(props) =>
              props.wishlistStatus == false ? "#adaaad" : "#de9d05"};
          }

          p {
            font-size: 1.2rem;
          }

          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    .detail-item {
      h3:nth-child(1) {
        font-size: 1.2rem;
      }

      h3:nth-child(2) {
        font-size: 1rem;
      }
    }

    div.details-page-linkk {
      display: none;
    }
  }
`;

const ItemNotFound = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: rgb(30, 46, 76);
  letter-spacing: 1px;
`;

const DetailsBox = styled.div`
  color: rgba(30, 46, 76);
  position: relative;

  button.react-share__ShareButton {
    min-height: 30px;
  }

  .item-not-found-box {
    background: yellow;
  }

  .wishlist-button-container {
    .fa-heart {
      color: ${(props) =>
        props.wishlistStatus == false ? "#adaaad" : "#de9d05"};
    }
  }

  .details-page-upperbody {
    padding: 10px;
    display: grid;
    grid-template-columns: 85px 1fr 1fr;
    grid-template-areas: "small-displayer big-displayer summary";
    grid-column-gap: 20px;
    align-content: space-between;
  }

  .big-media-displayer {
    display: flex;
    margin-bottom: 10px;
    grid-area: big-displayer;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
  }

  .big-media-displayer .media-holder {
    position: relative;
    width: 100%;
    height: 400px;

    video {
      width: 100%;
      height: 100%;
    }

    .left {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
      background: #ffffff;
      display: flex;
      justify-content: center;
    }

    .left > img {
      pointer-events: none;
    }

    .left:hover {
      opacity: 0;
    }

    .right {
      width: 100%;
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
    }
  }

  .big-media-displayer .diamond-video {
    display: ${(props) => (props.videoViewStatus ? "block" : "none")};
  }

  .big-media-displayer .diamond-image {
    display: ${(props) => (props.imageViewStatus ? "flex" : "none")};
  }

  .big-media-displayer .diamond-module {
    display: ${(props) => (props.moduleViewStatus ? "flex" : "none")};
  }

  // For New Arrivals Product Images

  .big-media-displayer .product-image-1 {
    display: ${(props) => (props.imageOneStatus ? "flex" : "none")};
  }

  .big-media-displayer .product-image-2 {
    display: ${(props) => (props.imageTwoStatus ? "flex" : "none")};
  }

  .big-media-displayer .product-image-3 {
    display: ${(props) => (props.imageThreeStatus ? "flex" : "none")};
  }

  .big-media-displayer .right .product-imagee-1 {
    display: ${(props) => (props.imageOneStatus ? "flex" : "none")};
  }

  .big-media-displayer .right .product-imagee-2 {
    display: ${(props) => (props.imageTwoStatus ? "flex" : "none")};
  }

  .big-media-displayer .right .product-imagee-3 {
    display: ${(props) => (props.imageThreeStatus ? "flex" : "none")};
  }

  div#white-gold {
    display: ${(props) => (props.metal === "white-gold" ? "block" : "none")};
  }

  div#yellow-gold {
    display: ${(props) => (props.metal === "yellow-gold" ? "block" : "none")};
  }

  div#rose-gold {
    display: ${(props) => (props.metal === "rose-gold" ? "block" : "none")};
  }

  div#platinum {
    display: ${(props) => (props.metal === "platinum" ? "block" : "none")};
  }

  img.white-gold {
    display: ${(props) => (props.metal === "white-gold" ? "block" : "none")};
  }

  img.yellow-gold {
    display: ${(props) => (props.metal === "yellow-gold" ? "block" : "none")};
  }

  img.rose-gold {
    display: ${(props) => (props.metal === "rose-gold" ? "block" : "none")};
  }

  img.platinum {
    display: ${(props) => (props.metal === "platinum" ? "block" : "none")};
  }

  video.white-gold {
    display: ${(props) => (props.metal === "white-gold" ? "block" : "none")};
  }

  video.yellow-gold {
    display: ${(props) => (props.metal === "yellow-gold" ? "block" : "none")};
  }

  video.rose-gold {
    display: ${(props) => (props.metal === "rose-gold" ? "block" : "none")};
  }

  video.platinum {
    display: ${(props) => (props.metal === "platinum" ? "block" : "none")};
  }

  .big-media-displayer .diamond-module {
    height: 100%;
  }

  .small-media-displayer {
    display: flex;
    flex-direction: column;
    grid-area: small-displayer;
  }

  .small-media-displayer .media-holder {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    border: 1px solid rgba(30, 46, 76, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;

    img,
    video {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  .small-media-displayer .productImage {
    border: ${(props) =>
      props.imageViewStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  .small-media-displayer .productVideo {
    border: ${(props) =>
      props.videoViewStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  .small-media-displayer .certImage {
    border: ${(props) =>
      props.pdfViewStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  .small-media-displayer .bodyModule {
    border: ${(props) =>
      props.moduleViewStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  // For New Arrivals Product Images

  .small-media-displayer #product-image-1 {
    border: ${(props) =>
      props.imageOneStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  .small-media-displayer #product-image-2 {
    border: ${(props) =>
      props.imageTwoStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  .small-media-displayer #product-image-3 {
    border: ${(props) =>
      props.imageThreeStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  .summary-holder {
    display: flex;
    flex-direction: column;
    grid-area: summary;

    p.heading {
      font-size: 2.1rem;
      letter-spacing: 1px;
      font-weight: bold;
      text-transform: uppercase;
    }

    p.info {
      font-size: 1.5rem;
      margin: 5px 0px;
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
      margin: 10px 0px;
      font-size: 1.3rem;
      padding: 8px;
      background: rgb(248, 250, 255);
      font-style: italic;
    }

    button {
      display: block;
      width: 100%;
    }

    section.links-container {
      a {
        width: 100%;
        text-decoration: none;
        font-size: 1.5rem;
        display: inline-block;
        margin: 2px;
        cursor: pointer;
        color: rgb(30, 46, 76);
        padding: 10px;
        font-weight: bold;
        text-align: center;
        background: rgb(30, 46, 76);
        color: white;
      }

      img {
        width: 100%;
      }
    }

    section.metal-changer {
      div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 5px;
      }

      div.metal {
        display: flex;
        height: 35px;
        justify-content: center;
        align-items: center;
        color: rgb(30, 46, 76);
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;

        :nth-child(1) {
          background: #dedede;
          border: ${(props) =>
            props.metal === "white-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(2) {
          background: #efd9a7;
          border: ${(props) =>
            props.metal === "yellow-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(3) {
          background: #eebda0;
          border: ${(props) =>
            props.metal === "rose-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(4) {
          background: #dedede;
          border: ${(props) =>
            props.metal === "platinum" ? "2px solid rgb(30,46,76)" : "none"};
        }
      }

      a.metal-link {
        display: flex;
        height: 35px;
        justify-content: center;
        align-items: center;
        color: rgb(30, 46, 76);
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;

        :nth-child(1) {
          background: #dedede;
          border: ${(props) =>
            props.metal === "white-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(2) {
          background: #efd9a7;
          border: ${(props) =>
            props.metal === "yellow-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(3) {
          background: #eebda0;
          border: ${(props) =>
            props.metal === "rose-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(4) {
          background: #dedede;
          border: ${(props) =>
            props.metal === "platinum" ? "2px solid rgb(30,46,76)" : "none"};
        }
      }

      a.stud-metal-link {
        display: flex;
        height: 35px;
        justify-content: center;
        align-items: center;
        color: rgb(30, 46, 76);
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;

        :nth-child(1) {
          background: #dedede;
          border: ${(props) =>
            props.metal === "white-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(2) {
          background: #efd9a7;
          border: ${(props) =>
            props.metal === "yellow-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(3) {
          background: #dedede;
          border: ${(props) =>
            props.metal === "platinum" ? "2px solid rgb(30,46,76)" : "none"};
        }
      }
    }

    section.carat-changer {
      div.buttons-container {
        display: flex;
      }

      div.carat-button {
        padding: 10px;
        border: 1px solid rgba(30, 46, 76, 0.2);
        font-size: 1.2rem;
        font-weight: bold;
        width: 50px;
        text-align: center;
        margin-right: 5px;

        :nth-child(1) {
          border: ${(props) =>
            props.carat === "0.3"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(2) {
          border: ${(props) =>
            props.carat === "0.5"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(3) {
          border: ${(props) =>
            props.carat === "0.7"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(4) {
          border: ${(props) =>
            props.carat === "1"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(5) {
          border: ${(props) =>
            props.carat === "2"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }
      }
    }

    section.backing-changer {
      div.buttons-container {
        display: flex;
      }

      div.backing-button {
        padding: 10px;
        border: 1px solid rgba(30, 46, 76, 0.2);
        font-size: 1.2rem;
        font-weight: bold;
        width: 100px;
        text-align: center;
        margin-right: 5px;

        :nth-child(1) {
          border: ${(props) =>
            props.backing === "screw"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(2) {
          border: ${(props) =>
            props.backing === "push"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }
      }
    }

    section.quantity-changer {
      div.buttons-container {
        display: flex;
      }

      div.quantity-button {
        padding: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        width: 100px;
        text-align: center;
        margin-right: 5px;

        :nth-child(1) {
          border: ${(props) =>
            props.quantity === 1
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(2) {
          border: ${(props) =>
            props.quantity === 2
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }
      }
    }

    section.solitaire-diamond-quality-changer {
      div.buttons-container {
        display: flex;
      }

      div.diamond-quality-button {
        padding: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        width: 100px;
        text-align: center;
        margin-right: 5px;

        :nth-child(1) {
          border: ${(props) =>
            props.solitaireQuality === "IJSI"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(2) {
          border: ${(props) =>
            props.solitaireQuality === "GHVS"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }
      }
    }

    section.diamond-quality-changer {
      div.buttons-container {
        display: flex;
      }

      div.diamond-quality-button {
        padding: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        width: 100px;
        text-align: center;
        margin-right: 5px;

        :nth-child(1) {
          border: ${(props) =>
            props.quality === "IJSI"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(2) {
          border: ${(props) =>
            props.quality === "GHVS"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }
      }
    }

    section.length-changer {
      div.buttons-container {
        display: flex;
      }

      div.length-button {
        padding: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        width: 100px;
        text-align: center;
        margin-right: 5px;

        :nth-child(1) {
          border: ${(props) =>
            props.length === 16
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(2) {
          border: ${(props) =>
            props.length === 18
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }
      }
    }

    section.drop-selection {
      margin-bottom: 10px;

      p {
        margin-bottom: 4px;
        font-weight: bold;
      }

      select {
        width: 325px;
        padding: 3px;
      }
    }

    section.buttons-container {
      display: flex;

      button {
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

        p {
          width: 50%;
        }

        p:nth-child(1) {
          font-weight: bold;
        }

        p:nth-child(2) {
          text-align: right;
        }
      }
    }
  }

  @media (max-width: 780px) {
    .details-page-upperbody {
      width: 100%;
      grid-template-areas: "big-displayer" "small-displayer" "summary";
      grid-template-columns: 1fr;
    }

    .big-media-displayer {
      width: 100%;
      height: 400px;
    }

    .small-media-displayer {
      flex-direction: row;
      justify-content: center;
    }

    .small-media-displayer .media-holder {
      width: 22%;
      margin-right: 10px;
    }

    .summary-holder {
      div.note {
        font-size: 1rem;
        padding: 8px 2px;
      }
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

const AlternateDetailsBox = styled.div`
  color: rgba(30, 46, 76);
  position: relative;

  button.react-share__ShareButton {
    min-height: 30px;
  }

  .details-page-upperbody {
    padding: 10px;
    display: grid;
    grid-template-columns: 85px 1fr 1fr;
    grid-template-areas: "small-displayer big-displayer summary";
    grid-column-gap: 20px;
    align-content: space-between;
  }

  .big-media-displayer {
    display: flex;
    grid-area: big-displayer;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
  }

  .big-media-displayer .media-holder {
    position: relative;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;

    video {
      width: 100%;
      height: 100%;
    }

    .left {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
      background: #ffffff;
      display: flex;
      justify-content: center;
    }

    .left > img {
      pointer-events: none;
      width: 100%;
    }

    .left:hover {
      opacity: 0;
    }

    .right {
      width: 100%;
      overflow: hidden;
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
    }
  }

  .big-media-displayer .diamond-video {
    display: ${(props) => (props.videoViewStatus ? "block" : "none")};
  }

  .big-media-displayer .diamond-image {
    display: ${(props) => (props.imageViewStatus ? "flex" : "none")};
    width: 400px;
    height: 300px;
  }

  .big-media-displayer .diamond-module {
    display: ${(props) => (props.moduleViewStatus ? "flex" : "none")};
  }

  // For New Arrivals Product Images

  .big-media-displayer .product-image-1 {
    display: ${(props) => (props.imageOneStatus ? "flex" : "none")};
  }

  .big-media-displayer .product-image-2 {
    display: ${(props) => (props.imageTwoStatus ? "flex" : "none")};
  }

  .big-media-displayer .product-image-3 {
    display: ${(props) => (props.imageThreeStatus ? "flex" : "none")};
  }

  .big-media-displayer .right .product-imagee-1 {
    display: ${(props) => (props.imageOneStatus ? "flex" : "none")};
  }

  .big-media-displayer .right .product-imagee-2 {
    display: ${(props) => (props.imageTwoStatus ? "flex" : "none")};
  }

  .big-media-displayer .right .product-imagee-3 {
    display: ${(props) => (props.imageThreeStatus ? "flex" : "none")};
  }

  div#white-gold {
    display: ${(props) => (props.metal === "white-gold" ? "block" : "none")};
  }

  div#yellow-gold {
    display: ${(props) => (props.metal === "yellow-gold" ? "block" : "none")};
  }

  div#rose-gold {
    display: ${(props) => (props.metal === "rose-gold" ? "block" : "none")};
  }

  div#platinum {
    display: ${(props) => (props.metal === "platinum" ? "block" : "none")};
  }

  img.white-gold {
    display: ${(props) => (props.metal === "white-gold" ? "block" : "none")};
  }

  img.yellow-gold {
    display: ${(props) => (props.metal === "yellow-gold" ? "block" : "none")};
  }

  img.rose-gold {
    display: ${(props) => (props.metal === "rose-gold" ? "block" : "none")};
  }

  img.platinum {
    display: ${(props) => (props.metal === "platinum" ? "block" : "none")};
  }

  video.white-gold {
    display: ${(props) => (props.metal === "white-gold" ? "block" : "none")};
  }

  video.yellow-gold {
    display: ${(props) => (props.metal === "yellow-gold" ? "block" : "none")};
  }

  video.rose-gold {
    display: ${(props) => (props.metal === "rose-gold" ? "block" : "none")};
  }

  video.platinum {
    display: ${(props) => (props.metal === "platinum" ? "block" : "none")};
  }

  .big-media-displayer .diamond-module {
    height: 100%;
  }

  .small-media-displayer {
    display: flex;
    flex-direction: column;
    grid-area: small-displayer;
  }

  .small-media-displayer .media-holder {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    border: 1px solid rgba(30, 46, 76, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;

    img,
    video {
      width: 100%;
    }
  }

  .small-media-displayer .productImage {
    border: ${(props) =>
      props.imageViewStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  .small-media-displayer .productVideo {
    border: ${(props) =>
      props.videoViewStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  .small-media-displayer .certImage {
    border: ${(props) =>
      props.pdfViewStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  .small-media-displayer .bodyModule {
    border: ${(props) =>
      props.moduleViewStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  // For New Arrivals Product Images

  .small-media-displayer #product-image-1 {
    border: ${(props) =>
      props.imageOneStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  .small-media-displayer #product-image-2 {
    border: ${(props) =>
      props.imageTwoStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  .small-media-displayer #product-image-3 {
    border: ${(props) =>
      props.imageThreeStatus
        ? "2px solid rgb(30,46,76)"
        : "1px solid rgba(30,46,76,0.2)"};
  }

  .summary-holder {
    display: flex;
    flex-direction: column;
    grid-area: summary;

    p.heading {
      font-size: 2.1rem;
      letter-spacing: 1px;
      font-weight: bold;
      text-transform: uppercase;
    }

    p.info {
      font-size: 1.5rem;
      margin: 5px 0px;
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
      margin: 10px 0px;
      font-size: 1.3rem;
      padding: 8px;
      background: rgb(248, 250, 255);
      font-style: italic;
    }

    button {
      display: block;
      width: 100%;
      height: 40px;
      // margin: 10px 0px;
    }

    section.links-container {
      a {
        width: 100%;
        text-decoration: none;
        font-size: 1.5rem;
        display: inline-block;
        margin: 2px;
        cursor: pointer;
        color: rgb(30, 46, 76);
        padding: 10px;
        font-weight: bold;
        text-align: center;
        background: rgb(30, 46, 76);
        color: white;
      }

      img {
        width: 100%;
      }
    }

    section.metal-changer {
      div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 5px;
      }

      div.metal {
        display: flex;
        height: 35px;
        justify-content: center;
        align-items: center;
        color: rgb(30, 46, 76);
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;

        :nth-child(1) {
          background: #dedede;
          border: ${(props) =>
            props.metal === "white-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(2) {
          background: #efd9a7;
          border: ${(props) =>
            props.metal === "yellow-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(3) {
          background: #eebda0;
          border: ${(props) =>
            props.metal === "rose-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(4) {
          background: #dedede;
          border: ${(props) =>
            props.metal === "platinum" ? "2px solid rgb(30,46,76)" : "none"};
        }
      }

      a.metal-link {
        display: flex;
        height: 35px;
        justify-content: center;
        align-items: center;
        color: rgb(30, 46, 76);
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;

        :nth-child(1) {
          background: #dedede;
          border: ${(props) =>
            props.metal === "white-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(2) {
          background: #efd9a7;
          border: ${(props) =>
            props.metal === "yellow-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(3) {
          background: #eebda0;
          border: ${(props) =>
            props.metal === "rose-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(4) {
          background: #dedede;
          border: ${(props) =>
            props.metal === "platinum" ? "2px solid rgb(30,46,76)" : "none"};
        }
      }

      // For studs metal changing

      a.stud-metal-link {
        display: flex;
        height: 35px;
        justify-content: center;
        align-items: center;
        color: rgb(30, 46, 76);
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;

        :nth-child(1) {
          background: #dedede;
          border: ${(props) =>
            props.metal === "white-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(2) {
          background: #efd9a7;
          border: ${(props) =>
            props.metal === "yellow-gold" ? "2px solid rgb(30,46,76)" : "none"};
        }

        :nth-child(3) {
          background: #dedede;
          border: ${(props) =>
            props.metal === "platinum" ? "2px solid rgb(30,46,76)" : "none"};
        }
      }
    }

    section.carat-changer {
      div.buttons-container {
        display: flex;
      }

      div.carat-button {
        padding: 10px;
        border: 1px solid rgba(30, 46, 76, 0.2);
        font-size: 1.2rem;
        font-weight: bold;
        width: 50px;
        text-align: center;
        margin-right: 5px;

        :nth-child(1) {
          border: ${(props) =>
            props.carat === "0.3"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(2) {
          border: ${(props) =>
            props.carat === "0.5"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(3) {
          border: ${(props) =>
            props.carat === "0.7"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(4) {
          border: ${(props) =>
            props.carat === "1"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(5) {
          border: ${(props) =>
            props.carat === "2"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }
      }
    }

    section.backing-changer {
      div.buttons-container {
        display: flex;
      }

      div.backing-button {
        padding: 10px;
        border: 1px solid rgba(30, 46, 76, 0.2);
        font-size: 1.2rem;
        font-weight: bold;
        width: 100px;
        text-align: center;
        margin-right: 5px;

        :nth-child(1) {
          border: ${(props) =>
            props.backing === "screw"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(2) {
          border: ${(props) =>
            props.backing === "push"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }
      }
    }

    section.quantity-changer {
      div.buttons-container {
        display: flex;
      }

      div.quantity-button {
        padding: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        width: 100px;
        text-align: center;
        margin-right: 5px;

        :nth-child(1) {
          border: ${(props) =>
            props.quantity === 1
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(2) {
          border: ${(props) =>
            props.quantity === 2
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }
      }
    }

    section.solitaire-diamond-quality-changer {
      div.buttons-container {
        display: flex;
      }

      div.diamond-quality-button {
        padding: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        width: 100px;
        text-align: center;
        margin-right: 5px;

        :nth-child(1) {
          border: ${(props) =>
            props.solitaireQuality === "IJSI"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(2) {
          border: ${(props) =>
            props.solitaireQuality === "GHVS"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }
      }
    }

    // #ring-selector{
    //     display: flex;
    //     justify-content: space-between;

    //     select{
    //         width: 48%;
    //     }
    // }

    section.diamond-quality-changer {
      div.buttons-container {
        display: flex;
      }

      div.diamond-quality-button {
        padding: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        width: 100px;
        text-align: center;
        margin-right: 5px;

        :nth-child(1) {
          border: ${(props) =>
            props.quality === "IJSI"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(2) {
          border: ${(props) =>
            props.quality === "GHVS"
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }
      }
    }

    section.length-changer {
      div.buttons-container {
        display: flex;
      }

      div.length-button {
        padding: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        width: 100px;
        text-align: center;
        margin-right: 5px;

        :nth-child(1) {
          border: ${(props) =>
            props.length === 16
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }

        :nth-child(2) {
          border: ${(props) =>
            props.length === 18
              ? "2px solid rgb(30,46,76)"
              : "2px solid rgba(30,46,76,0.2)"};
        }
      }
    }

    section.drop-selection {
      margin-bottom: 10px;

      p {
        margin-bottom: 4px;
        font-weight: bold;
      }

      select {
        width: 325px;
        padding: 3px;
      }
    }

    section.buttons-container {
      display: flex;

      button {
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

        p {
          width: 50%;
        }

        p:nth-child(1) {
          font-weight: bold;
        }

        p:nth-child(2) {
          text-align: right;
        }
      }
    }
  }

  @media (max-width: 780px) {
    .details-page-upperbody {
      width: 100%;
      grid-template-areas: "big-displayer" "small-displayer" "summary";
      grid-template-columns: 1fr;
    }

    .big-media-displayer {
      width: 100%;
      height: 320px;
    }

    .small-media-displayer {
      flex-direction: row;
      justify-content: center;
      margin: 2rem 0px;
    }

    .small-media-displayer .media-holder {
      width: 80px;
      height: 80px;
      margin-right: 10px;
    }

    .summary-holder {
      div.note {
        font-size: 1rem;
        padding: 8px 2px;
      }
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

const PaginationBox = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin: 0px 10px;
  }
`;

const FilterBox = styled.div`
  grid-area: filter;
  padding: 1.5rem;
  color: rgb(30, 46, 76);

  .solitaire-desktop-filters {
    ul {
      display: flex;

      li {
        position: relative;
        list-style: none;
        padding: 0.8rem;
        font-size: 1.3rem;
        font-weight: bold;
        letter-spacing: 0.1rem;
        color: rgba(30, 46, 76);
        margin-right: 1.5rem;
        border: 1px solid transparent;

        div {
          display: flex;
          align-items: center;

          p {
            margin-right: 0.5rem;
          }
        }

        .dropdown-content {
          padding: 2rem;
          display: none;
          position: absolute;
          background: white;
          min-width: 300px;
          top: 100%;
          left: -1px;
          z-index: 999;
          color: rgba(30, 46, 76);

          .row {
            display: flex;
            justify-content: space-between;
          }

          .metal-option-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.8rem;

            input {
              margin-right: 0.5rem;
            }

            .color-box {
              width: 20px;
              height: 20px;
            }
          }

          .shape-option-container {
            width: 50%;
            margin: 0px 2rem 1rem 0px;
            display: flex;
            justify-content: space-between;

            input {
              margin-right: 0.5rem;
            }

            .image-box {
              width: 20px;
              height: 20px;

              img {
                width: 100%;
              }
            }
          }
        }

        :hover {
          border-top: 1px solid;
          border-right: 1px solid;
          border-left: 1px solid;
          border-color: rgba(30, 46, 76);

          .dropdown-content {
            display: block;
            border-top: 1px solid;
            border-bottom: 1px solid;
            border-right: 1px solid;
            border-left: 1px solid;
            border-color: rgba(30, 46, 76);
          }
        }
      }
    }
  }

  .gemstone-desktop-filters {
    ul {
      display: flex;

      li {
        position: relative;
        list-style: none;
        padding: 5px;
        font-size: 1rem;
        font-weight: bold;
        letter-spacing: 0.1rem;
        color: rgba(30, 46, 76);
        margin-right: 1.5rem;
        border: 1px solid transparent;

        div {
          display: flex;
          align-items: center;

          p {
            margin-right: 0.5rem;
          }
        }

        .dropdown-content {
          padding: 1rem;
          display: none;
          position: absolute;
          background: white;
          min-width: 320px;
          top: 100%;
          left: -1px;
          z-index: 999;
          color: rgba(30, 46, 76);

          .row {
            display: flex;
            justify-content: space-between;
          }

          .metal-option-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.8rem;

            input {
              margin-right: 0.5rem;
            }

            .color-box {
              width: 20px;
              height: 20px;
            }
          }

          .gem-option-container {
            width: 50%;
            margin: 0px 2rem 1rem 0px;
            display: flex;
            justify-content: space-between;

            input {
              margin-right: 0.5rem;
            }

            .image-box {
              width: 20px;
              height: 20px;

              img {
                width: 100%;
              }
            }
          }
        }

        :hover {
          border-top: 1px solid;
          border-right: 1px solid;
          border-left: 1px solid;
          border-color: rgba(30, 46, 76);
          border-bottom: 1px solid white;

          .dropdown-content {
            display: block;
            border-top: 1px solid;
            border-bottom: 1px solid;
            border-right: 1px solid;
            border-left: 1px solid;
            border-color: rgba(30, 46, 76);
          }
        }
      }
    }
  }

  .desktop-filters {
    position: relative;
    overflow: hidden;

    section.basic-filters {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 40px;
      transform: ${(props) =>
        props.advanceFilter ? "translate(-100%)" : "translate(0)"};
      transition: transform ease-in 0.2s;
    }

    section.advance-filters {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 40px;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      transform: ${(props) =>
        props.advanceFilter ? "translate(0)" : "translate(100%)"};
      transition: transform ease-in 0.2s;
    }

    button#advance-filters-button {
      background: none;
      font-weight: bold;
      color: rgb(30, 46, 76);
      display: ${(props) => (props.advanceFilter ? "none" : "block")};
    }

    button#basic-filters-button {
      background: none;
      color: rgb(30, 46, 76);
      display: ${(props) => (props.advanceFilter ? "block" : "none")};
    }

    div.filter-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 95%;
      height: 90px;
      overflow: visible;

      div.filter-label {
        font-size: 1.3rem;
        color: rgb(30, 46, 76);
        text-transform: uppercase;
        letter-spacing: 1px;
        display: flex;
        align-items: center;

        img {
          cursor: pointer;
        }

        div.filter-info {
          display: flex;
          align-items: center;
          padding: 5px;
          position: relative;

          div.info {
            position: absolute;
            width: 350px;
            height: 70px;
            border: 1px solid rgba(30, 46, 76, 0.2);
            border-radius: 5px;
            left: 28px;
            z-index: 5;
            background: #ffffff;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            padding: 12px;

            div.triangle-left {
              position: absolute;
              top: 30px;
              left: -10px;
              width: 0;
              height: 0;
              border-top: 5px solid transparent;
              border-right: 10px solid #555;
              border-bottom: 5px solid transparent;
            }

            p {
              display: block;
              width: 90%;
              font-size: 1rem;
              text-transform: none;
              letter-spacing: 1px;
              line-height: 1.6;
            }

            div.close-button {
              position: absolute;
              top: 5px;
              right: 10px;
            }
          }
        }
      }

      div#info-1 {
        display: ${(props) =>
          props.infoStatus === "shape-info" ? "block" : "none"};
      }

      div#info-2 {
        display: ${(props) =>
          props.infoStatus === "cut-info" ? "block" : "none"};
      }

      div#info-3 {
        display: ${(props) =>
          props.infoStatus === "color-info" ? "block" : "none"};
      }

      div#info-4 {
        display: ${(props) =>
          props.infoStatus === "carat-info" ? "block" : "none"};
      }

      div#info-5 {
        display: ${(props) =>
          props.infoStatus === "clarity-info" ? "block" : "none"};
      }

      div#info-6 {
        display: ${(props) =>
          props.infoStatus === "price-info" ? "block" : "none"};
      }

      div#info-7 {
        display: ${(props) =>
          props.infoStatus === "cert-info" ? "block" : "none"};
      }

      div#info-8 {
        display: ${(props) =>
          props.infoStatus === "symmetry-info" ? "block" : "none"};
      }

      div#info-9 {
        display: ${(props) =>
          props.infoStatus === "polish-info" ? "block" : "none"};
      }

      div#info-10 {
        display: ${(props) =>
          props.infoStatus === "table-info" ? "block" : "none"};
      }

      div#info-11 {
        display: ${(props) =>
          props.infoStatus === "fluorescence-info" ? "block" : "none"};
      }

      div#info-12 {
        display: ${(props) =>
          props.infoStatus === "depth-info" ? "block" : "none"};
      }

      div#info-13 {
        display: ${(props) =>
          props.infoStatus === "intensity-info" ? "block" : "none"};
      }

      section .radio-container {
        width: 100%;
        display: flex;

        div {
          width: 100%;
          margin-right: 10px;

          label {
            margin-right: 5px;
          }
        }
      }

      section button {
        width: 100%;
        color: white;
        background-color: #162345;
      }
    }

    .filter-footer {
      margin-top: 40px;
      display: flex;
      color: rgb(30, 46, 76);
      justify-content: space-between;
    }
  }

  section.fancy-color-filter {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    margin-bottom: 20px;

    div {
      overflow: hidden;
      border: 1px solid rgb(30, 46, 76, 0.2);
      border-radius: 2px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4px;
      max-height: 100px;
      cursor: pointer;

      :hover {
        background: rgb(248, 250, 255);
      }

      img {
        width: 70px;
        height: 70px;
      }

      p {
        font-size: 1.1rem;
        margin-top: -8px;
      }
    }
  }

  .mobile-filters {
    width: 100%;
    height: auto;
    display: none;
    padding: 0.8rem;
    background-color: rgb(248, 250, 255);

    .button-container {
      display: flex;
      justify-content: space-between;
    }

    .filter-row {
      display: flex;
      justify-content: space-between;
    }

    .filter-container {
      padding: 18px;

      h3 {
        font-size: 1.3rem;
        margin-bottom: 5px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #867575;
      }

      section .radio-container {
        width: 100%;
        display: flex;

        div {
          width: 100%;
          margin-right: 10px;

          label {
            margin-right: 5px;
          }
        }
      }

      section .filter-bound-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0px 1rem 0px;
        background: yellow;

        label {
          font-size: 1.2rem;
        }

        input {
          width: 50px;
          outline: none;
          border: none;
        }
      }

      section button {
        width: 100%;
        color: white;
        background-color: #162345;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 5000;
    transform: ${(props) =>
      props.status ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0px;

    .desktop-filters {
      display: none;
    }

    section.fancy-color-filter {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 20px;

      div {
        border: none;
      }
    }

    .mobile-filters {
      display: block;
      padding-bottom: 30px;

      .filter-container {
        margin-bottom: 10px;

        p {
          margin-bottom: 10px;
        }
      }
    }
  }
`;

const FilterItemBox = styled.div`
    width: 78%;
    position: relative;

    .diamond-shape-row{
        display: flex;
        justify-content: space-between;

        div.tooltip{
            position: relative;
            width: 10%;
            height: 44px;
            text-align: center;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            border-radius: 2px;

            :hover{
                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
                background: rgb(248,250,255);

                div.tooltip-text{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }

            img{
                width: 25px;
            }

            div.tooltip-text{
                position: absolute;
                display: none;
                bottom: -22px;
                z-index: 20;

                p{
                    color: rgba(30,46,76);
                    font-size: 1rem;
                }
            }

        }

        #round{
            border: ${(props) =>
              props.shape === "round"
                ? "2px solid rgba(30,46,76)"
                : "1px solid rgba(30,46,76,0.5)"};
            border-right: ${(props) =>
              props.shape === "round" ? "2px solid rgba(30,46,76)" : "none"};
        }

        #emerald{
            border: ${(props) =>
              props.shape === "emerald"
                ? "2px solid rgba(30,46,76)"
                : "1px solid rgba(30,46,76,0.5)"};
            border-right: ${(props) =>
              props.shape === "emerald" ? "2px solid rgba(30,46,76)" : "none"};
        }

        #asscher{
            border: ${(props) =>
              props.shape === "square-emerald"
                ? "2px solid rgba(30,46,76)"
                : "1px solid rgba(30,46,76,0.5)"};
            border-right: ${(props) =>
              props.shape === "square-emerald"
                ? "2px solid rgba(30,46,76)"
                : "none"};
        }

        #marquise{
            border: ${(props) =>
              props.shape === "marquise"
                ? "2px solid rgba(30,46,76)"
                : "1px solid rgba(30,46,76,0.5)"};
            border-right: ${(props) =>
              props.shape === "marquise" ? "2px solid rgba(30,46,76)" : "none"};
        }

        #cushion{
            border: ${(props) =>
              props.shape === "cushion"
                ? "2px solid rgba(30,46,76)"
                : "1px solid rgba(30,46,76,0.5)"};
            border-right: ${(props) =>
              props.shape === "cushion" ? "2px solid rgba(30,46,76)" : "none"};
        }

        #heart{
            border: ${(props) =>
              props.shape === "heart"
                ? "2px solid rgba(30,46,76)"
                : "1px solid rgba(30,46,76,0.5)"};
            border-right: ${(props) =>
              props.shape === "heart" ? "2px solid rgba(30,46,76)" : "none"};
        }

        #oval{
            border: ${(props) =>
              props.shape === "oval"
                ? "2px solid rgba(30,46,76)"
                : "1px solid rgba(30,46,76,0.5)"};
            border-right: ${(props) =>
              props.shape === "oval" ? "2px solid rgba(30,46,76)" : "none"};
        }

        #pear{
            border: ${(props) =>
              props.shape === "pear"
                ? "2px solid rgba(30,46,76)"
                : "1px solid rgba(30,46,76,0.5)"};
            border-right: ${(props) =>
              props.shape === "pear" ? "2px solid rgba(30,46,76)" : "none"};
        }

        #princess{
            border: ${(props) =>
              props.shape === "princess"
                ? "2px solid rgba(30,46,76)"
                : "1px solid rgba(30,46,76,0.5)"};
            border-right: ${(props) =>
              props.shape === "princess" ? "2px solid rgba(30,46,76)" : "none"};
        }

        #radiant{
            border: ${(props) =>
              props.shape === "radiant"
                ? "2px solid rgba(30,46,76)"
                : "1px solid rgba(30,46,76,0.5)"};
        }

        }
    }

    section.certificate-row{
        display: flex;
        justify-content: space-between;

        div.certificate-box{
            width: 15%;
            height: 50px;
            border: 2px solid rgba(30,46,76,0.4);
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            letter-spacing: 1px;
            color: rgb(30,46,76);
            cursor: pointer;
            font-size: 1.3rem;

            :hover{
                background: rgb(248,250,255);
            }
        }

        div.certificate-box:nth-child(1){
            background: ${(props) =>
              props.lab === "GIA" ? "rgb(30,46,76)" : "none"};
            color: ${(props) =>
              props.lab === "GIA" ? "white" : "rgb(30,46,76)"};
        }

        div.certificate-box:nth-child(2){
            background: ${(props) =>
              props.lab === "AGS" ? "rgb(30,46,76)" : "none"};
            color: ${(props) =>
              props.lab === "AGS" ? "white" : "rgb(30,46,76)"};
        }

        div.certificate-box:nth-child(3){
            background: ${(props) =>
              props.lab === "EGL" ? "rgb(30,46,76)" : "none"};
            color: ${(props) =>
              props.lab === "EGL" ? "white" : "rgb(30,46,76)"};
        }

        div.certificate-box:nth-child(4){
            background: ${(props) =>
              props.lab === "IGI" ? "rgb(30,46,76)" : "none"};
            color: ${(props) =>
              props.lab === "IGI" ? "white" : "rgb(30,46,76)"};
        }

        div.certificate-box:nth-child(5){
            background: ${(props) =>
              props.lab === "HRD" ? "rgb(30,46,76)" : "none"};
            color: ${(props) =>
              props.lab === "HRD" ? "white" : "rgb(30,46,76)"};
        }
    }

     div.filter-bound-container{
        position: absolute;
        top: 15px;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0px 1rem 0px;

        div.input-container-box{
            display: flex;
            align-items: center;
            position: relative;
            text-align: center;
            padding: 1px;
        }

        div.input-container-box:nth-child(1){
            left: -12px;
        }

        div.input-container-box:nth-child(2){
            right: -12px;
        }

        p{
            background: none;
            padding-right: 5px;
            font-size: 1.4rem;
            font-weight: bold;
        }

        input{
            width: 90px;
            font-size: 1.4rem;
            border: 1px solid rgba(30,46,76,0.2);
            padding: 5px;
            outline: none;
        }

        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        /* Firefox */
        input[type=number] {
        -moz-appearance: textfield;
        }

    }

    @media(max-width: 768px){
        width: 100%;
    }
`;

const PresetRingItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  transition: all 0.3s ease;

  .ring-detail-row {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(30, 46, 76);
    letter-spacing: 1px;
    border: 1px solid rgb(229, 229, 229);

    :hover {
      transform: scale(1.03);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
    }
  }

  #metal-changer-dots {
    text-align: center;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  aside {
    text-align: center;
  }

  .preset-info {
    text-align: center;

    p {
      margin-bottom: 10px;
    }
  }

  .product-images-box {
    position: relative;
    width: 100%;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;

    .view-ring-button {
      display: none;
      position: absolute;
      bottom: 5px;
    }

    :hover .view-ring-button {
      display: block;
    }
  }

  img {
    width: 90%;
  }

  img.white-gold {
    display: ${(props) => (props.metal === "white-gold" ? "block" : "none")};
  }

  img.yellow-gold {
    display: ${(props) => (props.metal === "yellow-gold" ? "block" : "none")};
  }

  img.rose-gold {
    display: ${(props) => (props.metal === "rose-gold" ? "block" : "none")};
  }

  img.platinum {
    display: ${(props) => (props.metal === "platinum" ? "block" : "none")};
  }

  h5 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  h4 {
    font-size: 2rem;
    text-transform: capitalize;
  }

  h2 {
    font-size: 2.5rem;
    text-transform: capitalize;
    margin-bottom: 5px;
  }

  a {
    padding: 5px;
    font-size: 18px;
    font-style: italic;
    text-decoration: none;
    color: white;
    background: rgba(30, 46, 76);
    border-radius: 2px;
  }
`;

const PresetPendantItemBox = styled.div`
  border: 1px solid rgb(229, 229, 229);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  transition: all 0.3s ease;

  :hover {
    transform: scale(1.03);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
  }

  .ring-detail-row {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(30, 46, 76);
    letter-spacing: 1px;
  }

  #metal-changer-dots {
    text-align: center;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    aside {
      position: relative;
      top: -25px;
    }
  }

  aside {
    text-align: center;
  }

  img {
    width: 75%;
  }

  img.white-gold {
    display: ${(props) => (props.metal === "white-gold" ? "block" : "none")};
  }

  img.yellow-gold {
    display: ${(props) => (props.metal === "yellow-gold" ? "block" : "none")};
  }

  img.rose-gold {
    display: ${(props) => (props.metal === "rose-gold" ? "block" : "none")};
  }

  img.platinum {
    display: ${(props) => (props.metal === "platinum" ? "block" : "none")};
  }

  h5 {
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  a {
    padding: 5px;
    font-size: 18px;
    font-style: italic;
    text-decoration: none;
    color: white;
    background: rgba(30, 46, 76);
    border-radius: 2px;
  }

  button {
    background-color: rgba(30, 46, 76);
    color: #ffffff;
    margin-right: 10px;

    :nth-child(1) {
      display: ${(props) => (props.status ? "block" : "none")};
    }

    :nth-child(2) {
      display: ${(props) => (props.status ? "none" : "block")};
    }
  }
`;

const PresetStudItemBox = styled.div`
  border: 1px solid rgb(229, 229, 229);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  transition: all 0.3s ease;

  :hover {
    transform: scale(1.03);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
  }

  .ring-detail-row {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(30, 46, 76);
    letter-spacing: 1px;
  }

  #metal-changer-dots {
    text-align: center;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    aside {
      margin-top: 25px;
    }
  }

  aside {
    text-align: center;
  }

  img {
    width: 80%;
  }

  img.white-gold {
    display: ${(props) => (props.metal === "white-gold" ? "block" : "none")};
  }

  img.yellow-gold {
    display: ${(props) => (props.metal === "yellow-gold" ? "block" : "none")};
  }

  img.rose-gold {
    display: ${(props) => (props.metal === "rose-gold" ? "block" : "none")};
  }

  img.platinum {
    display: ${(props) => (props.metal === "platinum" ? "block" : "none")};
  }

  h5 {
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  a {
    padding: 5px;
    font-size: 18px;
    font-style: italic;
    text-decoration: none;
    color: white;
    background: rgba(30, 46, 76);
    border-radius: 2px;
  }

  button {
    background-color: rgba(30, 46, 76);
    color: #ffffff;
    margin-right: 10px;

    :nth-child(1) {
      display: ${(props) => (props.status ? "block" : "none")};
    }

    :nth-child(2) {
      display: ${(props) => (props.status ? "none" : "block")};
    }
  }
`;
const SocialSharingBox = styled.div`
  display: flex;
  align-items: center;

  div.social-button-container {
    margin-right: 10px;
    padding: 5px;
    // background: rgb(248, 250, 255);
    display: flex;
    justify-content: space-between;
  }
`;
const USPBannerBox = styled.div`
  color: rgb(30, 46, 76);
  background: rgb(248, 250, 255);
  margin-bottom: 10px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .banner-title {
    p {
      text-transform: uppercase;
      font-size: 2.5rem;
      font-weight: 700;
      width: fit-content;
      margin: auto;
      border-bottom: 2px solid rgb(30, 46, 76);
      padding-bottom: 8px;
    }
  }

  section.small-usp {
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-area: small-usp;
  }

  div.small-usp-icon-box {
    width: 22%;
    text-align: center;
    padding: 20px;

    img {
      width: 100%;
      height: auto;
    }

    p {
      font-size: 1.3rem;
      font-weight: bold;
      letter-spacing: 0.4px;
      text-transform: capitalize;
    }
  }

  section.big-usp {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: big-usp;
  }

  div.large-usp-icon-box {
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    b {
      font-size: 1.7rem;
      text-transform: uppercase;
    }

    p {
      font-size: 1.4rem;
      margin-top: 5px;
    }

    img {
      width: 55px;
      height: auto;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 990px) {
    section.big-usp {
      grid-template-columns: 1fr 1fr;
    }

    div.large-usp-icon-box {
      b {
        font-size: 1.4rem;
      }

      p {
        font-size: 1.4rem;
      }
    }

    div.small-usp-icon-box {
      width: 30%;

      p {
        font-size: 1rem;
        margin-top: 10px;
        text-align: center;
      }
    }
  }
`;

const ModalBox = styled.div`
  display: ${(props) => (props.status ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(30, 46, 76, 0.7);
  z-index: 5000;
  overflow: hidden;
  color: rgb(30, 46, 76);

  section#diamond-certificate-modal {
    width: 350px;
    height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: #ffffff;
    padding: 20px 40px;
    border-radius: 3px;
    position: relative;
    justify-content: center;
    align-items: center;

    img {
      width: 100px;
      margin-bottom: 20px;
    }

    p.title {
      font-size: 2rem;
      margin-bottom: 40px;
    }

    div {
      p {
        text-transform: capitalize;
        letter-spacing: 1px;
        margin-bottom: 20px;
      }
    }

    div.seperator {
      position: relative;
      height: 1px;
      width: 100%;
      background: rgba(30, 46, 76, 0.5);
      text-transform: uppercase;
      margin: 30px 0px;

      div.seperator-text {
        font-size: 1.5rem;
        color: rgba(30, 46, 76, 0.5);
        position: absolute;
        top: -9px;
        left: 45%;
        background: #ffffff;
        padding: 0px 5px;
      }
    }
  }

  section#gemstone-setting-modal {
    width: 350px;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    background: #ffffff;
    padding: 20px 40px;
    border-radius: 3px;
    position: relative;

    p {
      margin-bottom: 20px;
    }

    button {
      width: 100%;
      background: rgba(30, 46, 76);
      padding: 8px;
      font-size: 1.2rem;
      color: #ffffff;
      margin-bottom: 5px;

      :hover {
        background: rgba(30, 46, 76, 0.5);
      }
    }
  }

  div.close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

const JewelryGridItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  transition: all 0.3s ease;
  text-align: center;
  position: relative;

  a {
    text-decoration: none;
  }

  .wishlist-button {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    cursor: pointer;
    font-size: 1.8rem;
    position: absolute;
    right: 0px;

    .fa-heart {
      color: ${(props) =>
        props.wishlistStatus == false ? "#adaaad" : "rgb(30,46,76)"};
    }
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    .details-link {
      visibility: visible;
    }
  }

  .jewelry-builder--grid-inner {
    background: #fff;
    padding: 16px;
  }

  .jewelry-builder--grid-image {
    height: auto;
    overflow: hidden;
    margin-top: 40px;

    img {
      max-width: 100%;
      margin: auto;
    }

    img.white-gold {
      display: ${(props) => (props.metal === "white-gold" ? "block" : "none")};
    }

    img.yellow-gold {
      display: ${(props) => (props.metal === "yellow-gold" ? "block" : "none")};
    }

    img.rose-gold {
      display: ${(props) => (props.metal === "rose-gold" ? "block" : "none")};
    }

    img.platinum {
      display: ${(props) => (props.metal === "platinum" ? "block" : "none")};
    }
  }

  .jewelry-builder--grid-metal-thumbnails {
    position: relative;
    margin-top: 10px;

    ul {
      list-style: none;
      text-align: center;
      width: 100%;
      height: 100%;
      transition: all 350ms ease;

      li {
        display: inline-block;
        cursor: pointer;
        height: 2rem;
        opacity: 1;
        width: 2rem;
        margin: 4px;

        div {
          height: 100%;
        }
      }
    }

    div.metal-displayer {
      position: absolute;
      width: 100%;
      height: auto;
      top: -15px;
      z-index: 200;
      margin: auto;
      text-align: center;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      font-weight: bold;
    }
  }

  .jewelry-builder--grid-info {
    color: rgb(30, 46, 76);

    .jewelry-builder--grid-name {
      font-size: 1.6rem;
      font-weight: bold;
      margin: 8px auto;
      margin-bottom: 0.75rem;
      text-transform: capitalize;
    }

    .jewelry-builder--grid-about {
      font-size: 1.3rem;
      margin: auto;
      margin-bottom: 0.75rem;
      text-transform: capitalize;
    }

    .jewelry-builder--grid-price {
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }
  }

  .details-link {
    display: block;
    width: 100%;
    padding: 1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    visibility: hidden;
    background: rgb(30, 46, 76);
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media (max-width: 640px) {
    .jewelry-builder--grid-info {
      color: rgb(30, 46, 76);

      .jewelry-builder--grid-name {
        font-size: 1.4rem;
      }

      .jewelry-builder--grid-about {
        font-size: 1.2rem;
      }

      .jewelry-builder--grid-price {
        font-size: 1.4rem;
      }
    }
  }
`;

const appear = keyframes`
    to{
        opacity: 1;
    }
`;

const disappear = keyframes`
    0%   {left: 150;}
    50%  {left: 200px;}
    100%  {left: 250px;
        display: none;}
`;

const hide = keyframes`
        0%{
            bottom: 0;
            opacity: 0;
        }
        20%{
            bottom: 40px;
            opacity: 0.5;
        }
        40%{
            bottom: 80px;
            opacity: 1;
        }
        60%{
            bottom: 80px;
            opacity: 1;
        }
        80%{
            bottom: 120px;
            opacity: 0.5;
        }
        100%{
            bottom: 180px;
            opacity: 0;
        }
`;

const PopUpModalBox = styled.div`
  width: fit-content;
  position: fixed;
  font-size: 1.4rem;
  z-index: 8000;
  opacity: 0;
  bottom: 180px;
  left: 50%;
  padding: 10px;
  color: #ffffff;
  border-radius: 5px;
  background: rgb(30, 46, 76);
  animation: ${(props) =>
    props.status
      ? css`
          ${hide} 1s linear
        `
      : ""};
`;

const DiamondSizeLookerModuleBox = styled.div`
  display: ${(props) => (props.status ? "block" : "none")};
  width: 500px;
  height: 500px;
  background: rgba(249, 249, 249);
  overflow: hidden;
  position: relative;

  #zoom-controller {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    z-index: 201;
  }

  .handHolder {
    margin: auto;
    width: 500px;
    height: 500px;
    transform: ${(props) => (props.scale === true ? "scale(1.6)" : "none")};
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .neckHolder {
    margin: auto;
    width: 500px;
    height: 500px;
    transform: ${(props) => (props.scale === true ? "scale(1.6)" : "none")};
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .earHolder {
    margin: auto;
    width: 500px;
    height: 500px;
    transform: ${(props) => (props.scale === true ? "scale(1.6)" : "none")};
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .hand {
    background-image: url(${(props) => props.baseImage});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100% 100%;
  }

  .ringMid {
    width: 35%;
    height: 47.2%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: visible;
  }

  .pendantMid {
    width: 51.2%;
    height: 56%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: visible;
  }

  .studMid {
    width: 50.2%;
    height: 55%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: visible;
  }

  .stone {
    position: absolute;
    z-index: 2;
    width: 68px;
    height: 68px;
    right: -34px;
    bottom: -34px;
    transform: ${(props) => `scale(${props.tXValue},${props.tYValue})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${(props) => `-${props.pValue}px 0px`};
    transform-origin: center;
    background-image: url("https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/sprites/diamond-shapes-sprite-min.png");
    overflow: visible;
    transition: all 0.24s fade-in;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #slider-container {
    position: absolute;
    bottom: 5px;
    left: 0px;
    width: 100%;
  }

  #shapeSlider {
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  #caratSlider {
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-list {
    height: 100%;

    .slick-track {
      height: 50px;
    }
  }

  .slick-slider {
    width: 95%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;

    .shape-holder {
      padding: 5px;
    }

    .weight-holder {
      padding: 5px;
    }

    img {
      width: 30px;
      height: 30px;
    }

    p {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .fi-cnsrxl-chevron-solid {
    font-size: 2rem;
  }

  .fi-cnslxl-chevron-solid {
    font-size: 2rem;
  }

  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }

  .center .slick-center .shape-holder {
    border-radius: 50%;
    box-shadow: 0px 0px 15px #e78267;
  }

  .center .slick-center .weight-holder {
    border-radius: 50%;
    box-shadow: 0px 0px 15px #e78267;
  }

  @media (max-width: 580px) {
    width: 100%;
    height: 100%;

    .handHolder {
      bottom: -50px;
      left: 0;
    }

    .neckHolder {
      bottom: 0px;
      left: -90px;
    }

    .earHolder {
      left: -90px;
    }
  }
`;

export {
  ListingPageBox,
  ListingsBox,
  ListGridItemBox,
  JewelryGridItemBox,
  PaginationBox,
  FilterBox,
  FilterItemBox,
  PresetRingItemBox,
  PresetPendantItemBox,
  PresetStudItemBox,
  SocialSharingBox,
  USPBannerBox,
  ItemNotFound,
  DetailsBox,
  AlternateDetailsBox,
  ModalBox,
  PopUpModalBox,
  DiamondSizeLookerModuleBox,
};
