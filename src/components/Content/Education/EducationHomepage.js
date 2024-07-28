import React from "react";
import { EducationPageBox } from "./style";
import { Link, useRouteMatch } from "react-router-dom";

export default function EducationHomepage() {
  let { url } = useRouteMatch();

  return (
    <EducationPageBox>
      <section className="banner">
        <h1>Education Center</h1>
        <p>
          Our expert tips and guides will help you select the perfect diamond,{" "}
          <br />
          ring or jewelry item that blends quality and value.
        </p>
      </section>
      <section className="category-row">
        <div className="text-div">
          <h1>Diamond Education</h1>
          <p>
            When selecting a diamond, it’s important to know the aspects of each
            stone. Cut, color, carat and clarity are among the most common
            factors, along with various others.
          </p>
          <Link to={`${url}/diamonds`}>Learn More</Link>
        </div>
        <div className="image-holder">
          <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/diamond-education/diamond-education-homepage.jpg" />
        </div>
      </section>
      <section className="category-row">
        <div className="image-holder">
          <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/gemstone-education/gemstone-education-homepage.jpg" />
        </div>
        <div className="text-div">
          <h1>Gemstone Education</h1>
          <p>
            Found in virtually every color imaginable, gemstones infuse fine
            jewelry with a natural brilliance. Learn about gemstones and the
            distinctive qualities, origins, color variations, and care methods
            used in high quality gemstone jewelry.
          </p>
          <Link to={`${url}/gemstones`}>Learn More</Link>
        </div>
      </section>
      <section className="category-row">
        <div className="text-div">
          <h1>Metal Education</h1>
          <p>
            Our metal education guide offers information about the unique
            qualities, appearances, and caring techniques for the most popular
            precious metals used to make engagement rings and fine jewelry.
          </p>
          <Link to={`${url}/metals`}>Learn More</Link>
        </div>
        <div className="image-holder">
          <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/education-images/metal-education/metal-education-homepage.jpg" />
        </div>
      </section>
    </EducationPageBox>
  );
}
