import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

var sectionStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex",
}
var divStyle = {
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
                <div style={sectionStyle}>
                    <div className="landing-text" style={divStyle}>
                        {/*<img style={{backgroundImage:`url(${require("../Resources/edgy.png")})`}} alt="pic"></img>*/}
                        <h1>{ldname}</h1>
                        <h3>{ldtitle}</h3>
                        <p>{ldquote}</p>

                    </div>
                    <div className="landing-text" style={divStyle}>
                        {/*<img style={{backgroundImage:`url(${require("../Resources/edgy.png")})`}} alt="pic"></img>*/}
                        <h1>{ldname}</h1>
                        <h3>{ldtitle}</h3>
                        <p>{ldquote}</p>
                        

                    </div>
                </div>
                {/*a button to show you can scroll down*/}
                <div className="bottomOfDiv">
                <Link activeClass="active" to="skill" smooth={true} spy={true} offset={-70} duration={500}>
                <FontAwesomeIcon icon={faHandPointDown} size="4x" className="fontAwesome" />
                </Link>
                
                </div>
            </section>
            {/*audio */}
        </div>

    )
}
