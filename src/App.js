import React from 'react';
import './style/App.css';
import './style/Project.css';
import './style/Skill.css';
import './style/Landing.css';
import './style/Navbar.css';
import { Navbar } from './Components/Navbar';
import { Landing } from './Components/Landing';
import { Skill } from './Components/Skill';
import { Project } from './Components/Project';
import { QuickSummary } from './Components/QuickSummary';
import { Education } from './Components/Education';
import { WhyWorkWithMe } from './Components/WhyWorkWithMe';
import { ContactMe } from './Components/ContactMe';
import { AboutMe } from './Components/AboutMe';
import WOW from 'wow.js';
import {database} from "./database.js";

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}
class App extends React.Component {
  componentDidMount() {
    window.onscroll = function () { myFunction() };
    new WOW().init();
  }
  componentDidUpdate() {
    window.onscroll = function () { myFunction() };
  }
  
  render() {
    return (
      <div className="app-body">
        <Navbar nlogo={database.piclogo}/>
        <div className="content">
          <Landing ldname={database.fullname} ldtitle={database.title} ldquote={database.quote} ldbackground={database.background}/>
          <QuickSummary qsname={database.firstName} qstitle={database.title} qspic={database.piclogo}/>
          <Skill sskill1={database.skill} sskill2={database.skill2} sskill3={database.skill3} />
          <Project pproject={database.project}/>
          <Education eschool={database.school} />
          <WhyWorkWithMe characteristic={database.characteristic} />
          <ContactMe cmlinks={database.links}/>
          <AboutMe ablinks={database.links} abname={database.fullname} abfname={database.firstName} abtitle={database.title}
            abadress={database.address} abphone={database.phone} abemail={database.email} abPicGoodAt={database.picGoodAt}
            abline0={database.line0} abline1={database.line1} abline2={database.line2} abline3={database.line3}/>
        </div>
      </div>
    );
  }
}

export default App;
