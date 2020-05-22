import React from 'react';
var flexContain = {
    flexDirection: 'row',
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '360px',
}
var flexElement = {
    paddingLeft: '20px',
}
export const QuickSummary=({qsname, qstitle, qspic})=>{
    return(
        <div className="quick-summary">
            <section>
                <div style={flexContain}>
                <div style={flexElement}>
            <h1>Who I am</h1>
            <h5>Woah there!! My name is {qsname}. I am a {qstitle}.</h5>
            <p>I am a developer that enjoy building websites and solve problems.</p>
            <a href="#about-me"><button>Learn more about me</button></a>
            <a href="#project"><button>Check out my project</button></a>
            </div>
            <div style={flexElement}>
                <img src={qspic} style={{width: "500px", height: "auto"}} alt="logo-brand.png"/>
            </div>
            </div>
            </section>
        </div>
    
    )
}
