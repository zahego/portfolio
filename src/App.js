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
  fullname:"Cool Guy",
  firstName:"Cool", 
  title: "CEO of the epic stuff",
  email: "madlad@gamil.com",
  address: "Literal, Hell, USA, 999999",
  phone:"1080-000-YOUNG BLOOD",
  quote: "If you can do HTML,you can do CSS. Believe in yourself or sth...",
  skill: [{name:"HTML", icon:"H"},{name:"CSS", icon:"C"},{name:"Javascript", icon:"J"}],
  characteristic: [{quality:"ambitious", des:"I am ambitious"},
                  {quality:"quick learner", des:"I can learn quick"},
                  {quality:"adaptable", des:"I can adapt fast"}],
  school:{name:"sick ass University",grad:"Dec 2020", location: "Dangerous, Neighborhood, USA, 000000", 
          corsework:["this and that","that and this"]},
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


class App extends React.Component {
  render(){
  return (
    <div className="app-body">
    <Navbar />
    <div className="content">
    <Landing ldname={database.fullname} ldtitle={database.title} ldquote={database.quote} ldpic='./Resources/edgy.png'/>
    <Skill sskill={database.skill}/>
    <Project />
    <QuickSummary qsname={database.firstName} qstitle={database.title}/>
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
