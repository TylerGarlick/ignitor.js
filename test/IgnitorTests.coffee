

describe "Ignitor", ->

  ignitor = null
  beforeEach ->
    ignitor = require '../src/Ignitor'
    ignitor.should.be.ok

  describe "Configuration", ->

    it "should be true", ->
      ignitor.should.be.ok
      ignitor.db.should.be.ok

