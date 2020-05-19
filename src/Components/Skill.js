import React from 'react';

export const Skill=({sskill, sicon})=>{
    return(
        <div className="skill" id="skill">
            <h1>My skill stack</h1>
            <h5>I love to learn new technologies. Especially the one's that manke your company special</h5>
            <ul>
            {sskill.map((s, id)=>{
                return(
                <li key={id}>{s.name}:{s.icon}</li>
                )
            })}
            </ul>
        </div>
    
    )
}
