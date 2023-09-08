const {Router} = require('express')
const user1 = require('./user1.routes')
const user2 = require('./user2.routes')
const user3 = require('./user3.routes')
const user4 = require('./user4.routes')

const prod = require('./prod.routes')
const entity = require('./entity.routes')



const route = Router()

route.use('/user1', user1)
route.use('/user2', user2)
route.use('/user3', user3)
route.use('/user4', user4)

route.use('/prod', prod)
route.use('/entity', entity)


module.exports = route