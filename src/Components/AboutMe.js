import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt, faLinkedin, faCodepen} from '@fortawesome/free-brands-svg-icons';


export const AboutMe=({abname, abfname, abtitle, abadress, abphone, abemail})=>{
    return(
        <footer className="about-me" id="about-me">
            <h1>About {abfname}</h1>
            <p>Hello there, my name is {abname}, and I'm a {abtitle}</p>
            <p>My journey</p>
            <p>I tend to code all my project from scratch. This both deliver an unique experience as helping me build my own component repetoires</p>
            <p>I enjoy doing Web Development and Digital Art on my free time. Check out my art portfolio: https://tug70814.wixsite.com/mysite</p>
            <FontAwesomeIcon icon={faGithubAlt} size="2x" className="fontAwesome"/>
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="fontAwesome"/>
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="fontAwesome"/>
            <FontAwesomeIcon icon={faCodepen} size="2x" className="fontAwesome"/>
            <p>Adress: {abadress}</p>
            <p>Phone: {abphone}</p>
            <p>Email: {abemail}</p>
            <h5>@2020 by {abname}</h5>
        </footer>
    
    )
}
