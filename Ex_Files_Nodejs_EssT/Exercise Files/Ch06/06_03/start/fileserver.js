const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./public/index.html", "utf8", (err, html) => {
      if (err) {
        throw err
      }
      res.writeHead(200, {"Content-Type": "text/html"})
      res.end(html)
    })
  } else if (req.url.match(/.css$/)) {
    const pathFile = path.join(__dirname, "public", req.url)
    const fileStream = fs.createReadStream(pathFile)
    res.writeHead(200, {"Content-Type": "text/css"})
    fileStream.pipe(res)
  } else if (req.url.match(/.jpg$/)) {
    const pathFile = path.join(__dirname, "public", req.url)
    const fileStream = fs.createReadStream(pathFile)
    res.writeHead(200, {"Content-Type": "text/image"})
    fileStream.pipe(res)
  } else {
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("404 not found")
  }
})

server.listen(3000)

console.log("file server is now serving port: 3000")
