const createUser1 = require('../../controllers/signupCtrl/createUser1Ctrl')
const createUser2 = require('../../controllers/signupCtrl/createUser2Ctrl')
const createUser3 = require('../../controllers/signupCtrl/createUser3Ctrl')
const createUser4 = require('../../controllers/signupCtrl/createUser4Ctrl')

const signup1_handle = async (req, res) => {
    const { name, email, password, entity } = req.body;
    try {
        const newUser1 = await createUser1(name, email, password, entity)
        return res.status(201).json(newUser1)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}
const signup2_handle = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser2 = await createUser2(name, email, password)
        return res.status(201).json(newUser2)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

}
const signup3_handle = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser3 = await createUser3(name, email, password)
        return res.status(201).json(newUser3)
    } catch (error) {
        return res.status(400).json({ error: error.message })

    }
}
const signup4_handle = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser4 = await createUser4(name, email, password)
        return res.status(201).json(newUser4)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}



module.exports = { signup1_handle, signup2_handle, signup3_handle, signup4_handle }