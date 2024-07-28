import styled from "styled-components";

const UserSpecificBox = styled.div`
  display: flex;
  margin-bottom: 50px;
  color: rgb(30, 46, 76);

  section.user-specific-content {
    width: 100%;
    padding: 20px;
    margin: auto;
  }

  div#profile {
    .banner {
      background: rgb(248, 250, 255);
      padding: 20px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      border: 1px solid rgba(30, 46, 76, 0.2);
      border-radius: 5px;

      img {
        width: 60px;
        margin: 10px;
      }

      h2 {
        margin-bottom: 12px;
      }

      p {
        font-size: 1.2rem;
      }
    }

    .details-holder {
      border: 1px solid rgba(30, 46, 76, 0.2);
      border-radius: 5px;

      .holder-top-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: rgb(248, 250, 255);
        padding: 20px;
        font-size: 1.6rem;
        font-weight: bold;
        border-bottom: 1px solid rgba(30, 46, 76, 0.2);

        a {
          text-decoration: none;
          font-size: 1.1rem;
          padding: 10px;
          border-radius: 5px;
          color: white;
          background: linear-gradient(
            to right,
            rgb(222, 87, 229),
            rgb(136, 99, 251)
          );
        }
      }

      .details {
        padding: 15px;

        .detail-row {
          display: flex;

          .detail-title {
            width: 300px;
            padding: 10px;
            font-size: 1.2rem;
            text-transform: uppercase;
          }

          .detail-data {
            width: 200px;
            padding: 10px;
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  div#profile-edit-section {
    border: 1px solid rgba(30, 46, 76, 0.2);
    border-radius: 5px;

    .profile-edit-banner {
      padding: 15px;
      display: flex;
      align-items: center;
      background: rgb(248, 250, 255);
      border-bottom: 1px solid rgba(30, 46, 76, 0.2);
    }

    img {
      width: 40px;
    }

    .banner-title {
      line-height: 15px;
      color: rgba(0, 0, 0, 0.6);
    }

    .details {
      padding: 15px;

      .detail-row {
        display: flex;
        justify-content: space-between;

        .detail {
          width: 50%;
          padding: 10px;
          font-size: 1.2rem;
        }

        .detail-label {
          font-size: 1.1rem;
          margin-bottom: 7px;
          color: rgba(0, 0, 0, 0.6);
        }

        select {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid rgba(30, 46, 76, 0.2);
          background: white;
        }

        input {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid rgba(30, 46, 76, 0.2);
        }
      }

      .buttons-container {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin: 30px 0px 10px 0px;

        button {
          width: 49%;
          border-radius: 5px;
        }
      }

      p.end-note {
        font-size: 1rem;
        margin-left: 30px;
      }
    }
  }

  div.my-account {
    text-align: center;
    width: 750px;
    margin: auto;

    p.title {
      font-size: 3rem;
      text-transform: uppercase;
    }

    p.sub-title {
      font-size: 1.8rem;
      margin: 15px 0px;
    }

    p.logged-in-detail {
      font-size: 1.4rem;
      text-transform: none;
    }

    div.orders-tracker {
      margin: 10px 0px;
      width: 100%;
      height: 200px;
      border: 1px solid rgb(30, 46, 76);
      background: rgb(248, 250, 255);
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 1.3rem;
      }
    }

    div.links-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;

      div {
        height: 120px;
        border: 1px solid rgba(30, 46, 76, 0.3);
        text-align: left;
        padding: 10px;

        a {
          text-decoration: none;
          color: rgb(30, 46, 76);
        }

        p {
          font-size: 1.2rem;
          text-transform: none;
        }

        p.box-title {
          font-size: 1.8rem;
          margin-bottom: 4px;
          letter-spacing: 1px;
        }
      }
    }
  }

  div.my-orders {
    width: 100%;

    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }

    td,
    th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: rgba(30, 46, 76, 0.2);
    }
  }

  div.not-authorized-displayer {
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }

  div#coupons {
    .coupon {
      display: flex;
      margin-bottom: 20px;
      border: 1px solid rgba(30, 46, 76, 0.2);
      color: rgb(30, 46, 76);
    }

    .coupon-image {
      width: 200px;
      height: 140px;
      background: #f9f9fa;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .coupon-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/discount-wheel.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 130px 130px;
    }

    .coupon-image-text {
      font-size: 3rem;
      font-weight: bold;
    }

    .coupon-details {
      padding: 20px;
    }

    .description {
      margin-bottom: 7px;
    }

    .coupon-code {
      font-weight: bold;
      margin-left: 5px;
    }

    .expiry {
      margin-top: 30px;
      color: rgba(30, 46, 76, 0.4);
      font-size: 1.2rem;
    }
  }

  @media (max-width: 800px) {
    section.user-specific-content {
      padding: 5px;
    }

    div.my-account {
      width: 100%;
    }

    div#profile-edit-section {
      .details {
        padding: 5px;

        p.end-note {
          margin-left: 5px;
        }
      }
    }
  }
`;

export default UserSpecificBox;
