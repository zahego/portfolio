import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/WorkWithMe.css';

export const WhyWorkWithMe=({characteristic})=>{
    return(
        <div className="why-work-with-me">
            <section>
                <div className="wow fadeInUp wwwmheader">
            <h1>Why work with me</h1>
            <hr></hr>
            <p>There are many advantages when working with me, for I am</p>
            </div>
            <ul className="flexContain">
                {characteristic.map((c, id)=>{
                    return(
                    <li key={id} className="wow fadeInUp flexItems">
                        <br />
                        <p><FontAwesomeIcon icon={c.icon} size="3x" /></p>
                        <br/>
                        <h3>{c.quality}</h3>
                        <p>{c.des}</p>
                    </li>)
                })}
            </ul>
            </section>
        </div>
    
    )
}
