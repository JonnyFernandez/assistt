const { User } = require('../../db')
const bcrypt = require("bcryptjs");
// const { generateCode } = require('../../utils/codeGenerator')


const createUser = async (name, email, password, type) => {

    const type_Validas = ["admin", "client", "supplier",];

    if (!type_Validas.includes(type)) {
        throw new Error(`La entidad ${type} no es válida. Las entidades disponibles son: ${type_Validas.join(', ')}`);
    }
    name = name.toUpperCase();
    email = email.toLowerCase();


    const user1Exists = await User.findOne({ where: { email } });

    if (user1Exists) throw new Error("Este correo electrónico ya está registrado");

    const passwordHash = await bcrypt.hash(password, 10);

    const userData = { name, email, password: passwordHash, type }


    await User.create(userData);

    return `User ${name} created`;

}



module.exports = createUser