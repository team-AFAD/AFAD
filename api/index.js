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
// import likeRoute from "./routes/likes.js";
import emailRouter from "./routes/emails.js";
import joinRouter from "./routes/joins.js";



const app = express();
dotenv.config();
// 어떤 경로에서도 통신 가능하게
app.use(cors());

// payments test를 위한 코드
app.set('view engine', 'ejs');

//env.MONGO와 연결
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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../client/public/images");
    },
    filename: (req, file, cb) =>{
        // cb(null, req.body.name);
        const ext = path.extname(file.originalname);
        cb(null, `${Date.now()}.${ext}`);
    }
});

const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"), (req,res) =>{
    res.status(200).json("File has been uploaded");
})

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
app.use("/api/payments", paymentRoute);
// app.use("/api/likes", likeRoute);
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

io.on("connection", (socket) => {

    // socket.on("enterRoom", (room, done) => {
        // socket.join(room.room);
        // done();
        // 자신 제외
        // socket.to(room.room).emit("welcome");
        // 자기한테도
        // socket.emit("welcome");
    // })

    // console.log("socket.id", socket.id);
    // socket.emit("notice", socket.id);

    // socket.on("newMsg", (data, done) => {
    //     socket.to(data.room).emit("newMsg", data.msg);
    //     done();
    // })

    // socket.on("disconnecting", () => {
    //     socket.rooms.forEach((room) => {
    //         socket.to(room).emit("bye");
    //     })
    // })
})

//8080연결완료
app.listen(8080, ()=>{
    connect();
    console.log("Connected to backend!");
})