const { User4 } = require('../../db')
const bcrypt = require("bcryptjs");
const { generateCode4 } = require('../../utils/codeGenerator')

const createUser4 = async (name, email, password) => {
    const usercode = generateCode4()
    name = name.toUpperCase();
    email = email.toLowerCase();
    const userExists = await User4.findOne({ where: { email } });
    if (userExists) throw new Error("Este correo electrónico ya está registrado");

    const passwordHash = await bcrypt.hash(password, 10);

    const userData = { usercode, name, email, password: passwordHash };

    await User4.create(userData)
    return `Código de usuario Proveedor ${usercode}`

}

module.exports = createUser4