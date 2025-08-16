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
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React.js</p>
                <p>Java</p>
                <p>SQL</p>
                
            </div>
        </div>
           
        </div>
    )
}
export default Section;