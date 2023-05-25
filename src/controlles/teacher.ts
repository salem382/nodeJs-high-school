import  {AppError, catchError} from '../utils/ApiError';
import {Response, NextFunction} from 'express'
import teacherModel from "../models/teachersModel";


class Teacher {

    addTeacher(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {name, subject, grade, section} = req.body;
            await teacherModel.insertMany({name, subject, grade, section, image:req.file.filename});
            return res.json({message:"success"});
        })(req, res, next);
    }
    updateTeacher(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {name, subject, grade, section, teacher_id} = req.body;
            const teacher = await teacherModel.findByIdAndUpdate(teacher_id,{name, subject, grade, section, image:req.file.filename}, {new:true});
            if (!teacher) next(new AppError('this teacher not found', 404));
            return res.json({message:"success"});
        })(req, res, next);
    }
    deleteTeacher(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {teacher_id} = req.body;
            const teacher = await teacherModel.findByIdAndDelete(teacher_id, {new:true})
            if (!teacher) next(new AppError('this teacher not found', 404));
            return res.json({message:"success"});
        })(req, res, next);
    }
    getTeachers(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

           const teachers:string[] = await teacherModel.find();
           if (!teachers.length) next(new AppError('no teachers found',404));
            return res.json({message:"success", teachers});
        })(req, res, next);
    }
 
}

const teacher:Teacher = new Teacher();

export default teacher;