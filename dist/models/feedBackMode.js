"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const buySchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'User'
    },
    bookId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'Book'
    },
    rate: {
        type: Number,
    },
    comment: {
        type: String
    }
});
const feedbackModel = mongoose_1.default.model('Feedback', buySchema);
exports.default = feedbackModel;
