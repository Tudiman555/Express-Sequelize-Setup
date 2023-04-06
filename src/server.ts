import { ExpressApp } from "./app";
import { APP_PORT } from "./secrets";

const app = new ExpressApp();

app.start(APP_PORT);
