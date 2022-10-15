//main (아래 둘중 하나로 설정하면됨)
import express from "express";
// const express = require("express")
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
const app = express()
dotenv.config()

//env.MONGO와 연결
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongoDB")
    } catch(error) {
        throw error
    }
};

mongoose.connection.on("disconnected", ()=> {
    console.log("mongoDB disconnected")
})

//middlewares

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


//8080연결완료
app.listen(8080, ()=>{
    connect()
    console.log("Connected to backend!")
})