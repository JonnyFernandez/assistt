const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('User2', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        usercode: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        cuit: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        address: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        }


    }, { timestamps: false, freezeTableName: true })
};

