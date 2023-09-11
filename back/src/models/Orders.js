const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Orders', {

        order_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        codeOrder: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        stimate_date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        pay: {
            type: DataTypes.ENUM,
            values: ['efectivo', 'tarjeta', 'cheque'],
            allowNull: false
        },
        // monto: {
        //     type: DataTypes.DECIMAL(10, 2),
        //     allowNull: true
        // },
        // revisor1: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: true
        // },
        // revisor2: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: true
        // },
        // apobado: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: true
        // },
        // providerCode: {
        //     type: DataTypes.STRING,
        //     allowNull: true
        // }




    }, { timestamps: false, freezeTableName: true })
};
