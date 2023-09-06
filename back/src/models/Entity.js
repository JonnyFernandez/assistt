const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Entity', {
      
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
      

    }, { freezeTableName: true })
};

