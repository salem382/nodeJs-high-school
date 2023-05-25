
import mongoose, { Document, Model, Schema } from 'mongoose';


enum roleStatus {
  student = 'student',
  admin = 'admin'
}
enum Gender {
  male = 'male',
  female = 'female'
}
enum Section {
  sciences = 'sciences',
  humanities = 'humanities'
}
enum Grade {
  first = 'first',
  second = 'second',
  third = 'third'
}




interface User extends Document {
  name: string;
  email:String;
  password:String;
  role:roleStatus;
  age:number;
  gender:Gender;
  phone:number;
  state:string;
  city:string;
  parent_email:string;
  parent_phone:number;
  grade:Grade;
  section:Section;
  image:string;
  isLogin:boolean;
}

const userSchema: Schema<User> = new mongoose.Schema({
  name: {type:String,minlength:[3, "error in name length"],maxlength:[25, "error in name length"]},
  email: {type:String,minlength:3,maxlength:30,},
  password: {type:String,minlength:[1, 'error in length'],maxlength:[200, 'error in length'],},
  age:{type:Number, minlength:10, maxlength:50},
  gender: {type: String, enum: Object.values(Gender),default: Gender.male},
  role: {type: String, enum: Object.values(roleStatus),default: roleStatus.student},
  phone:{type:Number},
  state:{type:String},
  city:{type:String},
  parent_email:{type:String},
  parent_phone:{type:Number},
  grade:{type: String, enum: Object.values(Grade),default: Grade.first},
  section:{type: String, enum: Object.values(Section),default: Section.sciences},
  image:{type:String},
  isLogin:{
    type:Boolean,
    default:false
  }
});



const UserModel: Model<User> = mongoose.model<User>('User', userSchema);

export default UserModel;
