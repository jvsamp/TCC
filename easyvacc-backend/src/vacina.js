"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vacina = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("./database");
const usuario_1 = require("./usuario");
exports.Vacina = database_1.sequelize.define('Vacina', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dataAplicacao: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: sequelize_1.DataTypes.STRING
    },
    fabricante: {
        type: sequelize_1.DataTypes.STRING
    },
    proximaDose: {
        type: sequelize_1.DataTypes.STRING
    }
});
// Criando o Relacionamento (Chave Estrangeira)
usuario_1.Usuario.hasMany(exports.Vacina, { foreignKey: 'usuarioId' });
exports.Vacina.belongsTo(usuario_1.Usuario, { foreignKey: 'usuarioId' });
