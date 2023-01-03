# Basic Express Server Setup with Typescript and Sequelize

## Prerequisites

- Node.js Should be installed
- Mysql Should be installed

## Libraries Required

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

## Setup

### Install the following dependencies :

1 - Express.js with Sequelize ORM and Mysql driver

> `npm i express sequelize mysql2`

2 - express.js is lightweight and plugin-oriented, which means that we need to install some plugins/middleware to handle everything beyond basic functionality

> `npm i -S body-parser cookie-parser cors express-validator`

3 - Include user’s authentication into app, so we need libraries for handling jwt tokens and password hashing

> `npm i -S jsonwebtoken bcrypt` >

4 - We need TypeScript with types

> `npm i -D typescript @types/bcrypt @types/body-parser @types/cookie-parser @types/cors @types/es6-promise @types/express @types/express-validator @types/jsonwebtoken @types/node @types/sequelize`

5 - Install Nodemon , Eslint and Prettier

> `npm install --save-dev nodemon eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin`
