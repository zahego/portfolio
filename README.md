## Portfolio
[https://zahego-tech-portfolio.netlify.app/index.html](https://zahego-tech-portfolio.netlify.app/index.html)
Personal portfolio built with Reactjs. Site is build with attempt to make changing personal information become as least cumbersome as possible.

## Motivation
Highly motivated to create this portfolio after checkout the portfolio of Alan Aya. His portfolio is bery professional, with slick color scheme, responsive design and informative. I "stole" most of his design and revamped it to suit my need. I still created everything from scratch with React though. It's like a famous artist once said: 
>Good artist borrows, great artist steals


## Getting Started
These instructions will guild you through the inital setting up process and 
highlight what the apps can do for you to explore on your own.   
If you don't have much time to develop a full portfolio yourself, this template is very ideal as you only need to edit the information stored within 1 file to change the content of the whole page. (be mindful that if you want to edit the design, you need the understanding of Reactjs and HTML/CSS/JS) and have to actually dwelve in the codework.

## Notable feature
- Single Page Application
- Easy to eit information and quick to run
- Interactive design
- Clear visual with UI/UX design that helps getting the important information out quickly
- Responsive 
- Subtle scrolling animation and smooth scroll for a great user experience
- Modal to not disrupt SPA design

## Sections
- Navigation bar (header)
- Landing 
- Quich Summary
- Skill
- Project
- Education
- Certificate (coming soon)
- Why work with me
- About me (footer)


## Prequesite
Nodejs installed for local running purpose    
check out Node installation instruction [here](https://nodejs.org/en/)  
Netlify set up if you would like to continuous deploy and have an online hosting server  
check out Netlify instruction [here](https://www.netlify.com/)  
Or you use any other hostin site, including github page (the site is static anyway)

## Installing and Running
Clone the repo
```
$ git clone https://github.com/zahego/portfolio.git
```
Run Node command to create node_modules folder from the information in package.json, which hold all the necessary dependencies
```
$ npm install
```
Run Node command for local testing
```
$ npm start
```

## Deploying on Netlify
create a prouction build of the app
```
$ yarn build
```
install Netlify on your local repo
```
$ npm install netlify-cli -g
```
login to your Netlify account
```
$ netlify login
```
start the deploy process
```
$ netlify deploy
```
choose the option to Create and Config a new site  
change the site name to your preference  
set the deploy path to   
```
$ ./build
```

## Editing Content
all personal information can be found in a variable called 'database', located inside src/database.js
all pictures used are located in the src/Resources folder
all color scheme are located as css custom selector in src/App.css

## Technoloies stack
[React](https://reactjs.org/) - framework
[react-typical](https://www.npmjs.com/package/react-typical) - Typewriter effect  
[react-scroll](https://www.npmjs.com/package/react-scroll) - Scroll on link click animation  
[react-font-awesome](https://github.com/FortAwesome/react-fontawesome) - Icons used  
[wow.js](https://www.npmjs.com/package/react-wow) -animation on scroll

## Some interesting issues along the way
- managing state and props. This site was made before I knew about the existence of Redux so I pass props through layers of functions and class like a maniac  
- can't pass in image and font awesome icon as string. I figure a work around is to pass the whole object of `require("image.jpg")` and it work. 
- New trouble arise when I want to transfer all my data to a json file for better management as json only accept String key-value. I again work around this by using a regular js file instead of json.  
- responsive design was a huge issue as I build it with a desktop-first mindset.
-halfway through I realized there are too many things to keep track of so I made a [trello board](https://trello.com/b/SBWIfxGm/portfolio) to keep better keep track

## Contributors
Minh Tran 

## License
This project is licensed under the MIT License

## Acknowledgments
[Alan Ayala's portfolio](http://www.abwtechnologies.com/index.html) - Design inspiration. 
