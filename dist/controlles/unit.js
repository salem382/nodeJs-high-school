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
const unitsModel_1 = __importDefault(require("../models/unitsModel"));
class Unit {
    addUnit(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, subject_id } = req.body;
            yield unitsModel_1.default.insertMany({ name, subject_id });
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    updateUnit(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, subject_id, unit_id } = req.body;
            const teacher = yield unitsModel_1.default.findByIdAndUpdate(unit_id, { name, subject_id }, { new: true });
            if (!teacher)
                return next(new ApiError_1.AppError('this unit not found', 404));
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    deleteUnit(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { unit_id } = req.body;
            const teacher = yield unitsModel_1.default.findByIdAndDelete(unit_id, { new: true });
            if (!teacher)
                return next(new ApiError_1.AppError('this unit not found', 404));
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    getunits(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const units = yield unitsModel_1.default.find({ subject_id: id });
            if (!units.length)
                return next(new ApiError_1.AppError('no units found', 404));
            return res.json({ message: "success", units });
        }))(req, res, next);
    }
}
const unit = new Unit();
exports.default = unit;
