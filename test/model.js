'use strict';
var expect = require('expect.js')
  , ignitor = require('../lib')
  , Types = ignitor.Types
  , Schema = Types.Schema
  , Model = Types.Model
  ;


describe('Model', function () {

  describe('#new', function () {
    describe("new Model(schema) should register model successfully", function () {
      it('should instantiate with a Schema object', function () {
        var schema = new Schema({
          name: {
            type: 'string',
            default: "Tyler Garlick"
          }
        });
        expect(schema).to.be.ok();

        var model = new Model(schema);
        expect(model).to.be.ok();
        expect(model._schema).to.be.equal(schema);
        expect(model._isNew).to.be.ok();
      });
    });

    describe("new Model(instance) should register add values to model successfully", function () {
      it('should instantiate with instance values', function () {
        var instance = {
          _key: 1234,
          _id: 1234,
          _rev: 1234,
          name: "Captain America",
          email: "capt@america.com",
          active: true
        };
        var model = new Model(instance);
        expect(model).to.be.ok();
        expect(model._isNew).to.not.be.ok();
        expect(model.name).to.equal(instance.name);
        expect(model.email).to.equal(instance.email);
        expect(model.active).to.equal(instance.active);
      });
    });


  });
});