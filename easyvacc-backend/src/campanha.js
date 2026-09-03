"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campanha = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("./database"));
exports.Campanha = database_1.default.define('Campanha', {
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    titulo: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    descricao: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    dataInicio: { type: sequelize_1.DataTypes.STRING },
    dataFim: { type: sequelize_1.DataTypes.STRING }
});
