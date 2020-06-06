import React from 'react';
import { Link } from "react-scroll";

const BurgerMenu =(bmvisible)=>{
    return(
        <div className="burgermenu" id="burgermenu">
            <div className="burgerText">
            <ul>
            <li><Link activeClass="active" to="skill" smooth={true} spy={true} offset={-70} duration={500}>skill</Link></li>
            <hr></hr>
            <li><Link activeClass="active" to="project" smooth={true} spy={true} offset={-70} duration={500}>project</Link></li>
            <hr></hr>
            <li><Link activeClass="active" to="education" smooth={true} spy={true} offset={-70} duration={500}>education</Link></li>
            <hr></hr>
            <li><Link activeClass="active" to="contact-me" smooth={true} spy={true} offset={-70} duration={500}>contact</Link></li>
            <hr></hr>
            <li><Link activeClass="active" to="about-me" smooth={true} spy={true} offset={-70} duration={500}>about me</Link></li>
            </ul>
            </div>
        </div>
    )
}
export default BurgerMenu;