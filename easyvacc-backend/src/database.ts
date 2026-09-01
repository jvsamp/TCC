import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const requiredEnv = [
  'DB_HOST',
  'DB_USER',
  'DB_NAME',
];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    console.warn(`⚠️ Variável ${key} não configurada.`);
  }
}

const isRemoteHost = Boolean(process.env.DB_HOST && process.env.DB_HOST !== 'localhost');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'easyvacc',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: Number(process.env.DB_PORT || 3306),
    logging: false,
    dialectOptions: isRemoteHost
      ? {
          ssl: {
            rejectUnauthorized: false,
          },
        }
      : {},
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;
export { sequelize };
