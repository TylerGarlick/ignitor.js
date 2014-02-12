'use strict';

var expect = require('expect.js')
  , Repository = require('../lib/repository')
  , arango = require('arango')
  ;

var clearCollection = function (db, name) {
  return db.collection.list(name)
    .then(function (collections) {
      if (collections.names[name]) {
        return db.collection.delete(name);
      }
    });
};

describe('Repository', function () {

//  describe('save()', function () {
//    var db;
//    beforeEach(function (finished) {
//      db = arango.Connection("http://test:test@localhost:8529/ignitor-testing");
//      expect(db).to.be.ok();
//
//      clearCollection(db, "people").done(function () {
//        finished();
//      });
//    });
//
//    it('should be able to save()', function (finished) {
//      var repo = new Repository({
//        db: db,
//        collection: 'people'
//      });
//      expect(repo).to.be.ok();
//
//      var person = {
//        name: "Tyler Garlick",
//        age: 32,
//        active: true
//      };
//
//      repo.save(person)
//        .then(function (p) {
//          expect(p).to.be.ok();
//          expect(p._id).to.be.ok();
//          expect(p.name).to.equal(person.name);
//          finished();
//        },
//        function (err) {
//          finished(err);
//        });
//    });
//  });
//
//  describe('all()', function () {
//
//    var db, repository;
//    beforeEach(function (finished) {
//      db = arango.Connection("http://test:test@localhost:8000/ignitor-testing");
//      expect(db).to.be.ok();
//      repository = new Repository({
//        db: db,
//        collection: 'people'
//      });
//      expect(repository).to.be.ok();
//
//      var people = [
//        {
//          name: "George Washington",
//          term: {
//            start: 1789,
//            end: 1797
//          }
//        },
//        {
//          name: "John Adams",
//          term: {
//            start: 1797,
//            end: 1801
//          }
//        },
//        {
//          name: "Thomas Jefferson",
//          term: {
//            start: 1801,
//            end: 1809
//          }
//        }
//      ];
//      var saveAll = repository.saveAll;
//
//
//
//    });
//
//    it('should be able to get all() in the collection', function (finished) {
//      repository.all().then(function (entities) {
//        expect(entities.result).to.be.ok();
//        expect(entities.result.length).to.be(4);
//        console.log(entities.result);
//        finished();
//      }, function (err) {
//        finished(err);
//      });
//    });
//
//  });
});
