const { Prod } = require('../../db')
const prodBlack = require('../../utils/demo')

const createProd = async (code, name, description, supplie_type) => {

    const findExist = await Prod.findAll({ where: { code: code } })


    await Prod.findOrCreate({ where: { code, name, description, supplie_type } })
    // console.log(`producto ${name} ingresado`);
    return `producto ${name} ingresado`
}


const getProd = async () => {
    const aux = await Prod.findAll()
    if (aux.length < 1) throw new Error('No hay prod cargados en la db')
    return aux
    // const prod = prodBlack()
    // return prod
}


const update = async (id, active) => {
    let prodX = await Prod.findByPk(id)
    if (!prodX) throw new Error(`No hay prod con id: ${id} para actualizar`)
    prodX.active = active
    await prodX.save()

    let response = active === true ? `activaste el prod ${prodX.name}` : `Desactivaste el prod ${prodX.name}`
    return response
}

const updateCantidad = async (id, quanty) => {
    // console.log(quanty);
    const aux = await Prod.findByPk(id)

    // console.log(aux);


    aux.quanty = quanty


    await aux.save()


    return aux
}

module.exports = { createProd, getProd, update, updateCantidad }