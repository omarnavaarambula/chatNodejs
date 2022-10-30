const bcrypt = require('bcrypt')


const hashPassword = (plainPassword) => {
  // const hashedPass = bcrypt.hashSync(plainPassword, 10)
  // return hashedPass

  return bcrypt.hashSync(plainPassword, 10)
}

const comparePassword = (plainPassword, hashPass) => {
  // plainPassword : Constraseña que recibimos del login
  // hashedPass : Contraseña que tenemos guardada en la BBDD

  // Esta utilidad se usa cuando hacemos un login y recibimos la contraseña del usuario
  // y la comparamos con la que tenemos en la BBDD
  return bcrypt.compareSync(plainPassword, hashPass)
}


module.exports = {
  hashPassword,
  comparePassword
}