'use strict';

var expect = require('expect.js'),
    ignitor = require('../');

describe('Ignitor', function () {

    describe('#connect', function () {

        it('should be able to connect', function () {
            var dbUrl = "http://testing:testing@db.redrockethq.com:8529/ignitor-testing/"
            expect(function () {
                ignitor.db
            }).to.throwError();

            ignitor.connect(dbUrl);
            expect(ignitor.db).to.be.ok();
        });


    });

    describe('#model', function () {
        it('should be able to register model', function () {
            var personSchema = new ignitor.Schema({
                name: { type: 'string', required: true },
                age: {type: 'numeric' },
                active: { type: 'boolean', default: true }
            });
            var Person = ignitor.model('Person', personSchema);
            var p = new Person({
                name: "Tyler Garlick",
                age: 32,
                active: true
            });


        });
    });

});