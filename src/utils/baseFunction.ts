import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const generateToken = (payload:any) => {
    return jwt.sign(payload,  process.env.SECRET_KEY || "ahmedSalem");
}

export async function verifyPassword(plainPassword: string, hashedPassword: any ): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
}
export const hashPassword = (password:string):string => {
    return bcrypt.hashSync(password,  Number(process.env.ROUND));
}
