import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

var flexContain = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    display: "flex",
    height: "100vh",
}
var flexElement = {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

export const Landing = ({ ldname, ldtitle, ldquote, ldpic }) => {
    return (
        <div className="landing">
            <section>
                {/*background image-banner */}
                <div className="landing-bgImg" style={{ backgroundImage: `url(${require("../Resources/banner.png")})` }}></div>

                {/*info-flex */}
                <div style={flexContain}>
                    <div className="landing-text" style={flexElement}>
                        {/*<img style={{backgroundImage:`url(${require("../Resources/edgy.png")})`}} alt="pic"></img>*/}
                        <h1 style={{fontSize:"90px", margin:"0"}}>{ldname}</h1>
                        <h3 style={{fontSize:"25px", margin:"0"}}>{ldtitle}</h3>
                        <p style={{textDecoration:"line-through", margin:"0", fontSize:"16"}}>{ldquote.jokeQuote}</p>
                        <p style={{ margin:"0", fontSize:"16"}}>"{ldquote.trueQuote}"-<b>King Tut</b></p>

                    </div>
                </div>
                {/*a button to show you can scroll down*/}
                <div className="bottomOfDiv" style={{cursor:"pointer"}}>
                <Link activeClass="active" to="skill" smooth={true} spy={true} offset={-70} duration={500}>
                <FontAwesomeIcon icon={faHandPointDown} size="4x" className="fontAwesomeLanding" />
                </Link>
                
                </div>
            </section>
            {/*audio */}
        </div>

    )
}
