import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt, faLinkedin, faCodepen} from '@fortawesome/free-brands-svg-icons';


export const AboutMe=({ablinks, abname, abfname, abtitle, abadress, abphone, abemail})=>{
    return(
        <footer className="about-me" id="about-me">
            <div>
            <h1>About {abfname}</h1>
            <p>Hello there, my name is {abname}, and I'm a {abtitle}</p>
            <p>My journey</p>
            <p>I tend to code all my project from scratch. This both deliver an unique experience as helping me build my own component repetoires</p>
            <p>I enjoy doing Web Development and Digital Art on my free time. Check out my art portfolio: https://tug70814.wixsite.com/mysite</p>
            <a href={ablinks.github}><button><FontAwesomeIcon icon={faGithubAlt} size="2x" className="fontAwesome"/></button></a>
            <a href={ablinks.linkedIn}><button><FontAwesomeIcon icon={faLinkedin} size="2x" className="fontAwesome"/></button></a>
            <a href={ablinks.email}><button><FontAwesomeIcon icon={faEnvelope} size="2x" className="fontAwesome"/></button></a>
            <a href={ablinks.codepen}><button><FontAwesomeIcon icon={faCodepen} size="2x" className="fontAwesome"/></button></a>
            <p>Adress: {abadress}</p>
            <p>Phone: {abphone}</p>
            <p>Email: {abemail}</p>
            <div className="bottomOfDiv" id="bottomDivForText">
            <h5 >@2020 by {abname}</h5>
            <p style={{fontSize:"10px"}}>made with React and fontAwesome with <span style={{textDecoration:"line-through"}}>love</span> pain and sweat</p>
            </div>
            </div>
        </footer>
    
    )
}
