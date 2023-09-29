const { User3 } = require('../../db')
const bcrypt = require("bcryptjs");
const { generateCode3 } = require('../../utils/codeGenerator')

const createUser3 = async (name, email, password) => {
    const usercode = generateCode3()
    name = name.toUpperCase();
    email = email.toLowerCase();
    const userExists = await User3.findOne({ where: { email } });
    if (userExists) throw new Error("Este correo electrónico ya está registrado");

    const passwordHash = await bcrypt.hash(password, 10);

    const userData = { usercode, name, email, password: passwordHash };

    await User3.create(userData)

    return `Código de usuario Administrador ${usercode}`
}



module.exports = createUser3