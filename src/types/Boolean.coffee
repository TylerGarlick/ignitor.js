BasicType = require './BasicType'

class Boolean extends BasicType
  constructor: (opts) ->
    @_default = true
    super 'boolean', opts


module.exports = Boolean