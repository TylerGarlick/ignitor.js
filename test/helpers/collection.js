'use strict';

var expect = require('expect.js')
  , CollectionHelper = require('../../lib/helpers/collection')
  , Q = require('q')
  , Database = require('../../lib/config/database')
  ;

Database.url = "http://test:test@localhost:8529/ignitor-testing";

describe('Helpers', function () {
  describe('Collection', function () {
    var helper;
    beforeEach(function () {
      helper = new CollectionHelper();
      expect(helper).to.be.ok();
      expect(helper.db).to.be.ok();
    });

    describe('.createNonExistent(name)', function () {
      it('should have .createNonExistent(name)', function () {
        expect(helper.createNonExistent).to.be.a.func;
      });

      it("should be able to create a new collection if it doesn't exist", function (next) {
        var collection = 'helpers';
        helper.createNonExistent(collection)
          .then(function (res) {
            expect(res.name).to.eql(collection);
            next();
          }, function (err) {
            next(err);
          })
      });

    });

    describe('.exists()', function () {
      it('should have .exists(name)', function () {
        expect(helper.exists).to.be.a.func;
      });

      it("should find collection 'helpers'", function (next) {
        helper.exists('helpers').then(function (res) {
            expect(res.exists).to.be.ok();
            next();
          },
          function (err) {
            next(err);
          })
      });
    });

    describe('.deleteWhenExists()', function () {

//      it("should be able to delete 'helpers'", function (next) {
//        helper.deleteWhenExists('helpers')
//          .then(function (res) {
//            next();
//          },
//          function (err) {
//            next(err);
//          })
//      });
    });

  });
})