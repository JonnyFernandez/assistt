const { Router } = require('express')
const { getAllUser_4, User4_ById, postUser_4, updateUser_4, updateOrder4 } = require('../handlers/userHandler/user4Handler')

const user4 = Router()

user4.get('/', getAllUser_4)
user4.get('/:id', User4_ById)
user4.post('/', postUser_4)
user4.put('/:id', updateUser_4)

user4.put('/order/:id', updateOrder4)

module.exports = user4
