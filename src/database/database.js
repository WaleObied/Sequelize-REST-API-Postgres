import  Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'blogdb',
    'postgres',
    'B23iWx4w',
    {
    host: 'localhost',
    dialect: 'postgres'
    }
);
