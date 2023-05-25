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
const contactModels_1 = __importDefault(require("../models/contactModels"));
class Contact {
    addmessage(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, phone, email, message } = req.body;
            yield contactModels_1.default.insertMany({ name, phone, email, message });
            return res.json({ message: "success" });
        }))(req, res, next);
    }
    getMessages(req, res, next) {
        (0, ApiError_1.catchError)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const messages = yield contactModels_1.default.find();
            if (!messages.length)
                return next(new ApiError_1.AppError('no messages to show', 404));
            return res.json({ message: "success", messages });
        }))(req, res, next);
    }
}
const contact = new Contact();
exports.default = contact;
