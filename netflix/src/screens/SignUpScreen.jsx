import React from 'react'
import './SignUpScreen.css';
function SignUpScreen() {
    return (
        <div className='signupScreen'>
            <form action="">
                <input type="email" placeholder='EMAIL' />
                <input type="password" placeholder='PASSWORD' />
                <button type="submit" className='signupScreen_button'>SIGN IN</button>
            </form>

        </div>
    )
}

export default SignUpScreen 