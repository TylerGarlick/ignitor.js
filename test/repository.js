'use strict';

var expect = require('expect.js')
  , Repository = require('../lib/repository')
  , arango = require('arango')
  ;

describe('Repository', function () {

  describe('save()', function () {
    var db;
    beforeEach(function () {
      db = arango.Connection("http://test:test@localhost:8000/ignitor-testing");
      expect(db).to.be.ok();
    });

    it('should be able to save()', function (finished) {
      var repo = new Repository({
        db: db,
        collection: 'people'
      });

      expect(repo).to.be.ok();

      var person = {
        name: "Tyler Garlick",
        age: 32,
        active: true
      };

      repo.save(person)
        .then(function (res) {
          console.log(res);
          expect(res).to.be.ok();
          finished();
        }, function (err) {
          console.log("err: %j", err);
          finished(err);
        });


    });


  });

});
