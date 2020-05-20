import React from 'react';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

export const Navbar=()=>{
    return(
        <header className="navbar">
            <div class="progress-bar" id="progress-bar"></div>
            <ul>
            <li style={{alignItems:"flex-start", flex:"2",marginTop:"0"}}>< a href="./index.html"><img src={require('../Resources/logo-brand.png')} style={{ height:"50px", width:"auto"}} alt="banner"/></a></li>
            <li><Link activeClass="active" to="skill" smooth={true} spy={true} offset={-70} duration={500}>skill</Link></li>
            <li><Link activeClass="active" to="project" smooth={true} spy={true} offset={-70} duration={500}>project</Link></li>
            <li><Link activeClass="active" to="education" smooth={true} spy={true} offset={-70} duration={500}>education</Link></li>
            <li><Link activeClass="active" to="contact-me" smooth={true} spy={true} offset={-70} duration={500}>contact</Link></li>
            <li><Link activeClass="active" to="about-me" smooth={true} spy={true} offset={-70} duration={500}>about me</Link></li>
            <li><a href="resume">resume </a>
            <FontAwesomeIcon icon={faSave} size="lg" className="fontAwesome" /></li>
            {/*<li ><a href="./index.html" style={{fontSize:'24px'}}>LOGO</a></li>
            <li><a href="#skill">skill</a></li>
            <li><a href="#project">project</a></li>
            <li><a href="#education">education</a></li>
            <li><a href="#about-me">about me</a></li>
            <li><a href="#contact-me">contact me</a></li>
    <li><a href="#resume">resume</a></li>*/}
            </ul>
            <div className="stopfloat"></div>
        </header>
    
    )
}
