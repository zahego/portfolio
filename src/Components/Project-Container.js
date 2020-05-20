import React from 'react';




export const ProjectContainer=({pjdimg, pjddes, pjdvisitlink, jjdcodelink})=>{
    return(
        <div className="project-container">
            <img src={require('../Resources/edgy.png')}></img>
            <p>this is project</p>
            <button >Visit Site</button>
            <button >View Code</button>
        </div>
    
    )
}
