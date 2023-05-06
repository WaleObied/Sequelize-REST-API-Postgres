import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import { Post } from './post.js';

export const Autor = sequelize.define('autor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.BLOB
    }
}, {
    timestamps: true
});

Autor.hasMany(Post, {
    foreingKey: 'autorId',
    sourceKey: 'id'
});

Post.belongsTo(Autor, {
    foreingKey: 'autorId',
    targetId: 'id'
});