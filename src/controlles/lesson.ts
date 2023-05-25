import  {AppError, catchError} from '../utils/ApiError';
import {Response, NextFunction} from 'express'
import lessonModel from '../models/lessonsModel';


class Lessons {

    addLesson(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {name, unit_id} = req.body;
            const lesson = await lessonModel.insertMany({name,unit_id,pdf:req.files.pdf[0].filename, video:req.files.video[0].filename});
            return res.json({message:"success"});
        })(req, res, next);
    }
    updateLesson(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {name, unit_id, lesson_id} = req.body;
            const lesson = await lessonModel.findByIdAndUpdate(lesson_id,{name, unit_id, pdf:req.files.pdf[0].filename, video:req.files.video[0].filename}, {new:true});
            if (!lesson) next(new AppError('this lesson not found', 404));
            return res.json({message:"success"});
        })(req, res, next);
    }
    deleteLesson(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {lesson_id} = req.body;
            const lesson = await lessonModel.findByIdAndDelete(lesson_id, {new:true})
            if (!lesson) next(new AppError('this lesson not found', 404));
            return res.json({message:"success"});
        })(req, res, next);
    }
}

const lessons:Lessons = new Lessons();

export default lessons;
