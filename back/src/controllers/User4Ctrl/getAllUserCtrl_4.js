const { User4 } = require('../../db')


const getAllUser4 = async () => {
    const getUsers4 = await User4.findAll()
    return getUsers4
}

const getByName4 = async (usercode) => {
    const getUserCode = await User4.findAll({ where: { usercode } })
    return getUserCode
}

module.exports = { getAllUser4, getByName4 }
