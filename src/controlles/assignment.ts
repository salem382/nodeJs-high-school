import  {AppError, catchError} from '../utils/ApiError';
import {Response, NextFunction} from 'express'
import AssignmentModel from '../models/assignmentModel';


class Assignment {

    addAssignment(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {test_name, lesson_id, total_grade} = req.body;
            await AssignmentModel.insertMany({test_name, lesson_id, total_grade});
            return res.json({message:"success"});
        })(req, res, next);
    }
    deleteAssignment(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {Assignment_id} = req.body;
            const quiz =  await AssignmentModel.findByIdAndDelete(Assignment_id);
            if (!quiz) return next(new AppError('this assignment is not found', 404));
            return res.json({message:"success"});
        })(req, res, next);
    }
    getAssignment(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {


            const {id} = req.params;
            const quizes =  await AssignmentModel.find({lesson_id:id});
            if (!quizes.length) return next(new AppError('no quizes for this lessons', 404));
            return res.json({message:"success", quizes});
        })(req, res, next);
    }
}

const assignment:Assignment = new Assignment();

export default assignment;