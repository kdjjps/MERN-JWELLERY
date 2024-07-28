import React, {useState} from "react"
import axios from "axios"
import {FormContainer} from './style'
import OauthPage from '../Oauth'
import {useCookies} from 'react-cookie'
import validator from "validator"

export default function SignUpPage({ animateSignUp }) {

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [validatorMessage, setValidatorMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [cookies, setCookie] = useCookies([])

  const onFnameChangeHandle = (e) => {
    let firstChar

    if (e.target.value.length <= 1){
      setFname(firstChar);
    }
    else{
      firstChar = e.target.value[0].toUpperCase()
      let restWord = e.target.value.slice(1)
      let newWord = firstChar + restWord
      setFname(newWord);
    }
  };

  const onLnameChangeHandle = (e) => {
    setLname(e.target.value);
  };

  const onEmailChangeHandle = (e) => {
    setEmail(e.target.value);
  };

  const validate = (value) => {
  
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setValidatorMessage("")
    } else {
      setValidatorMessage('Password must contain 1 lowercase, 1 uppercase, 1 number, 1 symbol & must be 8 chars long')
    }
  }

  const onPasswordChangeHandle = (e) => {
    validate(e.target.value);
    setPassword(e.target.value);
  };

  const signup = async (e) => {
    e.preventDefault()

    if (!validatorMessage){

      if (!fname || !lname || !email || !password ){
        setErrorMessage('Fields cannot be empty!')
      }
      else{
        setLoading(true)
        const signupResponse = await axios.post("/user/signup",`fname=${fname}&lname=${lname}&email=${email}&password=${password}`)
       try{
          if (signupResponse.data.success){
            setFname("")
            setLname("")
            setEmail("")
            setPassword("")
            localStorage.setItem('userToken', JSON.stringify(signupResponse.headers['authorization']))
            setCookie('userName', signupResponse.data.responseData.fname, {path: '/'})
            setCookie('userEmail', signupResponse.data.responseData.email, {path: '/'})
            setCookie('isSignedIn', true, {path: '/'})
            setLoading(false)
            window.location = "/"
            animateSignUp()
          }
          else{
            setErrorMessage(signupResponse.data.message)
          }
       }
        catch(err){
          console.log(err)
        } 
      }

    }
  }

  return (
      <FormContainer errorStatus={errorMessage} validatorStatus={validatorMessage}>
          <p className="form-title">Sign Up</p>
          <div>
              <p>Sign Up Easily Using</p>
              <OauthPage />
          </div>
          <div className='seperator'>
              <div className='seperator-text'>
                  or
              </div>
          </div>
          <form id="signup-form" >
            <p className='error-displayer' style={{position:'absolute', top: '-40px', color: '#ffffff', width:'100%',background:'#9B1C31'}}>{errorMessage}</p>
            <p className='validator-displayer' style={{position:'absolute', top: '-10px', color: '#ffffff', width:'100%',background:'#9B1C31'}}>{validatorMessage}</p>
            <p>Enjoy the benefits of a LGC account</p>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter Your Firstname"
                name="fname"
                value={fname}
                onChange={onFnameChangeHandle}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter Your Lastname"
                name="lname"
                value={lname}
                onChange={onLnameChangeHandle}
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={onEmailChangeHandle}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={onPasswordChangeHandle}
              />
            </div>
            <p style={{ fontSize: "1rem" }}>
              Password is case sensitive and must be at least 6 characters long.
            </p>
            <div className="input-container">
              <div className='button-container'>
                  {
                      loading

                      ?

                      <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} alt="loading-gif" />

                      :

                      <button onClick={signup}>Sign Up</button>

                  }
              </div>
            </div>
        </form>
      </FormContainer>
  )
}