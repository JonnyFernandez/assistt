const postUser = require('../../controllers/userCtrl/createUserCtrl')
const update_user = require('../../controllers/userCtrl/updateUserCtrl')
const getById_user = require('../../controllers/userCtrl/getByIdCtrl')
const {getAll_User, getUserByName} = require('../../controllers/userCtrl/getAllCtrl')

const getAllUser = (req, res) => {
    try {
        const {name} = req.query;
        const aux1 = name ? getUserByName(name): getAll_User()
        res.status(200).json(aux1)
    } catch (error) {
        res.status(400).json({error: error.message})        
    }
}

const getUserById = (req, res) => {
    try {
        const {id} = req.params;
        const aux2 = getById_user(id)
        res.status(200).json(aux2)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

const updateUser = (req, res) => {
    try {
        const {id} = req.params;
        const aux3 = update_user(id)
        res.status(200).json(aux3)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }

}

const createUser = (req, res) => {
    try {
        const {name} = req.body;
        let aux4 = postUser(name)
        res.status(200).json(aux4)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


module.exports = { getAllUser, getUserById, updateUser, createUser }