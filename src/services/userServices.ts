import * as userServices from "../repositories/userRepositories";

export async function emailIsAvailable(email: string): Promise<boolean> {
  const isAvailable: boolean = await userServices.emailIsAvailable(email);
  return isAvailable;
}
