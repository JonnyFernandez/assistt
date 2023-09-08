const { Prod } = require('../../db')

const createProd = async (code, name, description) => {

    const findExist = await Prod.findAll({ where: { code: code } })
    
    // if (findExist) throw new Error(`el prod de codigo: "${code}" ya existes`)

    await Prod.findOrCreate({ where: { code, name, description } })
    // console.log(`producto ${name} ingresado`);
    return `producto ${name} ingresado`
}


const getProd = async () => {
    const aux = await Prod.findAll()
    if (aux.length < 1) throw new Error('No hay prod cargados en la db')
    return aux
}


const update = async (id, active) => {
    let prodX = await Prod.findByPk(id)
    if(!prodX) throw new Error(`No hay prod con id: ${id} para actualizar`)
    prodX.active = active
    await prodX.save()

    let response = active === true ? `activaste el prod ${prodX.name}` : `Desactivaste el prod ${prodX.name}`
    return response
}

module.exports = { createProd, getProd, update }