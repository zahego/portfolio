import {
    faUserFriends, faCheck,
    faClipboard, faCalendarAlt, faCalculator,
    faLock, faTape, faEdit,
    faLayerGroup, faMagic,
    faArrowAltCircleUp, faFastForward, faArrowsAlt,
    faTableTennis
} from '@fortawesome/free-solid-svg-icons';
import {
    faHtml5, faCss3, faJs, faVuejs, faReact, faNodeJs,
    faJava, faPython, faUnity, faAndroid, faMicrosoft,
    faTrello, faArtstation, faAdobe, faGithub,
    faInvision
} from '@fortawesome/free-brands-svg-icons';


export const database = {
    fullname: "Minh Tran",
    firstName: "Minh",
    title: "Full-stack software developer",
    email: "tug70814@temple.edu",
    address: "125 Nautical Cove, Stafford, VA, USA, 22554",
    phone: "267-251-2752",
    piclogo: require('./Resources/logo-brand.png'),
    background: require('./Resources/banner.png'),
    line0: "My focus is on Software Development, Web Development and problems solving in general.",
    line1: "I studied Bachelor of Computer Science at Temple University and is doing many lessons on LinkedIn Learning, Youtube, and other online programming courses.",
    line2: "I tend to code all my projects from scratch. This both delivers an unique experience as well as helps me thoroughly understand my stacks arsenal.",
    line3: "I enjoy doing Web Development and Digital Art on my free time. Check out my art portfolio: https://tug70814.wixsite.com/mysite",
    line4: "",
    picGoodAt: faTableTennis,
    quote: {
        jokeQuote: "If you can do Java,you can do Javscript. Believe in yourself or sth...",
        trueQuote: "Society is ruled by one, but built by many."
    },
    skill: [{ name: "HTML", icon: faHtml5 }, { name: "CSS", icon: faCss3 }, { name: "Javascript", icon: faJs },
    { name: "Vue", icon: faVuejs }, { name: "React", icon: faReact }, { name: "Nodejs", icon: faNodeJs },
    { name: "Redux", icon: "" }, { name: "Thunk", icon: "" }, { name: "Selector", icon: "" },
    { name: "JSP", icon: "" }, { name: "MySQL", icon: "" }, { name: "REST", icon: "" },
    { name: "Apache", icon: "" }, { name: "Glassfish", icon: "" }, { name: "Tomcat", icon: "" },
    { name: "Axure", icon: faLayerGroup }, { name: "InVision", icon: faInvision }, { name: "Adobe XD", icon: faAdobe },
    { name: "UI/UX design", icon: faUserFriends }, { name: "Photoshop", icon: faMagic }, { name: "Selenium", icon: faCheck }],

    skill2: [{ name: "Java", icon: faJava }, { name: "Python", icon: faPython }, { name: "C#", icon: "" },
    { name: "Unity", icon: faUnity }, { name: "Android Studio", icon: faAndroid }, { name: "MS Threat Model", icon: faMicrosoft }],

    skill3: [{ name: "Agile development", icon: faCalendarAlt }, { name: "Scrum", icon: faTrello }, { name: "Usability testing", icon: faClipboard },
    { name: "Digital Art", icon: faArtstation }, { name: "Version Control", icon: faGithub }, { name: "Software Security", icon: faLock },
    { name: "Software Testing", icon: faEdit }, { name: "Application Prototyping", icon: faTape }, { name: "Machine learning", icon: faCalculator },],

    characteristic: [{
        icon: faArrowAltCircleUp,
        quality: "ambitious",
        des: "I'm not afraid to aim high. Everywhere I go, I would like to make myself known for being able to improve for the better."
    },
    {
        icon: faFastForward,
        quality: "quick-learned",
        des: "I'm confident in my ability to catch up and reapply my understanding into the craft."
    },
    {
        icon: faArrowsAlt,
        quality: "adaptable",
        des: "I pride myself as someone who expand by generalization. I like to learn the new stacks and in the process of learning, I figure my ability to adapt could become of good use."
    }],
    school: {
        name: "Temple University",
        grad: "Graduate: Aug 2020",
        location: "Philadelphia, PA, USA, 19122",
        major: "Bachelor of Computer Science",
        schoolLogo: require('./Resources/temple.png'),
        corsework: ["Data Structure and Algorithm", "Mobile Design and Prototype", "Web App Development",
            "Mobile App Development", "Quality Assurance and Testing", "Software Design",
            "Principles of Data Science", "Probability and Statistic", "Technical Writing",
            "Final Project in Computer Science", "UI/UX design", "Software Security Development",
            "Linear Algebra", "Calculus"]
    },
    project: [{
        name: "Buggit",
        desc: "A fictional social media site that is the combination of Reddit and StackOverflow.",
        longdes: "A website I made with vanilla HTML, CSS and JS. I focus more on JS side and how to create my own component with vanilla JS. The website has CRUD, as well as an authentication functionality. Page ulitize JS injection for SPA.",
        problem: "I encounter many functionality issue regarding createElement, particularly during developing the functionality of audio auto-play since Chrome Browser doesn't allow auto play on latest policy change.",
        fix: "For the auto-play function, I resolve it by using Youtube API to host the audio since Chrome actually do whitelist a few website to auto-play audio. Chekout the blog sections on the page for more info",
        visitlink: "http://cis-linux2.temple.edu:8080/SP20_3308_tug70814/",
        codelink: "https://github.com/zahego/Buggit",
        projectpic: require('./Resources/project1.png'),
        stack: "HTML, CSS, JS, MySQL, JSP, Java, Vuejs Framework, Youtube Player API",
    },

    {
        name: "SAD",
        desc: "A game info site where you can checkout galleries and information about an imaginary game.",
        longdes: "Another website I made with pure HTML, CSS and JS in both front-end and back-end. I focus more on the minor details of JSP API and CRUD functionalities. All information in this website are self-made, from the logo to image gallery to the database. Page utilize HTML injection for SPA.",
        problem: "I had a bit of issue with the gallery and paination since I over engineered the css and some properties interfere each other",
        fix: "I manually reviewed the css property and manipulate the DOM style to keep everything from breaking. More information on the blog section in the page.",
        visitlink: "http://cis-linux2.temple.edu:8080/FA18_3308_tug70814/",
        codelink: "https://github.com/zahego/SAD",
        projectpic: require('./Resources/project2.png'),
        stack: "HTML, CSS, JS, MySQL, JSP, Java",
    },
    {
        name: "Vue Playground",
        desc: "A website made with Vue framework I learnt during a course at LinkedIn Learning",
        longdes: "A website made with Vue framework. I use Axios to obtain data from NASA API. I learn about the nitty gritty of using other's API for the first time. (I only created my own API up until this point)",
        problem: "I had lots of trouble regarding the Vue binding since the framework has been updated so much since the tutorial. The component presented in the tutorial is also outdated",
        fix: "I read the recent document and stack-overflow my way out of the bug.",
        visitlink: "https://zahego.github.io/Vue101/",
        codelink: "https://github.com/zahego/Vue101",
        projectpic: require('./Resources/project3.png'),
        stack: "Vuejs Framework, Axios, NASA API, Github page host",
    },
    {
        name: "Magic Hand",
        desc: "A mech flying simulator with cutting edge motion tracking technology and immersive gameplay",
        longdes: "A Unity game I create with a team following Agile Development principle for Capstone class. I had lots of fun but also lots of headache from every scrum meeting, planning and development process.",
        problem: "One of the biggest issue is my webcam is not good enough for testing. Another big reason is to keep our team coordinate and deliver the product on time.",
        fix: "The first issue was resolved by requesting the professor for additional webcam, as well as re-engineer the motion tracking program so that it follow the color difference better. Second issue is resolved by making plan early and checking up on each other at the middle of the week.",
        visitlink: "https://github.com/Capstone-Projects-2019-Fall/GestureControlGame---MagicHands",
        codelink: "https://github.com/Capstone-Projects-2019-Fall/GestureControlGame---MagicHands",
        projectpic: require('./Resources/project4.png'),
        stack: "Unity, Github, Sourcetree",
    },
    {
        name: "Productivity App",
        desc: "A productivity app made with a few tools in the ecosystem in React and Redux.",
        longdes: "The website has a server hosted on Heroku: https://productivity-app-server.herokuapp.com/. The introduction to redux and side logic is very intuitive, as this portfolio website is made with lots of poor props and state management. The code also have mocha chai as testing tools.",
        problem: "Babelrc, webpack and heroku server doesn't match quite well. I had quite a lot of failed attempt in hosting the server, as for some reason, the server could run locally but unable to run remotely.",
        fix: "Turn out, among the reasons, heroku doesn't include dev-dependencies in json file. So I made a slight adjustment in how heroku deploy its data and the matter was resolved.",
        visitlink: "https://productivity-app.netlify.app/",
        codelink: "https://github.com/zahego/Productivity-App",
        projectpic: require('./Resources/project5.png'),
        stack: "React, Redux, Thunk, Selector, Styled-Component, Mocha-Chai, Heroku server, Netlify host",
    },
    {
        name: "Covid Tracker 19",
        desc: "A covid 19 tracker app I built recently in 12 hour",
        longdes: "I saw a quick and intesting tutorial on youtube so I hoped right in. New experience on css module, classnames, chartjs. More experience on working with API",
        problem: "I used to resolve life cycle issue with class function, so hook is new to me. Also I had trouble since react export is case sensitive. Being new to chartjs also add to the difficulties.",
        fix: "It took quite a while for me to debug and see that const export is case sensitive, but in the end, I was able to fix my error.",
        visitlink: "https://covid-19-tracker-19.netlify.app/",
        codelink: "https://github.com/zahego/Covid-Tracker-19",
        projectpic: require('./Resources/project6.png'),
        stack: "React, Material UI, Chartjs, COVID information API, Axios, React hook",
    },
    {
        name: "Real time chat app",
        desc: "A realtime chat application build with React, react-router Socket.io, Nodejs and Expressjs.",
        longdes: " Server side is hosted at https://react-chat-server-application.herokuapp.com/. I found an interesting youtube tutorial and jumped in. The tutorial was in 2019 so lots have changes and many issues happenned. I was able to debug them all and finished the final application within 3 days of work.",
        problem: "There has been updates so the tutorial is quite outdated. The main issue is queryString location is not working normally with functional programming anymore. At some other point, the socket sent too many duplicate message",
        fix: "I came up with the solution of changing functional programming back to class-based programming. This means that I had to sacrifice hook, which is extremely useful, and return to life cycle methods. For the issue related to the duplicated message, it turns out that putting the socket recieve function on componentWillUpdate() will update the render too many time. I resolved this by putting the method in componentDidMount().",
        visitlink: "https://react-chatbox-app.netlify.app/",
        codelink: "https://github.com/zahego/react-chat-client-application",
        projectpic: require('./Resources/project7.png'),
        stack: "React, react-router Socket.io, queryString, Nodejs and Expressjs, Heroku server, Netlify host",
    },
    {
        name: "Bug Tracker 3000",
        desc: "A full-fledge Java bug tracking application done within 1 month with a group of 3 people.",
        longdes: "As my initial programming language is Java, I want to take the opportunity to try out the full potential of java for once. The program contains thorough bug tracking functionality when working in a team, including create bug task, moving, updating, deleting. Also there's different functionality for different user roles and an email system that will send email with JavaMail.jar. More info can be found here: https://github.com/zahego/bug-tracker",
        problem: "There are a lot of problems when developing the apps, and we continuously note down then resolve it one by one. One of the most prominent problem is the integration and output into executable file for other people to test it. While netbean display the program with a decent UI porportion regarding the screen, the executable file was somehow get zoomed in and many UI element was lost.",
        fix: "In the end, I found that my screen resolution is not the same as the normal resolution used in netbean. There's no way around it besides redo the whole UI system and put constrains in so that the UI will render well in most scenario. At least now I see the benefit both java and javascript regarding UI rendering.",
        visitlink: "https://github.com/zahego/bug-tracker",
        codelink: "https://github.com/zahego/bug-tracker",
        projectpic: require('./Resources/project8.png'),
        stack: "Java, javax.mail.jar, JPlanner.jar, json-simple-1.1.1.jar, commons-lang3-3.10.jar",
    }
    ],
    links: {
        github: "https://github.com/zahego/",
        linkedIn: "https://www.linkedin.com/in/minh-tran-302590139/",
        email: "tug70814@temple.edu",
        codepen: "https://codepen.io/zahego",
        connectionpic: require('./Resources/connection.png'),
    }
}
