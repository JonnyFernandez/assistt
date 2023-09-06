const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Prod', {
      
        code:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        description:{
            type: DataTypes.TEXT,
            unique: true,
            allowNull: false
        }
        
    }, { freezeTableName: true })
};
      

