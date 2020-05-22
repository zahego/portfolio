import React from 'react';
import ProjectContainer from './Project-Container';
var sectionStyle = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left:"5%",
    position:"relative",
    display: "flex",
    flexWrap: 'wrap',
    width: '80%',
}

export const Project=({pproject})=>{
    return(
        <div className="project" id="project">
            <section >
                <div style={{paddingLeft:"20px", paddingTop:"20px"}}>
            <h1>My latest work</h1>
            <h5>Some of my greatest and latest work</h5>
            <p>Click on the project to see more info</p>
            </div>
            <ul style={sectionStyle}>
                {pproject.map((p,id)=>{
                    return(
                        <ProjectContainer pjcdesc={p.desc} pjcvisitlink={p.visitlink} pjccodelink={p.codelink} pjcpic={p.projectpic} key={id}/>
                    )
                })}
            
            </ul>
            </section>
        </div>
    
    )
}
