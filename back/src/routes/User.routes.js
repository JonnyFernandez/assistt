const { getAllUser, getUserById, updateUser, createUser } = require('../handler/userHandler/userH')
const {Router} = require('express')


const userR = Router()

userR.get('/', getAllUser )
userR.get('/:id', getUserById )
userR.put('/:id',updateUser )
userR.post('/', createUser)






module.exports = userR