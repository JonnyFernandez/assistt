const { User3 } = require('../../db')


const update3 = async (id, cuit, address, phone) => {
    let findID = await User3.findByPk(id)

    findID.cuit = cuit;
    findID.address = address;
    findID.phone = phone;

    findID.save()

    return `Usuario ${findID.usercode} actualizado`

}

module.exports = update3;