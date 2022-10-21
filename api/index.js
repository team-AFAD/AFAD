//main (아래 둘중 하나로 설정하면됨)
import express from "express";
// const express = require("express")
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";
import commentRoute from "./routes/comments.js";
// import likeRoute from "./routes/likes.js";

import conversationRoute from "./routes/conversations.js";
// import messageRoute from "./routes/messages.js";
import cookieParser from "cookie-parser";
import multer from "multer";
const app = express()
dotenv.config()

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
        cb(null, "images");
    },
    filename: (req, file, cb) =>{
        // cb(null, req.body.name);
        cb(null, "hello files");
    }
});

const upload = multer({storage:storage})
app.post("/api/upload", upload.single("file"), (req,res) =>{
    res.status(200).json("File has been uploaded");
})

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
// app.use("/api/likes", likeRoute);
app.use("/api/conversations", conversationRoute);
// app.use("/api/messages", messageRoute);

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

//8080연결완료
app.listen(8080, ()=>{
    connect()
    console.log("Connected to backend!")
})