import express, { Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";

const app = express();
app.use(cors());
app.use(express.json());

app.use(errorHandlerMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Servidor rodando");
});

export default app;
