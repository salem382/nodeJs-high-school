"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const question_1 = __importDefault(require("../controlles/question"));
const verifyAdmin_1 = require("../middlewares/verifyAdmin");
const verifyLogin_1 = __importDefault(require("../middlewares/verifyLogin"));
const questionRouter = express_1.default.Router();
questionRouter.post('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, question_1.default.addQuestion);
questionRouter.delete('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, question_1.default.deleteQuestion);
exports.default = questionRouter;
