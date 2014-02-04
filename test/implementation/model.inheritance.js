"use strict";

var Ignitor = require('../../src/ignitor')
  , Schema = Ignitor.Schema
  ;

var personSchema = new Schema({});
var Person = Ignitor.model('Person', personSchema);

describe('Model Inheritance', function () {
  describe('Person', function () {

    it('should have toJSON', function () {
      var person = new Person();
      person.toJSON().should.be.ok;
    });

    it("it should save it's own properties", function () {
      var person = new Person({
        firstName: "Bob",
        lastName: "the Builder"
      });
      person.should.have.property('firstName');
      person.firstName.should.be.equal('Bob', "firstName should be 'Bob'");
      person.should.have.property('_options');

    });

  });

});