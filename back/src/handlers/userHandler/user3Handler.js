const { getAllUser3, getByName3 } = require('../../controllers/User3Ctrl/getAllUserCtrl_3')
const getUserById_3 = require('../../controllers/User3Ctrl/getUserById_3')
const createUser3 = require('../../controllers/User3Ctrl/postUserCtrl_3')
const update3 = require('../../controllers/User3Ctrl/updateUserCtrl_3')
const update_order = require('../../controllers/User3Ctrl/updateOrderCtrl')

const getAllUser_3 = async (req, res) => {
    const { usercode } = req.query;
    try {
        const aux3 = usercode ? await getByName3(usercode) : await getAllUser3()
        res.status(200).json(aux3)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

};

const User3_ById = async (req, res) => {
    const { id } = req.params;
    try {
        const byId3 = await getUserById_3(id)
        res.status(200).json(byId3)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const postUser_3 = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser3 = await createUser3(name, email, password)
        res.status(201).json(newUser3)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateUser_3 = async (req, res) => {
    const { cuit, address, phone } = req.body;
    const { id } = req.params;
    try {
        const updateUser3 = await update3(id, cuit, address, phone)
        res.status(201).json(updateUser3)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const updateOrder = async (req, res) => {
    const { active } = req.body;
    const { id } = req.params;
    try {
        const updateUser3 = await update_order(id, active)
        res.status(201).json(updateUser3)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = {
    getAllUser_3,
    User3_ById,
    postUser_3,
    updateUser_3,
    updateOrder
}
