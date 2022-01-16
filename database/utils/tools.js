import { compare, hash } from "bcrypt"

export const passwordHash = async (password) => {
  const hashPassword = await hash(password, 10)
  return hashPassword
}
