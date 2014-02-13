'use strict';

var expect = require('expect.js')
    , ignitor = require('../../lib')
    ;

describe('Validation', function () {

    beforeEach(function () {
        expect(ignitor.validation).to.be.ok();
    });

    describe('Validator', function () {
        it('should have a validate function', function () {
            expect(ignitor.validation.validate).to.be.a.func;
        });
    });


    describe('String Validator', function () {
        it('should be registered by default', function () {
            expect(ignitor.validation.validators.has('string')).to.be.ok();
            expect(ignitor.validation.validators.get('string').length).to.eql(1);
        });

        it('should validate that a string is a valid type', function () {
            var validator = ignitor.validation.validators.get('string')[0];
            var errors = validator.validate('naked', 'this is me string', { type: "string", required: true });
            expect(errors).to.be.empty();
        });
    });
});
