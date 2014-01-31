BasicType = require './BasicType'

class Numeric extends BasicType
  constructor: ->
    super 'numeric',
      min: Number.MIN_VALUE
      max: Number.MAX_VALUE

module.exports = Numeric