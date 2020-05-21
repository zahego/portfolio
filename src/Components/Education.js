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
    alignItems: 'flex-end',
    flexWrap:"wrap",
}
export const Education=({eschool})=>{
    return(
        <div className="education" id="education">
            <section>
                <div style={flexContain2}>
                    <div style={{paddingLeft:"20px", paddingTop: "60px"}}>
            <h1>Education</h1>
            <h3>{eschool.name}</h3>
            <h5>{eschool.location}</h5>
            </div>
            <img src={require('../Resources/temple.png')} style={{width:"400px", height:"100px", opacity:"0.5", paddingRight:"40px"}} alt="temple.png"></img>
            </div >
            <div style={{ paddingTop: "60px"}}>
            <ul style={flexContain1}>
                {eschool.corsework.map((c,id)=>{
                    return(
                    <li key={id} style={{width:"300px"}}>{c}</li>
                    )
                })}
            </ul>
            </div>
            </section>
        </div>
    
    )
}
