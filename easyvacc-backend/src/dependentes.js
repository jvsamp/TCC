"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dependente = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("./database");
exports.Dependente = database_1.sequelize.define('Dependente', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuarioId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    parentesco: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'dependentes',
    timestamps: false
});
