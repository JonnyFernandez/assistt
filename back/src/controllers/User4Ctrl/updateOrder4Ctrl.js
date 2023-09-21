const { Orders } = require('../../db')



const update_Order4 = async (id, active) => {
    const order = await Orders.findByPk(id)
    order.aprobado = active

    await order.save()

    let aux = active ? ` Orden de compra ${order.codeOrder} aprobada!! ` : `Orden de compra Codigo: ${order.codeOrder} rechazada!!`

    return aux

}


module.exports = update_Order4