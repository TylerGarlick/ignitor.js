BasicRepository = require './BasicRepository'

class ArangoRepository extends BasicRepository
  constructor: (@collection, @attributes) ->


module.exports = ArangoRepository