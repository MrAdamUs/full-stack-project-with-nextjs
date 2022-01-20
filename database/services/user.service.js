import User from "database/models/user.model"

export const userExist = async (email) => {
  const checkUser = await User.findOne({ email: email })
  if (checkUser) return true
  return false
}

export const findUserByEmail = async (email) => {
  return await User.findOne({ email: email })
}

export const findUserById = async (id) => {
  const user = await User.findById(id).select({ password: 0 })
  if (!user) throw new Error("No user found")
  return user
}
