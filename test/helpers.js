"use strict";

var Helper = require('../lib/infrastructure/helpers');

describe('helpers', function () {
    describe('db', function () {

        describe('collections', function () {
            it('should have a create function', function () {
                Helper.db.collections.create.should.be.ok;
            });
        });
    });

    describe('objects', function () {
        it('should have an objects property', function () {
            Helper.objects.should.be.ok;
        });
    });

});