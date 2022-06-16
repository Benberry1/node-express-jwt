# Node & Express Basic JWT

This exercise objective was to implement basic JWT for a provided front end. On the front end there is a simple login/register and a dashboard. The dashboard will GET data if you have a valid JWT and will give you your lucky number. There is no database connected to this project, the JWT is kept in local storage for a period of 30 days.

In order to run the project locally follow the instructions below.

## Dependencies

- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://expressjs.com/)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [http-status-codes](https://www.npmjs.com/package/http-status-codes)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose](https://mongoosejs.com/docs/index.html)

## Dev Dependencies

- None, however you may want to install [nodemon](https://www.npmjs.com/package/nodemon) to automatically start and stop your local server when changes are made.

## How to get started:

1. You can go ahead and fork/clone the repo into a local folder of your choice.
2. When you have the repo on your local machine and have your terminal located in the folder of choice run the command:
   `npm install` This will install the required dependencies for the project.
3. This project has utilised an environment variable for the JWT_SECRET located in /controllers/main.js and also in /middleware/auth.js. This will not be in the cloned repo.
   - Create a file named .env and in that file create an environment variable named 'JWT_SECRET='. Assign a value of your choice to create your secret JWT key.\*
4. Now type `npm start` into your terminal in order to start the server.
5. Navigate to your browser and type 'http://localhost:5001'. You should see the login and dashboard. Feel free to click get data and as you do not have a token you will get an unauthorised error. Sign up with a random username and password in order to get a token and once again request your data.

\*The secret key can be any value of your choice. The longer and more complex the better. To generate a complex key you can use your terminal and node.js crypto module.

```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```
