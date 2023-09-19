const { Orders } = require('../../db');


const update_order = async (id, active) => {
    try {
        // Encuentra el registro que deseas actualizar
        const updateOrder3 = await Orders.findByPk(id);

        if (!updateOrder3) {
            throw new Error('Orden no encontrada'); // Maneja el caso en que no se encuentre el registro
        }

        // Actualiza el campo revisor1
        updateOrder3.revisor2 = active;

        // Guarda los cambios en la base de datos
        await updateOrder3.save();


        let OrderState = active ? 'Onden en proceso' : 'Orden rechazada'

        return OrderState;




    } catch (error) {
        return error.message; // Maneja errores, por ejemplo, si no se encuentra el registro
    }
}



module.exports = update_order;