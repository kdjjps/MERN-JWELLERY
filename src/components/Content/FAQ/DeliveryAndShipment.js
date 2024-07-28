import React from 'react'
import {FAQQuestionsBox} from './style'

export default function DeliveryAndShipment() {

    return (
        <FAQQuestionsBox>
            <p className='faq-title'>Delivery and shipment</p>
            <section className='questions'>
                <div className='drop-content-parent'>
                    <div className='question-container'>
                        <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem', verticalAlign:'middle'}}></i>
                        <p>
                            How much does it cost me to have a Luxury Gems Company product delivered to my home?
                        </p>
                    </div>
                    <section className='drop-content'>
                        Luxury Gems Company provides its customers with free shipping facilities on all the items within India.
                    </section>
                </div>

                <div className='drop-content-parent'>
                    <div className='question-container'>
                        <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem'}}></i>
                        <p>
                            How will the delivery be done?
                        </p>
                    </div>
                    <section className='drop-content'>
                        We make sure to deliver the products through popular insured couriers like BVC Logistics. 
                        Also it is advised that you confirm if we deliver to your pincode. 
                        If courier service is not available in your locality, we are extremely sorry for the inconvenience.
                    </section>
                </div>

                <div className='drop-content-parent'>
                    <div className='question-container'>
                        <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem'}}></i>
                        <p>
                            What is the estimated time for the products to be delivered?                        
                        </p>
                    </div>
                    <section className='drop-content'>
                        Shipping time is 2-5 business days for ‘Available in Stock’ items and 10 -15 business days for Made to order items.                    
                    </section>
                </div>

                <div className='drop-content-parent'>
                    <div className='question-container'>
                        <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem'}}></i>
                        <p>
                            Does Luxury Gems Company undertake delivery to foreign countries?                        
                        </p>
                    </div>
                    <section className='drop-content'>
                        We do have international shipping for specific countries, request you to please get in touch with our customer care team on +91 9326226145.                    
                    </section>
                </div>

                <div className='drop-content-parent'>
                    <div className='question-container'>
                        <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem'}}></i>
                        <p>
                            Is there a provision to change the shipping address after placing the order?                        
                        </p>
                    </div>
                    <section className='drop-content'>
                        If the product is not yet shipped, you can easily get the shipping address changed. 
                        In such cases, we will make sure to coordinate with our courier agencies to get it delivered to the latest address. 
                        You can get in touch with the Customer service team on +91 9326226145 to help you with it. 
                        If the product is in transit and the address cannot be changed.
                    </section>
                </div>

                <div className='drop-content-parent'>
                    <div className='question-container'>
                        <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem'}}></i>
                        <p>
                            Do you offer Cash on Delivery (COD) facility for my location(Pincode)?                        
                        </p>
                    </div>
                    <section className='drop-content'>
                        No, we are sorry. As of now we do not have such option.
                    </section>
                </div>

                <div className='drop-content-parent'>
                    <div className='question-container'>
                        <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem'}}></i>
                        <p>
                            I live abroad. Can I get the product delivered in India?
                        </p>
                    </div>
                    <section className='drop-content'>
                        Yes. You can get the product delivered in India. 
                        We would need a valid shipping address in India for the product to be delivered. 
                        We request you to check on such information in the product detail page, if product can be delivered to your pincode.
                    </section>
                </div>

                <div className='drop-content-parent'>
                    <div className='question-container'>
                        <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem'}}></i>
                        <p>
                            Do you need any proof of identity when accepting the delivery?
                        </p>
                    </div>
                    <section className='drop-content'>
                        The customer is requested to keep a photocopy of any of the identity proofs like Driving License, Pan card, Voters ID, Aadhar or Passport while receiving the product. 
                        You would also need to sign on a form after delivery.
                    </section>
                </div>

                <div className='drop-content-parent'>
                    <div className='question-container'>
                        <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem'}}></i>
                        <p>
                            I live in India. But I got to know that you do not deliver products to my pincode. 
                            Please let me know how can I place the order. 
                        </p>
                    </div>
                    <section className='drop-content'>
                        As of now, we undertake shipment only to selected cities of India. 
                        If your city is not included in the delivery list, we request you to get in touch with customer service team on +91 9326226145.
                    </section>
                </div>

                <div className='drop-content-parent'>
                    <div className='question-container'>
                        <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem'}}></i>
                        <p>
                            Do you have the facility of Transit Insurance?
                        </p>
                    </div>
                    <section className='drop-content'>
                        We provide transit insurance on all goods till they reach you.
                    </section>
                </div>
            </section>
        </FAQQuestionsBox>
    )
}