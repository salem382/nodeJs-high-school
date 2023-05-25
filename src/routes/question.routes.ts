import  express  from "express";
import question from "../controlles/question";
import { verifyAdmin } from "../middlewares/verifyAdmin";
import verifyLogin from "../middlewares/verifyLogin";


const questionRouter = express.Router();

questionRouter.post('/', verifyLogin, verifyAdmin,question.addQuestion);
questionRouter.delete('/',verifyLogin,verifyAdmin,question.deleteQuestion);


export default questionRouter;