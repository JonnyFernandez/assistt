const { Prod } = require('../../db')
const prodBlack = require('../../utils/demo')

const createProd = async (code, image, name, description, supplie_type, stock, price) => {

    const findExist = await Prod.findAll({ where: { code: code } })


    await Prod.create({ code, image, name, description, supplie_type, stock, price })
    console.log(`producto ${name} ingresado`);
    return `producto ${name} ingresado`
};


const chargerProd = async (code, name, description, supplie_type) => {

    const findExist = await Prod.findAll({ where: { code: code } })


    await Prod.findOrCreate({ where: { code, name, description, supplie_type } })
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
    if (!prodX) throw new Error(`No hay prod con id: ${id} para actualizar`)
    prodX.active = active
    await prodX.save()

    let response = active === true ? `activaste el prod ${prodX.name}` : `Desactivaste el prod ${prodX.name}`
    return response
}

const updateCantidad = async (id, quanty) => {
    try {
        const producto = await Prod.findByPk(id);

        if (producto) {
            // Obtener el stock actual
            const stockActual = producto.stock;

            // Calcular la diferencia entre la nueva cantidad y la cantidad anterior
            const diferenciaCantidad = quanty - producto.quanty;

            // Verificar si la diferencia implica una disminución en el stock
            if (diferenciaCantidad > 0) {
                // Si la diferencia es positiva, reducir el stock
                const nuevoStock = stockActual - diferenciaCantidad;

                // Actualizar el stock y la cantidad
                producto.stock = nuevoStock;
                producto.quanty = quanty;
                await producto.save();

                return producto;
            } else {
                // Si la diferencia es negativa o cero, mantener el stock actual
                producto.quanty = quanty;
                await producto.save();

                return producto;
            }
        } else {
            throw new Error('Producto no encontrado');
        }
    } catch (error) {
        throw new Error('Error al actualizar la cantidad: ' + error.message);
    }
};



const updateProduct = async (id, name, price, image, description, supplie_type, stock) => {

    let pepe = { id, name, price, image, description, supplie_type, stock }
    console.log(pepe);

    const aux = await Prod.findByPk(id)
    if (!aux) throw new Error("Prod no encontrado")

    name ? aux.name = name : aux.name
    price ? aux.price = price : aux.price
    image ? aux.image = image : aux.image
    description ? aux.description = description : aux.description
    supplie_type ? aux.supplie_type = supplie_type : aux.supplie_type
    stock ? aux.stock = stock : aux.stock

    await aux.save()
    return aux

}







module.exports = { createProd, getProd, update, updateCantidad, updateProduct, chargerProd }