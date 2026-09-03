"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificacao = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("./database");
const usuario_1 = require("./usuario");
exports.Notificacao = database_1.sequelize.define('Notificacao', {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    titulo: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    mensagem: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    lida: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false }
});
// Relacionamento: 1 Usuário tem muitas Notificações
usuario_1.Usuario.hasMany(exports.Notificacao, { foreignKey: 'usuarioId' });
exports.Notificacao.belongsTo(usuario_1.Usuario, { foreignKey: 'usuarioId' });
exports.Notificacao.sync({ alter: true });
