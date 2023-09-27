const { Router } = require('express')
const loginHandler = require('../handlers/login/loginHandler')

const loginR = Router()

loginR.post('/', loginHandler)




module.exports = loginR