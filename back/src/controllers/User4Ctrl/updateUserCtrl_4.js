const { User4 } = require('../../db')



const update4 = async (id, cuit, address, phone, password, cbu, alias) => {

    const aux = { id, cuit, address, phone, password, cbu, alias }
    // console.log(aux);

    const update4 = await User4.findByPk(id)

    update4.cuit = cuit
    update4.address = address
    update4.phone = phone
    update4.password = password
    update4.cbu = cbu
    update4.alias = alias

    await update4.save()


    return `Usuarip Proveedor ${update4.usercode} actualizo informacion`


}

module.exports = update4