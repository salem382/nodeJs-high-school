import  express  from "express";
import verifyStudent from "../middlewares/verifyStudent";
import { fileUpload, validation_object } from "../middlewares/fileUploads";
import { verifyAdmin } from "../middlewares/verifyAdmin";
import subject from "../controlles/subjects";
import verifyLogin from "../middlewares/verifyLogin";

const subjectRouter = express.Router();

subjectRouter.post('/',verifyLogin, verifyAdmin,fileUpload(validation_object.image).single('image'),subject.addSubject);
subjectRouter.put('/',verifyLogin,verifyAdmin,fileUpload(validation_object.image).single('image'),subject.updateSubject);
subjectRouter.delete('/',verifyLogin,verifyAdmin,subject.deleteSubject);
subjectRouter.get('/',verifyLogin,verifyStudent,subject.getSubject);


export default subjectRouter;