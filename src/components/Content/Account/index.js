import React,{useState} from 'react'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import SignInPopUp from './SignInPopUp'
import SignUpPopUp from './SignUpPopUp'
import {LoginPageBox} from './style'
import {Switch, Route, useRouteMatch, Link} from 'react-router-dom'

export default function Account() {

    const {path} = useRouteMatch()
    const [signinAnimation, setSignInAnimation] = useState(false)
    const [signupAnimation, setSignUpAnimation] = useState(false)

    const animateSignIn = () => {
        setSignInAnimation(true)
        setTimeout(()=>setSignInAnimation(false), 4000)
      }
  
    const animateSignUp = () => {
        setSignUpAnimation(true)
        setTimeout(()=>setSignUpAnimation(false), 4000)
      }

    return (
            <LoginPageBox>
                <SignInPopUp status={signinAnimation} />
                <SignUpPopUp status={signupAnimation} />
                <Switch>
                    <Route exact path={`${path}/login`} render={(props) => <LoginPage {...props} animateSignIn={animateSignIn}  />} />
                    <Route exact path={`${path}/sign-up`} render={(props) => <SignUpPage {...props} animateSignUp={animateSignUp} />} />
                </Switch>
            </LoginPageBox> 
    )
}
