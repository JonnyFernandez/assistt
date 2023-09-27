const { Router } = require('express')
const { signup2_handle } = require('../../handlers/signup/signupHandler')


const Signup2 = Router()

Signup2.post('/', signup2_handle)

module.exports = Signup2