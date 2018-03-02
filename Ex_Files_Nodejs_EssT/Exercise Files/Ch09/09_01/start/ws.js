const WebSocket = require("ws").Server

var ws = new WebSocket({port: 3000})

ws.on("connection", function(ws) {
  ws.on("message", function(msg) {
    if (msg === "exit") {
      ws.close()
    } else {
      ws.clients.forEach(function(clients) {
        clients.send(message)
      })
    }
  })

  ws.send("Welcome to Cyber Chat")
})

console.log("Listening port: 3000")
