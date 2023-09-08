const { User1 } = require('../../db')


const update1 = async (id, data) => {
    const user1 = await User1.findByPk(id)
    user1.data = data;
    await user1.save()
    
    let aux = data===true?`Activaste el user ${user1.usercode}`:`Baneaste el user ${user1.usercode}`
    return aux
}

module.exports = update1