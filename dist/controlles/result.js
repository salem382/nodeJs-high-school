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
const resultModels_1 = __importDefault(require("../models/resultModels"));
class Result {
    addResult(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { assignment_id, answers } = req.body;
            const assignment = yield assignmentModel_1.default.findById(assignment_id).populate('questions');
            if (!assignment)
                return next(new ApiError_1.AppError('this assignment id not found', 404));
            const questions = yield questionModels_1.default.find({ assignment_id }).populate('assignment_id');
            if (!questions.length)
                return next(new ApiError_1.AppError('no questions for this assignment', 404));
            let student_grade = 0;
            questions.forEach((question, _) => {
                for (let i = 0; i < answers.length; i++) {
                    if (question._id == answers[i]._id) {
                        if (question.correct_ans == answers[i].answer) {
                            student_grade += question.grade;
                        }
                    }
                }
            });
            const assignment_ = yield assignmentModel_1.default.findById(assignment_id);
            yield resultModels_1.default.insertMany({ assignment_name: assignment_ === null || assignment_ === void 0 ? void 0 : assignment_.test_name, student_grade, student_id: req.user_id, total_grade: assignment === null || assignment === void 0 ? void 0 : assignment.total_grade });
            return res.json({ message: "success", student_grade, total_grade: assignment === null || assignment === void 0 ? void 0 : assignment.total_grade });
        }))(req, res, next);
    }
    getResult(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const results = yield resultModels_1.default.find({ student_id: req === null || req === void 0 ? void 0 : req.user_id });
            return res.json({ message: "success", results });
        }))(req, res, next);
    }
}
const result = new Result();
exports.default = result;
