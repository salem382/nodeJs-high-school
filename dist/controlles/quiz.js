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
const assignmentModel_1 = __importDefault(require("../models/assignmentModel"));
class Quiz {
    addQuiz(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, question, choice_a, choice_b, choice_c, choice_d, correct_ans, lesson_id } = req.body;
            yield assignmentModel_1.default.insertMany({ name, correct_ans, question, choice_a, choice_b, choice_c, choice_d, lesson_id });
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    deleteQuiz(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { quiz_id } = req.body;
            const quiz = yield assignmentModel_1.default.findByIdAndDelete(quiz_id);
            if (!quiz)
                return next(new ApiError_1.AppError('this quiz is not found', 404));
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    getQuiz(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { lesson_id } = req.body;
            const quizes = yield assignmentModel_1.default.find({ lesson_id });
            if (!quizes.length)
                return next(new ApiError_1.AppError('no quizes for this lessons', 404));
            return res.json({ message: "success", quizes });
        }))(req, res, next);
    }
    quizAnswer(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { quiz_id, answers } = req.body;
        }))(req, res, next);
    }
}
const quiz = new Quiz();
exports.default = quiz;
