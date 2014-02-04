"use strict";
var Ignitor = require('../src/ignitor')
  , Model = Ignitor.Model
  , Schema = Ignitor.Schema
  ;

describe('Model', function () {


  describe('#static', function () {
    it('should have a static _repository property', function () {
      Model.repository.should.be.ok;
    });

    it('should have a static _schema property', function () {
      new Model()._schema.should.be.ok;
    });

    it('should have a static _options property', function () {
      new Model().should.have.property('_options');
    });
  });

  describe('prototype', function () {

    describe('new()', function () {
      it('should be able to apply json properties', function () {
        var model = new Model({
          name: "Blah"
        });
        model.name.should.be.eql("Blah", "Should be equal to 'Blah'");
      });
    });

    describe('.isValid()', function () {

      var model;
      beforeEach(function () {
        model = new Model();
      });

      it('should be on an instance of a model', function () {
        model.isValid.should.be.a.func;

      });

      it("should be false by default", function () {
        model.isValid().should.be.equal(false, "isValid() should be false by default");
      });


    });


    describe('.toJSON()', function () {
      it('should not have any keys that begin with _', function () {
        var model = new Model({
          _private: "private",
          name: "blah"
        });
        model.toJSON().should.have.property('name');
        model.toJSON().name.should.be.equal('blah', ".name should be 'blah'");
        model.toJSON().should.not.have.property('_private');
      });
    });

  });


});



