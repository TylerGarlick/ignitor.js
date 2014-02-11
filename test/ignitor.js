'use strict';

var ignitor = require('../lib')
  , expect = require('expect.js')
  ;

var connectionString = "http://test:test@localhost:8000/ignitor-testing";
describe('ignitor', function () {

  describe('properties', function () {

    describe('db', function () {
      it('should have a property called db after connect is called', function () {
        expect(ignitor.db).to.not.be.ok();
        ignitor.connect(connectionString);
        expect(ignitor.db).to.be.ok();
        expect(ignitor.options.connectionUrl).to.be(connectionString);
      });
    });

    describe('options', function () {
      it('should have an options property', function () {
        expect(ignitor.options).to.be.ok();
      });
    });

  });

  describe('methods', function () {

    describe('.connect(connectionUrl)', function () {
      it('should have a connect method', function () {
        expect(ignitor.connect).to.be.a.func;
      });
      it('should require connectionurl', function () {
        expect(function () {
          ignitor.connect();
        }).to.throwError();


      });
    });
  });

});