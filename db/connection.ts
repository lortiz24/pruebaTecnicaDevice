import { Sequelize } from 'sequelize';


const db = new Sequelize('restaurante', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    // logging: false,
});

export default db;
