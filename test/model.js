"use strict";

var expect = require('expect.js')
  , Ignitor = require('../src')
  , Schema = Ignitor.Schema
  , Model = Ignitor.Model
  , util = require('util')
  , _ = require('lodash')
  ;


describe('Model', function () {

  beforeEach(function () {
    Ignitor.clearRegistrations();
  })

  it("should be able to create 'Person'", function () {


    var Person = Ignitor.model('person', new Schema({
      name: {
        type: 'string',
        required: true,
        default: 'blah'
      },
      age: {
        type: 'numeric',
        required: true
      },
      addresses: [
        {
          name: {
            type: 'string'
          }
        }
      ]
    }));

    var person = Ignitor.model('Person', {name: "blah"});

    expect(person).to.be.ok();
    expect(person.name).to.be("blah");
    expect(person.name).to.be.a('string');
    expect(person.isNew()).to.be(true);

  });

});