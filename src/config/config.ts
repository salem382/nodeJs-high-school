import mongoose from "mongoose";

export const dbConnect = () => {

    mongoose.connect(process.env.DB_CONNECTIONS || "")
    .then(() =>  console.log ("database is connected"))
    .catch(() => console.log ("error in database"));
}

