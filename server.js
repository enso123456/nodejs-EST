const http = require("http")

const server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})

  res.end(`
    <!DOCTYPE>
    <html>
      <head><title>Server Request</title></head>
      <body>
        <h1>Now Serving</h1>
        <p>${req.url}</p>
        <p>${req.method}</p>
      </body>
    </html>

  `)
})

server.listen("3000")

console.log("Server is running in port 3000")
