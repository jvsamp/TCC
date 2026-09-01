import { DataTypes } from 'sequelize';
import { sequelize } from './database';
import { Usuario } from './usuario';

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
Usuario.hasMany(Vacina, { foreignKey: 'usuarioId' });
Vacina.belongsTo(Usuario, { foreignKey: 'usuarioId' });

// Sincroniza com o banco e cria a tabela
Vacina.sync({ alter: true });