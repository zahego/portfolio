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

export const Project=({pproject})=>{
    return(
        <div className="project" id="project">
            <section>
            <h1>My latest work</h1>
            <h5>Some of my greatest and latest work</h5>
            <p>Click on the project to see more info</p>
            <ul style={sectionStyle}>
                {pproject.map((p,id)=>{
                    return(
                        <ProjectContainer pjcdesc={p.desc} pjcvisitlink={p.visitlink} pjccodelink={p.codelink}/>
                    )
                })}
            
            <div className="stopFloat"></div>
            </ul>
            </section>
        </div>
    
    )
}
