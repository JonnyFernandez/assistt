const { Router } = require('express')
const { postProd, getAllProd, updateProd, updateQuantity } = require('../handlers/prodHanler/prodHandler')

const prod = Router()

prod.post('/', postProd)
prod.get('/', getAllProd)
prod.put('/:id', updateProd)
prod.put('/api/:id', updateQuantity)









module.exports = prod