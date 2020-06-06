import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";
import Typical from 'react-typical';

var flexContain = {
    flexDirection: 'row',
    justifyContent: 'center',
    display: "flex",
    height: "100vh",
}

export const Landing = ({ ldname, ldtitle, ldquote, ldbackground }) => {
    return (
        <div className="landing">
            <section>
                {/*background image-banner */}
                <div className="landing-bgImg" style={{ backgroundImage: `url(${ldbackground})` }}></div>

                {/*info-flex */}
                <div style={flexContain}>
                    <div className="landing-text" id="landing-flex-item">
                        <h1>
                        <Typical steps={[ldname, 3000, 'Welcome!!', 500]} loop={Infinity} className="typical"/>
                        </h1>
                        <h3 className="wow bounceInDown">{ldtitle}</h3>
                        <hr></hr>
                        <p className="landing-p" style={{textDecoration:"line-through"}}>{ldquote.jokeQuote}</p>
                        <p className="landing-p" >"{ldquote.trueQuote}"-<b>King Tut</b></p>

                    </div>
                </div>
                {/*a button to show you can scroll down*/}
                <div className="bottomOfDiv" style={{cursor:"pointer"}}>
                    <div className="wow flip">
                <Link activeClass="active" to="skill" smooth={true} spy={true} offset={-70} duration={500}>
                <FontAwesomeIcon icon={faHandPointDown} size="4x" className="fontAwesomeLanding" />
                </Link>
                </div>
                </div>
            </section>
        </div>

    )
}
