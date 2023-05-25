"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyStudent_1 = __importDefault(require("../middlewares/verifyStudent"));
const unit_1 = __importDefault(require("../controlles/unit"));
const verifyAdmin_1 = require("../middlewares/verifyAdmin");
const verifyLogin_1 = __importDefault(require("../middlewares/verifyLogin"));
const unitRouter = express_1.default.Router();
unitRouter.post('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, unit_1.default.addUnit);
unitRouter.put('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, unit_1.default.updateUnit);
unitRouter.delete('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, unit_1.default.deleteUnit);
unitRouter.get('/:id', verifyLogin_1.default, verifyStudent_1.default, unit_1.default.getunits);
exports.default = unitRouter;
