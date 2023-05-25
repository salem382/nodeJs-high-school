"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const assignment_1 = __importDefault(require("../controlles/assignment"));
const verifyAdmin_1 = require("../middlewares/verifyAdmin");
const verifyLogin_1 = __importDefault(require("../middlewares/verifyLogin"));
const verifyStudent_1 = __importDefault(require("../middlewares/verifyStudent"));
const AsignmentRouter = express_1.default.Router();
AsignmentRouter.post('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, assignment_1.default.addAssignment);
AsignmentRouter.delete('/', verifyLogin_1.default, verifyAdmin_1.verifyAdmin, assignment_1.default.deleteAssignment);
AsignmentRouter.get('/:id', verifyLogin_1.default, verifyStudent_1.default, assignment_1.default.getAssignment);
exports.default = AsignmentRouter;
