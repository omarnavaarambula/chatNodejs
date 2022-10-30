const Conversations = require('../models/conversations.models')
const uuid = require('uuid')
const Users = require('../models/users.models') 

const getAllConversationsMe = async() => {
    const data = await Conversations.findAll({
         where: {
            user_id:"7c0ac97f-f138-4624-b7b3-70ea33fdd4c0" // quitar de aca el valor dejar solo user_id
        }, 
        attributes: {
            exclude: ['userId','createdAt', 'updatedAt']
         },
        include: [
            {
                model: Users,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName']
            }
        ]
    })
    return data
}
const createConversation = async (data) => {

    const response = await Conversations.create({
        id:  uuid.v4(),
        title: data.title,
        imageUrl: data.imageUrl,
        userId: data.userId //? viene desde el token
    })
    return response
}

const getConversationById = async(id) => {
    const data = await Conversations.findOne({
        where: {
            id
        },
        attributes: {
            exclude: ['userId','createdAt', 'updatedAt']
         },
        include: [
            {
                model: Users,
                as: 'user',
                attributes: ['id', 'firstName', 'lastName']
            }
        ]    
    })
    return data
}

const deleteConversation = async (id) => {
    const data = await Conversations.destroy({
        where: {
            id
        }
    })
    return data
}

const updateConversation = async (id, data) => {
    const result = await Conversations.update(data, {
        where: {
            id
        }
    })
    return result
}

module.exports = {
    getAllConversationsMe,
    createConversation,
    getConversationById,
    deleteConversation,
    updateConversation,
 }