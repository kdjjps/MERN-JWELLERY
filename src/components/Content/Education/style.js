import styled from "styled-components";

const EducationPageBox = styled.div`
  color: rgb(30, 46, 76);

  section.banner {
    height: 200px;
    background-image: url("https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/education-banner.jpg");
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 10px;

    h1 {
      text-transform: uppercase;
      font-size: 4.2rem;
    }
  }

  section.category-row {
    width: 100%;
    display: flex;
    padding: 10px;
    margin: 20px 0px;

    div {
      width: 50%;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0.5rem;
      overflow: hidden;

      a {
        background: #d4c437;
        width: fit-content;
        padding: 1rem;
        color: white;
        font-size: 1.8rem;
        text-transform: uppercase;
        text-decoration: none;
      }

      img {
        width: 100%;
      }
    }
  }

  section.education-links {
    display: flex;
  }

  section.grid-content {
    padding: 10px;
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  section.grid-content-gemstone {
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  div.grid-box {
    padding: 30px 10px;
    text-align: center;
    color: rgb(30, 46, 76);

    div.grid-text {
      padding: 20px 10px;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: space-between;
    }

    div.gemstone-grid-text {
      padding: 20px 10px;
      height: 100px;
    }

    div.link-forwarder {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h2 {
      font-size: 2.4rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    h2.gemstone-heading {
      font-size: 2rem;
      margin-bottom: 20px;
    }

    img {
      width: 100%;
      border: 1px solid rgba(30, 46, 76, 0.2);
    }

    img.gemstone {
      width: 80%;
    }

    a {
      font-size: 1.8rem;
      text-decoration: none;
      padding: 10px;
      font-weight: bold;
      color: #ffffff;
      background: rgba(255, 168, 0);
    }

    button {
      display: block;
      margin-top: 10px;
      width: 100%;
    }
  }

  section#metals-education {
    line-height: 1.4;
    letter-spacing: 1px;

    h1 {
      margin-bottom: 20px;
    }

    h2 {
      margin-bottom: 10px;
    }

    p.para {
      margin-bottom: 15px;
    }
  }

  div.sub-topic {
    margin: 10px 0px;
    padding: 10px;
    background-color: rgb(248, 250, 255);
    font-size: 0.8rem;

    h2 {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 1200px) {
    section.grid-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    padding: 5px;

    section.category-row {
      display: grid;
      grid-template-areas:
        "text-holder"
        "background-holder";

      div {
        width: 100%;
      }

      div.text-div {
        color: white;
        text-align: center;
        grid-area: text-holder;

        h1 {
          color: #d4c437;
          margin-bottom: 10px;
        }

        p {
          color: rgb(30, 46, 76);
          margin-bottom: 10px;
        }

        a {
          width: 100%;
          background: rgb(30, 46, 76);
          margin-bottom: 10px;
        }
      }

      div.image-holder {
        grid-holder: background-holder;
      }
    }

    section.grid-content {
      grid-template-columns: 1fr;
    }

    section.grid-content-gemstone {
      padding: 10px;
      width: 100%;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
  }
`;

const EducationNavBox = styled.div`
  div.education-nav {
    width: 400px;
    margin-right: 10px;
  }

  div.education-nav-parent {
    margin-bottom: 1px;
  }

  div.education-nav-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(30, 46, 76);
    color: white;
    padding: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  div.education-drop-content {
    border-left: 1px solid rgb(30, 46, 76);
    border-right: 1px solid rgb(30, 46, 76);
    overflow: hidden;
    height: 0px;
    transition: height 0.2s ease-in;

    ul li {
      list-style: none;
      font-size: 1.5rem;
      border-bottom: 1px solid rgb(30, 46, 76);
      height: 40px;
      display: flex;
      align-items: center;
      padding-left: 10px;
    }
  }

  .fa-angle-left {
    transition: transform 0.2s ease-in;
  }

  #diamonds .education-drop-content {
    height: ${(props) => (props.diamondDropStatus ? "320px" : "0px")};
  }

  #diamonds .fa-angle-left {
    transform: ${(props) =>
      props.diamondDropStatus ? "rotate(-90deg)" : "none"};
  }

  #gemstones .education-drop-content {
    height: ${(props) => (props.gemDropStatus ? "360px" : "0px")};
  }

  #gemstones .fa-angle-left {
    transform: ${(props) => (props.gemDropStatus ? "rotate(-90deg)" : "none")};
  }

  #metals .education-drop-content {
    height: ${(props) => (props.metalDropStatus ? "200px" : "0px")};
  }

  #metals .fa-angle-left {
    transform: ${(props) =>
      props.metalDropStatus ? "rotate(-90deg)" : "none"};
  }

  #other-guide .education-drop-content {
    height: ${(props) => (props.otherDropStatus ? "120px" : "0px")};
  }

  #other-guide .fa-angle-left {
    transform: ${(props) =>
      props.otherDropStatus ? "rotate(-90deg)" : "none"};
  }

  #policies .education-drop-content {
    height: ${(props) => (props.policiesDropStatus ? "120px" : "0px")};
  }

  #policies .fa-angle-left {
    transform: ${(props) =>
      props.policiesDropStatus ? "rotate(-90deg)" : "none"};
  }
`;

const EducationTopicPageBox = styled.div`
  color: rgb(30, 46, 76);

  h1 {
    margin-bottom: 20px;
    letter-spacing: 1px;
    padding: 5px;
    background: rgb(30, 46, 76);
    color: white;
  }

  h2 {
    width: fit-content;
    margin-bottom: 10px;
    letter-spacing: 1px;
  }

  h3 {
    margin-bottom: 10px;
  }

  p {
    text-transform: none;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  ul {
    margin-bottom: 10px;
    li {
      font-size: 1.5rem;
      line-height: 2;
    }
  }

  .row {
    display: flex;
    padding: 10px;
    align-items: center;
    margin-bottom: 20px;
    background: rgb(248, 250, 255);

    :nth-child(2n + 1) {
      background: #ffffff;
    }

    img {
      width: 150px;
      margin-right: 10px;
    }

    p {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;
      background: rgba(255, 168, 0);
      text-decoration: none;
      color: #ffffff;
      font-weight: bold;
      font-size: 16px;
    }
  }

  div.ring-edu-row {
    width: 900px;
    margin: auto;
    text-align: center;
    margin-bottom: 30px;

    div.ring-edu-content {
      display: flex;
      align-items: center;
    }

    h2 {
      font-size: 2.5rem;
    }

    img {
      width: 300px;
    }

    ol li {
      font-size: 1.6rem;
      letter-spacing: 1px;
      line-height: 22px;
      text-align: left;
    }

    a {
      background: rgba(255, 168, 0);
      color: white;
      padding: 10px;
      text-decoration: none;
      font-size: 1.6rem;
      font-weight: bold;
      text-transform: capitalize;
    }
  }

  @media (max-width: 640px) {
    text-align: justify;
    padding: 8px;

    h1,
    h2,
    h3 {
      width: 100%;
      text-align: center;
    }

    div.ring-edu-row {
      div.ring-edu-content {
        flex-direction: column;
      }
    }
  }
`;

const GemstoneTopicEducationBox = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(30, 46, 76);
  margin: 0px auto 5vw;
  padding: 20px;

  h1 {
    width: 100%;
    margin-bottom: 20px;
    letter-spacing: 1px;
    padding: 5px;
    background: rgb(30, 46, 76);
    color: white;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
    text-align: justify;
    margin-bottom: 20px;
    line-height: 1.5;
    padding: 10px;
  }

  #jewelry-category-box {
    width: 100%;
  }

  a {
    background: #de9d05;
    color: rgb(30, 46, 76);
    padding: 10px;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: bold;
  }

  .category-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 465px;
    margin-bottom: 20px;
  }

  div.row-box {
    width: 50%;
    vertical-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .category-description-box {
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    h3 {
      text-transform: uppercase;
      font-size: 2.4rem;
      margin-bottom: 20px;
      border-bottom: 3px solid rgb(30, 46, 76);
    }

    button {
      background: #de9d05;
      color: rgb(30, 46, 76);

      :hover {
        background: rgb(30, 46, 76);
        color: white;
      }
    }
  }

  div.background-holder {
    width: 50%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 1180px) {
    padding: 10px;

    h2 {
      font-size: 6vw;
    }

    p {
      margin-bottom: 0;
    }

    #jewelry-section-title {
      width: 100%;
    }

    #jewelry-category-box {
      width: 100%;
      padding: 0px;
    }

    .category-row {
      width: 100%;
      margin-bottom: 5px;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
        "row-box"
        "background-holder";
      height: auto;
    }

    div.row-box {
      width: 100%;
      grid-area: row-box;

      .category-description-box {
        height: auto;
      }
    }

    div.background-holder {
      width: 100%;
      height: 300px;
      grid-area: background-holder;

      .category-description-box {
        position: static;
        width: 80%;
      }
    }
  }
`;

const DiamondTopicEducationBox = styled.div`
  color: rgb(30, 46, 76);

  div.para {
    margin-bottom: 30px;
  }

  h1 {
    margin-bottom: 20px;
    letter-spacing: 1px;
    padding: 5px;
    background: rgb(30, 46, 76);
    color: white;
  }

  h2 {
    text-transform: capitalize;
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-size: 25px;
    line-height: 2.5rem;
  }

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    text-transform: none;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
  }

  button {
    background: rgba(255, 168, 0);
  }

  div.image-container {
    margin-bottom: 30px;
  }

  img {
    width: 80%;
  }

  div.info-table {
    margin-bottom: 30px;
  }

  table {
    width: 80%;
    font-size: 1.4rem;
    text-align: left;
    border-collapse: collapse;
    letter-spacing: 0.5px;
    line-height: 1.5;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: rgb(248, 250, 255);
  }

  @media (max-width: 640px) {
    text-align: justify;
    padding: 8px;

    h1,
    h2,
    h3 {
      width: 100%;
      text-align: center;
    }
  }
`;

export {
  EducationPageBox,
  EducationTopicPageBox,
  EducationNavBox,
  GemstoneTopicEducationBox,
  DiamondTopicEducationBox,
};
