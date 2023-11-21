import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DBurl);
const db = mongoose.connection;

db.on('error', () => {
    console.log("There is Error with connecting DB");
    return;
});

db.on('open', () => {
    console.log("Successfully Connected to Db ");
});

export default db;