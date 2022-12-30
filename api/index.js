//main (아래 둘중 하나로 설정하면됨)
import express from "express";
// const express = require("express")
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import multer from "multer";
import bodyParser from "body-parser";
import cors from "cors";
import { Server } from "socket.io";
import {createServer} from "http";
import path from 'path';
const httpServer = createServer();
const io = new Server(httpServer, { cors : { origin : "*" }});

// Route 경로
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";
import commentRoute from "./routes/comments.js";
import paymentRoute from "./routes/payments.js"
import conversationRoute from "./routes/conversations.js";
import messageRoute from "./routes/messages.js";
import likeRoute from "./routes/likes.js";
import emailRouter from "./routes/emails.js";
import joinRouter from "./routes/joins.js";



const app = express();
//서버올릴때 경로
// dotenv.config({path: './api/.env' } ); 
// 로컬에서 실행할때 경로 
dotenv.config({path: './.env' } ); 
// 서버용
// 어떤 경로에서도 통신 가능하게
app.use(cors());

// payments test를 위한 코드
app.set('view engine', 'ejs');

//env.MONGO와 연결
console.log( process.env.MONGO );
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongoDB")
    } catch(error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=> {
    console.log("mongoDB disconnected")
})

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "../../build/images");
//         // cb(null, "../client/public/images");
//     },
//     filename: (req, file, cb) =>{
//         // cb(null, req.body.name);
//         const ext = path.extname(file.originalname);
//         cb(null, `${Date.now()}.${ext}`);
//     }
// });

// const upload = multer({storage:storage})
// app.post("/api/upload", upload.single("file"), (req,res) =>{
//     res.status(200).json("File has been uploaded");
// })

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
app.use("/api/payments", paymentRoute);
app.use("/api/likes", likeRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/emails", emailRouter);
app.use("/api/joins", joinRouter);

//err handleing middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});

//8000연결완료
app.listen(8000, ()=>{
    connect();
    console.log("Connected to backend!");
})