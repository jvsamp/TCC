import { DataTypes } from 'sequelize';
import sequelize from './database';

export const Usuario = sequelize.define('Usuario', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  cpf: { type: DataTypes.STRING, unique: true, allowNull: false },
  cns: { type: DataTypes.STRING, unique: true, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  telefone: { type: DataTypes.STRING },
  cidade: { type: DataTypes.STRING, allowNull: false },
  tipoSanguineo: { type: DataTypes.STRING },
  dataNascimento: { type: DataTypes.STRING },
  endereco: { type: DataTypes.STRING },
  alergias: { type: DataTypes.STRING },
  contatoEmergNome: { type: DataTypes.STRING },
  contatoEmergTel: { type: DataTypes.STRING },
  senha: { type: DataTypes.STRING, allowNull: false }
});

// Sincroniza com o banco e cria as colunas automaticamente
Usuario.sync({ alter: true });