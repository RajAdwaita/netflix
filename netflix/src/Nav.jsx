import React, { useState, useEffect } from 'react'
import './Nav.css';
function Nav() {

    const [show, handleShow] = useState(false);


    const transitionNavBar = () => {

        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }



    useEffect(() => {

        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])



    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img className='nav_logo' src="https://e7.pngegg.com/pngimages/119/342/png-clipart-logo-netflix-nasdaq-nflx-brand-television-copywriter-floor-television-text.png" alt="" />
                <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />

            </div>
        </div>
    )
}

export default Nav