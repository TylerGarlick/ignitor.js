BasicRepository = require './BasicRepository'

class MockRepository extends BasicRepository

  constructor: (@collection, @attributes, @seed) ->
    @seed ?= []
    super

MockRepository::all = () ->

module.exports = MockRepository

