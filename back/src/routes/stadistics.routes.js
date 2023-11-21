const { Router } = require('express')
const Count = require('../handlers/stadistic/stadisticHandle')


const stadistic = Router()

stadistic.get('/', Count)

module.exports = stadistic