const createUser = require('../../controllers/signupCtrl/signupCtrl');

const signupHandle = async (req, res) => {
    const { name, email, password, type, image } = req.body;
    try {
        const newUser = await createUser(name, email, password, type, image);
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = signupHandle;