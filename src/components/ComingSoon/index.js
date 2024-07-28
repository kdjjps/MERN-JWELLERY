import React from "react"
import ComingSoonBox from "./style"

function ComingSoon() {

  return (
    <ComingSoonBox>
      <section className='maintenance-message'>
        <img src='https://lgc-static.s3.ap-south-1.amazonaws.com/logo-main4.png' alt='logo' width='140px' height='140px' />
        <h1>
          We'll be back.
        </h1>
        <p>
          We're busy updating the store for you.
        </p>
        <p>
          Please check back soon.
        </p>
      </section>
    </ComingSoonBox>
  );
}

export default ComingSoon;