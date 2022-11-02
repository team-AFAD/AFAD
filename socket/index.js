const socket = require("socket.io");
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
app.use(cors());

const io = require("socket.io")(8000, {
    cors: {
      origin: "http://54.180.123.252:3000",
    },
  });

  let users = [];

  const addUser = (userId, socketId) =>{
    !users.some((user) => user.userId === userId) && 
      users.push({userId, socketId});
  };

  const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
 };

  const getUser = (userId) =>{
    return users.find(user=>user.userId === userId)
 };

io.on("connection", (socket) => {
    //연결되었을때
    console.log("user connected.")
    //take userId and socketId from user
    socket.on("addUser", userId => {
      addUser(userId, socket.id);
      io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({senderId, receiverId, text})=>{
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId, text
    });
  });

  //연결 끊겼을때
  socket.on("disconnect", () => {
    console.log("사용자가 나갔습니다.");
    removeUser(socket.id);
    io.emit("getUsers", users);
  })
});