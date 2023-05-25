"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
var Grade;
(function (Grade) {
    Grade["first"] = "first";
    Grade["second"] = "second";
    Grade["third"] = "third";
})(Grade || (Grade = {}));
var Section;
(function (Section) {
    Section["public"] = "public";
    Section["language"] = "language";
})(Section || (Section = {}));
const teacherSchema = new mongoose_1.default.Schema({
    name: {
        type: String
    },
    subject: {
        type: String
    },
    image: {
        type: String
    },
    grade: {
        type: String,
        enum: Object.values(Grade),
        default: Grade.first
    },
    section: {
        type: String,
        enum: Object.values(Section),
        default: Section.public
    }
});
const teacherModel = mongoose_1.default.model('Teacher', teacherSchema);
exports.default = teacherModel;
