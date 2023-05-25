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
const questionModels_1 = __importDefault(require("../models/questionModels"));
class Question {
    addQuestion(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { body, choice_a, choice_b, choice_c, choice_d, correct_ans, grade, assignment_id } = req.body;
            const question = yield questionModels_1.default.insertMany({ body, choice_a, choice_b, choice_c, choice_d, correct_ans, grade, assignment_id });
            yield assignmentModel_1.default.findByIdAndUpdate(assignment_id, { $push: { questions: [question[0]._id] } });
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    deleteQuestion(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { question_id } = req.body;
            const question = yield questionModels_1.default.findByIdAndDelete(question_id);
            if (!question)
                return next(new ApiError_1.AppError('this question not found', 404));
            return res.json({ message: "success" });
        }))(req, res, next);
    }
}
const question = new Question();
exports.default = question;
