import { Response, Request } from "express";
import newUser from "../types/signUpType";
import * as userServices from "../services/userServices";

export async function create(req: Request, res: Response) {
  const user: newUser = req.body;
  await userServices.create(user);
  return res.sendStatus(200);
}
