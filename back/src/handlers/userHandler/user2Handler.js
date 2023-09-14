const { getAllUser2, getByName2 } = require('../../controllers/User2Ctrl/getAllUserCtrl_2')
const getUserById_2 = require('../../controllers/User2Ctrl/getUserById_2')
const update2 = require('../../controllers/User2Ctrl/updateUserCtrl_2')
const createUser2 = require('../../controllers/user2Ctrl/postUserCtrl_2')

const getAllUser_2 = async (req, res) => {
    const { codeUser } = req.query;
    try {
        let getUsers2 = codeUser ? await getByName2(codeUser) : await getAllUser2()
        res.status(200).json(getUsers2)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const User2_ById = async (req, res) => {
    const { id } = req.params;
    try {
        let getById2 = await getUserById_2(id)
        res.status(200).json(getById2)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const postUser_2 = async (req, res) => {
    const { cuit, name, address, email, phone, password } = req.body;


    try {
        const newUser2 = await createUser2(cuit, name, address, email, phone, password)
        res.status(200).json(newUser2)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateUser_2 = async (req, res) => {
    const { id } = req.params
    const { active } = req.body
    try {
        const UpdateUser2 = await update2(id, active)
        res.status(200).json(UpdateUser2);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    getAllUser_2,
    User2_ById,
    postUser_2,
    updateUser_2
}
