import React from 'react'
import {FAQQuestionsBox} from './style'

export default function Payments() {
    return (
            <FAQQuestionsBox>
                <p className='faq-title'>Payments</p>
                <section className='questions'>
                    <div className='drop-content-parent'>
                        <div className='question-container'>
                            <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem', verticalAlign:'middle'}}></i>
                            <p>
                                Will the prices displayed on Luxury Gems Company subject to any kind of change?
                            </p>
                        </div>
                        <section className='drop-content'>
                            The prices are subject to change without notice. 
                            You should know that you are liable to pay the amount that is stated on the day of purchase.
                        </section>
                    </div>

                    <div className='drop-content-parent'>
                        <div className='question-container'>
                            <i class="fi-etsrxl-equilateral-triangle" style={{marginRight:'6px', fontSize:'0.6rem'}}></i>
                            <p>
                                Do you offer Cash on Delivery (COD) payment facility?
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
                                Are there any additional shipping costs?
                            </p>
                        </div>
                        <section className='drop-content'>
                            There are no additional shipping charges for shipment within India. 
                            The total price mentioned on the product page next to the photograph is the final price. What you see is what you pay.
                        </section>
                    </div>
                </section>
            </FAQQuestionsBox>
    )
}
