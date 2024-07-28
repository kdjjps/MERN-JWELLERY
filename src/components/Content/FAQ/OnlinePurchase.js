import React from 'react'
import {FAQQuestionsBox} from './style'

export default function OnlinePurchase() {
    return (
            <FAQQuestionsBox>
                <p className='faq-title'>Online Purchase</p>
                <section className='questions'>
                    <div className='drop-content-parent'>
                        <div className='question-container'>
                            <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem', verticalAlign:'middle'}}></i>
                            <p>
                                What are the steps to be followed to place an order online?
                            </p>
                        </div>
                        <section className='drop-content'>
                            Please make sure to follow the simple steps that are mentioned below:
                            <ol type="i">
                                <li>
                                    First of all, select your desired piece of Jewellery or Diamond or Gemstone and "Add to your Cart”
                                </li>
                                <li>
                                    Click on 'Checkout' if in case your order is final. If not, 'Continue Shopping'
                                </li>
                                <li>
                                    Add your name and Email Address on the Checkout Screen to proceed for Billing and Shipping
                                </li>
                                <li>
                                    Add your shipping details and choose the Payment Options
                                </li>
                                <li>
                                    Choose the Mode of Payment and then place your the order
                                </li>
                                <li>
                                    Once done, You will receive an order confirmation email to the e-mail address you provided while placing your order.
                                </li>
                            </ol>
                        </section>
                    </div>

                    <div className='drop-content-parent'>
                        <div className='question-container'>
                            <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem'}}></i>
                            <p>
                                Will I be getting an order confirmation?
                            </p>
                        </div>
                        <section className='drop-content'>
                            Definitely. The confirmation of your order will be sent to the email id that you have provided to use when placing the order.
                        </section>
                    </div>

                    <div className='drop-content-parent'>
                        <div className='question-container'>
                            <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem'}}></i>
                            <p>
                                Can I cancel an order?
                            </p>
                        </div>
                        <section className='drop-content'>
                            No, Product purchased /agreed to be purchased or confirmed, cannot be cancelled, returned or exchanged.
                        </section>
                    </div>
                </section>
        </FAQQuestionsBox>
    )
}
