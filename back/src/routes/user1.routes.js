const { Router } = require('express')
const { getAllUser_1, User1_ById, postUser_1, updateUser_1, } = require('../handlers/userHandler/user1Handler')
const PostUserValidation1 = require('../handlers/postUserValidation/postUserValidation1')

const user1 = Router()
//USER SALUD

user1.get('/', getAllUser_1)
user1.get('/:id', User1_ById)
user1.post('/', postUser_1)
user1.post('/login', PostUserValidation1)
user1.put('/:id', updateUser_1)



module.exports = user1