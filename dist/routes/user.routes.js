"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyStudent_1 = __importDefault(require("../middlewares/verifyStudent"));
const student_1 = __importDefault(require("../controlles/student"));
const fileUploads_1 = require("../middlewares/fileUploads");
const verifyLogin_1 = __importDefault(require("../middlewares/verifyLogin"));
const userRouter = express_1.default.Router();
userRouter.post('/signup', student_1.default.signUp);
userRouter.post('/login', student_1.default.login);
userRouter.put('/', verifyLogin_1.default, verifyStudent_1.default, (0, fileUploads_1.fileUpload)(fileUploads_1.validation_object.image).single('image'), student_1.default.upfateProfile);
userRouter.post('/logout', verifyLogin_1.default, student_1.default.logOut);
userRouter.get('/', verifyLogin_1.default, verifyStudent_1.default, student_1.default.getUSerData);
exports.default = userRouter;
