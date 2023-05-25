import  express  from "express";
import lessons from "../controlles/lesson";
import { fileUpload, validation_object } from "../middlewares/fileUploads";
import { verifyAdmin } from "../middlewares/verifyAdmin";
import verifyLogin from "../middlewares/verifyLogin";

const multerFields = ['pdf', 'video'].map((field) => ({ name: field, maxCount: 1 }));
const lessonRouter = express.Router();

lessonRouter.post('/',verifyLogin, verifyAdmin,fileUpload(validation_object.image).fields(multerFields),lessons.addLesson);
lessonRouter.put ('/',verifyLogin, verifyAdmin, lessons.updateLesson);
lessonRouter.delete ('/',verifyLogin, verifyAdmin, lessons.deleteLesson);

export default lessonRouter;