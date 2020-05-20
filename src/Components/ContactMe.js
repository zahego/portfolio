import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt, faLinkedin, faCodepen} from '@fortawesome/free-brands-svg-icons';

export const ContactMe=()=>{
    return(
        <div className="contact-me" id="contact-me">
            <section>
            <h1>Connect with me:</h1>
            <h5>You can connect with me through these medium:</h5>
            <FontAwesomeIcon icon={faGithubAlt} size="2x" className="fontAwesome"/>
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="fontAwesome"/>
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="fontAwesome"/>
            <FontAwesomeIcon icon={faCodepen} size="2x" className="fontAwesome"/>
            </section>
        </div>
    
    )
}
