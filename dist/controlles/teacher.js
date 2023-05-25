"use strict";
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
const ApiError_1 = require("../utils/ApiError");
const teachersModel_1 = __importDefault(require("../models/teachersModel"));
class Teacher {
    addTeacher(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, subject, grade, section } = req.body;
            yield teachersModel_1.default.insertMany({ name, subject, grade, section, image: req.file.filename });
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    updateTeacher(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, subject, grade, section, teacher_id } = req.body;
            const teacher = yield teachersModel_1.default.findByIdAndUpdate(teacher_id, { name, subject, grade, section, image: req.file.filename }, { new: true });
            if (!teacher)
                next(new ApiError_1.AppError('this teacher not found', 404));
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    deleteTeacher(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { teacher_id } = req.body;
            const teacher = yield teachersModel_1.default.findByIdAndDelete(teacher_id, { new: true });
            if (!teacher)
                next(new ApiError_1.AppError('this teacher not found', 404));
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    getTeachers(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const teachers = yield teachersModel_1.default.find();
            if (!teachers.length)
                next(new ApiError_1.AppError('no teachers found', 404));
            return res.json({ message: "success", teachers });
        }))(req, res, next);
    }
}
const teacher = new Teacher();
exports.default = teacher;
