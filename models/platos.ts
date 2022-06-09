import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Plato = db.define('platos', {
    nombre: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.NUMBER
    },
    tipo: {
        type: DataTypes.NUMBER
    },
    ingredientes: {
        type: DataTypes.NUMBER
    },
}, 
{
    timestamps: false
});


export default Plato;