import prisma from "../../src/database/prisma";
import { signUpFactory } from "./userFactories";

export default async function createUser() {
  const user = await signUpFactory();
  await prisma.users.create({ data: user });
  const data = { email: user.email, password: user.password };
  return data;
}
