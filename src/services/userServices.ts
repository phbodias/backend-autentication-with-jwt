import * as userServices from "../repositories/userRepositories";

async function emailIsAvailable(email: string): Promise<boolean> {
  const isAvailable: boolean = await userServices.emailIsAvailable(email);
  return isAvailable;
}

async function nameIsAvailable(name: string): Promise<boolean> {
  const isAvailable: boolean = await userServices.nameIsAvailable(name);
  return isAvailable;
}
