const https = require("https")
module.exports = {
  printName(obj) {
    return `${obj.last}, ${obj.first}`
  },
  loadWiki(query, cb) {
    const url = `https://en.wikipedia.org/wiki/${query.q}`

    https.get(url, function(res) {
      res.setEncoding("utf8")

      let body = ""

      res.on("data", function(chunk) {
        body += chunk
      })

      res.on("end", function() {
        cb(body)
      })
    })
  }
}
