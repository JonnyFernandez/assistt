const { Router } = require('express')
const { getAllUsers, getUserById, modifyUser, bannedUser } = require('../handlers/userHandler/userHandler')



const user = Router()

user.get('/', getAllUsers)
user.put('/banned/:id', bannedUser);
user.get('/:id', getUserById)
user.put('/:id', modifyUser)


module.exports = user