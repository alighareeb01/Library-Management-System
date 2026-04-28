import express from "express";
import morgan from "morgan";
import userRouter from "./modules/users/user.controller.js";
import bookRouter from "./modules/books/books.controller.js";
import { databaseConnection } from "./database/conncection.js";

export const bootstrap = () => {
  const app = express();

  app.use(express.json());
  app.use(morgan("dev"));

  app.use("/api/users/", userRouter);
  app.use("/api/books/", bookRouter);

  databaseConnection();
  app.listen(8000, () => {
    console.log("running on 8000");
  });
};
