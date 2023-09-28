const { Router } = require('express')
const { getAllUser_3, User3_ById, updateUser_3, updateOrder } = require('../handlers/userHandler/user3Handler')

const user3 = Router()

user3.get('/', getAllUser_3)
user3.get('/:id', User3_ById)
user3.put('/:id', updateUser_3)
user3.put('/order/:id', updateOrder)


module.exports = user3