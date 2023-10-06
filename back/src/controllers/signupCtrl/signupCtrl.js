const { User } = require('../../db');
const bcrypt = require("bcryptjs");

const createUser = async (name, email, password, type) => {
    const type_Validas = ["admin", "client", "supplier"];

    if (!type_Validas.includes(type)) {
        throw new Error(`La entidad ${type} no es válida. Las entidades disponibles son: ${type_Validas.join(', ')}`);
    }

    name = name.toUpperCase();
    email = email.toLowerCase();

    // Verificar si el correo electrónico ya está registrado en la base de datos
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
        const errorResponse = {
            error: "Este correo electrónico ya está registrado"
        };
        return errorResponse; // Devuelve el objeto JSON de error
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const userData = { name, email, password: passwordHash, type };

    await User.create(userData);

    return `Usuario ${name} creado`;
};

module.exports = createUser;
