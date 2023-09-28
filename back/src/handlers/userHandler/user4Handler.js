const { getAllUser4, getByName4 } = require('../../controllers/User4Ctrl/getAllUserCtrl_4')
const getUserById_4 = require('../../controllers/User4Ctrl/userByIdCtrl_4')
const update4 = require('../../controllers/User4Ctrl/updateUserCtrl_4')
const update_Order4 = require('../../controllers/User4Ctrl/updateOrder4Ctrl.js')

const getAllUser_4 = async (req, res) => {
    const { usercode } = req.query;
    try {
        const getUser4 = usercode ? await getByName4(usercode) : await getAllUser4()
        res.status(200).json(getUser4)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const User4_ById = async (req, res) => {
    const { id } = req.params;
    try {
        const userById4 = await getUserById_4(id)
        res.status(200).json(userById4)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const updateUser_4 = async (req, res) => {
    const { id } = req.params;
    const { cuit, address, phone, password, cbu, alias } = req.body;
    try {
        const updateUser4 = await update4(id, cuit, address, phone, password, cbu, alias)
        res.status(201).json(updateUser4)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateOrder4 = async (req, res) => {
    const { id } = req.params;
    const { active } = req.body;
    try {
        const upOrder = await update_Order4(id, active)
        res.status(201).json(upOrder)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getAllUser_4,
    User4_ById,
    updateUser_4,
    updateOrder4
}
