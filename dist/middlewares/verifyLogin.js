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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../models/userModel"));
const ApiError_1 = require("../utils/ApiError");
const verifyLogin = (req, res, next) => {
    const token = req.header('token');
    jsonwebtoken_1.default.verify(token, 'myNameIsUser', (err, decode) => __awaiter(void 0, void 0, void 0, function* () {
        if (err)
            return next(new ApiError_1.AppError(err.message, 401));
        const user = yield userModel_1.default.findById(decode.id);
        if (!(user === null || user === void 0 ? void 0 : user.isLogin))
            return next(new ApiError_1.AppError('please login first', 401));
        next();
    }));
};
exports.default = verifyLogin;
