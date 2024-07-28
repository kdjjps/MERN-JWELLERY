import React, { useState, useEffect } from "react";
import { PalmistryBox } from "./style";
import { BannerBox } from "../common-style";
import RazorpayForAstro from "../Payment/RazorpayForAstro";
import PaypalForAstro from "../Payment/PaypalForAstro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenus, faMars } from "@fortawesome/free-solid-svg-icons";
import { isUserEmail, isUserName, isUserNumber, isValidCity } from "./Validate";
import { useCookies } from "react-cookie";

const ConsultationData = [
  { name: "Video Call Consultation" },
  { name: "Voice Call Consultation" },
];

const ProductNameData = [
  { name: "Single Consultation" },
  { name: "Couple Consultation" },
  { name: "Business & Career Consultation" },
  // { name: "Marriage & Relationship" },
];

export default function GemsRecommendation() {
  const bannerImage =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/astrology-banner.png";
  const [requesterState, setRequesterState] = useState({
    gender: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [consultationMode, setConsultationMode] = useState("");
  const [consultationModeError, setConsultationModeError] = useState("");
  const [productName, setProductName] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [rightHandImages, setRightHandImages] = useState([]);
  const [rightHandImagesError, setRightHandImagesError] = useState("");
  const [leftHandImages, setLeftHandImages] = useState([]);
  const [leftHandImagesError, setLeftHandImagesError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [time, setTime] = useState("");
  const [timeError, setTimeError] = useState("");
  const [gender, setGender] = useState("");
  const [amount, setAmount] = useState(1200);
  const [cookies, setCookie] = useCookies();
  let paymentMode = "paypal";
  if (cookies.currencyCode == "INR") {
    paymentMode = "razorpay";
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(isUserEmail(e.target.value.replace(/\s/g, "")));
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    setNameError(isUserName(e.target.value.replace(/\s/g, "")));
  };

  const onChangeNumber = (e) => {
    setNumber(e.target.value.replace(/\s/g, ""));
    setNumberError(isUserNumber(e.target.value.replace(/\s/g, "")));
  };

  const onChangeCity = (e) => {
    setCity(e.target.value);
    setCityError(isValidCity(e.target.value.replace(/\s/g, "")));
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
    setDateError(e.target.value === "" ? "Please enter date of birth" : "");
  };

  const onChangeTime = (e) => {
    setTime(e.target.value);
    setTimeError(e.target.value === "" ? "Please enter date of time" : "");
  };

  const onChangeGender = (gender) => {
    setRequesterState({
      gender,
    });
  };

  const onInputChangeForRightHand = (e) => {
    setRightHandImages(e.target.files);
    setRightHandImagesError("");
  };

  const onInputChangeForLeftHand = (e) => {
    console.log("fgsfgfdsgdsgg", e.target.files);
    setLeftHandImages(e.target.files);
    setLeftHandImagesError("");
  };

  const handleConsultationModeChange = (e) => {
    setConsultationMode(e.target.value);
    setConsultationModeError("");
  };

  const handleProductNameChannge = (e) => {
    setProductName(e.target.value);
    if (e.target.value == "Couple Consultation") {
      setAmount(1500);
    } else {
      setAmount(1200);
    }
    setProductNameError("");
  };

  const consultationArray = ConsultationData.map((item, index) => {
    return (
      <option value={item.iso2} key={index}>
        {item.name}
      </option>
    );
  });

  const productNameArray = ProductNameData.map((item, index) => {
    return (
      <option value={item.iso2} key={index}>
        {item.name}
      </option>
    );
  });

  const handleSubmit = () => {
    if (
      !name ||
      nameError ||
      !email ||
      emailError ||
      !number ||
      nameError ||
      !date ||
      dateError ||
      !time ||
      timeError ||
      !consultationMode ||
      consultationModeError ||
      !productName ||
      productNameError ||
      !city ||
      cityError ||
      !leftHandImages.length > 0 ||
      leftHandImagesError ||
      !rightHandImages.length > 0 ||
      rightHandImagesError
    ) {
      setNameError(!name ? "Please enter name" : nameError);
      setEmailError(!email ? "Please enter email id" : emailError);
      setNumberError(!number ? "Please enter mobile number" : numberError);
      setDateError(!date ? "Please enter date of birth" : dateError);
      setTimeError(!time ? "Please enter time of birth" : timeError);
      setCityError(!city ? "Please Enter City" : cityError);
      setConsultationModeError(
        !consultationMode ? "Please enter Consultation Mode" : ""
      );
      setLeftHandImagesError(
        !leftHandImages.length > 0 ? "Please enter left Hand Images" : ""
      );
      setRightHandImagesError(
        !rightHandImages.length > 0 ? "Please enter right Hand Images" : ""
      );
      setProductNameError(!productName ? "Please enter consultation type" : "");
    } else {
      return true;
    }
  };

  return (
    <PalmistryBox gender={requesterState.gender}>
      <BannerBox image={bannerImage}>
        <div>
          <h2 className="astro-small-heading">Indian Vedic</h2>
          <h1 className="astro-big-heading">Palmistry</h1>
        </div>
      </BannerBox>

      <section>
        <div className="astro-layout">
          <form className="astro-content-form">
            <h2>
              Get your personalized future prediction from our friendly
              astrologer
            </h2>
            <div className="row">
              <div className="col">
                <div className="input-container half-input-container">
                  <label>Name</label>
                  <input
                    name="astroRequesterName"
                    id="fname"
                    required
                    onChange={onChangeName}
                    value={name}
                  />
                  {nameError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "1.2rem",
                        marginTop: "5px",
                      }}
                    >
                      {nameError}
                    </p>
                  )}
                </div>

                <div className="input-container half-input-container">
                  <label>Gender</label>
                  <div className="">
                    <div className="gender-input-container">
                      <div
                        className="input-box"
                        id="male"
                        onClick={() => onChangeGender("male")}
                      >
                        <FontAwesomeIcon
                          icon={faMars}
                          style={{ color: "rgb(30,46,76)" }}
                        />
                        <div className="seperator" id="male-seperator"></div>
                        <p>Male</p>
                      </div>
                      <div
                        className="input-box"
                        id="female"
                        onClick={() => onChangeGender("female")}
                      >
                        <FontAwesomeIcon
                          icon={faVenus}
                          style={{ color: "rgb(30,46,76)" }}
                        />
                        <div className="seperator" id="female-seperator"></div>
                        <p>Female</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="input-container half-input-container">
                  <label>Email</label>
                  <input
                    id="email"
                    name="astroRequesterEmail"
                    onChange={onChangeEmail}
                    required
                    value={email}
                  />
                  {emailError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "1.2rem",
                        marginTop: "5px",
                      }}
                    >
                      {emailError}
                    </p>
                  )}
                </div>
                <div className="input-container half-input-container">
                  <label>Mobile No</label>
                  <input
                    id="mobile"
                    name="astroRequesterMobile"
                    onChange={onChangeNumber}
                    required
                    value={number}
                    inputMode="numeric"
                  />
                  {numberError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "1.2rem",
                        marginTop: "5px",
                      }}
                    >
                      {numberError}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="input-container half-input-container">
                  <div>
                    <label>Date of Birth</label>
                    <input
                      id="dob"
                      type="date"
                      onChange={onChangeDate}
                      required
                      value={date}
                    />
                    {dateError && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "1.2rem",
                          marginTop: "5px",
                        }}
                      >
                        {dateError}
                      </p>
                    )}
                  </div>
                </div>
                <div className="input-container half-input-container">
                  <label>Birth Time</label>
                  <input
                    id="birthTime"
                    type="time"
                    step="1"
                    onChange={onChangeTime}
                    value={time}
                  />
                  {timeError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "1.2rem",
                        marginTop: "5px",
                      }}
                    >
                      {timeError}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="input-container half-input-container">
                  <label>Birth City</label>
                  <input
                    id="birthPlace"
                    onChange={onChangeCity}
                    required
                    value={city}
                  ></input>
                  {cityError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "1.2rem",
                        marginTop: "5px",
                      }}
                    >
                      {cityError}
                    </p>
                  )}
                </div>

                <div className="input-container half-input-container">
                  <label>Consultation Mode</label>
                  <select
                    id="consultationMode"
                    onChange={handleConsultationModeChange}
                    value={consultationMode}
                  >
                    <option value="" disabled selected>
                      {" "}
                      -- Select your Mode --{" "}
                    </option>
                    {consultationArray}
                  </select>
                  {consultationModeError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "1.2rem",
                        marginTop: "5px",
                      }}
                    >
                      {consultationModeError}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="input-container half-input-container">
                  <label>Right Hand Images</label>
                  <input
                    type="file"
                    name="image"
                    id="rightHandImage"
                    accept="image/x-png,image/gif,image/jpeg"
                    required
                    multiple
                    onChange={onInputChangeForRightHand}
                  />
                  {rightHandImagesError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "1.2rem",
                        marginTop: "5px",
                      }}
                    >
                      {rightHandImagesError}
                    </p>
                  )}
                </div>
                <div className="input-container half-input-container">
                  <label>Left Hand Images</label>
                  <input
                    type="file"
                    name="image"
                    id="leftHandImage"
                    accept="image/x-png,image/gif,image/jpeg"
                    required
                    multiple
                    onChange={onInputChangeForLeftHand}
                  />
                  {leftHandImagesError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "1.2rem",
                        marginTop: "5px",
                      }}
                    >
                      {leftHandImagesError}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="input-container half-input-container">
                  <label>Consultation Type</label>
                  <select
                    id="productName"
                    onChange={handleProductNameChannge}
                    value={productName}
                  >
                    <option value="" disabled selected>
                      -- Select your Type --
                    </option>
                    {productNameArray}
                  </select>
                  {productNameError && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "1.2rem",
                        marginTop: "5px",
                      }}
                    >
                      {productNameError}
                    </p>
                  )}
                </div>

                <div className="input-container half-input-container">
                  <label>Total</label>
                  <label style={{ color: "green", marginTop: "20px" }}>
                    {cookies.currencyCode == "INR" ? "₹" : cookies.currencyCode}{" "}
                    {amount}
                  </label>
                </div>
              </div>
            </div>
            <div className="note">
              By submitting your details, you hereby agree for Luxury Gems
              Company to contact you.
            </div>
          </form>
        </div>
      </section>
      <section id="payment-section">
        <div className="payment-box">
          {/* <div className="payment-content-holder">
            <div>
              <div className="payment-input-container">
                <input
                  type="radio"
                  name="payment-method"
                  id="razorpay-method"
                  value="razorpay"
                  onChange={() => setPaymentMethod("razorpay")}
                />
                <label htmlFor="razorpay-method" className="input-label">
                  Credit or Debit Card / Net Banking / UPI
                </label>
              </div>

              <div className="payment-input-container">
                <input
                  type="radio"
                  name="payment-method"
                  id="paypal-method"
                  value="paypal"
                  onChange={() => setPaymentMethod("paypal")}
                />
                <label htmlFor="paypal-method" className="input-label">
                  Paypal
                </label>
              </div>
            </div>
          </div> */}

          {/* <div className="seperator"></div> */}

          <div className="payment-content-holder payment-button">
            {paymentMode === "razorpay" ? (
              <RazorpayForAstro
                handleSubmit={() => handleSubmit()}
                data={{
                  name,
                  email,
                  number,
                  city,
                  date,
                  time,
                  productName,
                  consultationMode,
                  leftHandImages,
                  rightHandImages,
                  gender: requesterState.gender,
                  amount,
                }}
              />
            ) : (
              <PaypalForAstro
                handleSubmit={() => handleSubmit()}
                propsData={{
                  name,
                  email,
                  number,
                  city,
                  date,
                  time,
                  productName,
                  consultationMode,
                  leftHandImages,
                  rightHandImages,
                  gender: requesterState.gender,
                  amount,
                }}
              />
            )}
          </div>

          {/* <button
            style={{ width: "50%", marginBottom: "20px" }}
            onClick={() => payment()}
          >
            Pay Now
          </button> */}
        </div>
      </section>
      <section className="about-astro-consultation">
        <h2>Online Astrology Consultation - Talk To Astrologer On Phone</h2>
        <div className="about-astro-content">
          <div className="astro-content">
            <h1>About Online Astrology Consultation on Call</h1>
            <p>
              When physical visits are not possible, phone consultations can
              bring an effective solution to solve your astrology-oriented
              issues. Bharat Astro Co. astrology services aim to provide live
              astrology and instant solutions through professional astrology
              consultation on phone service.
            </p>
            <p>
              Our expert astrologers suggest the most effective solutions over
              the phone, whether for professional or personal problems.
            </p>
          </div>
          <div className="astro-content">
            <h1>Your Astrological Phone Consultation will include</h1>
            <p>
              Even when you get consultations over the phone, we don’t
              compromise with our services at all. Following are a few
              consultation plans that we offer.
            </p>
            <ol>
              <li>
                Complete astrological analysis of your Kundali through
                telephonic astrology consultation
              </li>
              <li>
                Study of current planetary transit and their effects based on
                your kundali
              </li>
              <li>
                You can talk to astrologers on phone to get the answers to all
                your queries
              </li>
              <li>
                Most effective remedial measures to deal with your various life
                problems
              </li>
              <li>
                Our astrology consultation online experts also provide important
                tips to make situations better
              </li>
            </ol>
          </div>
          <div className="astro-content">
            <h1>Get a Quick Online Astrology Consultation</h1>
            <p>Services Included in Astrology Consultation on Phone</p>
            <p>
              Bharat Astro Co. is one of the reckoned astrology service
              providers. Hence, inspired by the trust and faith people put in
              us, we render a wide range of astrology phone consultation
              services.
            </p>
            <ol>
              <li>
                <span>Business Problems:</span>
                <span>
                  We are here to help your business reach success and get
                  recognition in the industry.
                </span>
              </li>
              <li>
                <span>Husband Wife Dispute Problems:</span>
                <span>
                  Our astrologers on call provide effective solutions
                  understanding the current scenario of your horoscope to
                  resolve all problems between spouses.
                </span>
              </li>
              <li>
                <span>Marriage Delay Problem:</span>
                <span>
                  If you are facing a marriage delay, talk to astrologer on
                  phone; they’ll help you with the best solutions.
                </span>
              </li>
              <li>
                <span>Job and Career Problems:</span>
                <span>
                  Sometimes, job and career troubles occur due to some
                  unfavourable planetary changes, which we take care of.
                </span>
              </li>
              <li>
                <span>Lucky Gemstones Recommendation:</span>
                <span>
                  Based on the planet of your birth chart, we suggest apt
                  gemstones providing implacable results.
                </span>
              </li>
              <li>
                <span>Match Making:</span>
                <span>
                  Our astrologers can also help you to find your soul mate for a
                  worry-less and happy married life.
                </span>
              </li>
              <li>
                <span>Sade Sati:</span>
                <span>
                  Do you feel you have seven-and-a-half-year bad luck? Well,
                  talk to astrologer online; we will analyse your issues and
                  provide a report of the chances of sade sati in your life.
                </span>
              </li>
              <li>
                <span>Palmistry:</span>
                <span>
                  Our palmistry service guarantees you an accurate revelation of
                  luck from the patterns, lines, and marks of your hand.
                </span>
              </li>
            </ol>
          </div>
        </div>
        <div className="astro-content">
          <h1>Benefits / Advantages of Astrologer on Phone</h1>
          <p>
            Once you get connected through our astrology consultation on phone,
            there are multiple benefits waiting for you. They are:
          </p>
          <ol>
            <li>
              Enjoy instant solutions without any appointment or waiting in the
              queue
            </li>
            <li>You get to select the date and time as per your preference</li>
            <li>Ask as many questions as you want</li>
            <li>We take calls from all over the world</li>
            <li>Accurate and clear guidance on tips and remedies</li>
            <li>We maintain complete secrecy of your identity</li>
            <li>
              We are here for all types of life situations and protect you from
              pitfalls.
            </li>
          </ol>
          <h1 style={{ marginTop: "40px" }}>How it Works?</h1>
          <ol>
            <li>Fill up the above form</li>
            <li>Make Payment Online</li>
            <li>You will get answers in 48 hours.</li>
          </ol>
        </div>
        <div className="astro-content">
          <h1>Online Astrology Services</h1>
          <p>
            Depending on various situations, we have come up with several
            options of astrology services. The below enlisted are some of the
            online astrology services that you will get to enjoy through our
            astrology consultation on phone.
          </p>
          <ol>
            <li>We analyse your janam kundali online.</li>
            <li>We make personalised prediction by date of birth online</li>
            <li>
              With our gemstone recommendation, we help you to get your desired
              results in life
            </li>
            <li>
              Our match making astrology services are applicable for everyone,
              be it mangalik or non-mangalik
            </li>
            <li>
              We take the onus of rectifying your marriage delay problem through
              online consultations
            </li>
          </ol>
        </div>
        <div className="astro-content">
          <h1>Read FAQs Related to Online Astrology Consultation</h1>
          <p>
            1. Are there any benefits of consulting from astrologer over the
            phone?
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Ans:</span> Yes, similar to
            physical astrology consultation, our service of talk to astrologer
            over the phone is equally beneficial. You can connect to us from
            anywhere across the country and ask all your queries.
          </p>
          <p>2. Why should I consult Bharat Astro Co. Team?</p>
          <p>
            <span style={{ fontWeight: "bold" }}>Ans:</span> We possess 10 years
            of experience in this field, along with an extremely qualified team
            of Astrology experts.
          </p>
          <p>3. How to reach Bharat Astro Co. Team?</p>
          <p>
            <span style={{ fontWeight: "bold" }}>Ans:</span> You can call him or
            or Whatsapp him at +91 9326226145 (India) / +91 9326226145 (Out of
            India).
          </p>
          <p>4. Are your services expensive?</p>
          <p>
            <span style={{ fontWeight: "bold" }}>Ans:</span> No, our astrology
            phone consultation services are pretty budget-friendly, and you will
            never regret it after connecting to us.
          </p>
          <p>5. How genuine are the predictions made by your experts?</p>
          <p>
            <span style={{ fontWeight: "bold" }}>Ans:</span> The predictions
            offered by our experts are based on your personal birth chart and
            your personality. Thus, they are highly reliable and accurate.
          </p>
          <p>6. Is it possible to get a response within 15 minutes?</p>
          <p>
            <span style={{ fontWeight: "bold" }}>Ans:</span> Yes, we provide
            instant replies and responses.
          </p>
          <p>7. Will my identity be kept secret?</p>
          <p>
            <span style={{ fontWeight: "bold" }}>Ans:</span> Definitely, yes.
            Your identity is 100% safe and confidential with us.
          </p>
          <p>
            8. How your suggestions will help me to make better decisions for
            the future?
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Ans:</span> Your natal chart
            analysis prepared by our experts will help you plan your future
            moves better.
          </p>
        </div>
      </section>
    </PalmistryBox>
  );
}
