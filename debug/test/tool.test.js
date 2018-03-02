const expect = require("chai").expect
const nock = require("nock")
const tools = require("../lib/tool")

describe("Tools", function() {
  describe("printName()", function() {
    it("should print last name first", function() {
      var results = tools.printName({first: "Romeo", last: "Enso"})
      expect(results).to.equal("Enso, Romeo")
    })
  })

  describe("loadWiki()", function(done) {
    // mocking the request to api or some http/https request
    before(function() {
      nock("https://en.wikipedia.org")
        .get("/wiki/Binary")
        .reply(200, "Binary Page")
    })

    //this uses now the nock server and not hitting the real wiki page
    it("load Binary wiki page", function(done) {
      tools.loadWiki({q: "Binary"}, function(html) {
        expect(html).to.equal("Binary Page")
        done()
      })
    })
  })
})
