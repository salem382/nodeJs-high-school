import UserModel from "../models/userModel";
import  {AppError, catchError} from '../utils/ApiError';
import {generateToken, hashPassword, verifyPassword} from '../utils/baseFunction';
import {Request, Response, NextFunction} from 'express'


abstract class User {

    signUp(req:Request, res:Response, next:NextFunction):void{
        catchError(async (req:Request, res:Response, next:NextFunction) => {

            console.log ("doneeeeeee");
            const {name, email, password, age, gender,phone, state, city, parent_email, parent_phone, grade, section} = req.body;
            const user = await UserModel.findOne({email});
            if (user) return next(new AppError('user already exist use another email',409));
            await UserModel.insertMany({name, email, password:hashPassword(password) ,age, gender,phone, state, city, parent_email, parent_phone, grade, section});
            return res.json({message:"success"});
        })(req, res, next);
    }

    login(req:Request, res:Response, next:NextFunction):void {
        catchError(async (req:Request, res:Response, next:NextFunction) => {

            const {email, password} = req.body;
            const user = await UserModel.findOne({email});
            if (!user || !(await verifyPassword(password, user?.password)))
                return next(new AppError('incorect email or password',401));
            user.isLogin = true;
            user.save();   
            const token = generateToken({id:user._id,image:user.image,email:user.email ,name:user.name, role:user.role,age:user.age, gender:user.gender,phone:user.phone, state:user.state, city:user.city, parent_email:user.parent_email, parent_phone:user.parent_phone, grade:user.grade, section:user.section}); 
            return res.json({message:"success", token});

        })(req, res, next);
    }
    getUSerData(req:any, res:Response, next:NextFunction):void {
        catchError(async (req:any, res:Response, next:NextFunction) => {

           const user = await UserModel.findById(req?.user_id);
    
           return res.json({message:"success", user : {id:user?._id,image:user?.image,email:user?.email ,name:user?.name, role:user?.role,age:user?.age, gender:user?.gender,phone:user?.phone, state:user?.state, city:user?.city, parent_email:user?.parent_email, parent_phone:user?.parent_phone, grade:user?.grade, section:user?.section}})
        })(req, res, next);
    }
    logOut(req:any, res:Response, next:NextFunction):void {
        catchError(async (req:any, res:Response, next:NextFunction) => {

           await UserModel.findByIdAndUpdate(req?.user_id, {isLogin:false})
           return res.json({message:"success"});
        })(req, res, next);
    }
 
}


export default User;