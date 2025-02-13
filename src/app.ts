import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";

const app: Express = express();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
