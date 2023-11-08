const createUser = require('../../controllers/signupCtrl/signupCtrl');

const signupHandle = async (req, res) => {
    const { name, email, password, type } = req.body;
    try {
        const newUser = await createUser(name, email, password, type);
        if (newUser.error) {
            return res.status(400).json({ error: newUser.error }); // Devuelve el error si el correo ya está registrado
        }
        return res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Error interno del servidor' }); // En caso de otros errores
    }
};

module.exports = signupHandle;
