const Conversations = require('../models/conversations.models')
const Messages = require('../models/messages.models')
const uuid = require('uuid')
const Users = require('../models/users.models') 

const getMsgByConversationId = async (conversationId) => {
    const data = await Messages.findAll({
        where: {
            conversationId
        },
        order:[['userId', 'ASC'],['createAt', 'DESC']],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
         },
        include: [
            {
                model: Conversations,
                attributes: ['title']
            }
        ]
    })
    return data   
}

const createMessage = async (data) => {
    const response = await Messages.create({
        id: uuid.v4(),
        message: data.message,
        userId:data.userId, 
        conversationId: data.conversationId
    })
    return response
}

const getMsgByMessageId = async(id,conversationId) => {
    const data = await Messages.findOne({
        where: {
            id,
            conversationId
        },
        include: [
            {
                model: Conversations,
                attributes: ['title']
            }
        ]        
        
    })
    return data
}

const deleteMsgByMessageId = async (id,conversationId) => {
    const data = await Messages.destroy({
        where: {
            id,
            conversationId
        }
    })
    return data
}
module.exports = {
    
    createMessage,
    getMsgByConversationId,
    getMsgByMessageId,
    deleteMsgByMessageId
}