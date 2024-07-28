import React from "react";
import { PolicyContentBox } from "./style";

export default function ReturnPolicy() {
  return (
      <PolicyContentBox>
          <p className='policy-title'>Return Policy</p>
          <section className='policy-content'>

            <p>
              Product purchased /agreed to be purchased or confirmed, cannot be cancelled, returned or exchanged.
            </p>
            
            <p style={{margin:'20px 0px'}}>
              Returns & Exchanges will be accepted ONLY if your order gets damaged or brakes during the shipment or you receive the product that is not ordered by you. In both the cases you will be entitled to return the order exactly in the condition in which you have received it (unworn, with original packaging).
            </p>

            <p className='policy-para-title'>
              Process of Returning the order
            </p>

            <p className='policy-para'>
              <ol type='1'>
                <li>
                  Please inform us within 3 days after you have received the order. You can do this by sending us an email at info@luxurygemsco.com.
                  You should also mail the photograph of the damaged or incorrect product to us so to make our QC team to decide that whether the product has really damaged during the transition or not.
                </li>
                <li>
                  Once our Quality Control team gets assured about the damaged product we will arrange for a courier to collect the goods from your place at the earliest for returning or exchange according to your request.
                </li>
                <li>
                  Luxury Gems Company will replace the items free of charge if possible or issue a refund for the cost of goods through the credit/debit card used for online shopping. 
                  The refund will include the actual price of item purchased and shipment charges charged by us. 
                  This refund will however be made to you after we receive the shipment in its original packaging.
                </li>
              </ol>
            </p>

            <p>
              We are not responsible for any lost or damaged packages. We are not liable for any returns that we were not notified about first.
            </p>

            <p style={{margin:'20px 0px'}}>
              The refund will be made to you through same credit/debit account that you have used while ordering your order at the time of purchase. 
              This payment will be made to you via our respective Payment Gateway applicable as per the situations given below.
            </p>

            <p className='policy-para-title'>
              Refunds will be done in the following cases:
            </p>

            <p className='policy-para'>
              <ol type='1'>
                <li>
                  Genuine quality issues.
                </li>
                <li>
                  Packages lost in transit.
                </li>
                <li>
                  In case Luxury Gems Company discovers that a wrong item has been shipped to you.
                </li>
              </ol>
            </p>

            <p className='policy-para-title'>
              No Refunds will be given in the following cases:
            </p>

            <p className='policy-para'>
              <ol>
                <li>
                  Incorrect or outdated delivery address.
                </li>
                <li>
                  Incorrect address format including any form of a PO Box address.
                </li>
                <li>
                  If you fail to inform us within three days after receipt of your order.
                </li>
                <li>
                  Package refused by recipient due to sizing issues.
                </li>
                <li>
                  Products returned in a used or damaged condition.
                </li>
                <li>
                  If the jewellery is not faulty or damaged.
                </li>
                <li>
                  To avoid any issue it is advised to review our size guides carefully before making your purchase.
                </li>
              </ol>
            </p>

        </section>
      </PolicyContentBox>
  );
}
