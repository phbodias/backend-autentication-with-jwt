//Aqui deve-se fazer a conexão com o banco de dados, para criar um usuário ou checar credenciais

import newUser from "../types/signUpType";

export async function create(data: newUser) {
  //use essa função para inserir um novo usuário em seu banco
  return;
}

export async function emailIsAvailable(email: string) {
  //Caso sua regra de negócio impeça reincidência de email, use essa função para checar se já existe no banco um cadastro refente ao email passado
  return;
}

export async function nameIsAvailable(name: string) {
  //Caso sua regra de negócio impeça reincidência de nome de usuário, use essa função para checar se já existe no banco um cadastro de usuário com esse nome
  return;
}
