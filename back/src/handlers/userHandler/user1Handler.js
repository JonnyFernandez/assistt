const { getAllUser1, getByName1 } = require('../../controllers/User1Ctrl/getAllUserCtrl_1')
const getUserById_1 = require('../../controllers/User1Ctrl/userByIdCtrl_1')
const createUser1 = require('../../controllers/User1Ctrl/postUserCtrl_1')
const update1 = require('../../controllers/User1Ctrl/updateUserCtrl_1')


const getAllUser_1 = (req, res) => {
    const { name } = req.query;
    try {
        let aux1 = name ? getByName1(name) : getAllUser1()
        res.status(200).json(aux1)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const User1_ById = (req, res) => {
    const { id } = req.params;
    try {
        let getById1= getUserById_1(id)
        res.status(200).json(getById1)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const postUser_1 = (req, res) => {
    const { name } = req.body;
   try {
    const newUser1 = createUser1(name)
    res.status(200).json(newUser1)
   } catch (error) {
    res.status(400).json({ error: error.message })
   }
}



const updateUser_1 = (req, res) => {
    const { id } = req.params
    const {name} = req.body
    try {
        const UpdateUser1 = update1(id, name)
        res.status(200).json(UpdateUser1);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = { getAllUser_1, User1_ById, postUser_1, updateUser_1 }