"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.on('uncaughtException', (err) => {
    console.log("Erro", err);
});
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const ApiError_1 = require("./utils/ApiError");
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const ApiError_2 = require("./utils/ApiError");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const teachers_routes_1 = __importDefault(require("./routes/teachers.routes"));
const contact_routes_1 = __importDefault(require("./routes/contact.routes"));
const subject_routes_1 = __importDefault(require("./routes/subject.routes"));
const unit_routes_1 = __importDefault(require("./routes/unit.routes"));
const lessons_routes_1 = __importDefault(require("./routes/lessons.routes"));
const assignment_roures_1 = __importDefault(require("./routes/assignment.roures"));
const question_routes_1 = __importDefault(require("./routes/question.routes"));
const result_routes_1 = __importDefault(require("./routes/result.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
(0, config_1.dbConnect)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/user', user_routes_1.default);
app.use('/teacher', teachers_routes_1.default);
app.use('/contact', contact_routes_1.default);
app.use('/subject', subject_routes_1.default);
app.use('/unit', unit_routes_1.default);
app.use('/lesson', lessons_routes_1.default);
app.use('/assignment', assignment_roures_1.default);
app.use('/question', question_routes_1.default);
app.use('/result', result_routes_1.default);
app.use(express_1.default.static('uploads'));
app.use('*', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return next(new ApiError_2.AppError('invalide url' + req.originalUrl, 404));
}));
app.use(ApiError_1.errorHandler);
process.on('unhandledRejection', () => {
    console.log("errrr222");
});
app.listen(process.env.PORT || 3000, () => console.log("server is running"));
