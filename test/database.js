"use strict";

var expect = require('expect.js'),
    Database = require('../lib/database');

var dbUrl = 'http://testing:testing@arangodb.cloudapp.net:8529/words';
describe('Database', function () {
    describe('Url', function () {
        it('should not have a url by default', function () {
            Database.url = null;
            expect(Database.url).to.not.be.ok();
        });

        it('should set url when connect is called', function () {
            Database.url = null;
            expect(Database.url).to.not.be.ok();
            Database.connect(dbUrl)
            expect(Database.url).to.be(dbUrl);
        });
    });
});