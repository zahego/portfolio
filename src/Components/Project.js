import React from 'react';
import {ProjectContainer} from './Project-Container';
var sectionStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    display: "flex",
    flexWrap: 'wrap',
    width: '90%',
}
var divStyle = {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
}

export const Project=({name, pic, link})=>{
    return(
        <div className="project" id="project">
            <section>
            <h1>My latest work</h1>
            <h5>Some of my greatest and latest work</h5>
            <p>Click on the project to see more info</p>
            <div style={sectionStyle}>
            
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            <div className="stopFloat"></div>
            </div>
            </section>
        </div>
    
    )
}
