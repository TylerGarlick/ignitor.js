'use strict';

var ignitor = require('../lib')
  , expect = require('expect.js')
  ;

describe('Container', function () {

  describe('.has(modelname)', function () {

    it('should have no registrations by default', function () {
      var registrations = ignitor.__.container.all();
      expect(registrations.length).to.be(0);
      expect(ignitor.__.container.has('blah')).to.not.be.ok();
    });


  });
});