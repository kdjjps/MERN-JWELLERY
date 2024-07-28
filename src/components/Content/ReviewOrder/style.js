import styled from "styled-components";

const ReviewOrderBox = styled.div`
  display: flex;
  padding: 30px;
  color: rgb(30, 46, 76);

  div.data-holder {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
    }

    a {
      text-decoration: none;
    }
  }

  section.diamond-displayer {
    width: 80%;
    height: auto;
    position: relative;
    display: ${(props) => (props.diamondDisplayer ? "block" : "none")};

    img.diamond-image {
      width: 100%;
      height: 100%;
    }

    img.jewelry-image {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 50px;
      height: 50px;
    }
  }

  section.jewelry-displayer {
    width: 80%;
    height: auto;
    position: relative;
    display: ${(props) => (props.jewelryDisplayer ? "block" : "none")};

    img.diamond-image {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 50px;
      height: 50px;
    }

    img.jewelry-image {
      width: 100%;
      height: 100%;
    }
  }

  section.details-container {
    margin-bottom: 30px;

    div.details {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 38px;
        height: 38px;
        background: rgb(30, 46, 76);
        margin-right: 5px;
      }

      p.text-detail {
        font-size: 1.6rem;
      }

      p.number-detail {
        font-size: 1.4rem;
        color: rgba(30, 46, 76, 0.8);
        font-style: italic;
      }

      a {
        font-size: 1.4rem;
        padding: 5px;
        background: rgba(30, 46, 76, 0.2);
      }
    }
  }

  button {
    width: 100%;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    div.data-holder {
      width: 100%;
      align-items: center;
    }
  }
`;

export default ReviewOrderBox;
