const { Router } = require('express')
const { getAllUser_1, User1_ById, updateUser_1, } = require('../handlers/userHandler/user1Handler')


const user1 = Router()
//USER SALUD

user1.get('/', getAllUser_1)

user1.get('/:id', User1_ById)

user1.put('/:id', updateUser_1)



module.exports = user1