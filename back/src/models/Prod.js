const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Prod', {

        code: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        description: {
            type: DataTypes.TEXT,

        },
        supplie_type: {
            type: DataTypes.ENUM,
            values: ['almacen', 'libreria', 'medico', 'limpieza', 'otros'],
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        quanty: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
            defaultValue: 1
        },
        create_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },

    }, { timestamps: false, freezeTableName: true })
};


