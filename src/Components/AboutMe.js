import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTableTennis } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt, faLinkedin, faCodepen} from '@fortawesome/free-brands-svg-icons';


export const AboutMe=({ablinks, abname, abfname, abtitle, abadress, abphone, abemail})=>{
    return(
        <footer className="about-me" id="about-me">
            <div>
                <div id="left-about-me" className="wow zoomInLeft">
            <h1>About {abfname}</h1>
            <hr></hr>
            <p>Hello there, my name is {abname}, and I'm a {abtitle}.</p>
            <p>My focus is on Web Development and problem solving in general.</p>
            <h5>My journey</h5>
            <p>I am studying Bachelor of Computer Science at Temple University and doing many online courses on linkedIn learning.</p>
            <p>I tend to code all my projects from scratch. 
                This both delivers an unique experience as well as helps me thoroughly understand my stack arsenal.</p>
            <p>I enjoy doing Web Development and Digital Art on my free time. 
                Check out my art portfolio <a href="https://tug70814.wixsite.com/mysite">here</a></p>
            <p>I am also pretty good at <FontAwesomeIcon icon={faTableTennis} size="1x" className="fontAwesome"/></p>
            <div className="contact-buttons">
            <a href={ablinks.github}><button><FontAwesomeIcon icon={faGithubAlt} size="2x" className="fontAwesome"/></button></a>
            <a href={ablinks.linkedIn}><button><FontAwesomeIcon icon={faLinkedin} size="2x" className="fontAwesome"/></button></a>
            <button onClick={()=>window.alert(ablinks.email)}><FontAwesomeIcon icon={faEnvelope} size="2x" className="fontAwesome"/></button>
            <a href={ablinks.codepen}><button><FontAwesomeIcon icon={faCodepen} size="2x" className="fontAwesome"/></button></a>
            </div>
            <div style={{paddingBottom:"60px", paddingTop:"0", paddingLeft:"0"}}>
            <p>Adress: {abadress}</p>
            <p>Phone: {abphone}</p>
            <p>Email: {abemail}</p>
            </div>
            </div>
            <div className="bottomOfDiv" id="bottomDivForText">
            <h5 >@2020 by {abname}</h5>
            <p style={{fontSize:"10px"}}>made with React, <span style={{textDecoration:"line-through"}}>love</span> pain and sweat</p>
            </div>
            </div>
        </footer>
    
    )
}
