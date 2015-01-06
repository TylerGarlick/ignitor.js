'use strict';

exports = module.exports = Model;

var mixins = exports.mixins = {};

mixins.all = function (collection) {

};


/**
 * Model
 * @constructor
 */
function Model(schema, collection, options) {
  options = options || {};
  this.schema = schema;
  this.collection = Model.collection = collection;
}


Model.all = function () {
  return Model.collection;
};

Model.find = function (criteria) {

};


Model.update = function (id, model) {

};

Model.updateBy = function (criteria, model) {

};

Model.destroy = function (id) {

};

Model.destroyBy = function (criteria) {

};

Model.destroyAll = function (criteria) {

};

Model.prototype.save = function () {

};

Model.prototype.update = function () {

};

Model.prototype.destroy = function () {

};
