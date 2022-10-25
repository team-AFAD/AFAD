const { socket } = require("socket.io");
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
app.use(cors());

const io = require("socket.io")(8080, {
    cors: {
      origin: "http://localhost:3000",
    },
  });



io.on("connection", (socket) => {
    console.log("user connected.")
})