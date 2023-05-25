
process.on('uncaughtException', (err) => {
    console.log ("Erro", err);
});
import * as dotenv from 'dotenv';
dotenv.config();
import { errorHandler } from './utils/ApiError';
import express from 'express';
import { dbConnect } from "./config/config";
import { AppError } from './utils/ApiError';
import userRouter from './routes/user.routes';
import teacherRouter from './routes/teachers.routes';
import contactRouter from './routes/contact.routes';
import subjectRouter from './routes/subject.routes';
import unitRouter from './routes/unit.routes';
import lessonRouter from './routes/lessons.routes';
import AsignmentRouter from './routes/assignment.roures';
import questionRouter from './routes/question.routes';
import resultRouter from './routes/result.routes';
import cors from "cors";

const app = express();

dbConnect();

app.use(express.json());
app.use(cors())
app.use('/user',userRouter);
app.use('/teacher',teacherRouter);
app.use('/contact',contactRouter);
app.use('/subject',subjectRouter);
app.use('/unit',unitRouter);
app.use('/lesson',lessonRouter);
app.use('/assignment',AsignmentRouter);
app.use('/question',questionRouter);
app.use('/result', resultRouter)


app.use(express.static('uploads'))

app.use('*', async (req, res, next) => {

    return next(new AppError('invalide url' + req.originalUrl, 404));
})

app.use(errorHandler);


process.on('unhandledRejection', () => {
    console.log ("errrr222");
})

app.listen(5000, () => console.log ("server is running"));
