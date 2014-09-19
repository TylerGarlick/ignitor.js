"use strict";

var Util = require('util');
var Ignitor = require('../');

describe('Ignitor', function () {

  describe('initialize', function () {

    it("should be able to connect to a valid database", function () {
      Ignitor.initialize('http://localhost:8000/testing');
      Ignitor.db.should.be.ok;
    });

    it("should be able to retain the connection", function (next) {
      Ignitor.db.collection.list()
          .then(function (resp) {
            console.log(Util.inspect(resp, { depth: null }));
            next();
          }).done(null, next);
    });


  });

});
