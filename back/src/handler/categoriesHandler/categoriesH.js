const {allCatecories, CatecoriesByName} = require('../../controllers/categoriesCtrl/getCategoriesCtrl')
const postCategories = require('../../controllers/categoriesCtrl/createCategoriesCtrl')
const getByIdCategories = require('../../controllers/categoriesCtrl/getCategoriesByIdCtrl')
const updateCtrl = require('../../controllers/categoriesCtrl/updateCategoriesCtrl')



const Categories = (req,res) => {
    try {
        const {name} = req.query;
        let aux = name ? CatecoriesByName(name): allCatecories();
        res.status(200).json(aux)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
 }
const getCategoriesById = (req,res) => { 
    try {
        const {id} = req.params
        let aux = getByIdCategories(id)
        res.status(200).json(aux)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const updateCategories = (req,res) => {
    try {
        const {id} = req.params;
        let aux = updateCtrl(id)
        res.status(200).json(aux)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
 }
const createCategories = (req,res) => { 
    try {
        const {name}=req.body
        let aux = postCategories(name)
        res.status(201).json(aux)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = { Categories,getCategoriesById,updateCategories,createCategories }