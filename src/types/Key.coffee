BasicType = require './BasicType'

class Key extends BasicType

  constructor: (doc) ->
    super 'key'

    if doc._id
      @_id = doc._id ?= null

    if doc._rev
      @_rev = doc._rev ?= null

    if doc._key
      @_key = doc._key ?= null


module.exports = Key

