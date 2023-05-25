"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fileUploads_1 = require("../middlewares/fileUploads");
const teacher_1 = __importDefault(require("../controlles/teacher"));
const verifyAdmin_1 = require("../middlewares/verifyAdmin");
const verifyLogin_1 = __importDefault(require("../middlewares/verifyLogin"));
const teacherRouter = express_1.default.Router();
teacherRouter.post('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, (0, fileUploads_1.fileUpload)(fileUploads_1.validation_object.image).single('image'), teacher_1.default.addTeacher);
teacherRouter.put('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, (0, fileUploads_1.fileUpload)(fileUploads_1.validation_object.image).single('image'), teacher_1.default.updateTeacher);
teacherRouter.delete('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, teacher_1.default.deleteTeacher);
teacherRouter.get('/', teacher_1.default.getTeachers);
exports.default = teacherRouter;
