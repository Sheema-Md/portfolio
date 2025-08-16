import React from "react";
import './styles/Main.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import sheema from './assests/profile.jpg';
const Main = ()=>{
    return(
        <div className='main'>
        <div className="main_container">
            <div className="main_content">
                <div className="text">
                    <p>Hello Everyone!</p>
                    <h1>I am Sheema Mohammed </h1>
                    <p>Aspiring Web Developer</p>
                    <div className="icons">
                        <InstagramIcon className="icon" />
<FacebookIcon className="icon" />
<TwitterIcon className="icon" />
<LinkedInIcon className="icon" />

                    </div>
                    <div className="buttons">
                        <button>See Me</button>
                        <button>Hire Me</button>
                    </div>
                </div>
            </div>
            <div className="main_img">
                <img src ={sheema} alt =""/>
            </div>
        </div>

        </div>
    )
}
export default Main