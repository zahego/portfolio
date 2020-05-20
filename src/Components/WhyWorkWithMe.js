import React from 'react';
var flexContain = {
    flexDirection: 'row',
    display: "flex",
    justifyContent: 'space-evenly',
    flexWrap:"wrap",
}
export const WhyWorkWithMe=({characteristic})=>{
    return(
        <div className="why-work-with-me">
            <section>
            <h1>Why work with me</h1>
            <h5>I am</h5>
            <ul style={flexContain}>
                {characteristic.map((c, id)=>{
                    return(
                    <li key={id}>
                        <p>icon{id}</p>
                        <p>{c.quality}</p>
                        <p>{c.des}</p>
                    </li>)
                })}
            </ul>
            </section>
        </div>
    
    )
}
