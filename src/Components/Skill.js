import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var sectionStyle={  
    flexDirection:'row',
    justifyContent:'space-evenly',
    display:"flex", 
    flexWrap:"wrap",
  }
  var divStyle={
      display:"flex", 
      flexDirection:'column',
  }
  
export const Skill=({sskill1, sskill2, sskill3})=>{
    return(
        <div className="skill" id="skill">
            <section>
            <h1>My skill stack</h1>
            <h5>I love to learn new technologies. Especially the one's that manke your company special</h5>
            <div style={sectionStyle}>
            <ul style={divStyle}>
                <h3>Web tech</h3>
            {sskill1.map((s, id)=>{
               if(typeof s.icon!=='string'){
                return(
                    <li key={id}>{s.name}:<FontAwesomeIcon icon={s.icon} size="lg" /></li>
                
                )}
                else{
                    return(
                        <li key={id}>{s.name}:{s.icon}</li>
                    
                    )}
                    })}
            </ul>
            <ul style={divStyle}>
            <h3>Software tech</h3>
            {sskill2.map((s, id)=>{
                if(typeof s.icon!=='string'){
                return(
                    <li key={id}>{s.name}:<FontAwesomeIcon icon={s.icon} size="lg" /></li>
                
                )}
                else{
                    return(
                        <li key={id}>{s.name}:{s.icon}</li>
                    
                    )}
                    })}


            {/*{sskill2.map((s, id)=>{
                return(
                    <li key={id}>{s.name}:<FontAwesomeIcon icon={s.icon as IconName} size="lg" /></li>
                /*<li key={id}>{s.name}:{s.icon}</li>*/
                /*)
            })}*/}
            </ul>
            <ul style={divStyle}>
            <h3>Softskill</h3>
            {sskill3.map((s, id)=>{
                if(typeof s.icon!=='string'){
                    return(
                        <li key={id}>{s.name}:<FontAwesomeIcon icon={s.icon} size="lg" /></li>
                    
                    )}
                    else{
                        return(
                            <li key={id}>{s.name}:{s.icon}</li>
                        
                        )}
                        })}
            </ul>
            </div>
            </section>
        </div>
    
    )
}
