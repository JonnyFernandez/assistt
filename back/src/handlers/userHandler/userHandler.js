const { getByName, getAll, getById, modify, banned } = require('../../controllers/userCtrl/userCtrl')

const getAllUsers = async (req, res) => {
    try {
        const { name } = req.query;
        const aux = name ? await getByName(name) : await getAll()
        res.status(200).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const aux_Id = await getById(id)
        res.status(200).json(aux_Id)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const modifyUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { company, address, phone } = req.body;
        const aux_update = await modify(id, company, address, phone)
        res.status(200).json(aux_update)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
const bannedUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { active } = req.body;
        const userStatus = await banned(id, active)
        res.status(200).json(userStatus)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = { getAllUsers, getUserById, modifyUser, bannedUser }