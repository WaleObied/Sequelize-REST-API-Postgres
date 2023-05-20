import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Post = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    categoria: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});