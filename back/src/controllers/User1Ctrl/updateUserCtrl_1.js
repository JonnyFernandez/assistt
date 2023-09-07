const { User1 } = require('../../db')


const update1 = async (id, active) => {
    const user1 = await User1.findByPk(id)
    user1.active = active;
    await user1.save()
    
    let aux = active===true?`Activaste el user ${user1.usercode}`:`Baneaste el user ${user1.usercode}`
    return aux
}

module.exports = update1