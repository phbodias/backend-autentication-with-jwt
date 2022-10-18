import * as userRepository from "../repositories/userRepositories";
import newUser from "../types/signUpType";
import { encryptPassword } from "../utils/encrypt";

export async function create(user: newUser) {
  //verifique se o email está disponível, caso faça parte de suas regras de negócio
  const emailIsAvailable: boolean = await checkEmailIsAvailable(user.email);

  //verifique se o nome de usuário está disponível, caso faça parte de suas regras de negócio
  const nameIsAvailable: boolean = await checkNameIsAvailable(user.name);

  if (emailIsAvailable && nameIsAvailable) {
    user.password = await encryptPassword(user.password); //encripte a senha do usuário antes de salva-lá no banco

    return await userRepository.create(user);
  }

  //retorne ao usuário qual regra de negócio foi quebrada, no exemplo abaixo, foi considerada a de email já cadastrado
  throw { code: "Conflict", message: "Email already in use" };
}

async function checkEmailIsAvailable(email: string): Promise<boolean> {
  const isAvailable: boolean = await userRepository.emailIsAvailable(email);
  return isAvailable;
}

async function checkNameIsAvailable(name: string): Promise<boolean> {
  const isAvailable: boolean = await userRepository.nameIsAvailable(name);
  return isAvailable;
}
