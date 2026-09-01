import { DataTypes } from 'sequelize';
import sequelize from './database';

export const Campanha = sequelize.define('Campanha', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  titulo: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT, allowNull: false },
  dataInicio: { type: DataTypes.STRING },
  dataFim: { type: DataTypes.STRING }
});

Campanha.sync({ alter: true });