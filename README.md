## Minh Tran Portfolio
Personal portfolio template built with Reactjs


### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
If you don't have much time to develop a full portfolio yourself, this template is very ideal as you only need to edit the information stored within 1 file to change the content of the whole page. (be mindful that if you want to edit the design, you need the understanding of Reactjs and HTML/CSS/JS) and have to actually dwelve in the codes.

### Notable feature
- Single Page Application
- Easy to eit information and quick to run
- Interactive design
- Clear visual with UI/UX design that helps getting the important information out quickly
- Responsive (coming soon)

### Sections
- Navigation bar (header)
- Landing 
- Quich Summary
- Skill
- Project
- Education
- Certificate (coming soon)
- Why work with me
- About me (footer)


### Prequesite
npm installed for local running purpose    
check out Node installation instruction [here](https://nodejs.org/en/)  
Netlify set up if you would like to continuous deploy and have an online hosting server  
check out Netlify instruction [here](https://www.netlify.com/)  

### Installing and Running
Clone the repo
```
git clone https://github.com/zahego/portfolio.git
```
Run Node command to create node_modules folder, which hold all the necessary dependencies
```
npm install
```
Run Node command for local deployment
```
npm start
```

### Editing Content
all personal information can be found in a variable called 'database', located inside src/database.js
all pictures used are located in the src/Resources folder
all color scheme are located as css custom selector in src/App.css

### Built With
[React](https://reactjs.org/)  
[react-typical](https://www.npmjs.com/package/react-typical) - Typewriter effect  
[react-scroll](https://www.npmjs.com/package/react-scroll) - Scroll on link click animation  
[react-font-awesome](https://github.com/FortAwesome/react-fontawesome) - Icons used  

### Some interesting issues along the way
- managing state and props. This site was made before I knew about the existence of Redux so I pass props through layers of functions and class like a maniac  
- can't pass in image and font awesome icon as string. I figure a work around is to pass the whole object of `require("image.jpg")` and it work. 
- New trouble arise when I want to transfer all my data to a json file for better management as json only accept String key-value. I again work around this by using a regular js file instead of json.  
- responsive design was a huge issue as I build it with a desktop-first mindset.

### Contributors
Minh Tran 

### Acknowledgments
[Alan Ayala's portfolio](http://www.abwtechnologies.com/index.html) - Design inspiration. 
His portfolio is really professional and strong so I copied most of the design from his page. (I did implement all the code by myself as he uses vanilla JS while I use React)
