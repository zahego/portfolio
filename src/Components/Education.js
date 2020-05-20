import React from 'react';

export const Education=({eschool})=>{
    return(
        <div className="education" id="education">
            <section>
            <h1>Education</h1>
            <h3>{eschool.name}</h3>
            <h5>{eschool.location}</h5>
            <ul>
                {eschool.corsework.map((c,id)=>{
                    return(
                    <li key={id}>{c}</li>
                    )
                })}
            </ul>
            </section>
        </div>
    
    )
}
