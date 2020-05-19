import React from 'react';

export const Landing=({ldname, ldtitle, ldquote, ldpic})=>{
    return(
        <div className="landing">
            <div className="landing-bgImg" style={{backgroundImage:`url(${require("../Resources/edgy.png")})`}}></div>
        <div className="landing-text">
            {/*<img style={{backgroundImage:`url(${require("../Resources/edgy.png")})`}} alt="pic"></img>*/}
            <h1>{ldname}</h1>
            <h3>{ldtitle}</h3>
            <h5>{ldquote}</h5>
            {/*a button to show you can scroll down*/}
            <p> V</p>
        </div>
        </div>
    
    )
}
