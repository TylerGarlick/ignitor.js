"use strict";

var Schema = require('../src/ignitor').Schema
  ;

describe('Schema', function () {

  describe('creating a new Schema', function () {

    it('should not be null', function () {
      (function () {
        new Schema()
      }).should.throw();
    });

  });

});