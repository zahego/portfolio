import React from 'react';

export const QuickSummary=({qsname, qstitle})=>{
    return(
        <div className="quick-summary">
            <section>
            <h1>Who I am</h1>
            <h5>Woah there!! My name is {qsname}. I am a {qstitle}.</h5>
            <p>I am a developer that enjoy building websites and solve problems.</p>
            <a href="#about-me"><button>Learn more about me</button></a>
            </section>
        </div>
    
    )
}
