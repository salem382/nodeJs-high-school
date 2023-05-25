import  {AppError, catchError} from '../utils/ApiError';
import {Response, NextFunction} from 'express'
import subjectModel from '../models/subjectsModel';


class Subject {

    addSubject(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {name, teacherName, grade, section} = req.body;
            await subjectModel.insertMany({name, teacherName, image:req.file.filename, grade, section});
            return res.json({message:"success"});
        })(req, res, next);
    }
    updateSubject(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {name, grade, section, teacherName, subject_id} = req.body;
            const subject:any = await subjectModel.findByIdAndUpdate(subject_id, {name, grade, section, teacherName, image:req.file.filename}, {new:true});
            if (!subject) return next(new AppError('this subject not found', 404));
            return res.json({message:"success"});
        })(req, res, next);
    }
    deleteSubject(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {subject_id} = req.body;
            const subject:any = await subjectModel.findByIdAndDelete(subject_id, {new:true});
            if (!subject) return next(new AppError('this subject not found', 404));
            return res.json({message:"success"});
        })(req, res, next);
    }
    getSubject(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const subjects = await subjectModel.find({grade:req?.user_grade, section:req?.user_section});
            if (!subjects.length) return next(new AppError('no subject found', 404));
            return res.json({message:"success", subjects});
        })(req, res, next);
    }
 
}

const subject:Subject = new Subject();

export default subject;