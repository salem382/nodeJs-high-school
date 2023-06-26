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
class Assignment {
    addAssignment(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { test_name, lesson_id, total_grade } = req.body;
            yield assignmentModel_1.default.insertMany({ test_name, lesson_id, total_grade });
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    deleteAssignment(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { Assignment_id } = req.body;
            const quiz = yield assignmentModel_1.default.findByIdAndDelete(Assignment_id);
            if (!quiz)
                return next(new ApiError_1.AppError('this assignment is not found', 404));
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    getAssignment(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const quizes = yield assignmentModel_1.default.find({ lesson_id: id });
            if (!quizes.length)
                return next(new ApiError_1.AppError('no quizes for this lessons', 404));
            return res.json({ message: "success", quizes });
        }))(req, res, next);
    }
}
const assignment = new Assignment();
exports.default = assignment;
