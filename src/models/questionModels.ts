import mongoose, { Document, Model, Schema } from 'mongoose';

interface Question extends Document {
    body:string;
    choice_a:string;
    choice_b:string;
    choice_c:string;
    choice_d:string;
    correct_ans:string;
    grade:number;
    assignment_id:Schema.Types.ObjectId;
}

const QuestiontSchema: Schema<Question> = new mongoose.Schema({
    body:{
        type:String
    },
    choice_a:{
        type:String
    },
    choice_b:{
        type:String
    },
    choice_c:{
        type:String
    },
    choice_d:{
        type:String
    },
    correct_ans:{
        type:String
    },
    grade:{
        type:Number
    },
    assignment_id:{
        type:Schema.Types.ObjectId,
        ref:'Assignment'
    }
});


const QuestionModel: Model<Question> = mongoose.model<Question>('Question', QuestiontSchema);

export default QuestionModel;
