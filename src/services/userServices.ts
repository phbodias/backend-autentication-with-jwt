import * as userRepository from "../repositories/userRepositories";
import newUser from "../types/signUpType";

async function emailIsAvailable(email: string): Promise<boolean> {
  const isAvailable: boolean = await userRepository.emailIsAvailable(email);
  return isAvailable;
}

async function nameIsAvailable(name: string): Promise<boolean> {
  const isAvailable: boolean = await userRepository.nameIsAvailable(name);
  return isAvailable;
}
