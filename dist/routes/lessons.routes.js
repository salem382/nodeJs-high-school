"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lesson_1 = __importDefault(require("../controlles/lesson"));
const fileUploads_1 = require("../middlewares/fileUploads");
const verifyAdmin_1 = require("../middlewares/verifyAdmin");
const verifyLogin_1 = __importDefault(require("../middlewares/verifyLogin"));
const multerFields = ['pdf', 'video'].map((field) => ({ name: field, maxCount: 1 }));
const lessonRouter = express_1.default.Router();
lessonRouter.post('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, (0, fileUploads_1.fileUpload)(fileUploads_1.validation_object.image).fields(multerFields), lesson_1.default.addLesson);
lessonRouter.put('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, lesson_1.default.updateLesson);
lessonRouter.delete('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, lesson_1.default.deleteLesson);
exports.default = lessonRouter;
