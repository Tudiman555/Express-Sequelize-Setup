import * as express from "express";
import * as http from "http";
import { databaseService } from "./services/database.service";

export class ExpressApp {
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  private initRoutes(): void {
    this.app.get("/", (req: express.Request, res: express.Response) => {
      res.send("Hello Guys");
    });
  }

  public async start(port: number): Promise<void> {
    await databaseService.authenticate();

    this.initRoutes();

    const server: http.Server = http.createServer(this.app);

    server.listen(port, () => {
      console.log(`App Started on PORT: ${port}`);
    });
  }
}
