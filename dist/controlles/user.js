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
const userModel_1 = __importDefault(require("../models/userModel"));
const ApiError_1 = require("../utils/ApiError");
const baseFunction_1 = require("../utils/baseFunction");
class User {
    signUp(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log("doneeeeeee");
            const { name, email, password, age, gender, phone, state, city, parent_email, parent_phone, grade, section } = req.body;
            const user = yield userModel_1.default.findOne({ email });
            if (user)
                return next(new ApiError_1.AppError('user already exist use another email', 409));
            yield userModel_1.default.insertMany({ name, email, password: (0, baseFunction_1.hashPassword)(password), age, gender, phone, state, city, parent_email, parent_phone, grade, section });
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    login(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = yield userModel_1.default.findOne({ email });
            if (!user || !(yield (0, baseFunction_1.verifyPassword)(password, user === null || user === void 0 ? void 0 : user.password)))
                return next(new ApiError_1.AppError('incorect email or password', 401));
            user.isLogin = true;
            user.save();
            const token = (0, baseFunction_1.generateToken)({ id: user._id, image: user.image, email: user.email, name: user.name, role: user.role, age: user.age, gender: user.gender, phone: user.phone, state: user.state, city: user.city, parent_email: user.parent_email, parent_phone: user.parent_phone, grade: user.grade, section: user.section });
            return res.json({ message: "success", token });
        }))(req, res, next);
    }
    getUSerData(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const user = yield userModel_1.default.findById(req === null || req === void 0 ? void 0 : req.user_id);
            return res.json({ message: "success", user: { id: user === null || user === void 0 ? void 0 : user._id, image: user === null || user === void 0 ? void 0 : user.image, email: user === null || user === void 0 ? void 0 : user.email, name: user === null || user === void 0 ? void 0 : user.name, role: user === null || user === void 0 ? void 0 : user.role, age: user === null || user === void 0 ? void 0 : user.age, gender: user === null || user === void 0 ? void 0 : user.gender, phone: user === null || user === void 0 ? void 0 : user.phone, state: user === null || user === void 0 ? void 0 : user.state, city: user === null || user === void 0 ? void 0 : user.city, parent_email: user === null || user === void 0 ? void 0 : user.parent_email, parent_phone: user === null || user === void 0 ? void 0 : user.parent_phone, grade: user === null || user === void 0 ? void 0 : user.grade, section: user === null || user === void 0 ? void 0 : user.section } });
        }))(req, res, next);
    }
    logOut(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield userModel_1.default.findByIdAndUpdate(req === null || req === void 0 ? void 0 : req.user_id, { isLogin: false });
            return res.json({ message: "success" });
        }))(req, res, next);
    }
}
exports.default = User;
