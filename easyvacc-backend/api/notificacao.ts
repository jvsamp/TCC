import { DataTypes } from 'sequelize';
import { sequelize } from './database';
import { Usuario } from './usuario';

export const Notificacao = sequelize.define('Notificacao', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  titulo: { type: DataTypes.STRING, allowNull: false },
  mensagem: { type: DataTypes.STRING, allowNull: false },
  lida: { type: DataTypes.BOOLEAN, defaultValue: false }
});

// Relacionamento: 1 Usuário tem muitas Notificações
Usuario.hasMany(Notificacao, { foreignKey: 'usuarioId' });
Notificacao.belongsTo(Usuario, { foreignKey: 'usuarioId' });

Notificacao.sync({ alter: true });