import React from 'react';




export const ProjectContainer=({pjdimg, pjcdesc, pjcvisitlink, pjccodelink})=>{
    return(
        <div className="project-container">
            <img src={require('../Resources/edgy.png')} alt="so long"></img>
            <p>{pjcdesc}</p>
            <a href={pjcvisitlink}><button>Visit Site</button></a>
            <a href={pjccodelink}><button>View Code</button></a>
        </div>
    
    )
}
