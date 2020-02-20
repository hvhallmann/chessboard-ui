# chessboard-ui

React UI to chessboard-ui

## Introduction

This UI is made to present the user our chessboard frontend; it was made basically with [create-react-app](https://github.com/facebook/create-react-app) and [bootstrap](https://getbootstrap.com/);

### Organization

It follows a basic react script, so, to start just type `npm start`. The system will search for index.js on src/ folder. From the index we reach App.js, there is a [react-router-dom](https://www.npmjs.com/package/react-router-dom) embracing the routes available for the app. The routes for chess includes the /wizard page, the first one that appears, it will lead the user for a quick introduction, and once the user press next the app will lead him to a second information page. Just a card with information regarding buttons. Once next is pressed again the app will start on chess mode;

The board utilizes react hooks to control its internal state, there is a class to control the rows that should be displayed and one class to display the tiles. Each tile is responsive and will blink once mouse hover it. It will also  dispatch a click event for its parent, treating it like the selected tile event. This event will request the chessboard-api to retrieve the possible knight movements. Using [axios](https://github.com/axios/axios) it will be a simple HTTP request for the API. And the requestApi file on /src will deal with the request.

This request event will dispatch a change on Board internal state once it triggers, it will clear all the information from the matrix and apply the new configuration according to the information from the server. The matrix is 2d array, so be careful when changing its internal state, always clone it before changing it.

#### Installing

> npm install

#### Running local

> npm run start:dev

#### Deploying

This UI is ready to be deployed to heroku. Just push the code;
> git push heroku master
