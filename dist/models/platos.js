"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Plato = connection_1.default.define('platos', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.NUMBER
    },
    tipo: {
        type: sequelize_1.DataTypes.NUMBER
    },
    ingredientes: {
        type: sequelize_1.DataTypes.NUMBER
    },
}, {
    timestamps: false
});
exports.default = Plato;
//# sourceMappingURL=platos.js.map