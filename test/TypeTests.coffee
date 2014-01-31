Types = require '../src/types'

describe 'Types', ->
  describe 'Array', ->
    array = null
    beforeEach ->
      array = new Types.Array
      array.should.be.ok

    it "should have kind of 'array'", ->
      array.kind.should.eql 'array'

    it "should have default value of '[]'", ->
      array._default.should.eql([])
      array._default.length.should.eql(0)

  describe 'Boolean', ->
    boolean = null
    beforeEach ->
      boolean = new Types.Boolean
      boolean.should.be.ok

    it "should have kind of 'boolean", ->
      boolean.kind.should.eql 'boolean'

    it "should have default value of 'true", ->
      boolean._default.should.be.true

  describe 'Collection', ->
    collection = null
    beforeEach ->
      collection = new Types.Collection
      collection.should.be.ok

    it "should have kind of 'collection", ->
      collection.kind.should.eql 'array'

    it "should have default value of '[]", ->
      collection._default.should.eql([])
      collection._default.length.should.eql(0)
