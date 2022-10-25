import supertest from "supertest";
import app from "../../src/app";
import prisma from "../../src/database/prisma";
import createUserScenario from "../factories/createUserScenario";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE;`;
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("Testes para rota /sign-in", () => {
  it("Faz o login e recebe status 200 e o token de acesso", async () => {
    const user = await createUserScenario();
    const insert = await prisma.users.findFirst({
      where: { email: user.email },
    });

    console.log(insert);
    const result = await supertest(app).post("/sign-in").send(user);
    expect(result.status).toBe(200);
    expect(result.body.token.length).toBeGreaterThan(0);
  });
});
