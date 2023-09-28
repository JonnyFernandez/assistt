const { Router } = require('express')
const user1 = require('./user1.routes')
const user2 = require('./user2.routes')
const user3 = require('./user3.routes')
const user4 = require('./user4.routes')

const loginR = require('./login.routes')
const refresh_token = require('./refreshToken.routes')
const Signup1 = require('./signup/signup1.routes')
const Signup2 = require('./signup/signup2.routes')
const Signup3 = require('./signup/signup3.routes')
const Signup4 = require('./signup/signup4.routes')

const prod = require('./prod.routes')
const entity = require('./entity.routes')
const order = require('./order.routes')
const review = require('./review.routes')


// ----------------------------------------------
const route = Router()
// ----------------------------------------------

route.use('/user1', user1)
route.use('/user2', user2)
route.use('/user3', user3)
route.use('/user4', user4)

route.use('/prod', prod)
route.use('/entity', entity)
route.use('/order', order)
route.use('/review', review)

// login and signup
route.use('/login', loginR)
route.use('/refresh-token', refresh_token)
route.use('/api/signup1', Signup1)
route.use('/api/signup2', Signup2)
route.use('/api/signup3', Signup3)
route.use('/api/signup4', Signup4)



module.exports = route