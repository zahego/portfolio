import React from 'react';

export const Project=({name, pic, link})=>{
    return(
        <div className="project" id="project">
            <h1>My latest work</h1>
            <h5>Some of my greatest and latest work</h5>
            <p>Click on to see more info about the project</p>
            <div className="project-container"></div>
            <div className="project-container"></div>
            <div className="project-container"></div>
            <div className="project-container"></div>
            <div className="stopFloat"></div>
        </div>
    
    )
}
