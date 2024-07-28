import React from "react";
import { JewelryHomepageBox } from "./style";
import JewelryCategoryScroller from "./JewelryCategoryScroller";

export default function FineJewelry() {
  const bannerImage1 =
    "https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/banner/3.png";

  return (
    <JewelryHomepageBox>
      <section className="custom-section">
        <h2 className="sub-title">Create Your Own Solitaire Jewelry</h2>
        <div className="row">
          <div className="column">
            <section className="solitaire-specific">
              <div className="category-box">
                <div className="image-holder">
                  <img
                    src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/create-jewelry-section/solitaire-ring.jpg"
                    alt="solitaire-ring"
                  />
                </div>
                <div>
                  <a className="for-cro" href="/create-your-own-ring/rings">
                    Create Your Own Ring
                  </a>
                  <p className="seperator">or</p>
                  <a className="for-cro" href="/preset-jewelry/rings">
                    View All Preset Designs
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="column">
            <section className="solitaire-specific">
              <div className="category-box">
                <div className="image-holder">
                  <img
                    src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/create-jewelry-section/solitaire-pendant.jpg"
                    alt="solitaire-necklace"
                  />
                </div>
                <div>
                  <a
                    className="for-cro"
                    href="/create-your-own-necklace/necklaces"
                  >
                    Create Your Own Pendant
                  </a>
                  <p className="seperator">or</p>
                  <a className="for-cro" href="/preset-jewelry/necklaces">
                    View All Preset Designs
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div className="column">
            <section className="solitaire-specific">
              <div className="category-box">
                <div className="image-holder">
                  <img
                    src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/create-jewelry-section/solitaire-studs.jpg"
                    alt="solitaire-studs"
                  />
                </div>
                <div>
                  <a className="for-cro" href="/create-your-own-stud/studs">
                    Create Your Own Studs
                  </a>
                  <p className="seperator">or</p>
                  <a className="for-cro" href="/preset-jewelry/studs">
                    View All Preset Designs
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <JewelryCategoryScroller />

      {/* <section style={{backgroundColor:'rgb(248,250,255)', padding:'15px'}}>
                <h2 className='sub-title'>
                    Crowning Jewels
                </h2>
                <p style={{textAlign:'center'}}>
                    A collection perfect for any occasion
                </p>
                <div id='jewelry-category-box'>

                    <div className='grid-box'>
                        <div className='image-holder'>
                            <img src="https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-womens-ring.png" />
                        </div>
                        <div className='row-box'>
                            <div className='category-description-box'>
                                <h3 >Solitaire Rings</h3>
                                <a href='preset-jewelry/rings'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className='grid-box'>
                        <div className='image-holder'>
                            <img src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-pendants.png' />
                        </div>
                        <div className='row-box'>
                            <div className='category-description-box'>
                                <h3 >Solitaire Pendants</h3>
                                <a href='/preset-jewelry/pendants'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className='grid-box'>
                        <div className='image-holder'>
                            <img src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-studs.png' />
                        </div>
                        <div className='row-box'>
                            <div className='category-description-box'>
                                <h3 >Solitaire Studs</h3>
                                <a href='/preset-jewelry/studs'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className='grid-box'>
                        <div className='image-holder'>
                            <img src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-mens-ring.png' />
                        </div>
                        <div className='row-box'>
                            <div className='category-description-box'>
                                <h3 >Men's Rings</h3>
                                <a href='/mens-rings'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className='grid-box'>
                        <div className='image-holder'>
                            <img src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-chain-min.png' />
                        </div>
                        <div className='row-box'>
                            <div className='category-description-box'>
                                <h3 >Men's Chains</h3>
                                <a href='/chains'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className='grid-box'>
                        <div className='image-holder'>
                            <img src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-kada.png' />
                        </div>
                        <div className='row-box' >
                            <div className='category-description-box'>
                                <h3 >Men's Kadas</h3>
                                <a href='/mens-kada'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className='grid-box'>
                        <div className='image-holder'>
                            <img src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-bracelet.png' />
                        </div>
                        <div className='row-box' >
                            <div className='category-description-box'>
                                <h3 >Men's Bracelets</h3>
                                <a href='/mens-kada'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className='grid-box'>
                        <div className='image-holder'>
                            <img src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-fashion-ring.png' />
                        </div>
                        <div className='row-box' >
                            <div className='category-description-box'>
                                <h3 >Fashion Rings</h3>
                                <a href='/mens-kada'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className='grid-box'>
                        <div className='image-holder'>
                            <img src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-diamond-pendant.png' />
                        </div>
                        <div className='row-box' >
                            <div className='category-description-box'>
                                <h3 >Diamond Pendants</h3>
                                <a href='/mens-kada'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className='grid-box'>
                        <div className='image-holder'>
                            <img src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-alphabet-pendant.png' />
                        </div>
                        <div className='row-box' >
                            <div className='category-description-box'>
                                <h3 >Alphabet Pendants</h3>
                                <a href='/mens-kada'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className='grid-box'>
                        <div className='image-holder'>
                            <img src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-earrings.png' />
                        </div>
                        <div className='row-box' >
                            <div className='category-description-box'>
                                <h3 >Diamond Earrings</h3>
                                <a href='/mens-kada'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className='grid-box'>
                        <div className='image-holder'>
                            <img src='https://lgcgems.s3.ap-south-1.amazonaws.com/assets/images/section/jewelry-category-section/homepage-nose-pin.png' />
                        </div>
                        <div className='row-box' >
                            <div className='category-description-box'>
                                <h3 >Nose Pins</h3>
                                <a href='/mens-kada'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section> */}
    </JewelryHomepageBox>
  );
}
