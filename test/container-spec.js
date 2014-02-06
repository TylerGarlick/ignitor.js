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

  describe('.register(model, schama, options)', function () {

    var basicSchema = ignitor.Types.Schema({
      name: { type: 'string' },
      age: { type: 'number'}
    });

    it('should register a model', function () {

      expect(ignitor.__.container.all().length).to.be(0);
      ignitor.__.container.register('basic', basicSchema);


    });


  });
});