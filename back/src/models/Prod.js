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
           
        },
        description:{
            type: DataTypes.TEXT,
            
            
        },
         active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        create_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
        
    }, { timestamps: false, freezeTableName: true })
};
      

