const { User4 } = require('../../db')



const getUserById_4 = async (id) => {
    const getById = await User4.findByPk(id)
    return getById
}

module.exports = getUserById_4