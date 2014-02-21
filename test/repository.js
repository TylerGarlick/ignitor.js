"use strict";

var expect = require('expect.js'),
    Db = require('../lib/database'),
    Repository = require('../lib/repositories/')
    ;

describe('Repository', function () {
    var db, repository;
    beforeEach(function () {
        Db.connect("http://testing:testing@arangodb.cloudapp.net:8529/words");
        db = Db.connection;
        expect(db).to.be.ok();
        repository = new Repository("words", {db: db});
        expect(repository).to.be.ok();
    });

    describe('#all()', function () {

        it('should be able to connect and get 10 words', function (next) {
            repository.all({limit: 10})
                .then(function (words) {
                    expect(words).to.be.ok();
                    expect(words.result.length).to.be.equal(10);
                    next();
                });
        });

        it('should also take a callback instead of a promise', function (next) {
            repository.all({limit: 10}, function (err, words) {
                expect(err).to.not.be.ok();
                expect(words).to.be.ok();
                expect(words.result.length).to.be.equal(10);
                next();
            })
        });

    });

    describe('#findbyid', function () {

        it('should be able to get a word by id', function (next) {
            repository.findByKey('1860256167').then(function (word) {
                console.log(word);
                next();
            });
        });

    });

    describe('#query', function () {
        it('should execute an aql query', function (next) {
            repository.query("FOR word IN words LIMIT 10 RETURN word")
                .then(function (words) {
                    console.log(words);
                    expect(words).to.be.ok();
                    expect(words.length).to.be.equal(10);
                    next();
                });
        });
    })
});
