const router = require('express').Router()
const passport = require('passport')
require('../middlewares/auth.middleware')(passport)
const conversationsServices = require('./conversations.services')
const userServices = require('../users/users.services')
const adminValidate = require('../middlewares/role.middleware')
 
router.route('/') 

    .get(passport.authenticate('jwt',   {session: false}),conversationsServices.getAllConversationsMe)
    .post(passport.authenticate('jwt', {session: false}),conversationsServices.createConversation)

router.route('/:conversation_id') 
    .get(passport.authenticate('jwt',   {session: false}),conversationsServices.getConversationById)
    .delete(passport.authenticate('jwt',{session: false}),conversationsServices.deleteConversation)    
    .patch(passport.authenticate('jwt', {session: false}),conversationsServices.patchConversation)
module.exports = router