import React from 'react';

export const WhyWorkWithMe=({characteristic})=>{
    return(
        <div className="why-work-with-me">
            <section>
            <h1>Why work with me</h1>
            <h5>I am</h5>
            <ul>
                {characteristic.map((c, id)=>{
                    return(
                    <li key={id}>
                        <p>{c.quality}</p>
                        <p>{c.des}</p>
                    </li>)
                })}
            </ul>
            </section>
        </div>
    
    )
}
