'use strict';
var expect = require('expect.js')
  , ignitor = require('../lib')
  , Schema = ignitor.Schema
  ;
describe('Schema', function () {
  describe('constructor', function () {
    it('should require a definition', function () {
      expect(function () {
        new Schema();
      }).to.throwError();

      var schema = new Schema({});
      expect(schema).to.be.a(Schema);
      expect(schema).to.be.ok();
      expect(schema.definition).to.be.ok();
    });

    it('should save definition to .definition', function () {

      var schema = new Schema({
        name: {
          type: 'string'
        }
      });
      expect(schema).to.be.ok();
      expect(schema.definition).to.be.ok();
      expect(schema.definition.name).to.be.ok();
      expect(schema.definition.name.type).to.equal('string');

    });

  });
});