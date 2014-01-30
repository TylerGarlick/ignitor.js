"use strict";

var expect = require('expect.js')
  , Schema = require('../src').Schema
  ;


describe('Schema', function () {


  it('it should save properties on the schema object', function () {

    var schema = new Schema({
      name: {
        required: true,
        default: "Blah",
        unique: true
      },
      addresses: [
        {
          name: "StreetAddress"
        }
      ]
    });

    expect(schema).to.be.ok();
    expect(schema.name).to.be.ok();
    expect(schema.name.required).to.be.ok();
    expect(schema.name.default).to.be("Blah");
    expect(schema.name.unique).to.be.ok();
  });

});