import React from 'react';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import ProjectModal from './Project-Modal';



class ProjectContainer extends React.Component {
    state = { hid: true, buttonToggle: true, buttonToggle2: true, modalId: `myModal-${this.props.pjcmodalId}`}
    
    onHoverImg = () => {
        this.setState({ hid: !this.state.hid })
    }
    onHoverButton = () => {
        this.setState({ buttonToggle: !this.state.buttonToggle })
    }
    onHoverButton2 = () => {
        this.setState({ buttonToggle2: !this.state.buttonToggle2 })
    }
    onClickOpenModal = () => {
        document.getElementById(this.state.modalId).style.display = "block";
        //too lazy to implement a more logical method.
        Array.from(document.getElementsByClassName("content")[0].getElementsByTagName("section")).forEach(section => {
            section.style.zIndex=0;
        });
        document.getElementById("fontAwesome-burger").style.display="none";
    }
    render() {
        return (

            <div className="project-container">
                <ProjectModal 
                pjmname={this.props.pjcname} 
                pjmdesc={this.props.pjcdesc} 
                pjmlongdes={this.props.pjclongdes} 
                pjmproblem={this.props.pjcproblem} 
                pjmfix={this.props.pjcfix} 
                pjmvisitlink={this.props.pjcvisitlink} 
                pjmcodelink={this.props.pjccodelink} 
                pjmpic={this.props.pjcpic}
                pjmstack={this.props.pjcstack}
                pjmmodalId={this.state.modalId}/>
                <Link activeClass="active" to="project" smooth={true} spy={true} offset={-70} duration={500}>
                <div className="imageHandler" onMouseOver={this.onHoverImg} onMouseOut={this.onHoverImg} onClick={this.onClickOpenModal}>
                    <img src={this.props.pjcpic} alt="so long" style={{ opacity: this.state.hid ? 1 : 0.2 }} ></img>
                    <FontAwesomeIcon icon={faEye} size="5x" className="fontAwesomeEye" style={{ visibility: this.state.hid ? "hidden" : "visible" }} />
                </div>
                </Link>
                <div className="project-container-p">
                <p>{this.props.pjcdesc}</p>
                <a href={this.props.pjcvisitlink} onMouseOver={this.onHoverButton} onMouseOut={this.onHoverButton} >
                    <button style={{ left: "0" }}>
                        {this.state.buttonToggle ? <FontAwesomeIcon icon={faGlobe} size="2x" className="fontAwesome" /> : ' Visit Project'}
                    </button>
                </a>
                <a href={this.props.pjccodelink} onMouseOver={this.onHoverButton2} onMouseOut={this.onHoverButton2}>
                    <button >
                        {this.state.buttonToggle2 ? <FontAwesomeIcon icon={faGithubAlt} size="2x" className="fontAwesome" /> : ' Visit Code'}
                    </button></a>
                    </div>
            </div>

        )
    }
}
export default ProjectContainer;
