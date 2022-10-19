import { Response, Request } from "express";
import newUser from "../interfaces/signUpInter";
import * as userServices from "../services/userServices";
import signInUser from "../interfaces/signInInter";

export async function create(req: Request, res: Response) {
  const user: newUser = req.body;
  await userServices.create(user);
  return res.sendStatus(200);
}

export async function signIn(req: Request, res: Response) {
  const user: signInUser = req.body;
  const token = await userServices.signIn(user);
  return res.status(200).send(token);
}
