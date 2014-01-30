"use strict";

var Ignitor = require('../lib')
  , Schema = Ignitor.Schema
  , expect = require('expect.js')
  , _ = require('lodash')
  ;

describe('Ignitor', function () {

  beforeEach(function () {
    Ignitor.clearRegistrations();
  });

  it('should have no registrations', function () {
    var modelKeys = Ignitor._getModelKeys();
    expect(modelKeys.length).to.be(0);
  });

  it('should allow save models to registrations', function () {
    var modelKeys = Ignitor._getModelKeys();
    expect(modelKeys.length).to.be(0);

    Ignitor.model('Person', new Schema({
      name: {
        type: 'String',
        required: true
      }
    }));

    modelKeys = Ignitor._getModelKeys();
    expect(modelKeys.length).to.be(1);
    expect(Ignitor.model('Person')).to.be.ok();

  });


});