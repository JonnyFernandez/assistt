const { getAllUser2, getByName2 } = require('../../controllers/User2Ctrl/getAllUserCtrl_2')
const getUserById_2 = require('../../controllers/User2Ctrl/getUserById_2')
const update2 = require('../../controllers/User2Ctrl/updateUserCtrl_2')
const createUser2 = require('../../controllers/User2Ctrl/postUserCtrl_2')

const getAllUser_2 = (req, res) => {
    const { name } = req.query;
    try {
        let getUsers2 = name ? getByName2(name) : getAllUser2()
        res.status(200).json(getUsers2)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const User2_ById = (req, res) => {
    const { id } = req.params;
    try {
        let getById2= getUserById_2(id)
        res.status(200).json(getById2)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const postUser_2 = (req, res) => {
    const { name } = req.body;
    try {
     const newUser1 = createUser2(name)
     res.status(200).json(newUser1)
    } catch (error) {
     res.status(400).json({ error: error.message })
    }
}

const updateUser_2 = (req, res) => {
    const { id } = req.params
    const {name} = req.body
    try {
        const UpdateUser2 = update2(id, name)
        res.status(200).json(UpdateUser2);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = { getAllUser_2, User2_ById, postUser_2, updateUser_2 }