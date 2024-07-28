import React,{useState, useEffect} from 'react'
import {AskQueryBox} from './style.js'
import MessagePopUp from './MessagePopUp.js'
import axios from 'axios'

export default function QueryForm() {

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
            axios.post("/query/ask-query",`fname=${userData.fullName}&email=${userData.email}&phone=${userData.phone}&country=${userData.country}&query=${userData.query}`)
            .then((queryFeedback) => {
              if (queryFeedback.data.success == true){
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
            <AskQueryBox>
                <h2>Couldn't Find What You Were Looking For?</h2>
                <p>Tell us and we will get back to you</p>
                    <form>
                        <div className='query-input-container'>
                            <input 
                            placeholder="Full Name"
                            name="fname"
                            value={userData.fullName}
                            onChange={onChangeHandle}></input>
                            <input 
                            placeholder="Email Address" 
                            name="email"
                            value={userData.email}
                            type="email"
                            onChange={onChangeHandle}></input>
                        </div>
                        <div className='query-input-container'>
                            <input 
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={userData.phone}
                            type="phone"
                            onChange={onChangeHandle}></input>
                            <input 
                            placeholder="Country"
                            name="country"
                            value={userData.country}
                            onChange={onChangeHandle}></input>
                        </div>
                        <div className='query-input-container'>
                            <textarea 
                            placeholder="What are you searching?" 
                            name="query"
                            value={userData.query}
                            onChange={onChangeHandle}
                            rows="5"></textarea>
                        </div>
                        <div className='query-button-container'>
                            {
                                loading

                                ?

                                <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

                                :

                                <button onClick={sendQuery}>SUBMIT</button>

                            }
                        </div>
                    </form>
                    <MessagePopUp status={messageAnimation} />
            </AskQueryBox>
    )
}