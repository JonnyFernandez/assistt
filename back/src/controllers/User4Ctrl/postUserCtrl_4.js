const { User4 } = require('../../db')
const { generateCode4 } = require('../../utils/codeGenerator')




const createUser4 = async (name, email, password) => {
    const usercode = generateCode4()
    await User4.create({ usercode, name, email, password })

    return `Usuario Proveedor usercode: ${usercode} creado`
}

module.exports = createUser4