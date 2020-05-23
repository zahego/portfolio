import React from 'react';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

export const Navbar=({nlogo})=>{
    const openDoc=()=>{
        if(window.confirm("Download resume?")){
         window.open(require('../Resources/Resume.docx'), '_none')}
        
    }
    return(
        <header className="navbar">
            <div className="progress-bar" id="progress-bar"></div>
            <ul>
            <li style={{alignItems:"flex-start", flex:"2",marginTop:"0"}}>< a href="./index.html"><img src={nlogo} style={{ height:"50px", width:"auto"}} alt="banner"/></a></li>
            <li><Link activeClass="active" to="skill" smooth={true} spy={true} offset={-70} duration={500}>skill</Link></li>
            <li><Link activeClass="active" to="project" smooth={true} spy={true} offset={-70} duration={500}>project</Link></li>
            <li><Link activeClass="active" to="education" smooth={true} spy={true} offset={-70} duration={500}>education</Link></li>
            <li><Link activeClass="active" to="contact-me" smooth={true} spy={true} offset={-70} duration={500}>contact</Link></li>
            <li><Link activeClass="active" to="about-me" smooth={true} spy={true} offset={-70} duration={500}>about me</Link></li>
            <li onClick={openDoc} style={{cursor:"pointer"}}>resume 
            <FontAwesomeIcon icon={faSave} size="lg" className="fontAwesome" /></li>
            </ul>
            <div className="stopfloat"></div>
        </header>
    
    )
}
