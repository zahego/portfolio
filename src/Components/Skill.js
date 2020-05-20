import React from 'react';
var sectionStyle={  
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    display:"flex", 
  }
  var divStyle={
      display:"flex", 
      flexDirection:'column',
      justifyContent:'center',
  }
  

export const Skill=({sskill1, sskill2, sskill3})=>{
    return(
        <div className="skill" id="skill">
            <section>
            <h1>My skill stack</h1>
            <h5>I love to learn new technologies. Especially the one's that manke your company special</h5>
            <div style={sectionStyle}>
            <ul style={divStyle}>
            {sskill1.map((s, id)=>{
                return(
                <li key={id}>{s.name}:{s.icon}</li>
                )
            })}
            </ul>
            <ul style={divStyle}>
            {sskill2.map((s, id)=>{
                return(
                <li key={id}>{s.name}:{s.icon}</li>
                )
            })}
            </ul>
            <ul style={divStyle}>
            {sskill3.map((s, id)=>{
                return(
                <li key={id}>{s.name}:{s.icon}</li>
                )
            })}
            </ul>
            </div>
            </section>
        </div>
    
    )
}
