# Contributing

The project was built using node version 10.15.3, npm 6.4.1

## installing

Clone remote repository, and run `npm install` command

## running local

npm run start:dev

### Deploying

if you are going to deploy in a different SaaS from Heroku
> run `npm run build`, and deploy the /build folder

Otherwise, once you push to heroku, it will run postinstall hooks, and will start the server as mentioned on Procfile;
on setting you have to set NODE_ENV for production and point the API address on variable **REACT_APP_API_URL**

### What other .env files can be used on react-create-app

* .env: Default.
* .env.local: Local overrides. This file is loaded for all environments except test.
* .env.development, .env.test, .env.production: Environment-specific settings.
* .env.development.local, .env.test.local, .env.production.local: Local overrides of environment-specific settings.

Files on the left have more priority than files on the right:

* npm start: .env.development.local, .env.development, .env.local, .env
* npm run build: .env.production.local, .env.production, .env.local, .env
* npm test: .env.test.local, .env.test, .env (note .env.local is missing)

### Branches

Currently we are just using master

PRs are welcome!
