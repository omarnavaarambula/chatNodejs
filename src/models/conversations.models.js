const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require('./users.models')
const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "image_url",
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
module.exports = Conversations 