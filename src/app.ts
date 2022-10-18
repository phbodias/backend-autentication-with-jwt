import express, { Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";
import userRoute from "./route/userRoute";

const app = express();
app.use(cors());
app.use(express.json());

app.use(errorHandlerMiddleware);
app.use(userRoute);

export default app;
