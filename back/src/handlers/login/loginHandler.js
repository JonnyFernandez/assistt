const loginUser = require('../../controllers/login/loginCtrl')

const loginHandler = async (req, res) => {
    const { email, password } = req.body
    try {
        const aux = await loginUser(email, password)
        res.status(200).json(aux)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = loginHandler