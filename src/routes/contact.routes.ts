import  express  from "express";
import contact from "../controlles/contact";
import { verifyAdmin } from "../middlewares/verifyAdmin";
import verifyLogin from "../middlewares/verifyLogin";


const contactRouter = express.Router();

contactRouter.post('/',contact.addmessage);
contactRouter.get('/',verifyLogin,verifyAdmin,contact.getMessages);

export default contactRouter;