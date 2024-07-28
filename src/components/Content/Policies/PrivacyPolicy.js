import React from "react";
import { PolicyContentBox } from "./style";

export default function PrivacyPolicy() {
  return (
      <PolicyContentBox>
          <p className='policy-title'>Privacy Policy</p>
          <section className='policy-content'>
            <p>
              We know that you trust Luxury Gems Company. This is the reason we have set high standards for our secured transactions and adherence to the customer information privacy. 
              Please note that our privacy policy will be subject to changes at any point in time without any prior notice.
            </p>

            <p className='note'>
              WE REQUEST YOU TO REFER THE BELOW TERMS OF OUR PRIVACY POLICY :
            </p>

            <p className='policy-para-title'>
              Personal Information Collected
            </p>

            <div className='policy-para'>
            By accepting this privacy policy, you authorize LuxuryGemsCo.com to collect, store and use any information that you provide on our Website or native mobile applications. 
            The information collected by us are:
              <ul>
                <li>
                  All information entered by you on our website such as your name, address, contact number, email ID , chat history , and such other information sent by you via emails to our email ID.
                </li>
                <li>
                  Information collected by means of cookies that are installed on your device.
                </li>
                <li>
                  Information such as the IP Address of your computer, the server from which you are accessing our website , details of web browser and operating system used to access our website, date, time and place of accessing of our website,
                </li>
                <li>
                  Customers can request their data to be deleted by dropping an email to info@luxurygemsco.com.
                </li>
              </ul>
            </div>

            <p className='policy-para-title'>
              Use of Information
            </p>

            <div className='policy-para'>
            We make use of the personal details for providing you with service requests. 
            For various purposes like troubleshooting problems, collection of fees, for surveys and for providing information on various offers, we need your personal information. 
            We also collect and analyze the demographic and profile data about users activity in our website. 
            We make sure to identify and use the IP address for diagnosing problems in our website.
            </div>

            <p className='policy-para-title'>
            Security Precautions
            </p>

            <div className='policy-para'>
            Our site is featured with strict security measures and due to this, we help in protecting the loss, alteration and misuse of information under our control. If in case you want to change your access of personal account information, we make sure to provide with secure server. Once the information is with us, we make sure to adhere to the stringent security guidelines and protect the same against unauthorized access.
            </div>

            <p className='policy-para-title'>
            Choice/Opt-Out
            </p>

            <div className='policy-para'>
            Luxury Gems Company provides to all the users with a chance of opting out of promotional and marketing related services from us on behalf of our partners, after you set up an account.
            </div>
        </section>

          <section className='policy-content'>
            <p className='policy-title'>Cookies Policy</p>
            <div className='policy-para'>
              Cookies are small pieces of information saved by your browser onto your computer. 
              Cookies are used to record various aspects of your visit and assist LuxuryGemsCo.com to provide you with uninterrupted service. LuxuryGemsCo.com does not use cookies to save Personal Information for outside uses.
            </div>
            <div className='policy-para'>
              We have implemented Google Analytics features based on Display Advertising ( Google Display Network Impression Reporting, the DoubleClick Campaign Manager integration, and Google Analytics Demographics and Interest Reporting). 
              Visitors can opt-out of Google Analytics for Display Advertising and customize Google Display Network ads using the Ads Settings.
            </div>
            <div className='policy-para'>
              We, along with third-party vendors, including Google, use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) together to report how our ad impressions, other uses of ad services, 
              and interactions with these ad impressions and ad services are related to visits to our site.
            </div>
            <div className='policy-para'>
              No use or Services available on the Website and native mobile applications are directed towards children. 
              LuxuryGemsCo.com does not knowingly collect Personal Information from children or sell of its products to children.
            </div>
        </section>

        <section className="policy-content">
          <div className="user-discretion">
            <p className="discretion">
              BY USING THE WEBSITE, YOU SIGNIFY YOUR AGREEMENT TO THE TERMS OF THIS PRIVACY POLICY, LUXURYGEMSCO.COM RESERVES THE RIGHT, IN OUR SOLE DISCRETION, TO CHANGE, MODIFY, ADD OR DELETE PORTIONS OF THE TERMS OF THIS PRIVACY POLICY AT ANY TIME.
            </p>
            <p className="ps">
              If you have any questions about our Privacy Policy, please feel free to [Contact Us] through our Website or write to us at info@luxurygemsco.com.
            </p>
          </div>
        </section>
      </PolicyContentBox>
  );
}
