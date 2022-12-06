import React, { useState } from 'react'
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';
function LoginScreen() {
    const [signIn, setSignIn] = useState(false);



    return (
        <div className='loginScreen'>
            <div className="loginScreen_background">
                <img className='loginScreen_logo' src="https://townsquare.media/site/442/files/2016/03/netflix-logo-e1458912412513.png" alt="" />

                <button onClick={() => setSignIn(true)} className='loginScreen_button'>Sign In</button>
                <div className="loginScreen_gradient"></div>

                <div className="loginScreen_body">
                    {signIn ? (
                        <SignUpScreen />
                    ) :
                        (
                            <>
                                <h1>Unlimited Films, TV programmes and more.</h1>

                                <h2>Watch anywhere. Cancel at anytime.</h2>

                                <h3>Ready to watch? Enter your email to create or restart your membership.
                                </h3>


                                <div className="loginScreen_input">
                                    <form action="">
                                        <input type="email" placeholder='Email Address ' />
                                        <button onClick={() => setSignIn(true)} className='loginScreen_getStarted'>GET STARTED</button></form>
                                </div>
                            </>
                        )}

                </div>

            </div>


        </div>
    )
}

export default LoginScreen