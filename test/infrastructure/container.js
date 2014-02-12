'use strict';

var expect = require('expect.js')
    , container = require('../../lib/infrastructure/container')
    ;

describe('Container', function () {

    describe('registry', function () {

        it('should be empty by default', function () {
            expect(container).to.be.ok();
            expect(container.all()).to.be.empty();
        });

        it('should be able to register a new object', function () {
            container.register('it', { be: "ok"});
        });

        it('should be able to retrieve the object', function () {
            var beOk = container.get('it');
            expect(beOk).to.be.ok();
            expect(beOk).to.be.eql({ be: "ok"});
        });

        it('should be able to unregister an object', function () {
            expect(container.all()).to.not.be.empty();
            container.unregister('it');
            expect(container.all()).to.be.empty();
            expect(container.has('it')).to.be.eql(false);
        });
    });
});