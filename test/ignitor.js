"use strict";

var Ignitor = require("../src/ignitor")
    , Model = require("../src/model")
    , Schema = Ignitor.Schema
    , util = require('util')
    ;

describe('Ignitor', function () {
    describe("prototype", function () {
        describe(".Model", function () {
            it("Should a base model object", function () {
                Ignitor.Model.should.be.ok;
            });

            it("should be a function", function () {
                Ignitor.Model.should.be.a.func
            });
        });

        describe('.options', function () {
            it("should have default options", function () {
                Ignitor.should.be.ok
                Ignitor.should.have.property('options');
            });
        });
    });

    describe("functions", function () {
        describe(".model(modelName, schema, options)", function () {
            it('should exist on Ignitor', function () {
                Ignitor.model.should.be.a.func;
            });


            it('should register a new model', function () {
                Ignitor.model('person', new Ignitor.Schema({}, "people"));
                var person = Ignitor.model('person');
                person.should.be.ok;
                Ignitor._registry['person'].should.be.ok;
            });
        });
    });
});