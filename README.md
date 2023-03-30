# react-app-simple-calculator
This is a collection of _multiple_ smaller applications using [React JS](https://react.dev/learn), a JavaScript library to make awesome UI by Facebook. 

This application uses **component oriented UI** creation paradigm. All components are written in [JSX](https://react.dev/learn/writing-markup-with-jsx) and ES6 style and are combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/).

[Babel](https://babeljs.io/docs/) is used to _transpile_ all [JSX](https://react.dev/learn/writing-markup-with-jsx) code to vanilla JavaScript. For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used.

This is a _responsive web application_ for viewing in both Mobile and Desktop.

For calculation of all the expressions [math.js](https://www.npmjs.com/package/mathjs) is used.




## Features
 - Code is rewritten with latest version of [React JS](https://react.dev/learn).
 - Latest features of JavaScript i.e. **ESNext** is used. 
 - React [code splitting](https://react.dev/reference/react/Suspense) with *Suspense* feature is added.
 - [React router](https://reactrouter.com/en/main/start/tutorial) is added to maintain it as **Single Page Application (SPA)**.

### Calculator
- Enter an expression using the keypad layout shown in the application.
- To get the result of the calculation / expression click the `=` button. 
- It supports all the integer as well as floating point calculations.
- Error messages would be shown if an symbol entered first.
- As the web application is not backed by database / storage *no history of the calculation* is kept.

### Todo List

 
<ul>
 <li> Type an item in the input box and press <code>ENTER</code> key to add it in the todo list.</li>
 <li> Deletion of an item is done by clicking the <code>X</code> icon. </li> 
 <li> As the application is not backed by any database / storage all the items created or deleted is <i>not persistant</i>. </li>
</ul>

### Clock

- **Start** clock button is there to start the clock.
- To stop the clock click **Stop** button.

### TicTacToe

- A simple Tictactoe application.
- User moves are denoted by ```X``` while **Computer** moves are shown by ```O```.


## Installation

Clone the repository:
```bash
$ git clone https://github.com/anijitsao/react-app-simple-calculator.git
```
Navigate inside the directory and install all dependencies: 
```bash
$ cd react-app-simple-calculator/dist

# install all dependencies
$ npm install
```
Run the Application
```bash
$ npm start
```
Open `localhost:8080/` page in a web browser and enjoy
 
*tested with latest version of <img src="screenshots/chrome.png" width="20px" title="Google Chrome">[Google Chrome](https://www.google.com/chrome/) and <img src="screenshots/firefox.png" width="25px" title="Firefox Developer edition">[Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)*  

## Screenshots

Some screens of the application is given below for better understanding. 

Desktop as well as Mobile version of the screenshots are given side by side

<p> Initial screen <br/> 
 <img src="screenshots/desktop 1.png" width="590px" title="Initial screen"/>
 <img src="screenshots/mobile 1.png" width="230px" title="Initial screen"/> 
</p>
 
 <p> Entering an expression <br/>
 <img src="screenshots/desktop 2.png" width="590px" title="Entering an expression screen"/>
 <img src="screenshots/mobile 2.png" width="230px" title="Entering an expression screen"/>
 </p>
 
 <p> Result of the expression <br/> 
 <img src="screenshots/desktop 3.png" width="590px" title="Result of the expression screen"/>
 <img src="screenshots/mobile 3.png" width="230px" title="Result of the expression screen"/>
 </p>
 
 <p> Error screen <br/>
 <img src="screenshots/desktop 4.png" width="590px" title="Error screen"/>
 <img src="screenshots/mobile 4.png" width="230px" title="Error screen"/>
 </p>
 
 


