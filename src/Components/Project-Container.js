import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEye } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons';



class ProjectContainer extends React.Component{
    state={hid:true, buttonToggle:true, buttonToggle2:true}
    componentDidUpdate(){
        
    }
    onHoverImg=()=>{
        this.setState({hid:!this.state.hid})
    }
    onHoverButton=()=>{
        this.setState({buttonToggle:!this.state.buttonToggle})
    }
    onHoverButton2=()=>{
        this.setState({buttonToggle2:!this.state.buttonToggle2})
    }
    render(){
    return(
        <div className="project-container">
            <div className="imageHandler" onMouseOver={this.onHoverImg} onMouseOut={this.onHoverImg}>
            <img src={this.props.pjcpic} alt="so long" style={{opacity:this.state.hid?1:0.2}}></img>
            <FontAwesomeIcon icon={faEye} size="5x" className="fontAwesomeEye" style={{visibility:this.state.hid?"hidden":"visible"}}/> 
            </div>
            <p>{this.props.pjcdesc}</p>
            <a href={this.props.pjcvisitlink} >
                <button onMouseOver={this.onHoverButton} onMouseOut={this.onHoverButton} style={{left:"0"}}>
                    {this.state.buttonToggle?<FontAwesomeIcon icon={faGlobe} size="2x" className="fontAwesome"/>:' Visit Project'}
                    </button>
                    </a>
            <a href={this.props.pjccodelink}>
                <button onMouseOver={this.onHoverButton2} onMouseOut={this.onHoverButton2}>
                {this.state.buttonToggle2?<FontAwesomeIcon icon={faGithubAlt} size="2x" className="fontAwesome"/>:' Visit Code'}
                    </button></a>
        </div>
    
    )}
}
export default ProjectContainer;
