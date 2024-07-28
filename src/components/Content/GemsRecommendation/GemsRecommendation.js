import React from 'react'
import {PageBannerBox} from '../common-style'
import GemsRecommendationBox from './style'

export default function GemsRecommendation() {
    return (
            <GemsRecommendationBox>
            <PageBannerBox>
                    <h1>Astro Advice Banner Image</h1>
            </PageBannerBox>
            <section>
                <h2>Astro Gem Advice</h2>
                <h4>Astrological Consultation & Gemstone Advice (based on detailed Horoscope Analysis by Expert Astrologers)</h4>
                <form action="/take-astro-advice">
                <div className="row">
                    <div className="col">
                        <div className="input-container">
                            <label>Name</label>
                            <input name="astroRequesterName" required />
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-container small-input-container">
                            <div>
                                <label>Gender</label>
                                <select required>
                                    <option>--Please Select--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-container small-input-container">
                            <div>
                                <label >Date of Birth</label>
                                <input type="date" required />
                            </div>
                        </div>
                        <div className="input-container small-input-container">
                            <div>
                                <label>Time of Birth</label>
                                <input type="time" required />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <div className="input-container">
                            <label>Birth Place</label>
                            <input name="astroRequesterBirthPlace" required />
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-container">
                            <label>Email</label>
                            <input name="astroRequesterEmail" required />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="input-container">
                            <label>Mobile Number</label>
                            <input name="astroRequesterName" required />
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-container">
                            <label>Type of Advice</label>
                            <select name="astroRequesterName" required>
                                <option value=""></option>
                                <option value="gemstones">Professional Gemstone Advice (Charges 500/-)</option>
                                <option value="astro">Professional Kundli Advice (Charges 1500/-)</option>
                            </select>
                        </div>
                    </div>
                </div>  
                <div className="row">
                    <button>ADD TO CART</button>
                </div>

                </form>
                
            </section>
            <div>
                <h2>
                    Online Astrological Consultation
                </h2>
                <p>
                    Get online astrological consultation for any problem in life, future planning & to live better life. 
                    Shubh Gems has team of Expert Astrologers who do Predictions & suggest Remedies after in depth Horoscope 
                    Analysis as per Indian Vedic Astrology. To avail online astrological consultation, provide us your Birth details. 
                    We make all astrological charts/Horoscope required for accurate Astrological Analysis, Predictions & Remedies. 
                    Anyone from anywhere can take online astrological consultation. The Online Astrological consultation and advice 
                    is provided by our team of highly experienced and skilled astrologers who are masters in Vedic astrology. Our Certified 
                    Vedic astrologers give online astrological consultation. Indian Vedic astrology is most accurate & trusted worldwide 
                    for its in depth analysis & accurate predictions. The Astrological life predictions are based on the birth details, 
                    that is, Date of Birth, Time of Birth & Place of Birth. These birth details are used for making horoscope charts 
                    (Birthchart, Divisional charts, Kundli, Janampatrika). There are more than 60 charts which are referred to give 
                    astrological advice. Astrological consultation can provide crucial details about Career, Relationships, Marriage, 
                    Family, Health, Parents, Children, Financial and Social Status. You can also ask any specific questions regarding 
                    your life from our astrologers. An accurate astrological consultation helps you to plan your plan in a better way, 
                    guide you to take preventive steps to avoid future problems and also suggest you favorable things, Ideas & plans to 
                    choose from. So you can plan & live your life in best possible way. The three ways suggested by scriptures for remedial 
                    purpose are - Spirituality, Karma & Gemstones. Wear your favorable Gemstone recommended by our expert astrologers based 
                    on in depth study of your Horoscope. Shubh Gems deals in Certified Natural Astrological Gemstones. These gemstones are 
                    properly activated & energized for best astrological results. Astrological Gemstones should be worn in a particular 
                    manner. Few things to be considered while wearing your Astrological Gemstone are Weight of Stone, metal in which stone 
                    should be set, day & time to wear & Finger to wear in. we guide you the procedure to wear your recommended Gemstone. 
                    Fill your Birth details & get online Astrological consultation for Happy & Better life.
                </p>
            </div>
        </GemsRecommendationBox>
    )
}
