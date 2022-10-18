import bcrypt from "bcrypt";

export async function encryptPassword(password: string): Promise<string> {
  const saltRound = Number(process.env.ENCRYPT_SALTS) || 10;
  const salt = await bcrypt.genSalt(saltRound);
  const crypt = await bcrypt.hash(password, salt);
  return crypt;
}