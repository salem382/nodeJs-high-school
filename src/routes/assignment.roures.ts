import  express  from "express";
import assignment from "../controlles/assignment";
import { verifyAdmin } from "../middlewares/verifyAdmin";
import verifyLogin from "../middlewares/verifyLogin";
import verifyStudent from "../middlewares/verifyStudent";


const AsignmentRouter = express.Router();

AsignmentRouter.post('/',verifyLogin, verifyAdmin,assignment.addAssignment);
AsignmentRouter.delete('/',verifyLogin, verifyAdmin,assignment.deleteAssignment);
AsignmentRouter.get('/:id',verifyLogin, verifyStudent,assignment.getAssignment);



export default AsignmentRouter;