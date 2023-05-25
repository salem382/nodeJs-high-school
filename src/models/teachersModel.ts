import mongoose, { Document, Model, Schema } from 'mongoose';

enum Grade {
    first = 'first',
    second = 'second',
    third = 'third'
}
enum Section {
    public = 'public',
    language = 'language'
}


interface Teacher extends Document {
    name:String;
    subject:String;
    image:string;
    grade:Grade;
    section:Section;
}

const teacherSchema: Schema<Teacher> = new mongoose.Schema({
    name:{
        type:String
    },
    subject:{
        type:String
    },
    image:{
        type:String
    },
    grade:{
        type:String,
        enum: Object.values(Grade),
        default: Grade.first
    },
    section:{
        type:String,
        enum: Object.values(Section),
        default: Section.public
    }
});


const teacherModel: Model<Teacher> = mongoose.model<Teacher>('Teacher', teacherSchema);

export default teacherModel;

