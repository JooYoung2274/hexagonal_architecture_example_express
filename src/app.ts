import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";
import "reflect-metadata";
import cors from "cors";
import Mongo from "./models/connect";
import router from "./router/connect.router";
const app: express.Application = express();

async function start() {
  // cors 설정
  const corsOptions = {
    origin: "*",
  };

  app.use(cors(corsOptions));
  app.use(express.json());

  // DB connect
  await Mongo.connect();

  // ejs path
  app.set("views", __dirname + "/views");
  app.set("view engine", "ejs");
  app.use("/api", router);

  // log Handler
  function logHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error("[" + new Date() + "]\n" + err.stack);
    next(err);
  }

  // errorHandler
  function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    res.status(err.status || 500);
    res.send(err.message || "ERROR");
  }

  app.use(logHandler);
  app.use(errorHandler);

  app.listen(3000, () => {
    console.log("Server listening on port: 3000");
  });
}

start();
