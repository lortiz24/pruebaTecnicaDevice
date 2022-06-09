"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePlato = exports.updatePlato = exports.createPlato = exports.getPlato = exports.getPlatos = void 0;
const platos_1 = __importDefault(require("../models/platos"));
const getPlatos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const platos = yield platos_1.default.findAll();
    res.json({ platos });
});
exports.getPlatos = getPlatos;
const getPlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const plato = yield platos_1.default.findByPk(id);
    if (plato) {
        res.json(plato);
    }
    else {
        res.status(404).json({
            msg: `No existe un plato con el id ${id}`
        });
    }
});
exports.getPlato = getPlato;
const createPlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("==================================================================");
    const { body } = req;
    console.log(body);
    try {
        const existePlato = yield platos_1.default.findOne({
            where: {
                nombre: body.nombre
            }
        });
        if (existePlato) {
            return res.status(400).json({
                msg: 'Ya existe un plato con el nombre: ' + body.nombre
            });
        }
        const plato = platos_1.default.build(body);
        yield plato.save();
        res.json(plato);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.createPlato = createPlato;
const updatePlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const plato = yield platos_1.default.findByPk(id);
        if (!plato) {
            return res.status(404).json({
                msg: 'No existe un plato con el id ' + id
            });
        }
        yield plato.update(body);
        res.json(plato);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.updatePlato = updatePlato;
const deletePlato = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const plato = yield platos_1.default.findByPk(id);
    if (!plato) {
        return res.status(404).json({
            msg: 'No existe un plato con el id ' + id
        });
    }
    //await plato.update({ estado: false });
    yield plato.destroy();
    res.json(plato);
});
exports.deletePlato = deletePlato;
//# sourceMappingURL=platos.js.map