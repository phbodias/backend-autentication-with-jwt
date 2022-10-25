import prisma from "../../src/database/prisma";
import { encryptPassword } from "../../src/utils/encrypt";
import { signUpFactory } from "./userFactories";

export default async function createUserScenario() {
  const user = await signUpFactory();
  const data = { email: user.email, password: user.password };
  user.password = await encryptPassword(user.password);
  await prisma.users.create({
    data: { name: user.name, email: user.email, password: user.password },
  });
  return data;
}
