const {Router} = require('express');
const {postOrder, getAllOrder} = require('../handlers/orderHandler/orderHandler')

const order = Router()

order.post('/', postOrder)

//order.delete('/:id', removeOrder)

order.get('/', getAllOrder)

module.exports = order;