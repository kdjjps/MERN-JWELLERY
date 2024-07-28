import styled from "styled-components";

const HomepageBox = styled.div``;

const HomepageBannerBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto 5vw;

  #bannerVideo-desktop {
    width: 100%;
    min-height: 100%;
  }

  #bannerVideo-mobile {
    display: none;
  }

  .image-container {
    max-width: 100%;
    overflow: hidden;
  }

  .responsive-image {
    width: 100%;
    height: auto;
  }

  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding: 20px;
    background-color: rgba(75, 43, 237, 0.1);

    .myBtn {
      width: 300px;
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 1px;
      padding: 10px;
      border: 1px solid rgba(250, 250, 250, 0.9);
      background: rgba(0, 0, 0, 0.3);
      color: #fff;
      cursor: pointer;
      border-radius: 0px;
      margin-bottom: 10px;
      text-decoration: none;
      text-align: center;
    }
  }

  .myBtn:hover {
    background: rgba(218, 165, 32, 0.8);
  }

  @media (max-width: 550px) {
    #bannerVideo-desktop {
      display: none;
    }

    #bannerVideo-mobile {
      display: block;
      width: 100%;
      height: 100%;
    }

    .content {
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      .myBtn {
        width: 200px;
        font-size: 1rem;
      }
    }
  }
`;

const CreateDreamRingComponentBox = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #1e2e4c;
  margin: 0px auto 5vw;

  h2 {
    font-size: 2vw;
    color: #1e2e4c;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  h3 {
    font-size: 20px;
    background: #de9d05;
    padding: 5px;
    border-radius: 5px;
    position: relative;
    top: -25px;
  }

  p {
    text-align: center;
    font-weight: bold;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;

    .category-box {
      padding: 10px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;

      img {
        width: 90%;
      }
    }
  }

  a {
    display: block;
    margin: 10px 0px;
    width: 250px;
    padding: 15px;
    background-color: rgba(30, 46, 76);
    color: #ffffff;
    font-size: 1.4rem;
    text-align: center;
    text-decoration: none;

    :hover {
      background: rgba(30, 46, 76, 0.5);
    }
  }

  @media (max-width: 1230px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 10px;

    h2 {
      font-size: 6vw;
    }

    section {
      width: 100%;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-gap: 25px;

      .category-box {
        img {
          width: 200px;
        }
      }
    }
  }
`;

const JewelrySectionBox = styled.div`
  height: fit-content;
  background: #f8faff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(30, 46, 76);
  margin: auto;
  padding: 20px;

  h2 {
    font-size: 2vw;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
    text-transform: capitalize;
    font-style: italic;
    line-height: 2rem;
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
    justify-content: center;
    height: 465px;
    margin-bottom: 20px;
  }

  div.content-row-box {
    vertical-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  div.image-row-box {
    vertical-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 2.4rem;
      margin: 15px 0px;
      display: none;
    }
  }

  .category-description-box {
    width: 420px;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 2.4rem;
      margin-bottom: 20px;
    }

    a {
      background: #de9d05;
      color: rgb(30, 46, 76);

      :hover {
        background: rgb(30, 46, 76);
        color: white;
      }
    }
  }

  div.background-holder {
    width: 450px;
    height: 450px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 1180px) {
    padding: 10px;
    height: auto;

    h2 {
      font-size: 6vw;
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
      height: 100%;
      margin-bottom: 5px;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
        "image-row-box"
        "content-row-box";
      border: 2px solid rgba(30, 46, 76, 0.3);
      padding: 6px;
      margin-bottom: 20px;
    }

    div.content-row-box {
      width: 100%;
      grid-area: content-row-box;
      padding: 20px;

      .category-description-box {
        width: 300px;
        height: auto;

        h3 {
          display: none;
        }
      }
    }

    div.image-row-box {
      width: 100%;
      grid-area: image-row-box;

      h3 {
        display: block;
      }
    }

    div.background-holder {
      width: 300px;
      height: 300px;
      grid-area: background-holder;

      .category-description-box {
        position: static;
        width: 80%;
      }
    }
  }
`;

const GemsRecommendationBox = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const ItemScrollerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto 5vw;

  h2 {
    font-size: 2vw;
    color: #1e2e4c;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  p {
    color: #1e2e4c;
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: center;
    margin-bottom: 20px;
  }

  .slick-slider {
    width: 80%;
    height: auto;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    height: 180px;
  }

  img {
    width: 120px;
    height: 120px;
    margin: 40px;
    position: relative;
    text-align: center;
  }

  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }

  .center .slick-center img {
    opacity: 1;
    -ms-transform: scale(1.8);
    transform: scale(1.8);
  }

  .center img {
    transition: all 0.3s ease;
  }

  p.name-displayer {
    font-size: 2rem;
  }

  @media (max-width: 550px) {
    margin: 50px 0px;

    h2 {
      font-size: 6vw;
    }

    .slick-slider {
      width: 100%;
    }

    .slick-slide {
      margin-bottom: 20px;
      height: 160px;
    }

    img {
      width: 60px;
      height: 100%;
      margin: 10px;
    }
  }
`;

const ModalBox = styled.div`
  width: fit-content;
  padding: 20px;
  border-radius: 10px;
  background: rgb(30, 46, 76);
  color: #ffffff;
`;

export {
  HomepageBox,
  HomepageBannerBox,
  CreateDreamRingComponentBox,
  GemsRecommendationBox,
  ItemScrollerBox,
  JewelrySectionBox,
  ModalBox,
};
