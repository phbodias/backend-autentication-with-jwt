import { faker } from "@faker-js/faker";

export async function signUpFactory() {
  const password = faker.internet.password();
  return {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password,
    confirmPassword: password,
  };
}
