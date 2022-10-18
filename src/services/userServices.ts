import * as userRepository from "../repositories/userRepositories";
import newUser from "../types/signUpType";
import UserFromDB from "../types/userDBType";
import { comparePasswords, encryptPassword } from "../utils/encrypt";

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

async function findByEmail(email: string): Promise<UserFromDB> {
  const user = await userRepository.findByEmail(email);

  if (user) return user;

  //caso não seja encontrado nenhum usuário com o email passado, retorne isso para o usuário
  throw { code: "Not found", message: "You haven1t an account yet" };
}

async function passwordsMatch(
  password: string,
  encripPassword: string
): Promise<boolean> {
  const match: boolean = await comparePasswords(password, encripPassword);
  if (match) return true;

  //caso as senhas não sejam iguais, negar login do usuário
  throw { code: "Unauthorized", message: "Email or password incorrect!" };
}
