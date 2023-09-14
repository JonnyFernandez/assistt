const { Orders } = require('../../db');

const update2 = async (id, active) => {
  try {
    // Encuentra el registro que deseas actualizar
    const updateOrder2 = await Orders.findByPk(id);

    if (!updateOrder2) {
      throw new Error('Orden no encontrada'); // Maneja el caso en que no se encuentre el registro
    }

    // Actualiza el campo revisor1
    updateOrder2.revisor1 = active;

    // Guarda los cambios en la base de datos
    await updateOrder2.save();

    return "Orden modificada";
  } catch (error) {
    return error.message; // Maneja errores, por ejemplo, si no se encuentra el registro
  }
};

module.exports = update2;

