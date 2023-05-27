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
    total_grade:{
        type:String
    }
}, {timestamps:true, toJSON:{virtuals:true}, toObject:{virtuals:true}});


AssignmentSchema.virtual('myQuestions', {
    ref: 'Question',
    localField: '_id',
    foreignField: 'assignment_id'
})

AssignmentSchema.pre(/^find/, function() {
    this.populate('myQuestions');
});


const AssignmentModel: Model<Assignment> = mongoose.model<Assignment>('Assignment', AssignmentSchema);

export default AssignmentModel;
