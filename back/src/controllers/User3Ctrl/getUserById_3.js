const { User3 } = require('../../db')

const getUserById_3 = async (id) => {
    let aux = await User3.findByPk(id)
    return aux
}

module.exports = getUserById_3;