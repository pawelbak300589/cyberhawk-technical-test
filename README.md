# Cyberhawk - technical test

### Pawel Bak - Full-stack Software Engineer

## About the task

Followed technical task from [Cyberhawk github repository](https://github.com/cyberhawk-software/technical-test)

As last time I used PHP around 4 years ago I chose to create back-end in NodeJS - at the moment I'm more familiar with tech stack including NodeJS & ReactJS. I hope this is acceptable ;)

## Project structure

This project is created using:
 - `NodeJs` for back-end,
 - `ReactJs` for front-end,
 - `MySQL` for database

With a default setup from [Setting Everything Up](#setting-everything-up) section you can run:
- back-end under: `http://localhost:8000/api`
- front-end under: `http://localhost:8000`
- database under: HOST `127.0.0.1` PORT `8001` USER `root` PASS no password

React App is pre-build into `server/public` folder and is included in the server's Docker image - this gives front-end the same URL as back-end.

## Setting Everything Up

To start my project you will need to follow the steps below:

- Clone the project with GIT

```bash
git clone https://github.com/pawelbak300589/cyberhawk-technical-test.git
```

- Enter into created directory (e.g. `cyberhawk-technical-test`)

```bash
cd cyberhawk-technical-test
```

- Create .env file from .env.example ([Note regarding App PORT](#note-regarding-app-port))

- Go to `server` folder, install packages and go back into main project's folder (this step is needed to migrate/seed database in next steps described below)

```bash
cd server
npm install
cd ..
```

- In main project's folder run docker commands to build server image and run docker-compose file:

```bash
docker build -f ./Dockerfile --tag=server .
docker-compose up -d
```

- Wait for MySQL DB container to fully start. When MySQL DB is fully running in docker you can start database migration/seeding using command below (Use it in the main project's folder):

```bash
npm run db:prep
```
Note: You can undo migration by running `npm run db:prep:undo`


## Note regarding App PORT

`APP_PORT` variable specified in the .env file (set to 8000) is my default port I was using when developing this project.

I would suggest running this project with this env values as React App is using port 8000 to communicate with server (port is hardcoded).

If you would like to change APP_PORT in .env file you will need to change API port in the React App (in file `client\src\services\backend.js`).

After that change you will need to [rebuild React App](#rebuild-react-app) or to [run React App in "dev mode"](#run-react-app-in-dev-mode).

## Rebuild React App

To rebuild React app (for use as pre-build app on the docker's NodeJs server) follow steps below:

**WARNING!** *those step are only needed if you changed `APP_PORT` value in .env or you changed code in the React App*

- Go to the `client` folder to install React packages:

```bash
cd client
npm install
```

- Run build script to build react app in the `server/public` folder.

```bash
npm run build
```

- React App is rebuild, so now you just need to rebuild server's docker image and re-run docker-compose - you can do it from the main project's folder.

```bash
cd ..
docker build -f ./Dockerfile --tag=server .
docker-compose up -d
```

## Run React App in "dev mode"

To run React App in the "dev mode" you need to follow steps below:

**WARNING!** *those step are only needed if you want to run React App in development mode to see changes automatically applied on the screen*

- Go to the `client` folder to install React packages:

```bash
cd client
npm install
```

- After packages are installed you can start react app with command:

```bash
npm start
```

- React App will start automatically under port 3000

Note: Port 3000 is whitelisted in the `server\src\app.js` file (line 19). If your app will start with a different port this line will need to be updated to fix CORS errors. Docker image for server will need to be rebuild and re-run.