"use strict";

function Model() {
  var registrations = {};
  var hooks = {
    pre: {
      create: [],
      put: [],
      del: []
    },
    post: {
      create: [],
      put: [],
      del: []
    }
  }
}

Model.schema = {};


module.exports = Model;