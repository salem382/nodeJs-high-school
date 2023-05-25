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
const lessonsModel_1 = __importDefault(require("../models/lessonsModel"));
class Lessons {
    addLesson(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, unit_id } = req.body;
            const lesson = yield lessonsModel_1.default.insertMany({ name, unit_id, pdf: req.files.pdf[0].filename, video: req.files.video[0].filename });
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    updateLesson(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, unit_id, lesson_id } = req.body;
            const lesson = yield lessonsModel_1.default.findByIdAndUpdate(lesson_id, { name, unit_id, pdf: req.files.pdf[0].filename, video: req.files.video[0].filename }, { new: true });
            if (!lesson)
                next(new ApiError_1.AppError('this lesson not found', 404));
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    deleteLesson(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { lesson_id } = req.body;
            const lesson = yield lessonsModel_1.default.findByIdAndDelete(lesson_id, { new: true });
            if (!lesson)
                next(new ApiError_1.AppError('this lesson not found', 404));
            return res.json({ message: "success" });
        }))(req, res, next);
    }
}
const lessons = new Lessons();
exports.default = lessons;
