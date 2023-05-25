"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_1 = __importDefault(require("../controlles/contact"));
const verifyAdmin_1 = require("../middlewares/verifyAdmin");
const verifyLogin_1 = __importDefault(require("../middlewares/verifyLogin"));
const contactRouter = express_1.default.Router();
contactRouter.post('/', contact_1.default.addmessage);
contactRouter.get('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, contact_1.default.getMessages);
exports.default = contactRouter;
