import React from 'react';

export const QuickSummary = ({ qsname, qstitle, qspic }) => {
    return (
        <div className="quick-summary">
            <section>
                <div className="flex-container">
                    <div className="wow bounceInLeft">
                        <h1>Who I am</h1>
                        <hr></hr>
                        <h5>Woah there!! My name is {qsname}. I am a {qstitle}.</h5>
                        <p>I am a developer that enjoy building websites and solve problems.</p>
                        <a href="#about-me"><button>Learn more about me</button></a>
                        <a href="#project"><button>Check out my project</button></a>
                    </div>
                    <div className="wow bounceInRight">
                    <img src={qspic} className="rightImage" alt="logo-brand.png" />
                    </div>
                </div>
            </section>
        </div>

    )
}
