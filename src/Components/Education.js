import React from 'react';


export const Education=({eschool})=>{
    return(
        <div className="education" id="education">
            <section>
                <div className="flex-container">
                    <div className="wow fadeInUp">
            <h1>Education</h1>
            <hr></hr>
            <h3>{eschool.name}</h3>
            <h5>{eschool.grad}</h5>
            <h5>{eschool.location}</h5>
            </div>
            <div className="wow fadeInUp">
            <img src={eschool.schoolLogo} className="rightImage" style={{opacity:"0.5"}} alt="temple.png"></img>
            </div>
            </div >
            <div style={{ paddingTop: "60px"}} className="wow fadeInUp">
            <ul className="gridItems">
                {eschool.corsework.map((c,id)=>{
                    return(
                    <li key={id} ><h6>{c}</h6></li>
                    )
                })}
            </ul>
            </div>
            </section>
        </div>
    
    )
}
