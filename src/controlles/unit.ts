import  {AppError, catchError} from '../utils/ApiError';
import {Response, NextFunction} from 'express'
import unitModel from '../models/unitsModel';



class Unit {

    addUnit(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {name, subject_id} = req.body;
            await unitModel.insertMany({name, subject_id});
            return res.json({message:"success"});
        })(req, res, next);
    }
    updateUnit(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {name, subject_id, unit_id} = req.body;
            const teacher = await unitModel.findByIdAndUpdate(unit_id,{name, subject_id}, {new:true});
            if (!teacher) return next(new AppError('this unit not found', 404));
            return res.json({message:"success"});
        })(req, res, next);
    }
    deleteUnit(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

            const {unit_id} = req.body;
            const teacher = await unitModel.findByIdAndDelete(unit_id, {new:true})
            if (!teacher) return next(new AppError('this unit not found', 404));
            return res.json({message:"success"});
        })(req, res, next);
    }
    getunits(req:any, res:Response, next:NextFunction):void{
        catchError(async (req:any, res:Response, next:NextFunction) => {

           const {id} = req.params;
           const units:string[] = await unitModel.find({subject_id:id});
           if (!units.length) return next(new AppError('no units found',404));
         return res.json({message:"success", units});
        })(req, res, next);
    }
 
}

const unit:Unit = new Unit();

export default unit;