const { Router } = require('express')
const { signup4_handle } = require('../../handlers/signup/signupHandler')

const Signup4 = Router()

Signup4.post('/', signup4_handle)

module.exports = Signup4