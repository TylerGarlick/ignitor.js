'use strict';

var expect = require('expect.js')
  , Model = require('../lib/model')
  ;


describe('Model', function () {

  describe('constructor', function () {

    it('the collection property should be stored', function () {
      var model = new Model(null, { collection: 'Model'});
      expect(model).to.be.ok();
      expect(model._collection).to.be.equal('model');

    });

    it('should store the schema in the _schema property', function () {
      var model = new Model(null, {
        schema: {
          name: { type: 'string', required: true },
          age: { type: 'numeric', default: 0},
          active: { type: 'boolean', default: true }
        }
      });

      expect(model).to.be.ok();
      expect(model._schema).to.be.ok();

      expect(model._schema.name.type).to.be.equal('string');
      expect(model._schema.name.required).to.be.ok();

      expect(model._schema.age.type).to.be.equal('numeric');
      expect(model._schema.age.default).to.be.equal(0);

      expect(model._schema.active.type).to.be.equal('boolean');
      expect(model._schema.active.default).to.be.equal(true);

    });

    it('should combine the model and the instance', function () {

    });

  });

});

