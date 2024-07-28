import React, { useState, useEffect } from "react";
import checkDeliverDoableOrNot from "../../../helper/checkDeliveryDoableOrNot";
import CountryService from "../../../services/countryService";

export default function DeliverabilityChecker() {
  const [countries, setCountries] = useState([]);
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const [postCode, setPostCode] = useState("");

  const countriesListArray = countries.map((item, index) => {
    return (
      <option value={item.isoCode} key={index}>
        {item.name}
      </option>
    );
  });

  const getDeliverabilityMessage = () => {
    let status = checkDeliverDoableOrNot(country, postCode);

    if (status == true) {
      setMessage("( Yes, we deliver to your area! )");
    } else {
      setMessage("( Sorry, we dont deliver to your area )");
    }
  };

  useEffect(() => {
    CountryService.getCountries()
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section style={{ margin: "10px 0px" }}>
      <label style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
        Check Deliverability:{" "}
      </label>
      <div style={{ marginTop: "10px", display: "flex" }}>
        <select
          id="country"
          style={{ width: "120px", marginRight: "5px", padding: "5px" }}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="select-country" selected disabled>
            Select Country
          </option>
          {countriesListArray}
        </select>
        <input
          id="postCode"
          style={{ width: "90px", marginLeft: "5px", padding: "5px" }}
          placeholder="Postal Code"
          onChange={(e) => setPostCode(e.target.value)}
        />
        <button
          style={{ width: "fit-content", margin: "0px 10px" }}
          onClick={getDeliverabilityMessage}
        >
          Check
        </button>
      </div>
      <p
        id="deliverability-displayer"
        style={{ fontStyle: "italic", marginTop: "6px" }}
      >
        {message}
      </p>
    </section>
  );
}
