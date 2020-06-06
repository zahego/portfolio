import React from 'react';
import '../style/Project.css';

class ProjectModal extends React.Component{
    componentDidMount(){
        //couldn't pass props before because forgot to bind. Thank you arrow function
        window.onclick = (event)=> {
            if (event.target === document.getElementById(this.props.pjmmodalId)) {
                document.getElementById(this.props.pjmmodalId).style.display = "none";
                document.body.style.overflow="";
                Array.from(document.getElementsByClassName("content")[0].getElementsByTagName("section")).forEach(section => {
                    section.style.zIndex="";
                });
                document.getElementById("fontAwesome-burger").style.display="";
            }
        }
    }
    onClickCloseModal=()=>{
        document.getElementById(this.props.pjmmodalId).style.display = "none";
        document.body.style.overflow="";
        Array.from(document.getElementsByClassName("content")[0].getElementsByTagName("section")).forEach(section => {
            section.style.zIndex="";
        });
        document.getElementById("fontAwesome-burger").style.display="";
    }
    render(){
        
    return (
        <div id={this.props.pjmmodalId} className="modal">
            <div className="modal-content">
                <div className="modal-header">
                <h1 className="close" onClick={this.onClickCloseModal}>&times;</h1>
                    <h1>{this.props.pjmname}</h1>
                </div>
                <div className="modal-body">
                    <div className="modal-info">
                    <h3>Description</h3>
                    <p>{this.props.pjmlongdes}</p>
                    <br></br>
                    <h3>Problem along the way</h3>
                    <p>{this.props.pjmproblem}</p>
                    <br></br>
                    <h3>Resolve</h3>
                    <p>{this.props.pjmfix}</p>
                    
                    </div>
                    <div className="modal-info-right">
                    <img src={this.props.pjmpic} alt="right" />
                    <h3>Stack</h3>
                    <p>{this.props.pjmstack}</p>
                    </div>
                </div>
                <div className="modal-footer">
                <a href={this.props.pjmvisitlink} ><button>Link</button></a>
                <a href={this.props.pjmcodelink} > <button>Code</button></a>
                </div>
            </div>
        </div>
    )
}
}

export default ProjectModal;