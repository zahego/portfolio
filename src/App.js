import React from 'react';
import './style/App.css';
import './style/Project.css';
import {Navbar} from './Components/Navbar';
import {Landing} from './Components/Landing';
import {Skill} from './Components/Skill';
import {Project} from './Components/Project';
import {QuickSummary} from './Components/QuickSummary';
import {Education} from './Components/Education';
import {WhyWorkWithMe} from './Components/WhyWorkWithMe';
import {ContactMe} from './Components/ContactMe';
import {AboutMe} from './Components/AboutMe';



let database={
  fullname:"Minh Tran",
  firstName:"Minh", 
  title: "Full-stack software develper",
  email: "tug70814@temple.edu",
  address: "2238 N Park Ave, Philadelphia, PA, USA, 19132",
  phone:"267-251-2752",

  quote: "If you can do HTML,you can do CSS. Believe in yourself or sth...",
  skill: [{name:"HTML", icon:"H"},{name:"CSS", icon:"C"},{name:"Javascript", icon:"J"},
          {name:"Vue", icon:"V"},{name:"React", icon:"R"},{name:"Nodejs", icon:"N"},
          {name:"Struts2", icon:"S"},{name:"Spring MVC", icon:"S"},{name:"Hibernate", icon:"H"},
          {name:"JSP", icon:"J"},{name:"MySQL", icon:"M"},{name:"REST", icon:"R"},
          {name:"Apache", icon:"A"},{name:"Glassfish", icon:"G"},{name:"Tomcat", icon:"T"},
          {name:"Axure", icon:"A"},{name:"InVision", icon:"I"},{name:"Adobe XD", icon:"A"},
          {name:"UI/UX design", icon:"U"},{name:"Photoshop", icon:"P"},{name:"Selenium", icon:"S"}],

  skill2: [{name:"Java", icon:"J"},{name:"Python", icon:"P"},{name:"C#", icon:"C"},
           {name:"Unity", icon:"U"},{name:"Android Studio", icon:"A"},{name:"MS Threat Model", icon:"M"}],

  skill3: [{name:"Agile development", icon:"A"},{name:"Scrum", icon:"Trello and Agile central"},{name:"Usability testing", icon:"U"},
           {name:"Digital Art", icon:"D"},{name:"Version Control", icon:"Git, sourcetree and bitbucket"},{name:"Software Security", icon:"S"},
           {name:"Software Testing", icon:"Junit"},{name:"Application Prototyping", icon:"MArvel pop"},{name:"MAchine learning", icon:"M"},],

  characteristic: [{quality:"ambitious", des:"I am ambitious"},
                  {quality:"quick learner", des:"I can learn quick"},
                  {quality:"adaptable", des:"I can adapt fast"}],
  school:{name:"Temple University",grad:"Dec 2020", location: "Philadelphia, PA, USA, 19122", 
          corsework:["Data Structure and Algorithm", "Mobile Design and Prototype", "Web App Development", 
                    "Mobile App Development", "Quality Assurance and Testing", "Software Design", 
                    "Principles of Data Science", "Probability and Statistic", "Technical Writing", 
                    "Final Project in Computer Science", "UI/UX design", "Software Security Development", 
                    "Linear Algebra", "Calculus"]},
};

/*let database={
  fullname:"Minh Tran",
  firstName:"Minh", 
  title: "Fullstack Software Developer",
  skill: [{name:"HTML", icon:"H"},{name:"CSS", icon:"C"},{name:"Javascript", icon:"J"}],
  characteristic: [{quality:"ambitious", des:"I am ambitious"},
                  {quality:"quick learner", des:"I can learn quick"},
                  {quality:"adaptable", des:"I can adapt fast"}],
  school:{name:"Temple University",grad:"Dec 2020", location: "Philadelphia, PA, USA, 19122", 
          corsework:["this and that","that and this"]},
};*/

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}
class App extends React.Component {
  componentDidMount(){
    window.onscroll = function() {myFunction()};
  }
  componentDidUpdate(){
    window.onscroll = function() {myFunction()};
  }
  render(){
  return (
    <div className="app-body">
    <Navbar />
    <div className="content">
    <Landing ldname={database.fullname} ldtitle={database.title} ldquote={database.quote} ldpic='./Resources/edgy.png'/>
    <QuickSummary qsname={database.firstName} qstitle={database.title}/>
    <Skill sskill1={database.skill} sskill2={database.skill2} sskill3={database.skill3}/>
    <Project />
    <Education eschool={database.school}/>
    <WhyWorkWithMe characteristic={database.characteristic}/>
    <ContactMe />
    <AboutMe abname={database.fullname} abfname={database.firstName} abtitle={database.title} 
              abadress={database.address} abphone={database.phone} abemail={database.email}/>
    </div>
    </div>
  );
  }
}

export default App;
