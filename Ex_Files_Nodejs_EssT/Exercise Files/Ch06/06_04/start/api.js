const http = require("http")
const data = require("./data/inventory.json")

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, {"Content-Type": "text/json"})
      res.end(JSON.stringify(data))
    } else if (req.url === "/instock") {
      res.writeHead(200, {"Content-Type": "text/json"})
      const filtered = data.filter(d => d.avail === "In stock")
      res.end(JSON.stringify(filtered))
    } else if (req.url === "/order") {
      res.writeHead(200, {"Content-Type": "text/json"})
      const filtered = data.filter(d => d.avail !== "In stock")
      res.end(JSON.stringify(filtered))
    }
  })
  .listen(3000)
