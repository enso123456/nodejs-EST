const http = require("http")
const fs = require("fs")
http
  .createServer((req, res) => {
    if (req.method === "GET") {
      res.writeHead(200, {"Content-Type": "text/html"})
      fs.createReadStream("./public/form.html", "utf8").pipe(res)
    } else if (req.method === "POST") {
      let body = ""
      req.on("data", chunk => {
        body += chunk
      })
      req.on("end", () => {
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.end(`
          Thank you for submitting.
          ${body}
        `)
      })
    }
  })
  .listen(3000)
