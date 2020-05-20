import React from 'react';
var flexContain1 = {
    flexDirection: 'row',
    display: "flex",
    justifyContent: 'space-around',
    flexWrap:"wrap",
}
var flexContain2 = {
    flexDirection: 'row',
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap:"wrap",
    margin: "0 10px",
}
export const Education=({eschool})=>{
    return(
        <div className="education" id="education">
            <section>
                <div style={flexContain2}>
                    <div>
            <h1>Education</h1>
            <h3>{eschool.name}</h3>
            <h5>{eschool.location}</h5>
            </div>
            <img src={require('../Resources/temple.png')} style={{width:"500px", height:"120px", opacity:"0.5"}}></img>
            </div>
            <ul style={flexContain1}>
                {eschool.corsework.map((c,id)=>{
                    return(
                    <li key={id} style={{width:"300px"}}>{c}</li>
                    )
                })}
            </ul>
            </section>
        </div>
    
    )
}
