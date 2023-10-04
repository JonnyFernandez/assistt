const createUser = require('../../controllers/signupCtrl/signupCtrl')

const signupHandle = async (req, res) => {
    const { name, email, password, type } = req.body;
    try {
        const newUser1 = await createUser(name, email, password, type)
        return res.status(201).json(newUser1)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}




module.exports = signupHandle 