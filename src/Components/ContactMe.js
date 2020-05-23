import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt, faLinkedin, faCodepen} from '@fortawesome/free-brands-svg-icons';
var flexContain = {
    flexDirection: 'row',
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: "20px 20px",
}
export const ContactMe=({cmlinks})=>{
    return(
        <div className="contact-me" id="contact-me">
            <section>
                <div style={flexContain}>
                <div>
            <h1>Connect with me:</h1>
            <p>You can connect with me through these medium:</p>
            <div>
            <a href={cmlinks.github}><button><FontAwesomeIcon icon={faGithubAlt} size="2x" className="fontAwesome"/></button></a>
            <a href={cmlinks.linkedIn}><button><FontAwesomeIcon icon={faLinkedin} size="2x" className="fontAwesome"/></button></a>
            <button onClick={()=>window.alert(cmlinks.email)}><FontAwesomeIcon icon={faEnvelope} size="2x" className="fontAwesome"/></button>
            <a href={cmlinks.codepen}><button><FontAwesomeIcon icon={faCodepen} size="2x" className="fontAwesome"/></button></a>
            </div>
            </div>
            <img src={cmlinks.connectionpic} style={{width:"500px", height:"320px", opacity:"0.5"}} alt="contact.png"></img>
            
            </div>
            </section>
        </div>
    
    )
}
