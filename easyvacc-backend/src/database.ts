import { Sequelize } from 'sequelize';

// Conexão direta com o XAMPP (banco, usuário, senha)
const sequelize = new Sequelize('easyvacc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Desliga os logs excessivos no terminal
});

export default sequelize;