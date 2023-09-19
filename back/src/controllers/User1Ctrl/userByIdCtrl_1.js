const { getAllUser1 } = require('./getAllUserCtrl_1')

const getUserById_1 = async (id) => {
    let data = await getAllUser1()
    let user = data.find(item => item.id === id)
    return user

}


module.exports = getUserById_1