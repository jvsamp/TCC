import { DataTypes } from 'sequelize';
import { sequelize } from './database';

export const Posto = sequelize.define('Posto', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  endereco: { type: DataTypes.STRING, allowNull: false },
  horarioFuncionamento: { type: DataTypes.STRING },
  aberto: { type: DataTypes.BOOLEAN, defaultValue: true }
});

Posto.sync({ alter: true });