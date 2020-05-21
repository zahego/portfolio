import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
var flexContain = {
    flexDirection: 'row',
    display: "flex",
    justifyContent: 'space-evenly',
    alignContent:"flex-end",
    flex: "1",
    flexBasis: "50px 50px",
    height: "350px",
}
var flexItems={
    textAlign:"center",
    width: "300px",
    height: "200px"
}
export const WhyWorkWithMe=({characteristic})=>{
    return(
        <div className="why-work-with-me">
            <section>
            <h1>Why work with me</h1>
            <h5>I am</h5>
            <ul style={flexContain}>
                {characteristic.map((c, id)=>{
                    return(
                    <li key={id} style={flexItems}>
                        <p><FontAwesomeIcon icon={c.icon} size="3x" /></p>
                        <h3>{c.quality}</h3>
                        <p>{c.des}</p>
                    </li>)
                })}
            </ul>
            </section>
        </div>
    
    )
}
