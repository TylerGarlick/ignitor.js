'use strict';

var expect = require('expect.js');
var ignitor = require('../lib/ignitor');
var dbUrl = "http://testing:testing@db.redrockethq.com:8529/ignitor-testing/";

describe('Model', function () {

    beforeEach(function () {
        ignitor.connect(dbUrl);
    });

    describe('Implementations', function () {
        describe('Person', function () {

            it('should be able to register a new Model of type Person', function () {
                var Person = ignitor.Model('Person', { name: {type: 'string', required: true }});
                expect(Person).to.be.a.func;

                var homosapian = new Person({});
                expect(homosapian).to.be.ok();
                expect(homosapian.isValid).to.be.equal(false);

                homosapian = new Person({name: 'bob'});
                expect(homosapian).to.be.ok();
                expect(homosapian.isValid).to.be.equal(true);

                console.log(Person);
                expect(ignitor.db).to.be.ok();
            });

            it('should not let me register another Model of type Person', function () {
                expect(function () {
                    ignitor.Model('Person', { name: {type: 'string', required: true }})
                }).to.throwError();
            });

            it("should let me register a 'Dog'", function () {
                var Dog = ignitor.Model('Dog', { name: {type: 'string', required: true }, ageInDogYears: { type: 'number', default: 14}});
            });

        });
    });
});
