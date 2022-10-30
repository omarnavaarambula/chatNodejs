const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require('./users.models')
const Conversations = require('./conversations.models')
const Messages = db.define('messages', {

  
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        },
    },
    conversationId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'conversation_id',
        references: {
            key: 'id',
            model: Conversations
        },
    },
    createAt: {
        type: DataTypes.DATEONLY ,
        allowNull: false,
        field: 'create_at',
        defaultValue: DataTypes.NOW
    },        
    updateAt: {
        type: DataTypes.DATEONLY ,
        allowNull: false,
        field: 'update_at',
        defaultValue: DataTypes.NOW
    }
  },{
        timestamps : false
    }        
)
module.exports = Messages