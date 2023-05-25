import mongoose, { Document, Model, Schema } from 'mongoose';

interface Assignment extends Document {
    test_name:string;
    lesson_id:Schema.Types.ObjectId;
    questions:Array<Schema.Types.ObjectId>;
    total_grade:string;
}

const AssignmentSchema: Schema<Assignment> = new mongoose.Schema({
    test_name:{
        type:String
    },
    lesson_id:{
        type:Schema.Types.ObjectId
    },
    questions:[{type:Schema.Types.ObjectId, ref:'Question'}],
    total_grade:{
        type:String
    }
});


const AssignmentModel: Model<Assignment> = mongoose.model<Assignment>('Assignment', AssignmentSchema);

export default AssignmentModel;
