const { Categories,getCategoriesById,updateCategories,createCategories } =require('../handler/categoriesHandler/categoriesH')
const {Router} = require('express')
const CategoriesR = Router()

CategoriesR.get('/', Categories )
CategoriesR.get('/:id', getCategoriesById )
CategoriesR.put('/:id', updateCategories )
CategoriesR.post('/', createCategories)



module.exports = CategoriesR