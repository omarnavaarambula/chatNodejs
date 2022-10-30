const messageControllers = require('./messages.controllers')

const getMsgByConversationId = (req, res) => {
    const conversationId = req.params.conversation_id
    messageControllers.getMsgByConversationId(conversationId)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}
const createMessage = (req, res) => {
  const userId = req.user.id
  const { message, conversationId } = req.body
  if( message && conversationId){
    messageControllers.createMessage({message, conversationId, userId })
          .then(data => {
              res.status(201).json(data)
          })
          .catch(err => {
              res.status(400).json(err.message)
          })
  } else {
      res.status(400).json({
          message: 'Missing Data',
          fields: {
              message: 'string',
              userId: 'uuid',
              conversationId: 'uuid'
          }
      })
  }
}
const getMsgByMessageId = (req, res) => {
  const conversationId = req.params.conversation_id
  const id             = req.params.message_id
  messageControllers.getMsgByMessageId(id,conversationId)
      .then(data => {
          res.status(200).json(data)
      })
      .catch(err => {
          res.status(400).json({message: err.message})
      })
}
const deleteMsgByMessageId = (req, res) => {
  const conversationId = req.params.conversation_id
  const id             = req.params.message_id
  messageControllers.deleteMsgByMessageId(id,conversationId)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
    getMsgByConversationId,
    createMessage,
    getMsgByMessageId,
    deleteMsgByMessageId
}