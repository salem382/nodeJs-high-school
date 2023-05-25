import mongoose, { Document, Model, Schema } from 'mongoose';

interface contact extends Document {
    name:String;
    phone:number;
    email:string;
    message:string;
}

const contactSchema: Schema<contact> = new mongoose.Schema({
    name:{
        type:String
    },
    phone:{
        type:Number
    },
    email:{
        type:String
    },
    message:{
        type:String
    }
});


const contactModel: Model<contact> = mongoose.model<contact>('contact', contactSchema);

export default contactModel;

