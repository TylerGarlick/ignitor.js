"use strict";

var Ignitor = require('../../../lib')
  , Schema = Ignitor.Schema
  ;

var OrderSchema = new Schema({

});

var Order = Ignitor.model('Order', OrderSchema);
module.exports = Order;