import React, {useState} from 'react'
import {BespokeModalBox} from './style'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function BespokeModal({status,changeModalStatus}) {

    const [designImages, setDesignImages] = useState([])
    const [requesterState, setRequesterState] = useState({
        fname: '',
        email: '',
        phone: '',
        country: '',
        info: '',
        enrolledForEmailers: false
    })

    const onChangeBespokeFormInput = (e) => {
        const value = e.target.value;
        setRequesterState({
          ...requesterState,
          [e.target.id]: value
        });
    }

    const onInputChangeForDesignImages = (e) => {
        setDesignImages(e.target.files)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const data = new FormData();

          data.append("fname", requesterState.fname);
          data.append("email", requesterState.email);
          data.append("phone", requesterState.phone);
          data.append("country", requesterState.country);
          data.append("info", requesterState.info);
          data.append("enrolledForEmailers", requesterState.enrolledForEmailers);

          for (let i = 0; i < designImages.length; i++) {
            data.append("designImages", designImages[i]);
          }

          axios
            .post("/bespoke/mail-to-site-owner", data)
            .then((response) => {
              console.log("Done!");
            })
            .catch((e) => {
              console.log("Upload Error");
            });
          window.location="/thankyou";
        console.log(requesterState)
    }
    
    return (
       <BespokeModalBox status={status}>
           <div className='modal-container'>
            <section>
                <div className='bespoke-headline'>
                        <h2>
                            Bespoke
                        </h2>
                        <p>
                            Let's Craft Your Vision Into Reality
                        </p>
                </div>

                <hr />

                <form>
                    <div className='row'>
                            <div>
                                <label>Full Name *</label>
                                <input name='fname' id='fname' required onChange={onChangeBespokeFormInput} />
                            </div>
                            <div>
                                <label>Email *</label>
                                <input name='email' id='email' type='email' required onChange={onChangeBespokeFormInput} />
                            </div>
                    </div>
                    
                    <div className='row'>
                            <div>
                                <label>Phone Number *</label>
                                <input name='phone' id='phone' required onChange={onChangeBespokeFormInput} />
                            </div>
                            <div>
                                <label>Country *</label>
                                <input name='country' id='country' required onChange={onChangeBespokeFormInput} />
                            </div>
                    </div>

                    <div className='row'>
                        <div>
                                <label>Additional Info *</label>
                                <textarea id='info' rows="4" cols="50" onChange={onChangeBespokeFormInput} required />
                        </div>
                        <div>
                                <label>Upload Images *</label>
                                <input type='file' name="design-images" required multiple onChange={onInputChangeForDesignImages}  />
                        </div>
                    </div>

                    <div style={{display: 'flex', padding: '10px', marginTop:'10px'}}>
                        <input type='checkbox' name='enrolledForEmailers' id='enrolledForEmailers' onChange={() => setRequesterState({...requesterState, enrolledForEmailers:!requesterState.enrolledForEmailers})} />
                        <p>
                            I confirm I want to recieve newsletters and marketing e-mails from Luxury Gems Company in line with their Privacy Policy.
                        </p>
                    </div>

                    <div className='button-container'>

                            <button onClick={onSubmit}>
                                Submit
                            </button>
                    </div>

                </form>

                <div style={{position:'absolute', top:'20px', right: '20px'}} onClick={changeModalStatus}>
                    <FontAwesomeIcon icon={faTimes} style={{fontSize:'2.5rem'}} />
                </div>

            </section>
           </div>
       </BespokeModalBox>
    )
}
