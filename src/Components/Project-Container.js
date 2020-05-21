import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEye } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons';



class ProjectContainer extends React.Component{
    state={hovering:false}
    componentDidUpdate(){
        const OnHoverDoThis=(image)=>{
            console.log("this is it" +image );
            /*image.parentElement.getElementById("fontAwesomeEye").style.visibility="visible";*/
        }
    }
    render(){
    return(
        <div className="project-container">
            <img src={require('../Resources/edgy.png')} alt="so long" className="yppy" /*onMouseOver={this.OnHoverDoThis("hello")} onMouseOut={OffHoverDoThis}*/></img>
            <FontAwesomeIcon icon={faEye} size="5x" className="fontAwesomeEye"id="fontAwesomeEye"/> 
            <p>{this.props.pjcdesc}</p>
            <a href={this.props.pjcvisitlink}><button><FontAwesomeIcon icon={faGlobe} size="2x" className="fontAwesome"/> Link</button></a>
            <a href={this.props.pjccodelink}><button><FontAwesomeIcon icon={faGithubAlt} size="2x" className="fontAwesome"/> Code</button></a>
        </div>
    
    )}
}
export default ProjectContainer;

const OffHoverDoThis=()=>{
    document.getElementById("fontAwesomeEye").style.visibility="hidden";
}
