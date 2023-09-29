const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Token', {

        token: {
            type: DataTypes.STRING,
            allowNull: true,
        },


    }, { timestamps: false, freezeTableName: true })
};
