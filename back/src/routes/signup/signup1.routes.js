const { Router } = require('express')
const { signup1_handle } = require('../../handlers/signup/signupHandler')


const Signup1 = Router()

Signup1.post('/', signup1_handle)



module.exports = Signup1