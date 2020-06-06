import React, {useState} from 'react';
import { Link } from "react-scroll";
import BurgerMenu from "./BurgerMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar=({nlogo})=>{
    const [burgerMenuState, setBurgerMenuState]=useState(false);
    
    const openDoc=()=>{
        if(window.confirm("Download resume?")){
         window.open(require('../Resources/Resume.docx'), '_none')}
        
    }
    const openBurgerMenu=()=>{
        
        if(burgerMenuState===true){
            document.getElementById("burgermenu").style.display="none";
            setBurgerMenuState(false);
            
        }
        else if(burgerMenuState===false){
            document.getElementById("burgermenu").style.display="block";
            setBurgerMenuState(true);
            
        }
    }
    return(
        <header className="navbar">
            <div className="progress-bar" id="progress-bar"></div>
            <FontAwesomeIcon icon={faBars} size="3x" className="fontAwesome-burger" onClick={openBurgerMenu} id="fontAwesome-burger"/>
            <BurgerMenu bmvisible="visible" />
            <ul className="navbarul">
            <li style={{alignItems:"flex-start", flex:"2",marginTop:"0"}}>< a href="./index.html"><img src={nlogo} style={{ height:"50px", width:"auto"}} alt="banner"/></a></li>
            <li><Link activeClass="active" to="skill" smooth={true} spy={true} offset={-70} duration={500}>skill</Link></li>
            <li><Link activeClass="active" to="project" smooth={true} spy={true} offset={-70} duration={500}>project</Link></li>
            <li><Link activeClass="active" to="education" smooth={true} spy={true} offset={-70} duration={500}>education</Link></li>
            <li><Link activeClass="active" to="contact-me" smooth={true} spy={true} offset={-70} duration={500}>contact</Link></li>
            <li><Link activeClass="active" to="about-me" smooth={true} spy={true} offset={-70} duration={500}>about me</Link></li>
            <li onClick={openDoc} style={{cursor:"pointer"}}>resume 
            <FontAwesomeIcon icon={faSave} size="lg" className="fontAwesome" /></li>
            </ul>
        </header>
    
    )
}
