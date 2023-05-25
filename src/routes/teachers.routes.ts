import  express  from "express";
import verifyStudent from "../middlewares/verifyStudent";
import { fileUpload, validation_object } from "../middlewares/fileUploads";
import teacher from "../controlles/teacher";
import { verifyAdmin } from "../middlewares/verifyAdmin";
import verifyLogin from "../middlewares/verifyLogin";


const teacherRouter = express.Router();

teacherRouter.post('/',verifyLogin,verifyAdmin,fileUpload(validation_object.image).single('image'),teacher.addTeacher);
teacherRouter.put('/',verifyLogin,verifyAdmin,fileUpload(validation_object.image).single('image'),teacher.updateTeacher);
teacherRouter.delete('/',verifyLogin,verifyAdmin,teacher.deleteTeacher);
teacherRouter.get('/',teacher.getTeachers);


export default teacherRouter;