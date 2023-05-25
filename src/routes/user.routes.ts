import  express  from "express";
import validation from "../middlewares/validation";
import { signUpValidation } from "../validations/signup.validation";
import { logInValidation } from "../validations/signin.validation";
import verifyStudent from "../middlewares/verifyStudent";
import student from "../controlles/student";
import { fileUpload, validation_object } from "../middlewares/fileUploads";
import verifyLogin from "../middlewares/verifyLogin";

const userRouter = express.Router();

userRouter.post('/signup',student.signUp);
userRouter.post('/login',student.login);
userRouter.put('/',verifyLogin,verifyStudent,fileUpload(validation_object.image).single('image'),student.upfateProfile);
userRouter.post('/logout',verifyLogin,student.logOut);
userRouter.get('/',verifyLogin,verifyStudent,student.getUSerData);


export default userRouter;