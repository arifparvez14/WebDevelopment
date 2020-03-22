import React from 'react';
import bgImg from '../Images/bannerbackground.png';
import './Background.css'

const Background = () => {
    var setImage = {
        width: "100%",
        height: "400px",
        backgroundImage: `url(${bgImg})`
      };
    return (
        <div style={setImage} className="">
            <h1>Best food for your belly</h1>
        </div>
    );
};

export default Background;