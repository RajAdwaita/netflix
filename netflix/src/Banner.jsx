import React from "react";
import "./Banner.css";

function Banner() {
    return (
        <header
            className="banner"
            style={{
                // backgroundImage: `url("https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg")`,
                backgroundImage: `url("https://wallpapercave.com/wp/wp8741529.jpg")`,

                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >

            <div className="banner_contents">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>


                </div>
                <h1 className="banner_description">
                    Test Description
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ratione nulla odio esse dolorem mollitia! Nam reprehenderit, natus minus repellendus maxime modi unde sequi velit. Quae autem ab adipisci commodi.
                </h1>
            </div>
            <div className="banner--fadeBottom" />




        </header>
    );
}

export default Banner;


