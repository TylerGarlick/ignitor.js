Array = require './Array'
class Collection extends Array
  constructor: (opts) ->
    @_default = []
    super

module.exports = Collection

