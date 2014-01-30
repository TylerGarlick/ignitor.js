//"use strict";
//
//var expect = require('expect.js')
//  , util = require('util')
//  , Model = require('../lib/models')().Model
//  , Types = require('../lib/models/types')
//  , _ = require('lodash')
//  ;
//
//
//describe('Model', function () {
//
//
//  it('should have a collection by default', function () {
//    var model = new Model({});
//  });
//
//  describe('Types', function () {
//
//    describe('String', function () {
//      it("should be of kind 'string'", function () {
//        var s = new Types.String();
//
//        expect(s).to.be.ok();
//        expect(s.kind).to.be('string');
//      });
//    });
//
//    describe('Boolean', function () {
//      var array;
//      beforeEach(function () {
//        array = new Types.Array();
//        expect(array).to.be.ok();
//      })
//
//      it("should have a kind of 'array", function () {
//        expect(array.kind).to.be('array');
//      });
//
//      it("should have a default value of []", function () {
//        expect(array.defaultValue).to.be.an('array');
//        expect(array.defaultValue.length).to.be(0);
//      });
//
//    });
//  });
//
//
//});