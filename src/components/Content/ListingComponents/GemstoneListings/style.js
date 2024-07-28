import styled from "styled-components";

const GemstoneHomepageBox = styled.div`
  section {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    color: rgb(30, 46, 76);
    padding: 20px;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      color: rgb(30, 46, 76);
      text-decoration: none;
      width: fit-content;
      font-size: 1.5rem;
      letter-spacing: 1px;
      margin: auto;
      text-decoration: none;
      border: 1px solid rgb(229, 229, 229);
      text-align: center;

      img {
        width: 60%;
        margin-bottom: 20px;
        padding: 20px;
      }

      p.gem-english-name {
        font-size: 1.8rem;
        margin-bottom: 5px;
      }

      p.gem-hindi-name {
        font-size: 1.5rem;
        margin-bottom: 10px;
        font-style: italic;
      }

      :hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    }
  }

  @media (max-width: 900px) {
    section {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const GemstoneItemBox = styled.div`
  padding: 10px;
  border: 1px solid rgb(229, 229, 229);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  color: rgba(30, 46, 76);

  :hover {
    transform: scale(1.03);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
  }

  img {
    width: 100%;
  }

  .gem-item-details-container {
    text-align: center;
    padding: 10px;
    text-transform: uppercase;

    h2 {
      font-size: 1.4rem;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 10px;
    }

    p#sku {
      font-size: 1.2rem;
    }

    p#gem-item-price {
      font-size: 1.6rem;
      font-weight: 700;
    }
  }

  a {
    display: block;
    padding: 10px;
    text-align: center;
    font-size: 1.8rem;
    width: 100%;
    background-color: rgba(30, 46, 76);
    color: #ffffff;
    margin-right: 10px;
    text-decoration: none;
  }
`;
const GemstoneSettingBox = styled.div`
  box-sizing: border-box;
  position: relative;
  color: rgb(30, 46, 76);

  img {
    width: 100%;
  }

  p.price {
    opacity: 0;
    transition: opacity 0.4s ease-in;
  }

  :hover {
    border: 1px solid black;

    p.price {
      opacity: 1;
    }
  }
`;

const GemstoneShortInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgb(30, 46, 76);

  div {
    width: 60%;

    h2 {
      font-size: 2.4rem;
      text-transform: capitalize;
      margin-bottom: 10px;
    }

    img {
      width: 100px;
    }

    p {
      font-size: 1.6rem;
      text-transform: none;
      line-height: 1.6;
    }
  }

  img {
    width: 200px;
  }

  @media (max-width: 900px) {
    padding: 5px;
    flex-direction: column;

    div {
      width: 100%;
      text-align: justify;
      padding: 5px;
    }

    img {
      margin: auto;
      width: 50%;
      height: auto;
    }
  }
`;

const GemstoneWearGuideTableBox = styled.div`
  overflow: hidden;

  button {
    width: 100%;
    margin-bottom: 20px;
  }

  .guide-table {
    height: 100%;
    transition: height 350ms ease-out;
    display: flex;
    align-items: center;
    overflow: hidden;
    color: rgb(30, 46, 76);

    table,
    th,
    td {
      border: 2px solid rgb(30, 46, 76);
      border-collapse: collapse;
      font-size: 1.5rem;
      margin: 8px;
    }

    th,
    td {
      padding: 5px;
      text-align: left;
    }

    th {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 900px) {
    padding: 5px;
  }
`;

const GemstoneInfoBox = styled.div`
  margin-top: 10px;

  section.info-links {
    background: rgb(30, 46, 76);
    padding: 10px;

    li {
      list-style: none;
      display: inline-block;
      font-size: 1.5rem;
      margin-right: 40px;
      font-weight: bold;
      letter-spacing: 1px;
      cursor: pointer;

      .fa-angle-right {
        margin-left: 6px;
      }
    }

    li#link-one {
      color: ${(props) => (props.linkOneStatus ? "#de9d05" : "white")};

      .fa-angle-right {
        transform: ${(props) =>
          props.linkOneStatus ? "rotate(90deg)" : "none"};
        transition: transform 0.3s ease;
      }
    }

    li#link-two {
      color: ${(props) => (props.linkTwoStatus ? "#de9d05" : "rgb(30,46,76)")};

      .fa-angle-right {
        transform: ${(props) =>
          props.linkTwoStatus ? "rotate(90deg)" : "none"};
        transition: transform 0.3s ease;
      }
    }

    li#link-three {
      color: ${(props) =>
        props.linkThreeStatus ? "#de9d05" : "rgb(30,46,76)"};

      .fa-angle-right {
        transform: ${(props) =>
          props.linkThreeStatus ? "rotate(90deg)" : "none"};
        transition: transform 0.2s ease;
      }
    }
  }

  section.info-container {
    div.info-content {
      background: #ffffff;
      overflow: hidden;
      transition: height 0.2s ease;
    }

    div.info-content:nth-child(1) {
      height: ${(props) => (props.linkOneStatus ? "auto" : "0px")};
    }

    div.info-content:nth-child(2) {
      height: ${(props) => (props.linkTwoStatus ? "auto" : "0px")};
    }

    div.info-content:nth-child(3) {
      height: ${(props) => (props.linkThreeStatus ? "auto" : "0px")};
    }
  }
`;
export {
  GemstoneHomepageBox,
  GemstoneItemBox,
  GemstoneSettingBox,
  GemstoneShortInfoBox,
  GemstoneWearGuideTableBox,
  GemstoneInfoBox,
};
