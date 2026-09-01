import { DataTypes } from 'sequelize';
import { sequelize } from './database';

export const Dependente = sequelize.define('Dependente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parentesco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dataNascimento: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'dependentes',
  timestamps: false
});