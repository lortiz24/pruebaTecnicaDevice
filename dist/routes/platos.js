"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const platos_1 = require("../controllers/platos");
const router = (0, express_1.Router)();
router.get('/', platos_1.getPlatos);
router.get('/:id', platos_1.getPlato);
router.post('/', platos_1.createPlato);
router.put('/:id', platos_1.updatePlato);
router.delete('/:id', platos_1.deletePlato);
exports.default = router;
//# sourceMappingURL=platos.js.map