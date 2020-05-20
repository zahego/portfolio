import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt, faLinkedin, faCodepen} from '@fortawesome/free-brands-svg-icons';
var flexContain = {
    flexDirection: 'row',
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: "0 10px",
}
export const ContactMe=()=>{
    return(
        <div className="contact-me" id="contact-me">
            <section>
                <div style={flexContain}>
                <div>
            <h1>Connect with me:</h1>
            <h5>You can connect with me through these medium:</h5>
            <div style={{paddingLeft:"10px"}}>
            <FontAwesomeIcon icon={faGithubAlt} size="2x" className="fontAwesome"/>
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="fontAwesome"/>
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="fontAwesome"/>
            <FontAwesomeIcon icon={faCodepen} size="2x" className="fontAwesome"/>
            </div>
            </div>
            <img src={require('../Resources/connection.png')} style={{width:"500px", height:"300px", opacity:"0.5"}}></img>
            
            </div>
            </section>
        </div>
    
    )
}
