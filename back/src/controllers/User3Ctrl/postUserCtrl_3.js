const { User3 } = require('../../db')
const { generateCode3 } = require('../../utils/codeGenerator')




const createUser3 = async (name, email, password) => {
    const usercode = generateCode3()
    await User3.create({ usercode, name, email, password })

    return `Usuario Admin usercode: ${usercode} creado`
}


module.exports = createUser3;