import supertest from "supertest";
import app from "../../src/app";
import prisma from "../../src/database/prisma";
import * as userFactories from "../factories/userFactories";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;
});

afterAll(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users;`;
  await prisma.$disconnect();
});

describe("Testes para rota /sign-up", () => {
  it("Insere um novo usuário e recebe status code 201", async () => {
    const user = await userFactories.signUpFactory();
    const result = await supertest(app).post("/sign-up").send(user);

    const userInserted = await prisma.users.findFirst({
      where: { name: user.name },
    });

    expect(result.status).toBe(201);
    expect(userInserted).not.toBe(undefined);
  });

  it("Tenta inserir novo usuário com repeatPassword errado e recebe status code 422", async () => {
    const user = await userFactories.wrongSignUpFactory();
    const result = await supertest(app).post("/sign-up").send(user);

    expect(result.status).toBe(422);
  });
});
