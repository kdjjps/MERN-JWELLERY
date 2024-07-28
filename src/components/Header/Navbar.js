import React from "react";
import { NavbarBox } from "./style.js";

export default function Navbar() {
  return (
    <NavbarBox>
      <ul className="nav-links">
        {/* <li className="dropdown-link">
          <a href="/create-your-own-ring/rings" className="link-text">
            Engagement
          </a>
          <div className="dropdown-content">
            <div className="row">
              <div className="engagement-menu-column">
                <a className="column-title">Create Your Own</a>
                <section className="create-your-own">
                  <ul>
                    <li>
                      <a href="/create-your-own-ring/diamonds?name=round">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/white-diamond.png"
                          alt="diamond-shape-pear"
                          className="nav-diamond-images"
                        />
                        <p>Start With A Diamond</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/fancy-diamonds">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/colored-diamond.png"
                          alt="diamond-shape-princess"
                          className="nav-diamond-images"
                        />
                        <p>Start With A Colored Diamond</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/rings">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/ring.png"
                          alt="diamond-shape-round"
                          className="nav-diamond-images"
                        />
                        <p>Start With A Diamond Setting</p>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="engagement-menu-column">
                <a className="column-title">Shop By Shape</a>
                <section className="shop-by-shape">
                  <ul>
                    <li>
                      <a href="/create-your-own-ring/diamonds?name=round">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_round.png"
                          alt="diamond-round-image"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Round</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/diamonds?name=princess">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_princess.png"
                          alt="diamond-princess-image"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Princess</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/diamonds?name=cushion">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_cushion.png"
                          alt="diamond-cushion-image"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Cushion</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/diamonds?name=oval">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_oval.png"
                          alt="diamond-oval-image"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Oval</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/diamonds?name=pear">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_pear.png"
                          alt="diamond-pear-image"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Pear</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/diamonds?name=emerald">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_emerald.png"
                          alt="diamond-emerald-image"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Emerald</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/diamonds?name=heart">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_heart.png"
                          alt="diamond-heart-image"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Heart</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/diamonds?name=radiant">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_radiant.png"
                          alt="diamond-radiant-image"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Radiant</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/diamonds?name=asscher">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_asscher.png"
                          alt="diamond-asscher-image"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Asscher</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/diamonds?name=marquise">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_marquise.png"
                          alt="diamond-marquise-image"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Marquise</p>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="engagement-menu-column">
                <a className="column-title">Shop By Metal</a>
                <section className="metal-section">
                  <ul>
                    <li>
                      <a href="/create-your-own-ring/rings?metal=white-gold">
                        <div style={{ backgroundColor: "#efefef" }}></div>
                        <p>White Gold</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/rings?metal=yellow-gold">
                        <div style={{ backgroundColor: "#e9d590" }}></div>
                        <p>Yellow Gold</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/rings?metal=rose-gold">
                        <div style={{ backgroundColor: "#f5c8a9" }}></div>
                        <p>Rose Gold</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-ring/rings?metal=platinum">
                        <div style={{ backgroundColor: "#d7d8d8" }}></div>
                        <p>Platinum</p>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="engagement-menu-column">
                <a className="column-title">Featured Collections</a>
                <section className="create-your-own">
                  <ul>
                    <li>
                      <a href="/mens-rings">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/mens-ring.png"
                          alt="diamond-marquise-image"
                          className="nav-diamond-images"
                        />
                        <p>Men's Engagement Rings</p>
                      </a>
                    </li>
                    <li>
                      <a href="/engagement-rings">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/fashion-ring.png"
                          alt="diamond-marquise-image"
                          className="nav-diamond-images"
                        />
                        <p>Fashion Rings</p>
                      </a>
                    </li>
                    <li>
                      <a href="/preset-jewelry/rings">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/ring.png"
                          alt="diamond-marquise-image"
                          className="nav-diamond-images"
                        />
                        <p>Solitaire Rings</p>
                      </a>
                    </li>
                    <li>
                      <a href="/bespoke">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/ring.png"
                          alt="diamond-marquise-image"
                          className="nav-diamond-images"
                        />
                        <p>Custom Rings</p>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </li> */}

        <li className="dropdown-link">
          <a href="/diamonds?name=all" className="link-text">
            Diamonds
          </a>
          <div className="dropdown-content">
            <div className="row">
              <div className="diamond-menu-column">
                <a href="/diamonds?name=all" className="column-title">
                  Natural Loose Diamonds
                </a>
                <section className="diamond-section">
                  <ul>
                    <li>
                      <a
                        href="/diamonds?name=round"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_round.png"
                          alt="diamond-shape-round"
                          className="nav-diamond-images"
                        />
                        <p>Round</p>
                      </a>
                      <a
                        href="/diamonds?name=emerald"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_emerald.png"
                          alt="diamond-shape-emerald"
                          className="nav-diamond-images"
                        />
                        <p>Emerald</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/diamonds?name=pear"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_pear.png"
                          alt="diamond-shape-pear"
                          className="nav-diamond-images"
                        />
                        <p>Pear</p>
                      </a>
                      <a
                        href="/diamonds?name=marquise"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_marquise.png"
                          alt="diamond-shape-marquise"
                          className="nav-diamond-images"
                        />
                        <p>Marquise</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/diamonds?name=cushion"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_cushion.png"
                          alt="diamond-shape-cushion"
                          className="nav-diamond-images"
                        />
                        <p>Cushion</p>
                      </a>
                      <a
                        href="/diamonds?name=asscher"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_asscher.png"
                          alt="diamond-shape-asscher"
                          className="nav-diamond-images"
                        />
                        <p>Asscher</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/diamonds?name=oval"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_oval.png"
                          alt="diamond-shape-pear"
                          className="nav-diamond-images"
                        />
                        <p>Oval</p>
                      </a>
                      <a
                        href="/diamonds?name=radiant"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_radiant.png"
                          alt="diamond-shape-radiant"
                          className="nav-diamond-images"
                        />
                        <p>Radiant</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/diamonds?name=princess"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_princess.png"
                          alt="diamond-shape-princess"
                          className="nav-diamond-images"
                        />
                        <p>Princess</p>
                      </a>
                      <a
                        href="/diamonds?name=heart"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/diamond-shape-icons/stone_heart.png"
                          alt="diamond-shape-heart"
                          className="nav-diamond-images"
                        />
                        <p>Heart</p>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="diamond-menu-column">
                <a href="/diamonds/fancy?name=all" className="column-title">
                  Natural Colored Diamonds
                </a>
                <section className="diamond-section">
                  <ul>
                    <li>
                      <a
                        href="/diamonds/fancy?name=all"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-yellow.png"
                          alt="fancy-diamond-yellow"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Yellow</p>
                      </a>
                      <a
                        href="/diamonds/fancy?name=all"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-blue.png"
                          alt="fancy-diamond-blue"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Blue</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/diamonds/fancy?name=all"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-red.png"
                          alt="fancy-diamond-red"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Red</p>
                      </a>
                      <a
                        href="/diamonds/fancy?name=all"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-pink.png"
                          alt="fancy-diamond-pink"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Pink</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/diamonds/fancy?name=all"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-orange.png"
                          alt="fancy-diamond-orange"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Orange</p>
                      </a>
                      <a
                        href="/diamonds/fancy?name=all"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-black.png"
                          alt="fancy-diamond-black"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Black</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/diamonds/fancy?name=all"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-brown.png"
                          alt="fancy-diamond-brown"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Brown</p>
                      </a>
                      <a
                        href="/diamonds/fancy?name=all"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-gray.png"
                          alt="fancy-diamond-gray"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Gray</p>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/diamonds/fancy?name=all"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-purple.png"
                          alt="fancy-diamond-purple"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Purple</p>
                      </a>
                      <a
                        href="/diamonds/fancy?name=all"
                        className="diamond-menu-link"
                      >
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/fancy-green.png"
                          alt="fancy-diamond-green"
                          className="nav-fancy-diamond-images"
                        />
                        <p>Green</p>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="diamond-menu-column">
                <a className="column-title">Create Your Own Jewelry</a>
                <section
                  className="solitaire-section"
                  style={{ marginBottom: "25px" }}
                >
                  <ul>
                    <li>
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/ring.png"
                        alt="diamond-shape-marquise"
                        className="nav-diamond-images"
                      />
                      <div className="link-container">
                        <p>Solitaire Rings</p>
                        <a href={"/create-your-own-ring/rings"}>
                          - Start With A Ring
                        </a>
                        <a href={"/create-your-own-ring/diamonds?name=round"}>
                          - Start With A Diamond
                        </a>
                      </div>
                    </li>
                    <li>
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/necklace.png"
                        alt="diamond-shape-round"
                        className="nav-diamond-images"
                      />
                      <div className="link-container">
                        <p>Solitaire Necklaces</p>
                        <a href={"/create-your-own-necklace/necklaces"}>
                          - Start With A Necklace
                        </a>
                        <a
                          href={"/create-your-own-necklace/diamonds?name=round"}
                        >
                          - Start With A Diamond
                        </a>
                      </div>
                    </li>
                    <li>
                      <img
                        src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/studs.png"
                        alt="diamond-shape-pear"
                        className="nav-diamond-images"
                      />
                      <div className="link-container">
                        <p>Solitaire Studs</p>
                        <a href={"/create-your-own-stud/studs"}>
                          - Start With A Stud
                        </a>
                        <a
                          href={
                            "/create-your-own-stud/diamonds/first?name=round"
                          }
                        >
                          - Start With A Diamond
                        </a>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="diamond-menu-column">
                <a href="/education/diamonds" className="column-title">
                  Learning Center
                </a>
                <img
                  className="learning-center-image"
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/diamond.png"
                />
              </div>
            </div>
          </div>
        </li>

        <li className="dropdown-link">
          <a href="/gemstones" className="link-text">
            Gemstones
          </a>
          <div className="dropdown-content">
            <div className="row">
              <div className="gem-menu-column">
                <a className="column-title">Natural Gemstones</a>
                <section className="gemstone-section">
                  <ul>
                    <li>
                      <a href="/gemstones/blue-sapphire">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/blue-sapphire.jpg"
                          alt="gemstone-blue-sapphire"
                          className="nav-gemstone-image"
                        />
                        <div>
                          <p>Blue&nbsp;Sapphire</p>
                          <p>(Neelam)</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/gemstones/yellow-sapphire">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/yellow-sapphire.jpg"
                          alt="gemstone-yellow-sapphire"
                          className="nav-gemstone-image"
                        />
                        <div>
                          <p>Yellow&nbsp;Sapphire</p>
                          <p>(Pukhraj)</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/gemstones/emerald">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/emerald.jpg"
                          alt="gemstone-emerald"
                          className="nav-gemstone-image"
                        />
                        <div>
                          <p>Emerald</p>
                          <p>(Panna)</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="gem-menu-column">
                <a href="/" className="column-title">
                  &nbsp;
                </a>
                <section className="gemstone-section">
                  <ul>
                    <li>
                      <a href="/gemstones/ruby">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/ruby.jpg"
                          alt="gemstone-ruby"
                          className="nav-gemstone-image"
                        />
                        <div>
                          <p>Ruby</p>
                          <p>(Manik)</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/gemstones/hessonite">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/hessonite.jpg"
                          alt="gemstone-hessonite"
                          className="nav-gemstone-image"
                        />
                        <div>
                          <p>Hessonite</p>
                          <p>(Gomed)</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/gemstones/opal">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/opal.png"
                          alt="gemstone-opal"
                          className="nav-gemstone-image"
                        />
                        <div>
                          <p>Opal</p>
                          <p>(Doodhiya&nbsp;Pathaar)</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="gem-menu-column">
                <a className="column-title">&nbsp;</a>
                <section className="gemstone-section">
                  <ul>
                    <li>
                      <a href="/gemstones/pearl">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/pearl.jpg"
                          alt="gemstone-pearl"
                          className="nav-gemstone-image"
                        />
                        <div>
                          <p>Pearl</p>
                          <p>(Moti)</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/gemstones/cats-eye">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/cats-eye.jpg"
                          alt="gemstone-cats-eye"
                          className="nav-gemstone-image"
                        />
                        <div>
                          <p>Cat's&nbsp;Eye</p>
                          <p>(Lehsunia)</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/gemstones/red-coral">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones/red-coral.jpg"
                          alt="gemstone-red-coral"
                          className="nav-gemstone-image"
                        />
                        <div>
                          <p>Red&nbsp;Coral</p>
                          <p>(Moonga)</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="gem-menu-column">
                <a href="/" className="column-title">
                  Create Your Own
                </a>
                <section className="create-your-own">
                  <ul>
                    <li>
                      <a href="/create-your-own-gem-ring/rings">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/gemstone-ring.png"
                          alt="diamond-shape-pear"
                          className="nav-diamond-images"
                        />
                        <p>Start With A Ring</p>
                      </a>
                    </li>
                    <li>
                      <a href="/create-your-own-gem-pendant/pendants">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/pendant.png"
                          alt="diamond-shape-princess"
                          className="nav-diamond-images"
                        />
                        <p>Start With A Pendant</p>
                      </a>
                    </li>
                    <li>
                      <a href="/gemstones">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/colored-diamond.png"
                          alt="diamond-shape-round"
                          className="nav-diamond-images"
                        />
                        <p>Start With A Gemstone</p>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="gem-menu-column">
                <a href="/" className="column-title">
                  Learning Center
                </a>
                <img
                  className="learning-center-image"
                  src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/navbar-images/gemstones.png"
                />
              </div>
            </div>
          </div>
        </li>

        {/* <li className="dropdown-link">
          <a className="link-text">Solitaires</a>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <a className="column-title" style={{ textAlign: "center" }}>
                  Solitaire Rings
                </a>
                <section className="solitaire-specific">
                  <div className="category-box">
                    <img
                      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/create-jewelry-section/solitaire-ring.jpg"
                      alt="solitaire-ring"
                    />
                    <div>
                      <a href="/create-your-own-ring/rings">
                        Create Your Own Ring
                      </a>
                      <p>or</p>
                      <a href="/preset-jewelry/rings">
                        View All Preset Designs
                      </a>
                    </div>
                  </div>
                </section>
              </div>

              <div className="column">
                <a className="column-title" style={{ textAlign: "center" }}>
                  Solitaire Necklaces
                </a>
                <section className="solitaire-specific">
                  <div className="category-box">
                    <img
                      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/create-jewelry-section/solitaire-pendant.jpg"
                      alt="solitaire-pendant"
                    />
                    <div>
                      <a href="/create-your-own-necklace/necklaces">
                        Create Your Own Necklace
                      </a>
                      <p>or</p>
                      <a href="/preset-jewelry/necklaces">
                        View All Preset Designs
                      </a>
                    </div>
                  </div>
                </section>
              </div>

              <div className="column">
                <a className="column-title" style={{ textAlign: "center" }}>
                  Solitaire Studs
                </a>
                <section className="solitaire-specific">
                  <div className="category-box">
                    <img
                      src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/create-jewelry-section/solitaire-studs.jpg"
                      alt="solitaire-studs"
                    />
                    <div>
                      <a href="/create-your-own-stud/studs">
                        Create Your Own Studs
                      </a>
                      <p>or</p>
                      <a href="/preset-jewelry/studs">
                        View All Preset Designs
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </li> */}

        <li className="dropdown-link">
          <a href="/bespoke" className="link-text">
            Bespoke
          </a>
        </li>

        <li className="dropdown-link">
          <a href="/jewelry" className="link-text">
            Fine Jewelry
          </a>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <a className="column-title">Rings</a>
                <section
                  className="jewelry-section"
                  style={{ marginBottom: "25px" }}
                >
                  <ul>
                    <li>
                      <a href="/engagement-rings">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/fashion-ring.png"
                          alt="mens-rings"
                        />
                        <p>Fashion Rings</p>
                      </a>
                    </li>
                    <li>
                      <a href="/preset-jewelry/rings">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/ring.png"
                          alt="men-studs"
                        />
                        <p>Solitaire Rings</p>
                      </a>
                    </li>
                  </ul>
                </section>
                <a className="column-title">Necklaces</a>
                <section className="jewelry-section">
                  <ul>
                    <li>
                      <a href="/new-pendants">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/pendant.png"
                          alt="mens-rings"
                        />
                        <p>Diamond Pendants</p>
                      </a>
                    </li>
                    <li>
                      <a href="/preset-jewelry/necklaces">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/necklace.png"
                          alt="men-studs"
                        />
                        <p>Diamond Necklaces</p>
                      </a>
                    </li>
                    <li>
                      <a href="/ganesh-pendants">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/alphabet.png"
                          alt="men-studs"
                        />
                        <p>Alphabet Pendants</p>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column">
                <a className="column-title">Earrings</a>
                <section
                  className="jewelry-section"
                  style={{ marginBottom: "25px" }}
                >
                  <ul>
                    <li>
                      <a href="/preset-jewelry/studs">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/studs.png"
                          alt="women-rings"
                        />
                        <p>Diamond Studs</p>
                      </a>
                    </li>
                    <li>
                      <a href="/new-earrings">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/earrings.png"
                          alt="women-studs"
                        />
                        <p>Diamond Earrings</p>
                      </a>
                    </li>
                  </ul>
                </section>

                <a className="column-title">Nose Pins</a>
                <section className="jewelry-section">
                  <ul>
                    <li>
                      <a href="/nose-pins?pin=screw">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/screw-nose-pin.png"
                          alt="women-rings"
                        />
                        <p>Screw</p>
                      </a>
                    </li>
                    <li>
                      <a href="/nose-pins?pin=wire">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/nose-pin.png"
                          alt="women-studs"
                        />
                        <p>Wire</p>
                      </a>
                    </li>
                    <li>
                      <a href="/nose-pins?pin=ring">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/nose-ring.png"
                          alt="women-pendants"
                        />
                        <p>Nose Rings</p>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column">
                <a className="column-title">Men</a>
                <section className="jewelry-section">
                  <ul>
                    <li>
                      <a href="/mens-rings">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/mens-ring.png"
                          alt="mens-rings"
                        />
                        <p>Rings</p>
                      </a>
                    </li>
                    <li>
                      <a href="/preset-jewelry/mens/studs">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/studs.png"
                          alt="men-studs"
                        />
                        <p>Studs</p>
                      </a>
                    </li>
                    <li>
                      <a href="/chains">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/mens-chain.png"
                          alt="men-chain"
                        />
                        <p>Chains</p>
                      </a>
                    </li>
                    <li>
                      <a href="/mens-kada">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/kada.png"
                          alt="men-chain"
                        />
                        <p>Kada</p>
                      </a>
                    </li>
                    <li>
                      <a href="/mens-bracelet">
                        <img
                          src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/icons/bracelet.png"
                          alt="men-bracelet"
                        />
                        <p>Bracelet</p>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </li>

        {/* <li className="dropdown-link">
          <a href="/education" className="link-text">
            Education
          </a>
          <div className="dropdown-content">
            <div className="row">
              <div className="column">
                <a href="/education/diamonds" className="column-title">
                  Diamond Guide
                </a>
                <section className="education-section">
                  <ul>
                    <li>
                      <a href="/education/diamonds/anatomy">Anatomy</a>
                    </li>
                    <li>
                      <a href="/education/diamonds/carat">Carat</a>
                    </li>
                    <li>
                      <a href="/education/diamonds/certification">
                        Certification
                      </a>
                    </li>
                    <li>
                      <a href="/education/diamonds/clarity">Clarity</a>
                    </li>
                    <li>
                      <a href="/education/diamonds/color">Color</a>
                    </li>
                    <li>
                      <a href="/education/diamonds/cut">Cut</a>
                    </li>
                    <li>
                      <a href="/education/diamonds/fluorescence">
                        Fluorescence
                      </a>
                    </li>
                    <li>
                      <a href="/education/diamonds/shapes">Shapes</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column">
                <a href="/education/gemstones" className="column-title">
                  Gemstones Guide
                </a>
                <section className="education-section">
                  <ul>
                    <li>
                      <a href="/education/gemstones/blue-sapphire">
                        Blue Sapphire
                      </a>
                    </li>
                    <li>
                      <a href="/education/gemstones/yellow-sapphire">
                        Yellow Sapphire
                      </a>
                    </li>
                    <li>
                      <a href="/education/gemstones/ruby">Ruby</a>
                    </li>
                    <li>
                      <a href="/education/gemstones/emerald">Emerald</a>
                    </li>
                    <li>
                      <a href="/education/gemstones/red-coral">Red Coral</a>
                    </li>
                    <li>
                      <a href="/education/gemstones/opal">Opal</a>
                    </li>
                    <li>
                      <a href="/education/gemstones/hessonite">Hessonite</a>
                    </li>
                    <li>
                      <a href="/education/gemstones/cats-eye">Cat's Eye</a>
                    </li>
                    <li>
                      <a href="/education/gemstones/pearl">Pearl</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column">
                <a className="column-title">Jewelry Guide</a>
                <section className="education-section">
                  <ul>
                    <li>
                      <a href="/education/jewelry/metals">Metals</a>
                    </li>
                    <li>
                      <a href="/education/jewelry/ring-size">Ring Size</a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </li> */}
        {/* <li className='dropdown-link'>
          <a href='/bespoke' className='link-text'>Bespoke</a>
        </li> */}
        <li className="dropdown-link">
          <a href="/indian-astro-company" className="link-text">
            Bharat Astro Co.
          </a>
        </li>
      </ul>
    </NavbarBox>
  );
}
