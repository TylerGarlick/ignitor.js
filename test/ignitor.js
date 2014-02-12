'use strict';

var ignitor = require('../lib')
    , expect = require('expect.js')
    ;

describe('Ignitor', function () {

    describe('Properties', function () {

        describe('.Types', function () {
            it("should have a 'Types' property", function () {
                expect(ignitor.Types).to.be.ok();
                expect(ignitor.Types.Model).to.be.func;
                expect(ignitor.Types.Schema).to.be.func;
            });
        });

    });

    describe('_registry', function () {

        it('should be empty and ok', function () {
            expect(ignitor._registry).to.be.ok();
            expect(ignitor._registry.all()).to.be.empty();
        });

    });

    describe('#methods', function () {


    });

});