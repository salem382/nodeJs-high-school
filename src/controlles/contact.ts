import  {AppError, catchError} from '../utils/ApiError';
import {Response, NextFunction} from 'express'
import teacherModel from "../models/teachersModel";
import contactModel from '../models/contactModels';


class Contact {

    addmessage(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {name, phone, email, message} = req.body;
            await contactModel.insertMany({name, phone, email, message});
            return res.json({message:"success"});
        })(req, res, next);
    }
    getMessages(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const messages:string[] = await contactModel.find();
            if (!messages.length) return next(new AppError('no messages to show', 404));
            return res.json({message:"success", messages});
        })(req, res, next);
    }
}

const contact:Contact = new Contact();

export default contact;