const {Router} = require('express')
const {postEntity, removeEntity, getAllEntity} = require('../handlers/entityHandler/entityHandler')


const entity = Router()

entity.post('/', postEntity)

entity.delete('/:id', removeEntity)

entity.get('/', getAllEntity)

module.exports = entity