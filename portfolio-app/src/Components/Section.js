import React from "react";
import './styles/Section.css';
import shem2 from './assests/propic.jpg';
const Section = () =>{
    return(
        <div className="sections">
        <div className="section_container">
            <div className="section_img">
                <img src = {shem2} alt =""/>
            </div>
            <div className="section_content">
                <h1>Sheema Mohammed</h1>
                <p>Experience in Frontend and Backend development</p>
                <div className="skills">
    <p className="skill">HTML</p>
    <p className="skill">CSS</p>
    <p className="skill">JavaScript</p>
    <p className="skill">React.js</p>
    <p className="skill">Java</p>
    <p className="skill">SQL</p>
  </div>
                
            </div>
        </div>
           
        </div>
    )
}
export default Section