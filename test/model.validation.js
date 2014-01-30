"use strict";

var expect = require('expect.js')
  , Ignitor = require('../lib')
  , Schema = Ignitor.Schema
  , Model = Ignitor.Model
  ;

describe('Model Validator', function () {

  it('should be invalid', function () {

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

    var person = Ignitor.model('Person');
  });

});