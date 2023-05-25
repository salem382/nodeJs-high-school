import  express  from "express";
import verifyStudent from "../middlewares/verifyStudent";
import unit from "../controlles/unit";
import { verifyAdmin } from "../middlewares/verifyAdmin";
import verifyLogin from "../middlewares/verifyLogin";


const unitRouter = express.Router();

unitRouter.post('/',verifyLogin,verifyAdmin,unit.addUnit);
unitRouter.put('/',verifyLogin,verifyAdmin,unit.updateUnit);
unitRouter.delete('/',verifyLogin,verifyAdmin,unit.deleteUnit);
unitRouter.get('/:id',verifyLogin,verifyStudent,unit.getunits);


export default unitRouter;