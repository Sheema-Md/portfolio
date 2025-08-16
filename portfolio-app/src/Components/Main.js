import React from "react";
import './styles/Main.css';
import {Instagram , Facebook , Twitter ,LinkedIn} from "@mui/icons-material";
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
                        <Instagram className="icon"/>
                        <Facebook className="icon"/>
                        <Twitter className="icon"/>
                        <LinkedIn className="icon"/>
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
export default Main;