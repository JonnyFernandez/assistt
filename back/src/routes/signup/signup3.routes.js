const { Router } = require('express')
const { signup3_handle } = require('../../handlers/signup/signupHandler')

const Signup3 = Router()

Signup3.post('/', signup3_handle)



module.exports = Signup3