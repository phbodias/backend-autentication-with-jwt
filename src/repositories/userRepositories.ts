//Aqui deve-se fazer a conexão com o banco de dados, para criar um usuário ou checar credenciais

import signInUser from "../types/signInType";
import newUser from "../types/signUpType";
import UserFromDB from "../types/userDBType";

export async function create(data: newUser) {
  //use essa função para inserir um novo usuário em seu banco
  return;
}

export async function emailIsAvailable(email: string): Promise<boolean> {
  //Caso sua regra de negócio impeça reincidência de email, use essa função para checar se já existe no banco um cadastro refente ao email passado, retornando um booleano
  return;
}

export async function nameIsAvailable(name: string): Promise<boolean> {
  //Caso sua regra de negócio impeça reincidência de nome de usuário, use essa função para checar se já existe no banco um cadastro de usuário com esse nome, retornando um booleano
  return;
}

export async function findByEmail(email: string): Promise<UserFromDB> {
  //Use esta função para localizar no banco um usuário pelo email, retornando o mesmo caso encontre
  return;
}
