# Basic Express Server Setup with Typescript and Sequelize

## Prerequisites

- Node.js Should be installed
- Mysql Should be installed

## Libraries Used

- mysql2 --> Standard Nodejs mqsql driver
- sequelize --> Promise Based Node.js ORM for SQL
- express --> Light Weight Web FrameWork for Node.js
- express-validator --> Express Middleware for validation
- body-parser --> Middleware for parsing body of a request
- cookie-parser --> Middleware for parsing cookies of a request
- cors --> Facilitates CORS (Cross Origin Resourse Sharing )
- bcrypt --> A library used for hashing passwords
- jsonwebtoken --> Used for JSON web tokens
- typescript --> Used for Providing Types to help debug and catch errors before they go into production
- nodemon --> Used as Dev Dependency to restart server whenever there are file changes
- eslint --> Helps to find and debug certain problematics patterns and bugs in javascript
- prettier --> Code Formatting Tools which helps you maintain consistent code pattern
- eslint-config-prettier --> Turns off all rules that are unnecessary or might conflict with [Prettier]

## Setup (If you want to setup your project from Scratch)

### Install the following dependencies :

- 1. Express.js with Sequelize ORM and Mysql driver

> `npm i express sequelize mysql2`

- 2. express.js is lightweight and plugin-oriented, which means that we need to install some plugins/middleware to handle everything beyond basic functionality

> `npm i -S body-parser cookie-parser cors express-validator`

- 3. Include user’s authentication into app, so we need libraries for handling jwt tokens and password hashing

> `npm i -S jsonwebtoken bcrypt` >

- 4. We need TypeScript with types

> `npm i -D typescript @types/bcrypt @types/body-parser @types/cookie-parser @types/cors @types/es6-promise @types/express @types/express-validator @types/jsonwebtoken @types/node @types/sequelize`

- 5. Install Nodemon , Eslint and Prettier

> `npm install --save-dev nodemon eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin`

### Project Configuration :

- 1. Create a Entry File Named `server.js`

> `touch server.js`

This will be your app entry file

- 2. Create a Express Server with a Port Inside `server.js`

````
import * as express from "express";

const app = express();
const port = 4001;

app.get("/", (req, res, next) => {
  res.json("Hello Guys");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

```js
````

- 3. Configure Typescript

> Create a file named `tsconfig.json` in the root dir of the project and add the following configuration

````
{
  "compilerOptions": {
    "outDir": "dist",
    "sourceMap": true,
    "module": "commonjs",
    "target": "es2017"
  },
  "include": ["src/**/*"]
}

```json
````

`include` --> specifies which directory you want typescipt to transpile/watch
`outDir` --> specifies in which directory should transpiled file go to

- 4. Configure Scripts inside `package.json`

> Inside `package.json` Specify the name of the entry file of the server under `main` field which will the `server.js` it will be transpiled by typescript
> Inside `package.json` Add the Following scripts under `scripts` field

````
 "watch-ts": "tsc -w",
 "watch-node": "nodemon dist/server.js",
 "watch-debug": "npm run watch-ts & npm run watch-node"

```json
````

`watch-ts` --> instructs typescript to watch files in directory specified in `tsconfig.json` for changes and transpile the ts files into js and store the   result in `dist` directory  as specified in `tsconfig.json`

`watch-node` --> run the transpiled files and automatically re-run the files everytime file changes.

`watch-debug` --> performs transpiling and execution concurrently [`This Command will be used to run the app`]

- 5. Running the App 

> Inside the root Directory run the following command

`npm run watch-debug`

you can see the server running on `localhost:4001` inside browser

And Done !!!




