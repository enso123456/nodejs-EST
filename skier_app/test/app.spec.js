const expect = require("chai").expect
const request = require("supertest")
const rewire = require("rewire")
const cheerio = require("cheerio")
const app = rewire("../app")

describe("App", function() {
  it("Loads the homepage", function(done) {
    request(app)
      .get("/")
      .expect(200)
      .end(function(err, res) {
        let $ = cheerio.load(res.text)
        var pageHeading = $("body>h1:first-child").text()
        expect(pageHeading).to.be.equal("Skier Dictionary")
        done()
      })
  })

  describe("Dictionary API", function() {
    beforeEach(function() {
      this.dicts = [
        {term: "AAA", defined: "A is for apple"},
        {term: "BBB", defined: "B is for baller"}
      ]

      app.__set__("skierTerms", this.dicts)
    })

    it("get all dictionary", function(done) {
      const dicts = this.dicts
      request(app)
        .get("/dictionary-api")
        .expect(200)
        .end(function(err, res) {
          var terms = JSON.parse(res.text)
          expect(terms).to.deep.equal(dicts)
          done()
        })
    })
    it("post a new term", function(done) {
      request(app)
        .post("/dictionary-api", {term: "CCC", defined: "C for car"})
        .expect(200)
        .end(done)
    })
    it("delete a record in dictionary", function(done) {
      request(app)
        .delete("/dictionary-api/AAA")
        .expect(200)
        .end(done)
    })
  })
})
