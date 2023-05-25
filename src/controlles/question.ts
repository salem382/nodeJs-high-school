import  {AppError, catchError} from '../utils/ApiError';
import {Response, NextFunction} from 'express'
import AssignmentModel from '../models/assignmentModel';
import QuestionModel from '../models/questionModels';


class Question {

    addQuestion(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {body, choice_a, choice_b, choice_c, choice_d, correct_ans, grade, assignment_id} = req.body;
            const question = await QuestionModel.insertMany({body, choice_a, choice_b, choice_c, choice_d, correct_ans, grade, assignment_id});
            await AssignmentModel.findByIdAndUpdate(assignment_id, {$push:{questions:[question[0]._id]}})
            return res.json({message:"success"});
        })(req, res, next);
    }
    deleteQuestion(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {question_id} = req.body;
            const question = await QuestionModel.findByIdAndDelete(question_id);
            if (!question) return next(new AppError('this question not found', 404));
            return res.json({message:"success"});
        })(req, res, next);
    }
}

const question:Question = new Question();

export default question;