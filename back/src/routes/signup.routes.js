const { Router } = require('express')
const signupHandle = require('../handlers/signup/signupHandler')


const signup = Router()

signup.post('/', signupHandle)



module.exports = signup