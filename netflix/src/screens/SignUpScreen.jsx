import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SignUpScreen.css';
function SignUpScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);



    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
            alert(error.message)
        });



    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value).then((authUser) => {
                console.log(authUser);
            }).catch(error => {
                alert(error.message)
            });
    }




    return (
        <div className='signupScreen'>
            <form action="">
                <input ref={emailRef} type="email" placeholder='EMAIL' />
                <input ref={passwordRef} type="password" placeholder='PASSWORD' />
                <button type="submit" className='signupScreen_button' onClick={signIn}>SIGN IN</button>

                <h4> <span className='signupScreen_gray'>New to Netflix?</span>  <span className='signupScreen_link' onClick={register}>Sign up now.</span> </h4>
            </form>

        </div>
    )
}

export default SignUpScreen 