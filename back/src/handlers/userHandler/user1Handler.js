const { getAllUser1, getByName1 } = require('../../controllers/User1Ctrl/getAllUserCtrl_1')
const getUserById_1 = require('../../controllers/User1Ctrl/userByIdCtrl_1')
const update1 = require('../../controllers/User1Ctrl/updateUserCtrl_1')


const getAllUser_1 = async (req, res) => {
    const { codeUser } = req.query;

    try {
        let aux1 = codeUser ? await getByName1(codeUser) : await getAllUser1()
        res.status(200).json(aux1)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const User1_ById = async (req, res) => {
    const { id } = req.params;
    try {
        let getById1 = await getUserById_1(id)
        res.status(200).json(getById1)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}





const updateUser_1 = async (req, res) => {
    const { id } = req.params
    const { data } = req.body
    try {
        const UpdateUser1 = await update1(id, data)
        res.status(200).json(UpdateUser1);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = { getAllUser_1, User1_ById, updateUser_1 }