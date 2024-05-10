import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import { RegisterRoutes } from "../generated/routes";

const app: Express = express();
RegisterRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
