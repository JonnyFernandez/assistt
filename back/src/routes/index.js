const { Router } = require('express')


const loginR = require('./login.routes')
const signup = require('./signup.routes')
const user = require('./user.routes')
const refresh_token = require('./refreshToken.routes')


const prod = require('./prod.routes')
const order = require('./order.routes')
const review = require('./review.routes')

const authenticate = require('../utils/auth/authenticate')

const stadistic = require('./stadistics.routes')

// ----------------------------------------------
const route = Router()
// ----------------------------------------------



route.use('/prod', prod)
route.use('/order', order)
route.use('/review', review)

// login and signup
route.use('/api/signup', signup)
route.use('/api/login', loginR)
route.use('/user', user)

route.use('/refresh-token', refresh_token)


route.use('/count', stadistic)




module.exports = route