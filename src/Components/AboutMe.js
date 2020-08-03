import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt, faLinkedin, faCodepen} from '@fortawesome/free-brands-svg-icons';


export const AboutMe=({ablinks, abname, abfname, abtitle, abadress, abphone, abemail, abline0, abline1, abline2, abline3, abPicGoodAt})=>{
    return(
        <footer className="about-me" id="about-me">
            <div>
                <div id="left-about-me" className="wow fadeInUp">
            <h1>About {abfname}</h1>
            <hr></hr>
            <p>Hello there, my name is {abname}, and I'm a {abtitle}.</p>
            <p>{abline0}</p>
            <h5>My journey</h5>
            <p>{abline1}</p>
            <p>{abline2}</p>
            <p>{abline3}</p>
            <p>I am also pretty good at <FontAwesomeIcon icon={abPicGoodAt} size="1x" className="fontAwesome"/></p>
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
