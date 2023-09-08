const { Entity } = require('../../db')

const createEntity = async (name) => {

    let aux = await Entity.findAll({ where: { name } })
    if (aux.length > 0) throw new Error(`ya existe la entidad "${name}"`)

    await Entity.create({ name })
    return `Entidad "${name}" creada`
}

const deleteEntity = async (id) => {
    let aux = await Entity.findByPk(id);
    await aux.destroy()
    return `Entidad ${aux.name} Eliminada`
}

const getEntitys = async () => {
    let aux = await Entity.findAll()
    if (aux.length < 1) throw new Error('No hay entidades en la db')
    return aux
}


module.exports = { createEntity, deleteEntity, getEntitys }