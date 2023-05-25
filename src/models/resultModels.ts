import mongoose, { Document, Model, Schema } from 'mongoose';

interface Result extends Document {
    assignment_name:string;
    student_id:Schema.Types.ObjectId;
    total_grade:number;
    student_grade:number;
}

const ResultSchema: Schema<Result> = new mongoose.Schema({
    assignment_name:{
        type:String
    },
    student_id:{
        type:Schema.Types.ObjectId
    },
    total_grade:Number,
    student_grade:Number
});


const ResultModel: Model<Result> = mongoose.model<Result>('Result', ResultSchema);

export default ResultModel;
