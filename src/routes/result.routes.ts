import  express  from "express";
import verifyStudent from "../middlewares/verifyStudent";
import result from "../controlles/result";
import verifyLogin from "../middlewares/verifyLogin";


const resultRouter = express.Router();

resultRouter.post('/',verifyLogin, verifyStudent,result.addResult);
resultRouter.get('/',verifyLogin, verifyStudent,result.getResult);


export default resultRouter;