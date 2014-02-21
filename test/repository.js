"use strict";

var expect = require('expect.js'),
    ignitor = require("../lib/ignitor"),
    Repository = ignitor.Repository;
var db;

describe('Repository', function () {
    var repository;
    before(function () {
        db = ignitor.connect("http://testing:testing@arangodb.cloudapp.net:8529/words");
        expect(db).to.be.ok();
        repository = new Repository("words");
        expect(repository).to.be.ok();
    });

    describe('#all()', function () {

        it('should be able to connect and get 10 words', function (next) {
            db.collection.list()
                .then(function (res) {
                    console.log(res);
                }, function (err) {
                    console.log(err);
                    next();
                });

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
                console.log(words.result);
                next();
            })
        });

    });

    describe('#findbyid', function () {

        it('should be able to get a word by id', function (next) {
            repository.findByKey('83853650211').then(function (word) {
                console.log(word);
                next();
            });
        });

    });

    describe('#query', function () {
        it('should execute an aql query', function (next) {
            repository.query("FOR word IN words LIMIT 10 RETURN word")
                .then(function (words) {
                    expect(words).to.be.ok();
                    expect(words.length).to.be.equal(10);
                    next();
                });
        });
    })
});
