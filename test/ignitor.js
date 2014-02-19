'use strict';

var expect = require('expect.js'),
    ignitor = require('../'),
    _ = require('lodash');


describe('Ignitor', function () {
    describe('Static Properties', function () {
        describe('models', function () {
            it('should be empty by default', function () {
                expect(ignitor.models).to.be.eql({});
            });
        });
    });

    describe('Methods', function () {
        describe('.connect', function () {
            it('should be able to connect to testing database', function () {
                var dbUrl = "http://testing:testing@db.redrockethq.com:8529/ignitor-testing/";
                expect(ignitor.db).to.not.be.ok();

                var db = ignitor.connect(dbUrl);
                expect(db).to.be.ok();
                expect(ignitor.db).to.be.ok();
            });
        });

        describe(".Model", function () {

            beforeEach(function () {
                _.forEach(_.keys(ignitor.models), function (key) {
                    delete ignitor.models[key]
                });
            });

            it('should have the .Model function', function () {
                expect(ignitor.Model).to.be.a.func;
            });

            it('should register a model without issues', function () {
                var Person = new ignitor.Model('Person');
                var p = new Person({firstName: 'blah'});
                expect(p).to.be.ok();
                expect(p.isNew).to.be.ok()
                expect(ignitor.models["person"]).to.be.ok()
                var Order = new ignitor.Model('Order', {});
                var o = new Order();
                expect(o).to.be.ok();
                expect(o.isNew).to.be.ok()
                expect(ignitor.models["order"]).to.be.ok();
            });


            it('should throw an error if you try to register two of the same models', function () {
                var Peep = new ignitor.Model('Peep');
                expect(function () {
                    new ignitor.Model('Peep');
                }).to.throwException(/Model already registered/);
            });

            it('should set the models properties', function (next) {
                var Simple = new ignitor.Model('Person', {
                    name: { type: 'string', required: true }
                });
                var simple = new Simple();
                expect(simple.isValid).to.not.be.ok()
                var validSimple = new Simple({name: 'blah'});
                expect(validSimple.isValid).to.be.ok()

                Simple.all().then(function (res) {
                    console.log(res);
                    next();
                }, function (err) {
                    console.log(err);
                    next();
                });
            });
        });
    });

});