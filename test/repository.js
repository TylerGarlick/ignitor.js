"use strict";

var Ignitor = require('../src/ignitor')
  , Repository = require('../src/repository')
  ;
describe('Repository', function () {

  describe('prototype', function () {

    var repository;
    beforeEach(function () {
      var db = Ignitor.connect();
      repository = new Repository("RepositoryTesting", db);
      repository.should.be.ok;
    });

    describe('db', function () {
      it('should set when repository is instantiated', function () {
        repository.db.should.be.ok;
      });
    });

//    describe(".all()", function () {
//      it('should be defined', function () {
//        repository.all.should.be.a.func;
//      });
//
//      it('should return all entities', function (done) {
//        repository.all.done(function (entities) {
//          entities.should.have.length(3);
//          done();
//        }, function (err) {
//          throw done(err);
//        });
//
//      });
//    });
//
//    describe(".add()", function () {
//
//      it('should be defined', function () {
//        repository.add.should.be.a.func;
//      });
//
////      it('should be able to add an entity', function (done) {
////        repository.add({firstName: "Bob", lastName: "The Builder"})
////          .then(function (entity) {
////            entity.should.be.ok;
////            entity.firstName.should.be.equal("Bob");
////            done();
////          }, function (err) {
////            console.log(err);
////            err.should.not.be.ok;
////          });
////
////
////      });
//
//    });

  });
});