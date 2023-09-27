const { User2 } = require('../../db')
const bcrypt = require("bcryptjs");
const { generateCode2 } = require('../../utils/codeGenerator')

const createUser2 = async (cuit, name, address, email, phone, password) => {

    let usercode = generateCode2() // ------------------generador de codigo-----------

    name = name.toUpperCase();
    address = address.toUpperCase();
    email = email.toLowerCase();

    const userExists2 = await User2.findOne({
        where: {
            email
        }
    });
    if (userExists2)
        throw new Error("Este mail ya esta registrado");


    const passwordHash = await bcrypt.hash(password, 10);

    const userData2 = {
        usercode,
        cuit,
        name,
        address,
        email,
        phone,
        password: passwordHash
    };

    let creationUser2 = await User2.create(userData2);
    return `User ${creationUser2.usercode} creado`;
}

module.exports = createUser2
