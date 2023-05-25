"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyStudent_1 = __importDefault(require("../middlewares/verifyStudent"));
const fileUploads_1 = require("../middlewares/fileUploads");
const verifyAdmin_1 = require("../middlewares/verifyAdmin");
const subjects_1 = __importDefault(require("../controlles/subjects"));
const verifyLogin_1 = __importDefault(require("../middlewares/verifyLogin"));
const subjectRouter = express_1.default.Router();
subjectRouter.post('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, (0, fileUploads_1.fileUpload)(fileUploads_1.validation_object.image).single('image'), subjects_1.default.addSubject);
subjectRouter.put('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, (0, fileUploads_1.fileUpload)(fileUploads_1.validation_object.image).single('image'), subjects_1.default.updateSubject);
subjectRouter.delete('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, subjects_1.default.deleteSubject);
subjectRouter.get('/', verifyLogin_1.default, verifyStudent_1.default, subjects_1.default.getSubject);
exports.default = subjectRouter;
