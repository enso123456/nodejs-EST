var express = require("express")
var http = require("http")
var app = express()
const server = http.createServer(app).listen(3000)
const io = require("socket.io")(server)

app.use(express.static("public"))

io.on("connection", function(socket) {
  socket.on("disconnect", reason => {
    socket.emit("Disconnected")
  })
  socket.on("chat", function(msg) {
    socket.broadcast.emit("message", msg)
  })
  socket.emit("Welcome to Cyber Chat")
})

console.log("Listening to port: 3000")
