import { DataTypes } from 'sequelize';
import sequelize from './database';
import { Usuario } from './usuario'; // Importamos o usuário para criar a relação

export const Vacina = sequelize.define('Vacina', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  nome: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  dataAplicacao: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  lote: { 
    type: DataTypes.STRING 
  },
  fabricante: { 
    type: DataTypes.STRING 
  },
  proximaDose: { 
    type: DataTypes.STRING 
  }
});

// Criando o Relacionamento (Chave Estrangeira)
// 1 Usuário tem muitas Vacinas
Usuario.hasMany(Vacina, { foreignKey: 'usuarioId' });
// 1 Vacina pertence a 1 Usuário
Vacina.belongsTo(Usuario, { foreignKey: 'usuarioId' });

// Sincroniza com o banco e cria a tabela
Vacina.sync({ alter: true });