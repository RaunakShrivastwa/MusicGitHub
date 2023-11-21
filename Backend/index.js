import express from "express";
import dotenv from 'dotenv';
import os from 'os';
import cluster from "cluster";
import db from "./config/db.js";
import MusicRouter from './router/MusicRouter.js'
import fileUpload from 'express-fileupload';
import cors from 'cors'


if (cluster.isPrimary) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
}
else {
    dotenv.config();
    const PORT = process.env.PORT
    const app = express();
    app.use(cors('*'));
    app.use(fileUpload({
        useTempFiles: true
    }));

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use('/music', MusicRouter);


    app.listen(PORT, (err) => {
        if (err) {
            console.log("THere is problem with server ", err);
            return;
        }
        console.log(`Server is Running at port ${PORT}`);
    })
}

