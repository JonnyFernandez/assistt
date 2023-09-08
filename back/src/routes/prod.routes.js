const {Router} = require('express')
const { postProd, getAllProd, updateProd } = require('../handlers/prodHanler/prodHandler')

const prod = Router()

prod.post('/', postProd)
prod.get('/', getAllProd)
prod.put('/:id', updateProd)









module.exports = prod