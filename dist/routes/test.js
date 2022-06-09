"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    console.log("entro");
    res.json({ mes: "Hola mundo" });
});
exports.default = router;
//# sourceMappingURL=test.js.map