import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import {FormContainer} from './style'
import OauthPage from '../Oauth'

export default function LoginPage({animateSignIn}) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [cookies, setCookie] = useCookies([])
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const onEmailChangeHandle = (e) => {
        setEmail(e.target.value)
    } 

    const onPasswordChangeHandle = (e) => {
        setPassword(e.target.value)
    }

    const login = async (e) => {
        e.preventDefault()

        if (!email || !password){
            setErrorMessage('Fields cannot be empty!')
        }
        else{
            setLoading(true)
            const formData = new FormData (document.getElementById('login-form'))

            const email = formData.get('userEmail')
            const password = formData.get('userPassword')
            const token = formData.get('g-recaptcha-response')

            if (token.length == 0 || token == undefined){
                setErrorMessage('Please finish captcha!')
            }
            else{
                const loginResponse = await axios.post('/user/login',{email, password, token})
                
                try{
                    if (loginResponse.data.success){
                        localStorage.setItem('userToken', JSON.stringify(loginResponse.headers['authorization']))
                        setCookie('userName', loginResponse.data.responseData.fname, {path: '/'})
                        setCookie('userEmail', loginResponse.data.responseData.email, {path: '/'})
                        setCookie('isSignedIn', true, {path: '/'})
                        setLoading(false)
                        window.location = "/"
                    }
                    else{
                        setErrorMessage(loginResponse.data.message)
                        setLoading(false)
                    }
                }
                catch(err){
                    console.error(err)
                }
            }

        }       
    }

    return (
        <FormContainer errorStatus={errorMessage}>
            {
                cookies.isSignedIn == true

                ?

                <div>
                    You are already signed in as {cookies.isSignedIn}
                </div>

                :

                <form id='login-form'  >
                    <p className='error-displayer' style={{position:'absolute', top: '-20px', color: '#ffffff', width:'100%',background:'#9B1C31'}}>{errorMessage}</p>
                    <p className='form-title'>Sign In</p>
                    
                    <div style={{marginBottom: '43px'}}>
                        <p>Sign In Easily Using</p>
                        <OauthPage />
                    </div>

                    <div className='seperator'>
                        <div className='seperator-text'>
                            or
                        </div>
                    </div>

                    <p>Already have an account, please sign in</p>
                    <div className="input-container">
                        <input 
                            type="email" 
                            placeholder="Enter Your Email" 
                            name="userEmail" 
                            onChange={onEmailChangeHandle} 
                            value={email} 
                        />
                    </div>
                    <div className="input-container">
                        <input 
                            type="password" 
                            placeholder="Enter Your Password" 
                            name="userPassword" 
                            onChange={onPasswordChangeHandle} 
                            value={password} 
                        />
                    </div>
                    <div className="input-container">
                        <div id='lgc-captcha' className="g-recaptcha" data-sitekey="6Lcj_rYaAAAAAJCeEjhXuitliARFg9iCgGTIkJbh"></div>
                        <div className='button-container'>
                            {
                                loading

                                ?

                                <img src='https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif' style={{width:'30px', height:'30px'}} />

                                :

                                <button onClick={login}>Sign In</button>

                            }
                        </div>
                    </div>
                    <div className="bottom-row">
                        <Link to="/forgot-password">Forgot Password?</Link>
                        <Link to="/account/sign-up">Create an account</Link>
                    </div>
                </form>
            }
        </FormContainer>

    )
}