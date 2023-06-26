import  {AppError, catchError} from '../utils/ApiError';
import {Response, NextFunction} from 'express'
import AssignmentModel from '../models/assignmentModel';
import QuestionModel from '../models/questionModels';
import ResultModel from '../models/resultModels';


class Result {

    addResult(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {assignment_id, answers} = req.body;
            const assignment = await AssignmentModel.findById(assignment_id);
            if (!assignment) return next(new AppError('this assignment id not found', 404));
            const questions = await QuestionModel.find({assignment_id});
            if (!questions.length) return next(new AppError('no questions for this assignment', 404));
            
            let student_grade:number = 0;
            questions.forEach((question, _) => {

                for (let i = 0; i < answers.length; i++) {

                    if (question._id == answers[i]._id) {

                        if (question.correct_ans == answers[i].answer) {
                            student_grade+= question.grade;
                        }
                    }
                }
                
            });
            const assignment_ = await AssignmentModel.findById(assignment_id);
            await ResultModel.insertMany({assignment_name:assignment_?.test_name, student_grade, student_id:req.user_id,total_grade:assignment?.total_grade});
            return res.json({message:"success", student_grade, total_grade:assignment?.total_grade});
        })(req, res, next);
    }

    getResult(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {
 
            const results = await ResultModel.find({student_id:req?.user_id});
            return res.json({message:"success", results});

        })(req, res, next);
    }
}

const result:Result = new Result();

export default result;