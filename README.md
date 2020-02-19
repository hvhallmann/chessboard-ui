# chessboard-ui

React UI to chessboard-ui

## Introduction

This UI is made to present the user our chessboard frontend; it was made basically with [create-react-app](https://github.com/facebook/create-react-app) and [bootstrap](https://getbootstrap.com/);

### Organization

It follows a basic react script, so to start just type `npm start`. The system will search for index.js on src/ folder. From the index we react App.js, there is a [react-router-dom](https://www.npmjs.com/package/react-router-dom) embracing the routes available for the app. The routes for chess include the /wizard the first page that appears, it will lead the user for a quick introduction, and once the user press next the app will start;

The board utilizes react hooks to control its internal state, there is a class to control the rows that should be displayed and one class to display the tiles. Each tile is responsible and will blink once mouse hover it. Also it will dispatch a click event for its parent treat selected tile event. This event will request the chessboard-api to retrieve the possible knight movements. Using [axios](https://github.com/axios/axios) it will be a simple HTTP request for the API. The requestApi file on /src will make a light treatment of the request, it can be expanded for complex scenarios

#### Installing

npm install

#### Running local

npm run start:dev
