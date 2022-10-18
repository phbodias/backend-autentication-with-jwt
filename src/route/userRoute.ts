import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/schemasMiddleware";
import { signupSchema } from "../schemas/signUpSchemas";
import * as userControllers from "../controllers/userControllers";

const userRoute = Router();

userRoute.post(
  "/sign-up",
  validateSchemaMiddleware(signupSchema),
  userControllers.create
);

export default userRoute;
