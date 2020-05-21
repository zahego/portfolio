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
import {
  faUserFriends, faCheck,
  faClipboard, faCalendarAlt, faCalculator,
  faLock, faTape, faEdit,
  faLayerGroup, faMagic, 
  faArrowAltCircleUp, faFastForward, faArrowsAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5, faCss3, faJs, faVuejs, faReact, faNodeJs,
  faJava, faPython, faUnity, faAndroid, faMicrosoft,
  faTrello, faArtstation, faAdobe, faGithub,
  faInvision
} from '@fortawesome/free-brands-svg-icons';



let database = {
  fullname: "Minh Tran",
  firstName: "Minh",
  title: "Full-stack software develper",
  email: "tug70814@temple.edu",
  address: "2238 N Park Ave, Philadelphia, PA, USA, 19132",
  phone: "267-251-2752",

  quote: {jokeQuote:"If you can do Java,you can do Javscript. Believe in yourself or sth...",
          trueQuote:"Society is ruled by one, but built by many."},
  skill: [{ name: "HTML", icon: faHtml5 }, { name: "CSS", icon: faCss3 }, { name: "Javascript", icon: faJs },
  { name: "Vue", icon: faVuejs }, { name: "React", icon: faReact }, { name: "Nodejs", icon: faNodeJs },
  { name: "Struts2", icon: "" }, { name: "Spring MVC", icon: "" }, { name: "Hibernate", icon: "" },
  { name: "JSP", icon: "" }, { name: "MySQL", icon: "" }, { name: "REST", icon: "" },
  { name: "Apache", icon: "" }, { name: "Glassfish", icon: "" }, { name: "Tomcat", icon: "" },
  { name: "Axure", icon: faLayerGroup }, { name: "InVision", icon: faInvision }, { name: "Adobe XD", icon: faAdobe },
  { name: "UI/UX design", icon: faUserFriends }, { name: "Photoshop", icon: faMagic }, { name: "Selenium", icon: faCheck }],

  skill2: [{ name: "Java", icon: faJava }, { name: "Python", icon: faPython }, { name: "C#", icon: "" },
  { name: "Unity", icon: faUnity }, { name: "Android Studio", icon: faAndroid }, { name: "MS Threat Model", icon: faMicrosoft }],

  skill3: [{ name: "Agile development", icon: faCalendarAlt }, { name: "Scrum", icon: faTrello }, { name: "Usability testing", icon: faClipboard },
  { name: "Digital Art", icon: faArtstation }, { name: "Version Control", icon: faGithub }, { name: "Software Security", icon: faLock },
  { name: "Software Testing", icon: faEdit }, { name: "Application Prototyping", icon: faTape }, { name: "MAchine learning", icon: faCalculator },],

  characteristic: [{ icon: faArrowAltCircleUp,quality: "ambitious", des: "I'm not afraid to aim high. Everywhere I go, I would like to make myself known for being able to improve for the better." },
  { icon: faFastForward,quality: "quick-learned", des: "I'm confident in my ability to catch up and reapply my understanding into the craft." },
  { icon: faArrowsAlt ,quality: "adaptable", des: "I pride myself as someone who expand by generalization. I like to learn the new stacks and in the process of learning, I figure my ability to adapt could become of good use." }],
  school: {
    name: "Temple University", grad: "Dec 2020", location: "Philadelphia, PA, USA, 19122",
    corsework: ["Data Structure and Algorithm", "Mobile Design and Prototype", "Web App Development",
      "Mobile App Development", "Quality Assurance and Testing", "Software Design",
      "Principles of Data Science", "Probability and Statistic", "Technical Writing",
      "Final Project in Computer Science", "UI/UX design", "Software Security Development",
      "Linear Algebra", "Calculus"]
  },
  project:[{desc: "A website I made with pure HTML, CSS and JS both front-end and back-end", visitlink: "http://cis-linux2.temple.edu:8080/SP20_3308_tug70814/", codelink: "https://github.com/zahego/Buggit"},
  {desc: "Another website I made with pure HTML, CSS and JS both front-end and back-end", visitlink: "http://cis-linux2.temple.edu:8080/FA18_3308_tug70814/", codelink: "https://github.com/zahego/SAD"},
  {desc: "test subject", visitlink: "http://google.com", codelink: "https://github.com/"},
  {desc: "test subject", visitlink: "http://google.com", codelink: "https://github.com/"},
  {desc: "test subject", visitlink: "http://google.com", codelink: "https://github.com/"},
  {desc: "test subject", visitlink: "http://google.com", codelink: "https://github.com/"},
  {desc: "test subject", visitlink: "http://google.com", codelink: "https://github.com/"},
  {desc: "test subject", visitlink: "http://google.com", codelink: "https://github.com/"}],
  links:{github:"https://github.com/zahego/",linkedIn:"https://www.linkedin.com/in/minh-tran-302590139/",email:"tug70814@temple.edu", codepen:"https://codepen.io/zahego"}
};


function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}
class App extends React.Component {
  componentDidMount() {
    window.onscroll = function () { myFunction() };
    console.log(database.links.github);
  }
  componentDidUpdate() {
    window.onscroll = function () { myFunction() };
  }
  
  render() {
    return (
      <div className="app-body">
        <Navbar />
        <div className="content">
          <Landing ldname={database.fullname} ldtitle={database.title} ldquote={database.quote} ldpic='./Resources/edgy.png'/>
          <QuickSummary qsname={database.firstName} qstitle={database.title} />
          <Skill sskill1={database.skill} sskill2={database.skill2} sskill3={database.skill3} />
          <Project pproject={database.project}/>
          <Education eschool={database.school} />
          <WhyWorkWithMe characteristic={database.characteristic} />
          <ContactMe cmlinks={database.links}/>
          <AboutMe ablinks={database.links} abname={database.fullname} abfname={database.firstName} abtitle={database.title}
            abadress={database.address} abphone={database.phone} abemail={database.email} />
        </div>
      </div>
    );
  }
}

export default App;
