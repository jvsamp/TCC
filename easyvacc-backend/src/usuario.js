"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("./database");
exports.Usuario = database_1.sequelize.define('Usuario', {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    cpf: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    cns: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    telefone: { type: sequelize_1.DataTypes.STRING },
    cidade: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    tipoSanguineo: { type: sequelize_1.DataTypes.STRING },
    dataNascimento: { type: sequelize_1.DataTypes.STRING },
    endereco: { type: sequelize_1.DataTypes.STRING },
    alergias: { type: sequelize_1.DataTypes.STRING },
    contatoEmergNome: { type: sequelize_1.DataTypes.STRING },
    contatoEmergTel: { type: sequelize_1.DataTypes.STRING },
    senha: { type: sequelize_1.DataTypes.STRING, allowNull: false }
});
