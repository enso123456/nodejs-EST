const https = require("https")
const fs = require("fs")

const options = {
  host: 443,
  hostname: "en.wikipedia.org",
  path: "/wiki/Binary"
}

const req = https.request(options, function(res) {
  var responseData = ""
  console.log(`Status Code: ${res.statusCode}`)
  console.log(`Header: %j`, res.headers)
  res.setEncoding("utf8")

  res.on("data", function(chunk) {
    responseData += chunk
  })

  res.on("end", function() {
    fs.writeFile("binary.html", responseData, function(err) {
      if (err) {
        throw err
      }
      console.log("Download complete.")
    })
  })
})

req.on("error", function(err) {
  console.log(`problem with requrest: ${err.message}`)
})

req.end()
