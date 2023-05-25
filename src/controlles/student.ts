import User from "./user";
import { AppError, catchError } from "../utils/ApiError";
import {Request, Response, NextFunction} from 'express'
import UserModel from "../models/userModel";


class Student extends User {
    upfateProfile(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {name , parent_email, phone, city, state, parent_phone} = req.body;
            const user = await UserModel.findOneAndUpdate({_id:req.user_id}, {name, image:req.file.filename, parent_email, phone, city, state, parent_phone}, {new:true});
            if (!user) return next(new AppError('user not found', 404));
            return res.json({message:'success'}); 
        })(req, res, next);
    }
}

const student:Student = new Student();

export default student;