const { Router } = require('express');
const { postOrder, getAllOrder, getByIdOrder, updateOrder, getOrdersByIdUser } = require('../handlers/orderHandler/orderHandler')

const order = Router()

order.post('/', postOrder)

order.get('/', getAllOrder)

order.get('/:id', getByIdOrder)

order.get('/api/:id', getOrdersByIdUser) //traer orden por el id del user que la creo

order.put('/:id', updateOrder)


module.exports = order;