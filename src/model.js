"use strict";
var _ = require('underscore')
  ;

function Model(values) {
  if (values)
    _.extend(this, values);
}

Model.byId = function (id) {
  var self = this;
  self._repository.byId(id);
}

Model.prototype.save = function () {
  var self = this;
  if (self.isNew()) {
    return Model.repository.add(self.toJSON())
  } else {
    return Model.repository.update(self._id, self.toJSON());
  }
};

Model.prototype.isNew = function () {
  return !_.has(this, "_id");
};

Model.prototype.isValid = function () {
  return false;
};

Model.prototype.toJSON = function () {
  var self = this
    , json = {}
    ;

  _.forEach(_.keys(self), function (key) {
    if (key.indexOf("_") == -1)
      json[key.toString()] = self[key];
  });

  return json;
}

Model.collection = null;
Model.repository = {};

Model.byId = function (id) {
//  return Model.repository.byId(id);
}

Model.all = function () {
  return Model.repository.all();
}

Model.remove = function (id) {
//  return Model.repository.remove(id);
}

Model.prototype._options = {};
Model.prototype._schema = {};

module.exports = Model;