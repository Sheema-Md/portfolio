import React, { useState } from "react";
import'./styles/Header.css';
import Close from '@mui/icons-material/Close';
import MenuBookOutlined from '@mui/icons-material/MenuBookOutlined';
import {Link} from 'react-router-dom';
const Header = ( )=>{
         const[active , setActive ] = useState(false);
         const showMenu =()=>{
            setActive(!active);
         }

//comment

     return (<div className="header">
               <div className="header_logo">
                <h1>Sheema Mohammed</h1>
               </div>
               <nav>
                <ul>
                    <div className="closed">
                       <Close className="close" onClick = {showMenu}/>
                    </div>
                    <li>
                        <Link to ='/'><b>Home</b></Link>
                    </li>
                    <li>
                        <Link to ='/'><b>About</b></Link>
                    </li>
                    <li>
                        <Link to ='/'><b>Portfolio</b></Link>
                    </li>
                    <li>
                        <Link to ='/'><b>Blog</b></Link>
                    </li>
                    <li>
                        <Link to ='/'><b>Contact</b></Link>
                    </li>
                </ul>
               </nav>
               <div className = "changer">
                <MenuBookOutlined className ="menu" onClick = {showMenu}/>
               </div>

        </div>);
    

};
export default Header;