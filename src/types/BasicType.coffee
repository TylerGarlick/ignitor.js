dbc = require "dbc.js"

class BasicType
  _default: {}

  constructor: (@kind, @opts) ->
    @opts ?= {}

    dbc([@kind and @kind.length > 0], "Kind is required")


module.exports = BasicType