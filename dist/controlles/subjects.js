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
const subjectsModel_1 = __importDefault(require("../models/subjectsModel"));
class Subject {
    addSubject(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, teacherName, grade, section } = req.body;
            yield subjectsModel_1.default.insertMany({ name, teacherName, image: req.file.filename, grade, section });
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    updateSubject(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, grade, section, teacherName, subject_id } = req.body;
            const subject = yield subjectsModel_1.default.findByIdAndUpdate(subject_id, { name, grade, section, teacherName, image: req.file.filename }, { new: true });
            if (!subject)
                return next(new ApiError_1.AppError('this subject not found', 404));
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    deleteSubject(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { subject_id } = req.body;
            const subject = yield subjectsModel_1.default.findByIdAndDelete(subject_id, { new: true });
            if (!subject)
                return next(new ApiError_1.AppError('this subject not found', 404));
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    getSubject(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const subjects = yield subjectsModel_1.default.find({ grade: req === null || req === void 0 ? void 0 : req.user_grade, section: req === null || req === void 0 ? void 0 : req.user_section });
            if (!subjects.length)
                return next(new ApiError_1.AppError('no subject found', 404));
            return res.json({ message: "success", subjects });
        }))(req, res, next);
    }
}
const subject = new Subject();
exports.default = subject;
