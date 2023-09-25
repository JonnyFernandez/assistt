const { Entity } = require('../../db')

const createEntity = async (name) => {
    try {
        if (typeof name !== "string") {
            throw new Error("El nombre de la entidad debe ser una cadena de texto válida");
          }
      // Validar si ya existe la entidad
      const existingEntity = await Entity.findOne({ where: { name } });
      if (existingEntity) {
        throw new Error(`La entidad "${name}" ya existe`);
      }
  
      // Crear la entidad si no existe
      const newEntity = await Entity.create({ name });
      return `Entidad "${newEntity.name}" creada`;
    } catch (error) {
      throw new Error(`Error al crear la entidad: ${error.message}`);
    }
  };
  
  const deleteEntity = async (id) => {
    try {
      const entityToDelete = await Entity.findByPk(id);
      if (!entityToDelete) {
        throw new Error(`No se encontró la entidad con ID ${id}`);
      }
  
      const entityName = entityToDelete.name;
      await entityToDelete.destroy();
      return `Entidad "${entityName}" eliminada`;
    } catch (error) {
      throw new Error(`Error al eliminar la entidad: ${error.message}`);
    }
  };
  
  const getEntities = async () => {
    try {
      const entities = await Entity.findAll();
      if (entities.length === 0) {
        throw new Error('No hay entidades en la base de datos');
      }
      return entities;
    } catch (error) {
      throw new Error(`Error al obtener las entidades: ${error.message}`);
    }
  };
  
  module.exports = {
    createEntity,
    deleteEntity,
    getEntities,
  };
  