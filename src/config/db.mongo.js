import mongoose from "mongoose";

async function conexaoDataBase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection
}

export default conexaoDataBase
