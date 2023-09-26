const { Entity } = require('../db');

const data = [
    "Hospital",
    "Sanatorio",
    "Laboratorio",
    "Salita",
    "Obra Social"
];

const postEntity = async () => {
    try {
        // Crear un array de promesas para todas las operaciones findOrCreate
        const promises = data.map(item => Entity.findOrCreate({ where: { name: item } }));
        
        // Esperar a que se completen todas las promesas
        await Promise.all(promises);
    } catch (error) {
        console.error("Error al cargar entidades:", error);
    }
};

module.exports = postEntity;

