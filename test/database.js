"use strict";

var expect = require('expect.js'),
    Database = require('../lib/database');

describe('Database', function () {
    describe('Url', function () {
        it('should not have a url by default', function () {
            Database.url = null;
            expect(Database.url).to.not.be.ok();
        });

        it('should set url when connect is called', function () {
            Database.url = null;
            expect(Database.url).to.not.be.ok();
            Database.connect('"http://testing:testing@db.redrockethq.com:8529/ignitor-testing/"')
            expect(Database.url).to.be('"http://testing:testing@db.redrockethq.com:8529/ignitor-testing/"');
        });
    });
});