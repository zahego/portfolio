import React from 'react';
var flexContain = {
    flexDirection: 'row',
    display: "flex",
    height: "100vh",
    justifyContent: 'space-between',
}
var flexElement = {
    paddingLeft: '10px',
}
export const QuickSummary=({qsname, qstitle})=>{
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
                <img src={require('../Resources/logo-brand.png')} style={{width: "500px", height: "auto"}}/>
            </div>
            </div>
            </section>
        </div>
    
    )
}
