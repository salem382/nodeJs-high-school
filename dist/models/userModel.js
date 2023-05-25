"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
var roleStatus;
(function (roleStatus) {
    roleStatus["student"] = "student";
    roleStatus["admin"] = "admin";
})(roleStatus || (roleStatus = {}));
var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
})(Gender || (Gender = {}));
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
const userSchema = new mongoose_1.default.Schema({
    name: { type: String, minlength: [3, "error in name length"], maxlength: [25, "error in name length"] },
    email: { type: String, minlength: 3, maxlength: 30, },
    password: { type: String, minlength: [1, 'error in length'], maxlength: [200, 'error in length'], },
    age: { type: Number, minlength: 10, maxlength: 50 },
    gender: { type: String, enum: Object.values(Gender), default: Gender.male },
    role: { type: String, enum: Object.values(roleStatus), default: roleStatus.student },
    phone: { type: Number },
    state: { type: String },
    city: { type: String },
    parent_email: { type: String },
    parent_phone: { type: Number },
    grade: { type: String, enum: Object.values(Grade), default: Grade.first },
    section: { type: String, enum: Object.values(Section), default: Section.sciences },
    image: { type: String },
    isLogin: {
        type: Boolean,
        default: false
    }
});
const UserModel = mongoose_1.default.model('User', userSchema);
exports.default = UserModel;
