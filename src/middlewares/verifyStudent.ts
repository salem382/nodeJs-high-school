import  jwt from "jsonwebtoken";
import { AppError } from "../utils/ApiError";


const verifyStudent = (req:any, res:any, next:any):void => {

    const token = req.header('token');

    jwt.verify(token!, 'myNameIsUser', (err:any, decode:any) => {
        
        if (err) return next(new AppError(err.message, 401));
        if (decode.role != 'student') return next(new AppError('you shouid be a student to do this',401));
        req.user_id = decode.id;
        req.user_grade = decode.grade;
        req.user_section = decode.section;
        next();
    });
}

export default verifyStudent;