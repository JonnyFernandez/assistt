const express = require('express')
const server = express()
const route = require('./routes/index')


server.use(express.json())

server.use(route)




module.exports = server