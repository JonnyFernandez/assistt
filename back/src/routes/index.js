const {Router} = require('express')
const userR = require('./User.routes')
const CategoriesR = require('./Categories.routes')

const route = Router()



route.use('/user', userR)
route.use('/categories', CategoriesR)




module.exports = route