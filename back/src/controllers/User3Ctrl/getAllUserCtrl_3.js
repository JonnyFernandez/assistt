const { User3 } = require('../../db')

const getAllUser3 = async () => {
    const getAll = await User3.findAll()
    return getAll
}

const getByName3 = async (usercode) => {
    const getByUsercode = await User3.findAll({ where: { usercode } })
    return getByUsercode
}

module.exports = {
    getAllUser3, getByName3
}