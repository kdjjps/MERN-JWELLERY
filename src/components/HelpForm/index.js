import React, {useState} from 'react'
import {HelpFormBox} from './style'
import axios from 'axios'
import MessagePopUp from './MessagePopUp.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function HelpForm({helpFormStatus, setHelpFormStatus}) {

    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        query: ""
    })

    const [loading, setLoading] = useState(false)

    const [messageAnimation, setMessageAnimation] = useState(false)

    const [errorMessage, setErrorMessage] = useState("")

    const onChangeHandle = (e) => {
        let identifier = e.target.name

        switch (identifier) {
            case "fname":
                setUserData({
                    ...userData, fullName: e.target.value
                })
                break;
            case "email":
                setUserData({
                    ...userData, email: e.target.value
                })
                break;
            case "phoneNumber":
                setUserData({
                    ...userData, phone: e.target.value
                })
                break;
            case "country":
                setUserData({
                    ...userData, country: e.target.value
                })
                break;
            case "query":
                setUserData({
                    ...userData, query: e.target.value
                })
                break;
            default:
                setUserData({
                    ...userData, fullName: e.target.value
                })
                break;
        }
    }

    const animate = () => {
        setMessageAnimation(true)
        setTimeout(()=>setMessageAnimation(false), 1500)
    }

    const sendQuery = (e) => {
        e.preventDefault()
        if (!userData.fullName || !userData.email || !userData.phone || !userData.country || !userData.query){
            setErrorMessage('Fields cannot be empty!')
          }
          else{
            setLoading(true)
            axios.post("/help/ask-help",`fname=${userData.fullName}&email=${userData.email}&phone=${userData.phone}&country=${userData.country}&query=${userData.query}`)
            .then((queryFeedback) => {
              if (queryFeedback.data.success === true){
                setUserData({
                    fullName: "",
                    email: "",
                    phone: "",
                    country: "",
                    query: ""
                })
                animate()
                setLoading(false)
              }
              else{
                setErrorMessage(queryFeedback.data.message)
              }
            })
            .catch((error) => {
              console.log(error)
            }) 
          }
    }

    return (
        <HelpFormBox status={helpFormStatus}>
            <section>
                <h2>Have any query?</h2>
                <p>Let us help you</p>
                <form>
                    <div className='query-input-container'>
                        <input name="fname" placeholder="Full Name" value={userData.fullName} onChange={onChangeHandle}></input>
                        <input name="email" placeholder="Email Address" value={userData.email} onChange={onChangeHandle}></input>
                    </div>
                    <div className='query-input-container'>
                        <input name="phoneNumber" placeholder="Phone Number" value={userData.phone} onChange={onChangeHandle}></input>
                        <input name="country" placeholder="Country" value={userData.country} onChange={onChangeHandle}></input>
                    </div>
                    <div className='query-input-container'>
                        <textarea name="query" placeholder="What are you searching?" value={userData.query} rows="5" onChange={onChangeHandle}></textarea>
                    </div>
                    <div className='query-button-container'>
                        {
                            loading

                            ?

                            <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} alt='loader-icon' />

                            :

                            <button onClick={sendQuery}>SUBMIT</button>
                        }
                    </div>
                </form>
                <div className='close-button' onClick={() => setHelpFormStatus(false)}>
                    <FontAwesomeIcon icon={faTimes} style={{fontSize:'2rem', color: 'rgb(30,46,76)' }} />
                </div>
                <MessagePopUp status={messageAnimation} errorMessage={errorMessage} />
            </section>
        </HelpFormBox>
    )
}