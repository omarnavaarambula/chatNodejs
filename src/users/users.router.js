const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')

const userServices = require('./users.services')

require('../middlewares/auth.middleware')(passport)


// Ruta Raiz
router.get('/', userServices.getAllUsers)


// Ruta de informacióm propia del usuario loggeado
router.route('/me')
  .get(passport.authenticate('jwt', {session: false}),userServices.getMyUser)
  .patch(passport.authenticate('jwt', {session: false}),userServices.pachtMyUser
  )
  .delete(
    passport.authenticate('jwt', {session: false}),
    userServices.deleteMyUser
  )


// Esta sintaxix solo se usa cuando le hacemos peticiones a una misma ruta
router.route('/:id')
  .get(userServices.getUserByID)
  .patch(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    userServices.patchUser
  )
  .delete(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    userServices.deleteMyUser
  )

 
module.exports = router