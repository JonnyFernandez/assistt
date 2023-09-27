const { User1 } = require('../../db')
const bcrypt = require("bcryptjs");
const { generateCode } = require('../../utils/codeGenerator')



const createUser1 = async (name, email, password, entity) => {
    let usercode = generateCode()
    const entidadesValidas = ["Hospital", "Sanatorio", "Laboratorio", "Salita", "Obra Social"];

    if (!entidadesValidas.includes(entity)) {
        throw new Error(`La entidad ${entity} no es válida. Las entidades disponibles son: ${entidadesValidas.join(', ')}`);
    }
    name = name.toUpperCase();
    email = email.toLowerCase();


    const user1Exists = await User1.findOne({ where: { email } });


    if (user1Exists) throw new Error("Este correo electrónico ya está registrado");

    const passwordHash = await bcrypt.hash(password, 10);

    const userData = { usercode, name, email, password: passwordHash, entity }

    await User1.create(userData);

    return `Usuario ${usercode} creado`;

}


module.exports = createUser1