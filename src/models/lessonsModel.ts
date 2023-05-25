import mongoose, { Document, Model, Mongoose, Schema } from 'mongoose';
import unitModel from './unitsModel';


interface Lesson extends Document {
    name:string;
    video:string;
    pdf:string;
    unit_id:Schema.Types.ObjectId;
}

const LessonSchema: Schema<Lesson> = new mongoose.Schema({
    name:{
        type:String
    },
    video:{
        type:String
    },
    pdf:{
        type:String
    },
    unit_id:{
        type:Schema.Types.ObjectId,
        ref:'Unit'
    }
});



const lessonModel: Model<Lesson> = mongoose.model<Lesson>('Lesson', LessonSchema);

export default lessonModel;
