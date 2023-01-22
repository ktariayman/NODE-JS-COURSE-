const express = require('express')
const friendController = require('../controllers/friends.controller')


const friendsRouter = express.Router()
friendsRouter.get('/',friendController.getFriends)
friendsRouter.get('/:id', friendController.getFriend)
friendsRouter.post('/', friendController.postFriend)

module.exports = friendsRouter;