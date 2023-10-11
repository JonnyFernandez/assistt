const {Router} = require('express');
const {postOrder, getAllOrder, getByIdOrder, updateOrder} = require('../handlers/orderHandler/orderHandler')

const order = Router()

order.post('/', postOrder)

order.get('/', getAllOrder)

order.get('/:id', getByIdOrder)

order.put('/:id', updateOrder)


module.exports = order;