import { Sequelize } from 'sequelize';

export const db = new Sequelize(
  process.env.ROMBIAN_DB_NAME,
  process.env.ROMBIAN_DB_USER,
  process.env.ROMBIAN_DB_PASSWORD,
  {
    host: process.env.ROMBIAN_DB_HOST,
    dialect: 'postgres',
    logging: false,
  },
);
