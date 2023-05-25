"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyStudent_1 = __importDefault(require("../middlewares/verifyStudent"));
const result_1 = __importDefault(require("../controlles/result"));
const verifyLogin_1 = __importDefault(require("../middlewares/verifyLogin"));
const resultRouter = express_1.default.Router();
resultRouter.post('/', verifyLogin_1.default, verifyStudent_1.default, result_1.default.addResult);
resultRouter.get('/', verifyLogin_1.default, verifyStudent_1.default, result_1.default.getResult);
exports.default = resultRouter;
