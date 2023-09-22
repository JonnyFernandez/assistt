const {Router} = require('express')
const { getAllUser_2, User2_ById, postUser_2, updateUser_2, updateOrder } = require ('../handlers/userHandler/user2Handler')

const user2 = Router()

user2.get('/', getAllUser_2 )
user2.get('/:id', User2_ById )
user2.post('/', postUser_2 )
user2.put('/:id', updateUser_2 )
user2.put('/order/:id', updateOrder)





module.exports = user2