import mongoose, { Document, Model, Schema } from 'mongoose';


enum Section {
    sciences = 'sciences',
    humanities = 'humanities'
}
enum Grade {
    first = 'first',
    second = 'second',
    third = 'third'
}


interface Subject extends Document {
    name:string;
    teacherName:string;
    image:string;
    grade:Grade;
    section:Section;
}

    

const subjectSchema: Schema<Subject> = new mongoose.Schema({
   name:{
    type:String
   },
   teacherName:{
    type:String
   },
   grade:{
    type: String, enum: Object.values(Grade),default: Grade.first
   },
   section:{
    type: String, enum: Object.values(Section),default: Section.sciences
   },
   image:{
    type:String
   }
});


const subjectModel: Model<Subject> = mongoose.model<Subject>('Subject', subjectSchema);

export default subjectModel;
