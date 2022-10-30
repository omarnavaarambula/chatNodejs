// Dependencias
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config')

const { loginUSer } = require('./auth.controller')


const login = (req, res) => {
  const {email, password} = req.body

  if ( email && password ) {
    loginUSer(email, password)
      .then(response => {
        if ( response ) {
          const token = jwt.sign({
            id: response.id,
            email: response.email,
            rol: response.rol
          }, jwtSecret)
          res.status(200).json({
            message: 'Correct credentials',
            token
          })
        } else {
          res.status(401).json({message: 'Invalid credentials'})
        }
      })
      .catch(err => {
        res.status(400).json({message: err.message})
      })

  } else {
    res.status(400).json({message: 'Missing Data'}) 
  }
}


module.exports = {login}