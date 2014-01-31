BasicType = require './BasicType'

class Array extends BasicType

  constructor: (opts) ->
    @_default = []
    super 'array', opts


module.exports = Array