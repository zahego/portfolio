import React from 'react';
import ProjectContainer from './Project-Container';

export const Project=({pproject})=>{
    return(
        <div className="project" id="project">
            <section >
                <div style={{paddingLeft:"20px", paddingTop:"20px"}} className="wow fadeInUp">
            <h1>My latest work</h1>
            <hr></hr>
            <h5>Some of my greatest and latest projects</h5>
            <p>Click on the project to see more info</p>
            
            </div>
            <ul className="flex-container">
                {pproject.map((p,id)=>{
                    return(
                        <div className="wow fadeInUp">
                        <ProjectContainer 
                        pjcname={p.name} 
                        pjcdesc={p.desc} 
                        pjclongdes={p.longdes} 
                        pjcproblem={p.problem} 
                        pjcfix={p.fix} 
                        pjcvisitlink={p.visitlink} 
                        pjccodelink={p.codelink} 
                        pjcpic={p.projectpic} 
                        pjcstack={p.stack}
                        pjcmodalId={id}
                        key={id}/>
                        </div>
                    )
                })}
            
            </ul>
            <a href="https://github.com/zahego"><button style={{width:"15%"}}>More projects</button></a>
            </section>
        </div>
    
    )
}
