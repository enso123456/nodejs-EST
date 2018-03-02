const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

var skierTerms = [
  {
    term: "Rip",
    defined: "To move at a high rate of speed"
  },
  {
    term: "Huck",
    defined:
      "To throw your body off of something, usually a natural feature like a cliff"
  },
  {
    term: "Chowder",
    defined: "Powder after it has been sufficiently skied"
  }
]

app.use((req, res, next) => {
  console.log(`${req.method} request ${req.url}`)
  next()
})

app.use(cors())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/dictionary-api", (req, res) => {
  res.json(skierTerms)
})

app.post("/dictionary-api", (req, res) => {
  skierTerms.push(req.body)
  res.json(skierTerms)
})

app.delete("/dictionary-api/:term", (req, res) => {
  skierTerms = skierTerms.filter(
    data => data.term.toLocaleLowerCase() != req.params.term.toLocaleLowerCase()
  )
  res.json(skierTerms)
})

app.listen(3000)

module.exports = app
