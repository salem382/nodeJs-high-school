"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
var Section;
(function (Section) {
    Section["sciences"] = "sciences";
    Section["humanities"] = "humanities";
})(Section || (Section = {}));
var Grade;
(function (Grade) {
    Grade["first"] = "first";
    Grade["second"] = "second";
    Grade["third"] = "third";
})(Grade || (Grade = {}));
const subjectSchema = new mongoose_1.default.Schema({
    name: {
        type: String
    },
    teacherName: {
        type: String
    },
    grade: {
        type: String, enum: Object.values(Grade), default: Grade.first
    },
    section: {
        type: String, enum: Object.values(Section), default: Section.sciences
    },
    image: {
        type: String
    }
});
const subjectModel = mongoose_1.default.model('Subject', subjectSchema);
exports.default = subjectModel;
