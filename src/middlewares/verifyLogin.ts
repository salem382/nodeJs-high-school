import  jwt from "jsonwebtoken";
import UserModel from "../models/userModel";
import { AppError } from "../utils/ApiError";


const verifyLogin = (req:any, res:any, next:any):void => {

    const token = req.header('token');

    jwt.verify(token!, 'myNameIsUser', async (err:any, decode:any) => {
        
        if (err) return next(new AppError(err.message, 401));
        const user = await UserModel.findById(decode.id);
        if (!user?.isLogin) return next(new AppError('please login first',401))
        next();
    });
}

export default verifyLogin;