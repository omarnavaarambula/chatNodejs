// Email and Password user

const { getUserByEmail } = require("../users/users.controllers")
const { comparePassword } = require("../utils/cryto")

const loginUSer = async (email, password) => {

  try {
    const user = await getUserByEmail(email)
    const verifyPassword = comparePassword(password, user.password)

    if (verifyPassword) {
      return user
    }
    return false
  
  } catch(error) {
    return error
  }
}

module.exports = {loginUSer}

