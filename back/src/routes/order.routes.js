const {Router} = require('express');
const {postOrder, getAllOrder, getByIdOrder} = require('../handlers/orderHandler/orderHandler')

const order = Router()

order.post('/', postOrder)

order.get('/', getAllOrder)

order.get('/:id', getByIdOrder)

module.exports = order;