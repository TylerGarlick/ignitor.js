EventEmitter = require('events')

class BasicRepository extends EventEmitter

  constructor: (@collection, @attributes) ->


BasicRepository::all = (entities, callback) ->
  @.emit 'all', entities
  if callback
    callback null, entities

BasicRepository::find = (entities, callback) ->
  @.emit 'find', entities
  if callback
    callback null, entities

BasicRepository::findById = (entity, callback) ->
  @.emit 'find', entity
  if callback
    callback null, entity

BasicRepository::save = (entity, callback) ->
  @.emit 'save', entity
  if callback
    callback null, entity

BasicRepository::remove = (id, callback) ->
  @.emit 'remove', id
  if callback
    callback null, id


BasicRepository::removeAll = (callback) ->
  @.emit 'removeAll'
  if callback
    callback null

module.exports = BasicRepository

