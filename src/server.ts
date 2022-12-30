import * as express from "express";
//import * as cors from 'cors'
//import * as bodyParser from 'body-parser'

const app = express();
const port = 4001;

//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cors())

app.get("/", (req, res, next) => {
  res.json("Hello Guys");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
